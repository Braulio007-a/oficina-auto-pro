"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { gallery, galleryFilters, type GalleryCategory } from "@/content/site";
import { ChevronIcon, CloseIcon } from "../icons";
import styles from "./Gallery.module.css";

type Filter = GalleryCategory | "todos";

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [current, setCurrent] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const items = filter === "todos" ? gallery : gallery.filter((g) => g.category === filter);
  const active = current === null ? null : items[current];

  function open(index: number) {
    setCurrent(index);
    dialogRef.current?.showModal();
  }

  function step(delta: number) {
    setCurrent((i) => (i === null ? i : (i + delta + items.length) % items.length));
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  }

  return (
    <section id="galeria" className={styles.section} aria-labelledby="galeria-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="galeria-title" className={styles.title}>
            Galeria
          </h2>
          <div className={styles.filters} role="group" aria-label="Filtrar fotografias">
            {galleryFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                className={styles.filter}
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <p className="visually-hidden" aria-live="polite">
          {items.length} fotografias
        </p>

        <ul className={styles.grid}>
          {items.map((item, i) => (
            <li key={item.image.src}>
              <button type="button" className={styles.thumb} onClick={() => open(i)}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  placeholder="blur"
                  sizes="(min-width: 64rem) 25vw, (min-width: 40rem) 33vw, 50vw"
                  className={styles.thumbImg}
                />
                <span className={styles.thumbCaption} aria-hidden>{item.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={active?.caption ?? "Fotografia"}
        onKeyDown={onKeyDown}
        onClose={() => setCurrent(null)}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
      >
        {active ? (
          <figure className={styles.figure}>
            <Image src={active.image} alt={active.alt} sizes="90vw" className={styles.full} />
            <figcaption className={styles.figcaption}>
              {active.caption}
              <span>
                {(current ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        ) : null}
        <button type="button" className={`${styles.ctrl} ${styles.close}`} onClick={() => dialogRef.current?.close()}>
          <CloseIcon />
          <span className="visually-hidden">Fechar</span>
        </button>
        <button type="button" className={`${styles.ctrl} ${styles.prev}`} onClick={() => step(-1)}>
          <ChevronIcon />
          <span className="visually-hidden">Fotografia anterior</span>
        </button>
        <button type="button" className={`${styles.ctrl} ${styles.next}`} onClick={() => step(1)}>
          <ChevronIcon />
          <span className="visually-hidden">Fotografia seguinte</span>
        </button>
      </dialog>
    </section>
  );
}
