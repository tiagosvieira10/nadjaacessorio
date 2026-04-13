import { Product, formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  return (
    <div
      className="group cursor-pointer product-card-hover"
      onClick={() => onSelect(product)}
    >
      <div className="relative overflow-hidden bg-card mb-4">
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
      <h3 className="text-display text-lg md:text-xl font-medium text-foreground mb-1">
        {product.name}
      </h3>
      <p className="text-body text-sm text-muted-foreground">
        {formatPrice(product.price)}
      </p>
    </div>
  );
};

export default ProductCard;
