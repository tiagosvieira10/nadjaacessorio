import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <a href="/" onClick={() => scrollTo("hero")} className="text-display text-2xl md:text-3xl font-semibold tracking-wider text-foreground">
          Nadja Cardozo
        </a>

        <nav className="hidden md:flex items-center gap-8 text-body text-sm tracking-widest uppercase text-muted-foreground">
          <button onClick={() => scrollTo("destaques")} className="hover:text-foreground transition-colors duration-300">Destaques</button>
          <button onClick={() => scrollTo("catalogo")} className="hover:text-foreground transition-colors duration-300">Catálogo</button>
          <button onClick={() => scrollTo("contato")} className="hover:text-foreground transition-colors duration-300">Contato</button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-b border-border py-4 px-6 flex flex-col gap-4 text-body text-sm tracking-widest uppercase text-muted-foreground animate-fade-up">
          <button onClick={() => scrollTo("destaques")} className="text-left hover:text-foreground transition-colors">Destaques</button>
          <button onClick={() => scrollTo("catalogo")} className="text-left hover:text-foreground transition-colors">Catálogo</button>
          <button onClick={() => scrollTo("contato")} className="text-left hover:text-foreground transition-colors">Contato</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
