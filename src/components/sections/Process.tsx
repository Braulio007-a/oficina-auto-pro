import { steps } from "@/content/site";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section id="como-funciona" className={styles.section} aria-labelledby="processo-title">
      <div className="container">
        <h2 id="processo-title" className={styles.title}>
          Como funciona
        </h2>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.number} aria-hidden>
                {i + 1}
              </span>
              <h3 className={styles.name}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
