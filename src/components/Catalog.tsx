import { Category, Product, categories, products } from "@/data/products";
import { useState } from "react";
import ProductCard from "./ProductCard";

interface CatalogProps {
  onSelectProduct: (product: Product) => void;
}

const Catalog = ({ onSelectProduct }: CatalogProps) => {
  const [active, setActive] = useState<Category>("todas");

  const filtered = active === "todas" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalogo" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Explore nossa coleção
          </p>
          <h2 className="text-display text-3xl md:text-5xl font-light text-foreground">
            Catálogo
          </h2>
          <a
            href="https://drive.google.com/drive/folders/1q9aodnhHo-BRdhjWFy0HLFUUC8JyYK_S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm tracking-wider uppercase underline hover:opacity-70 transition"
          >
            Ver catálogo completo
          </a>

        </div>

        <div className="flex justify-center gap-2 md:gap-6 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`text-body text-xs tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 border ${
                active === cat.value
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
