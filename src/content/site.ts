import type { StaticImageData } from "next/image";

import jantesMercedes from "@/assets/photos/jantes-mercedes.jpg";
import jantesToyota from "@/assets/photos/jantes-toyota.jpg";
import fordRanger from "@/assets/photos/kit-ford-ranger.jpg";
import lexus from "@/assets/photos/kit-lexus.jpg";
import classeG from "@/assets/photos/kit-mercedes-classe-g.jpg";
import nissanPatrol from "@/assets/photos/kit-nissan-patrol.jpg";
import rangeRover from "@/assets/photos/kit-range-rover.jpg";
import suzuki from "@/assets/photos/kit-suzuki.jpg";
import toyotaRedondos from "@/assets/photos/kit-toyota-farois-redondos.jpg";
import hilux from "@/assets/photos/kit-toyota-hilux.jpg";
import landCruiser from "@/assets/photos/kit-toyota-land-cruiser.jpg";
import landCruiser300 from "@/assets/photos/kit-toyota-land-cruiser-300.jpg";
import landCruiserAutoPro from "@/assets/photos/kit-toyota-land-cruiser-auto-pro.jpg";
import prado from "@/assets/photos/kit-toyota-prado.jpg";
import tundra from "@/assets/photos/kit-toyota-tundra.jpg";
import prateleiras from "@/assets/photos/loja-prateleiras.jpg";
import showroom from "@/assets/photos/loja-showroom.jpg";

// Only facts supplied by the company (dadosDisponibilizadosPelaEmpresa.docx)
// or directly visible in its photos belong in this file.

export const business = {
  name: "Oficina Auto-Pro",
  shortName: "Auto-Pro",
  phoneDisplay: "939 666 660",
  // The documents give the number without a country code. +244 (Angola) is
  // inferred from the number format and the Luanda plate seen in a photo:
  // confirm with the company before publishing.
  phoneE164: "+244939666660",
};

const whatsappText = "Olá Auto-Pro, gostaria de saber se têm disponível:";

export const links = {
  tel: `tel:${business.phoneE164}`,
  whatsapp: `https://wa.me/${business.phoneE164.slice(1)}?text=${encodeURIComponent(whatsappText)}`,
};

export const nav = [
  { href: "#produtos", label: "Produtos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contacto", label: "Contacto" },
];

export const photos = { showroom, prateleiras, landCruiserAutoPro, classeG };

export type Product = {
  id: string;
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
};

export const products: Product[] = [
  {
    id: "kits",
    title: "Kits frontais",
    text: "Conjuntos de frente completos: capô, grelha, faróis e para-choques, para dar outra cara ao carro.",
    image: landCruiser300,
    alt: "Kit frontal Toyota Land Cruiser com grelha cromada e faróis LED, exposto na loja",
  },
  {
    id: "jantes",
    title: "Jantes",
    text: "Jantes de liga leve em vários desenhos e acabamentos, entregues ainda embaladas.",
    image: jantesMercedes,
    alt: "Jantes pretas Mercedes-Benz com aro maquinado, ainda embaladas",
  },
  {
    id: "farois",
    title: "Faróis e farolins",
    text: "Faróis dianteiros e farolins traseiros novos, expostos na loja.",
    image: prateleiras,
    alt: "Prateleiras da loja com jantes, farolins traseiros vermelhos e uma protecção frontal",
  },
];

export const extras =
  "Nas prateleiras da loja encontra também protecções frontais, volantes e capas de espelho.";

// Brands whose parts appear in the company's photos.
export const brands = [
  { name: "Toyota", models: "Land Cruiser, Prado, Hilux, Tundra" },
  { name: "Lexus", models: "Série LX" },
  { name: "Nissan", models: "Patrol" },
  { name: "Ford", models: "Ranger" },
  { name: "Mercedes-Benz", models: "Classe G e jantes" },
  { name: "Land Rover", models: "Range Rover Sport" },
  { name: "Suzuki", models: "Kit frontal" },
];

