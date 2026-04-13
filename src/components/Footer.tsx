import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          <div>
            <h3 className="text-display text-2xl font-semibold tracking-wider mb-4">Nadja Cardozo</h3>
            <p className="text-body text-sm text-primary-foreground/60 leading-relaxed">
              Elegância e sofisticação em cada peça. Bolsas que traduzem seu estilo com autenticidade.
            </p>
          </div>

          <div>
            <h4 className="text-body text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/80">
              Navegação
            </h4>
            <div className="flex flex-col gap-2 text-body text-sm text-primary-foreground/60">
              <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })} className="text-left hover:text-primary-foreground transition-colors">Início</button>
              <button onClick={() => document.getElementById("destaques")?.scrollIntoView({ behavior: "smooth" })} className="text-left hover:text-primary-foreground transition-colors">Destaques</button>
              <button onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })} className="text-left hover:text-primary-foreground transition-colors">Catálogo</button>
            </div>
          </div>

          <div>
            <h4 className="text-body text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/80">
              Contato
            </h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/nadjadeborahcardozo" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:contato@maison.com" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="E-mail">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-body text-xs text-primary-foreground/40 tracking-wider">
            © 2026 Nadja Cardozo Acessórios. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
