import Image from "next/image";

import { business, links, photos } from "@/content/site";
import { PhoneIcon, WhatsAppIcon } from "../icons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            Kits frontais, jantes e faróis novos para várias marcas
          </h1>
          {/* Red sweep taken from the logo's swoosh. */}
          <svg className={styles.swoosh} viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden focusable={false}>
            <path d="M0 34C150 4 380-4 600 14C390 6 170 14 0 34Z" />
          </svg>
          <p className={styles.lead}>
            Material sempre novo e em stock na loja. Se a peça que procura não estiver cá, tratamos dos contactos e da
            importação.
          </p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Perguntar no WhatsApp
            </a>
            <a className="btn btn-ghost" href={links.tel}>
              <PhoneIcon />
              Ligar {business.phoneDisplay}
            </a>
          </div>
        </div>

        <figure className={styles.media}>
          <Image
            src={photos.showroom}
            alt="Interior da loja Auto-Pro com kits frontais Toyota e Lexus em exposição e prateleiras de peças"
            sizes="(min-width: 60rem) 55vw, 100vw"
            preload
            placeholder="blur"
            className={styles.photo}
          />
          <figcaption className={styles.caption}>A loja, com kits frontais e jantes em exposição.</figcaption>
        </figure>
      </div>
    </section>
  );
}
