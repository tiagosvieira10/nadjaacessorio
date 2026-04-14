import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Product, getWhatsAppLink } from "@/data/products";
import { MessageCircle, X } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, open, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border gap-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square md:aspect-[3/4] object-cover"
              width={800}
              height={1024}
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="text-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
              {product.category}
            </p>
            <h2 className="text-display text-3xl md:text-4xl font-medium text-foreground mb-2">
              {product.name}
            </h2>
            <p className="text-body text-sm text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <a
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center gap-3 text-sm tracking-wider uppercase"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
