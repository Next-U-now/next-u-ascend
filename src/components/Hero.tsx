import logoNextU from "@/assets/logo-nextu.jpg";
import mascotaNextU from "@/assets/mascota-nextu.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: "hsl(68, 100%, 50%)" }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Mascot floating */}
        <div className="flex justify-center mb-8">
          <img
            src={mascotaNextU}
            alt="Next U Mascota"
            className="w-24 h-24 rounded-2xl animate-float"
          />
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={logoNextU}
            alt="Next U - Beyond the Ordinary"
            className="w-72 md:w-96 rounded-2xl"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Llevamos tu negocio al siguiente nivel.
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Ya sea que quieras empezar, crecer o expandirte — estamos contigo en cada paso.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="#servicios" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity">
            Nuestros Servicios
          </a>
          <a href="#portafolio" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border text-foreground font-medium text-sm tracking-wide hover:bg-secondary transition-colors">
            Ver Portafolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
