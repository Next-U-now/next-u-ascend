import logoQuierete from "@/assets/logo-quierete.png";
import logoGilmarfly from "@/assets/logo-gilmarfly.jpeg";
import logoAscendio from "@/assets/logo-ascendio.jpeg";
import logoEcunan from "@/assets/logo-ecunan.png";
import logoEcuacybrg from "@/assets/logo-ecuacybrg.jpeg";
import logoAyara from "@/assets/logo-ayara.jpeg";

const clients = [
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Portafolio</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Empresas que confían en nosotros
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden flex flex-col items-center justify-center p-8 hover:border-primary/50 transition-all duration-500 neon-card"
            >
              <div className="w-full aspect-square flex items-center justify-center mb-6">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-center text-gradient neon-text">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
