import logoQuierete from "@/assets/logo-quierete.png";
import logoGilmarfly from "@/assets/logo-gilmarfly.jpeg";
import logoAscendio from "@/assets/logo-ascendio.jpeg";
import logoEcunan from "@/assets/logo-ecunan.png";
import logoEcuacybrg from "@/assets/logo-ecuacybrg.jpeg";
import logoAyara from "@/assets/logo-ayara.jpeg";

const clients = [
  { name: "Quiereté", logo: logoQuierete, bg: "bg-foreground" },
  { name: "GilmarFly", logo: logoGilmarfly, bg: "" },
  { name: "Ascendio Growth Partners", logo: logoAscendio, bg: "bg-foreground" },
  { name: "Ecuñan", logo: logoEcunan, bg: "bg-foreground" },
  { name: "EcuaCybrg Bionics", logo: logoEcuacybrg, bg: "" },
  { name: "Ayara", logo: logoAyara, bg: "" },
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Portafolio</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Empresas que confían en nosotros
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center p-8 hover:border-primary/30 transition-all duration-500"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                <p className="text-sm font-medium text-center">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
