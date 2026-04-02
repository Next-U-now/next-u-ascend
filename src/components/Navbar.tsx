import mascotaNextU from "@/assets/mascota-nextu.jpg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={mascotaNextU} alt="Next U" className="w-8 h-8 rounded-lg" />
        <span className="font-bold tracking-tight">Next U</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">Servicios</a>
        <a href="#portafolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">Portafolio</a>
        <a href="#contacto" className="text-sm px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">Contacto</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
