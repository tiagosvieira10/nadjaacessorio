import bagBackpack1 from "@/assets/bag-backpack-1.jpg";
import bagBucket1 from "@/assets/bag-bucket-1.jpg";
import bagClutch1 from "@/assets/bag-clutch-1.jpg";
import bagCrossbody1 from "@/assets/bag-crossbody-1.jpg";
import bagShoulder1 from "@/assets/bag-shoulder-1.jpg";
import bagTote1 from "@/assets/bag-tote-1.jpg";
import bagWallet1 from "@/assets/bag-wallet-1.jpg";

export type Category = "todas" | "bolsas" | "mochilas" | "carteiras" | "clutches";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  featured: boolean;
}

export const categories: { value: Category; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "bolsas", label: "Bolsas" },
  { value: "mochilas", label: "Mochilas" },
  { value: "carteiras", label: "Carteiras" },
  { value: "clutches", label: "Clutches" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Bolsa Tote Milano",
    price: 489.9,
    description: "Bolsa tote em couro legítimo com acabamento premium. Espaçosa e elegante, perfeita para o dia a dia com sofisticação. Forro interno em tecido acetinado com bolsos organizadores.",
    image: bagTote1,
    category: "bolsas",
    featured: true,
  },
  {
    id: "2",
    name: "Crossbody Noir",
    price: 359.9,
    description: "Bolsa crossbody em couro preto com detalhes em metal dourado. Design compacto e versátil, ideal para looks casuais e noturnos. Alça ajustável e fecho com zíper.",
    image: bagCrossbody1,
    category: "bolsas",
    featured: true,
  },
  {
    id: "3",
    name: "Shoulder Bag Caramelo",
    price: 429.9,
    description: "Bolsa de ombro em couro caramelo com design atemporal. Acabamento artesanal e ferragens em ouro velho. Comporta itens essenciais com elegância.",
    image: bagShoulder1,
    category: "bolsas",
    featured: true,
  },
  {
    id: "4",
    name: "Clutch Dourada Gala",
    price: 279.9,
    description: "Clutch em couro metalizado dourado, perfeita para eventos especiais. Fecho magnético com acabamento premium. Acompanha corrente removível.",
    image: bagClutch1,
    category: "clutches",
    featured: true,
  },
  {
    id: "5",
    name: "Mochila Urban Cream",
    price: 399.9,
    description: "Mochila feminina em couro off-white com zíperes dourados. Design moderno e funcional com compartimentos internos. Ideal para trabalho e lazer.",
    image: bagBackpack1,
    category: "mochilas",
    featured: false,
  },
  {
    id: "6",
    name: "Carteira Rosé Minimal",
    price: 189.9,
    description: "Carteira compacta em couro rosé com acabamento soft touch. Compartimentos para cartões, documentos e moedas. Fechamento com zíper premium.",
    image: bagWallet1,
    category: "carteiras",
    featured: false,
  },
  {
    id: "7",
    name: "Bucket Bag Terracota",
    price: 459.9,
    description: "Bolsa bucket em couro terracota com cordão ajustável. Inspiração artesanal com detalhes em metal dourado. Interior espaçoso e forrado.",
    image: bagBucket1,
    category: "bolsas",
    featured: false,
  },
];

export const WHATSAPP_NUMBER = "558796112405";

export function getWhatsAppLink(productName: string): string {
  const message = encodeURIComponent(
    `Olá, tenho interesse na bolsa ${productName}. Poderia me enviar mais informações?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
