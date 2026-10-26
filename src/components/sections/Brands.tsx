import Image from "next/image";

import { brands, photos } from "@/content/site";
import styles from "./Brands.module.css";

export function Brands() {
  return (
    <section id="marcas" className={styles.section} aria-labelledby="marcas-title">
      <Image
        src={photos.classeG}
        alt=""
        fill
        sizes="100vw"
        className={styles.backdrop}
      />
      <div className={`container ${styles.inner}`}>
        <h2 id="marcas-title" className={styles.title}>
          Várias marcas, a mesma loja
        </h2>
        <p className={styles.lead}>
          Exemplos de marcas com peças na loja, a partir das nossas fotografias. Não vê a sua? Pergunte-nos: o que não
          houver em stock pode ser encomendado.
        </p>
        <ul className={styles.list}>
          {brands.map((b) => (
            <li key={b.name}>
              <span className={styles.brand} translate="no">{b.name}</span>
              <span className={styles.models}>{b.models}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
