import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Brands } from "@/components/sections/Brands";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Products />
        <Brands />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
