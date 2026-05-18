import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import logoQuierete from "@/assets/logo-quierete.png";
import logoGilmarfly from "@/assets/logo-gilmarfly.jpeg";
import logoAscendio from "@/assets/logo-ascendio.jpeg";
import logoEcunan from "@/assets/logo-ecunan.png";
import logoEcuacybrg from "@/assets/logo-ecuacybrg.jpeg";
import logoAyara from "@/assets/logo-ayara.jpeg";

const clients = [
  { name: "Quiereté", logo: logoQuierete, link: "https://www.instagram.com/quierete_tea?igsh=bWFmaWxvM2xrOTN2" },
  { name: "GilmarFly", logo: logoGilmarfly, link: "https://www.tiktok.com/@gilmarfly?_r=1&_t=ZT-95Nih5w20tB" },
  { name: "Ascendio Growth Partners", logo: logoAscendio, link: "https://www.ascendiogp.com" },
  { name: "Ecuñan", logo: logoEcunan, link: "https://wa.me/593998575218?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20Ecuñan" },
  { name: "EcuaCybrg Bionics", logo: logoEcuacybrg, link: "https://wa.me/593998575218?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20EcuaCybrg" },
  { name: "Ayara", logo: logoAyara, link: "https://wa.me/593998575218?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20Ayara" },
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
          <p className="text-lg md:text-xl text-primary mt-3 font-bold animate-pulse">
            ✨ Te invito a conocerlas — haz click en ellas para ver qué pasa
          </p>
        </div>

        {/* Carousel of clients */}
        <div className="px-10">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {clients.map((client, i) => (
                <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/3">
                  {client.link ? (
                    <a href={client.link} target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl bg-card border border-border overflow-hidden flex flex-col items-center justify-center p-4 hover:border-primary/50 transition-all duration-500 neon-card cursor-pointer">
                      <div className="w-28 h-28 rounded-xl overflow-hidden bg-white mb-3 flex items-center justify-center p-1">
                        <img src={client.logo} alt={client.name} className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${client.name === "Ayara" ? "object-contain" : "object-cover"}`} />
                      </div>
                      <h3 className="text-sm md:text-base font-extrabold tracking-tight text-center text-gradient neon-text">{client.name}</h3>
                    </a>
                  ) : (
                    <div className="group relative rounded-2xl bg-card border border-border overflow-hidden flex flex-col items-center justify-center p-4 hover:border-primary/50 transition-all duration-500 neon-card">
                      <div className="w-28 h-28 rounded-xl overflow-hidden bg-white mb-3 flex items-center justify-center p-1">
                        <img src={client.logo} alt={client.name} className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${client.name === "Ayara" ? "object-contain" : "object-cover"}`} />
                      </div>
                      <h3 className="text-sm md:text-base font-extrabold tracking-tight text-center text-gradient neon-text">{client.name}</h3>
                    </div>
                  )}
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
