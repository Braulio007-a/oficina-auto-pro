import { business, links, nav } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo size={88} />
          <p>Kits frontais, jantes, faróis e farolins novos, para várias marcas.</p>
        </div>

        <nav aria-label="Rodapé">
          <ul className={styles.links}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.contact}>
          <a href={links.tel}>{business.phoneDisplay}</a>
          <span>Telefone e WhatsApp</span>
        </p>
      </div>
      <div className={`container ${styles.legal}`}>
        <p>© {business.name}</p>
      </div>
    </footer>
  );
}
