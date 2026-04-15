import logoNextU from "@/assets/logo-nextu.jpg";
import mascotaNextU from "@/assets/mascota-nextu.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: "hsl(68, 100%, 50%)" }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img src={mascotaNextU} alt="Next U Mascota" className="w-24 h-24 rounded-2xl animate-float" />
        </div>

        <div className="flex justify-center mb-10">
          <img src={logoNextU} alt="Next U - Beyond the Ordinary" className="w-[28rem] md:w-[36rem] lg:w-[42rem] rounded-2xl" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 opacity-0 animate-fade-in">
          ¿Estás listo para el{" "}
          <span className="text-gradient">siguiente nivel</span>?
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Llevamos tu negocio al siguiente nivel con <span className="text-primary font-semibold">más de 10 años de experiencia en negocios</span>.
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Ya sea que quieras empezar, crecer o expandirte — estamos contigo en cada paso.
        </p>

        <div className="flex flex-col items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#paquetes" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base tracking-wide hover:opacity-90 transition-opacity">
              Empezar Ahora
            </a>
            <a href="#portafolio" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border text-foreground font-medium text-sm tracking-wide hover:bg-secondary transition-colors">
              Ver Portafolio
            </a>
          </div>
          <a href="#contacto" className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-all">
            📅 Agenda tu Cita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
