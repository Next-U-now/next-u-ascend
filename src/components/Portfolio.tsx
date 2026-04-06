import { ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import logoQuierete from "@/assets/logo-quierete.png";
import logoGilmarfly from "@/assets/logo-gilmarfly.jpeg";
import logoAscendio from "@/assets/logo-ascendio.jpeg";
import logoEcunan from "@/assets/logo-ecunan.png";
import logoEcuacybrg from "@/assets/logo-ecuacybrg.jpeg";
import logoAyara from "@/assets/logo-ayara.jpeg";
import logoNexvend from "@/assets/logo-nexvend.png";

const clients = [
  { name: "NexVend", logo: logoNexvend, link: "https://wa.me/593983949211?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20NexVend" },
  { name: "Quiereté", logo: logoQuierete },
  { name: "GilmarFly", logo: logoGilmarfly },
  { name: "Ascendio Growth Partners", logo: logoAscendio },
  { name: "Ecuñan", logo: logoEcunan },
  { name: "EcuaCybrg Bionics", logo: logoEcuacybrg },
  { name: "Ayara", logo: logoAyara },
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Portafolio</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Empresas que confían en nosotros
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Proyectos reales impulsados por Next U — desde startups hasta marcas en expansión
          </p>
        </div>

        {/* Featured: NexVend */}
        <a
          href={clients[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden hover:border-primary/60 transition-all duration-500 neon-card"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10">
            <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center">
              <img src={clients[0].logo} alt={clients[0].name} className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="text-center md:text-left flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">Nuevo Proyecto</span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gradient neon-text mb-2">{clients[0].name}</h3>
              <p className="text-muted-foreground text-sm mb-4">Máquinas expendedoras inteligentes — promociona tu marca en espacios estratégicos con tecnología de vanguardia.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Contáctanos por WhatsApp <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>
        </a>

        {/* Carousel of clients */}
        <div className="px-10">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {clients.slice(1).map((client, i) => (
                <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/3">
                  <div className="group relative rounded-2xl bg-card border border-border overflow-hidden flex flex-col items-center justify-center p-4 hover:border-primary/50 transition-all duration-500 neon-card">
                    <div className="w-full aspect-square max-w-[120px] flex items-center justify-center mb-3">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-sm md:text-base font-extrabold tracking-tight text-center text-gradient neon-text">
                      {client.name}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
