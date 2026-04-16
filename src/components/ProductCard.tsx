import { Product } from "@/data/products";
import { getShareWhatsAppLink } from "@/lib/share";
import { Share2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  const productUrl = `${window.location.origin}/produto/${product.id}`;
  const shareLink = getShareWhatsAppLink(product.name, product.image, productUrl);

  return (
    <div className="group product-card-hover">
      <div
        className="relative overflow-hidden bg-card mb-4 cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1024}
          className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <span className="text-body text-xs tracking-[0.2em] uppercase text-primary-foreground bg-foreground/80 px-6 py-3 backdrop-blur-sm">
            Ver mais
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-2">
        <div className="cursor-pointer" onClick={() => onSelect(product)}>
          <h3 className="text-display text-lg md:text-xl font-medium text-foreground">
            {product.name}
          </h3>
        </div>
        <a
          href={shareLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-1 text-muted-foreground hover:text-foreground transition-colors shrink-0"
          aria-label="Compartilhar no WhatsApp"
        >
          <Share2 size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

