import Image from "next/image";

import { business, links, photos } from "@/content/site";
import { PhoneIcon, WhatsAppIcon } from "../icons";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contacto" className={styles.section} aria-labelledby="contacto-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 id="contacto-title" className={styles.title}>
            Procura uma peça? Pergunte-nos.
          </h2>
          <p className={styles.lead}>
            Diga-nos a marca, o modelo e o que procura. Confirmamos a disponibilidade e, se não houver em stock,
            tratamos da encomenda. O preço é combinado pessoalmente.
          </p>

          <a className={styles.number} href={links.tel}>
            {business.phoneDisplay}
          </a>
          <p className={styles.note}>Telefone e WhatsApp</p>

          <div className={styles.actions}>
            <a className="btn btn-primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Enviar mensagem no WhatsApp
            </a>
            <a className="btn btn-ghost" href={links.tel}>
              <PhoneIcon />
              Ligar agora
            </a>
          </div>
        </div>

        <figure className={styles.media}>
          <Image
            src={photos.landCruiserAutoPro}
            alt="Kit frontal Toyota Land Cruiser com a matrícula Auto-Pro, junto à montra da loja"
            placeholder="blur"
            sizes="(min-width: 60rem) 40vw, 100vw"
            className={styles.photo}
          />
        </figure>
      </div>
    </section>
  );
}
