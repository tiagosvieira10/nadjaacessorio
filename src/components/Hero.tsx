import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Bolsa de couro elegante"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-xl animate-fade-up">
          <p className="text-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4">
            Nossa Coleção
          </p>
          <h1 className="text-display text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight mb-6">
            Elegância em{" "}
            <span className="italic font-light">cada detalhe</span>
          </h1>
          <p className="text-body text-sm md:text-base text-primary-foreground/80 mb-8 max-w-md leading-relaxed">
            Descubra a bolsa que se encaixa perfeitamente no seu dia a dia ou nas ocasiões mais especiais.
          </p>
          <button
            onClick={() => scrollTo("catalogo")}
            className="text-body text-xs tracking-[0.25em] uppercase px-8 py-4 border border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
          >
            Explorar Coleção
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