export const steps = [
  {
    title: "Fale connosco",
    text: "Ligue ou envie mensagem por WhatsApp com a marca, o modelo e a peça que procura.",
  },
  {
    title: "Confirmamos o stock",
    text: "Há sempre material na loja. As quantidades disponíveis são confirmadas por nós no momento.",
  },
  {
    title: "Se não houver, tratamos disso",
    text: "Quando a peça não está na loja, fazemos os contactos e, se for preciso, a importação. Só tem de aguardar.",
  },
  {
    title: "Preço combinado pessoalmente",
    text: "O preço é sempre negociado pessoalmente, connosco.",
  },
];

export type GalleryCategory = "kits" | "jantes" | "loja";

export type GalleryItem = {
  image: StaticImageData;
  alt: string;
  caption: string;
  category: GalleryCategory;
};

export const galleryFilters: { value: GalleryCategory | "todos"; label: string }[] = [
  { value: "todos", label: "Tudo" },
  { value: "kits", label: "Kits frontais" },
  { value: "jantes", label: "Jantes" },
  { value: "loja", label: "Loja" },
];

export const gallery: GalleryItem[] = [
  { image: showroom, category: "loja", caption: "Interior da loja", alt: "Interior da loja Auto-Pro com kits frontais montados em suportes e prateleiras de peças" },
  { image: landCruiserAutoPro, category: "kits", caption: "Kit frontal Toyota Land Cruiser", alt: "Kit frontal Toyota Land Cruiser branco com grelha cromada e matrícula Auto-Pro" },
  { image: classeG, category: "kits", caption: "Kit frontal Mercedes-Benz Classe G", alt: "Kit frontal estilo Classe G com grelha de barras verticais e faróis redondos" },
  { image: tundra, category: "kits", caption: "Kit frontal Toyota Tundra", alt: "Kit frontal Toyota Tundra com grelha preta e moldura cromada" },
  { image: jantesToyota, category: "jantes", caption: "Jantes Toyota", alt: "Jantes Toyota de raios finos em acabamento escuro polido, empilhadas e embaladas" },
  { image: lexus, category: "kits", caption: "Kit frontal Lexus", alt: "Kit frontal Lexus com grelha em fuso e faróis LED" },
  { image: hilux, category: "kits", caption: "Kit frontal Toyota Hilux", alt: "Kit frontal Toyota Hilux com capô, grelha e para-choques em primário cinzento" },
  { image: rangeRover, category: "kits", caption: "Kit frontal Range Rover Sport e jantes", alt: "Kit frontal Range Rover Sport em primário cinzento ao lado de três jantes pretas" },
  { image: nissanPatrol, category: "kits", caption: "Kit frontal Nissan Patrol", alt: "Kit frontal Nissan Patrol com grelha cromada em favo" },
  { image: jantesMercedes, category: "jantes", caption: "Jantes Mercedes-Benz", alt: "Três desenhos de jantes pretas Mercedes-Benz com aro maquinado" },
  { image: fordRanger, category: "kits", caption: "Kit frontal Ford Ranger", alt: "Kit frontal Ford Ranger com grelha FORD em letras grandes" },
  { image: prado, category: "kits", caption: "Kit frontal Toyota Land Cruiser Prado", alt: "Kit frontal Toyota Prado com grelha de barras verticais cromadas" },
  { image: suzuki, category: "kits", caption: "Kit frontal Suzuki", alt: "Kit frontal Suzuki preto mate com grelha de barras e faróis redondos LED" },
  { image: landCruiser, category: "kits", caption: "Kit frontal Toyota Land Cruiser", alt: "Kit frontal Toyota Land Cruiser com grelha cromada e lábio inferior branco" },
  { image: toyotaRedondos, category: "kits", caption: "Kit frontal Toyota com faróis redondos", alt: "Kit frontal Toyota preto mate com faróis redondos e grelha em losangos" },
  { image: prateleiras, category: "loja", caption: "Prateleiras com jantes e farolins", alt: "Prateleiras com jantes, farolins traseiros e uma protecção frontal" },
];
