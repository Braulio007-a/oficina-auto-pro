import Image from "next/image";

import { extras, products } from "@/content/site";
import styles from "./Products.module.css";

const facts = [
  { term: "Tudo novo", text: "Todos os produtos e materiais vendidos são novos." },
  { term: "Multimarcas", text: "Peças para carros de várias marcas e modelos." },
  { term: "Sempre em stock", text: "Há sempre material na loja. O que faltar, encomendamos." },
];

export function Products() {
  return (
    <section id="produtos" className={styles.section} aria-labelledby="produtos-title">
      <div className="container">
        <div className={styles.intro}>
          <h2 id="produtos-title" className={styles.title}>
            O que encontra na loja
          </h2>
          <dl className={styles.facts}>
            {facts.map((f) => (
              <div key={f.term}>
                <dt>{f.term}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className={styles.grid}>
          {products.map((p, i) => (
            <li key={p.id} className={styles.item}>
              <div className={styles.frame}>
                <Image
                  src={p.image}
                  alt={p.alt}
                  placeholder="blur"
                  sizes={i === 0 ? "(min-width: 60rem) 60vw, 100vw" : "(min-width: 60rem) 35vw, 100vw"}
                  className={styles.photo}
                />
              </div>
              <h3 className={styles.name}>{p.title}</h3>
              <p className={styles.text}>{p.text}</p>
            </li>
          ))}
        </ul>

        <p className={styles.extras}>{extras}</p>
      </div>
    </section>
  );
}
