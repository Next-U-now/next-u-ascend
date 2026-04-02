const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2026 Next U. Beyond the Ordinary.</p>
      <div className="flex gap-6">
        <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Servicios</a>
        <a href="#portafolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portafolio</a>
      </div>
    </div>
  </footer>
);

export default Footer;
