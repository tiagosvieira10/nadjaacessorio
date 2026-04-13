import { products, Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
}

const FeaturedProducts = ({ onSelectProduct }: FeaturedProductsProps) => {
  const featured = products.filter((p) => p.featured);

  return (
    <section id="destaques" className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Curadoria exclusiva
          </p>
          <h2 className="text-display text-3xl md:text-5xl font-light text-foreground">
            Em Destaque
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
