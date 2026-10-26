"use client";

import { useEffect, useState } from "react";

import { business, links, nav } from "@/content/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 60rem)");
    const onResize = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className={styles.header} data-open={open}>
      <div className={`container ${styles.bar}`}>
        <a href="#inicio" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo size={48} decorative className={styles.logo} />
          <span translate="no">{business.name}</span>
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="visually-hidden">{open ? "Fechar menu" : "Abrir menu"}</span>
        </button>

        <nav id="menu-principal" className={styles.nav} aria-label="Principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className={`btn btn-primary ${styles.cta}`} href={links.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
