import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getWhatsAppLink, products } from "@/data/products";
import { getShareWhatsAppLink } from "@/lib/share";
import { ArrowLeft, MessageCircle, Share2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Produto não encontrado.</p>
      </div>
    );
  }

  const productUrl = `${window.location.origin}/produto/${product.id}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <a
            href="/"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm tracking-wider uppercase"
          >
            <ArrowLeft size={16} />
            Voltar
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover"
                width={800}
                height={1024}
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                {product.category}
              </p>
              <h1 className="text-display text-3xl md:text-5xl font-medium text-foreground mb-6">
                {product.name}
              </h1>
              <p className="text-body text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center gap-3 text-sm tracking-wider uppercase"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </a>

                <a
                  href={getShareWhatsAppLink(product.name, product.image, productUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 text-sm tracking-wider uppercase px-6 py-3 border border-border text-foreground hover:bg-accent transition-colors"
                >
                  <Share2 size={20} />
                  Compartilhar
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProductPage;
