import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, Sparkles, Globe, Wrench, DollarSign, Users } from "lucide-react";

const packages = [
  {
    name: "Next U VIP",
    price: "Un solo pago",
    oldPrice: null,
    description: "Sin límites, a tu medida — un solo pago que incluye mantenimiento anual",
    features: ["Todo de Next U Premium", "Desarrollo web/app con IA", "Mantenimiento anual incluido en un solo pago", "Valor acordado con el dueño", "Sesiones ilimitadas", "Automatización total", "Equipo dedicado", "Estrategia 360° con IA", "Acceso directo al CEO", "Grupo exclusivo VIP"],
    highlight: true,
    offer: true,
    hasWeb: true,
  },
  {
    name: "Next U",
    price: "$50",
    oldPrice: null,
    description: "Tu primer paso al siguiente nivel",
    features: ["Consultoría inicial con IA", "Plan de negocios básico", "1 sesión de mentoría", "Guía de primeros pasos", "Análisis IA de mercado"],
    highlight: false,
    offer: false,
    hasWeb: false,
  },
  {
    name: "Next U Plus",
    price: "$125",
    oldPrice: "$199",
    description: "Impulsa tu crecimiento",
    features: ["Todo de Next U", "Estrategia de marketing con IA", "4 sesiones de mentoría", "Análisis de competencia IA", "Branding básico", "Automatización de procesos"],
    highlight: false,
    offer: true,
    hasWeb: false,
  },
  {
    name: "Next U Premium",
    price: "$399",
    oldPrice: "$599",
    description: "Escala con inteligencia artificial",
    features: ["Todo de Next U Plus", "Página web profesional", "Mantenimiento web incluido", "8 sesiones de mentoría", "Chatbot IA personalizado", "Estrategia de redes con IA", "Diseño de marca", "Reportes IA mensuales", "Grupo exclusivo"],
    highlight: false,
    offer: true,
    hasWeb: true,
  },
];
const Packages = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center mb-2">
            Nuestros Paquetes
          </DialogTitle>
          <p className="text-muted-foreground text-center text-sm">
            Potenciados con Inteligencia Artificial
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border p-5 flex flex-col transition-all duration-300 hover:border-primary/50 ${
                pkg.highlight
                  ? "border-primary bg-primary/5 shadow-[0_0_30px_hsl(68_100%_50%/0.1)]"
                  : "border-border bg-secondary/30"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Popular
                </span>
              )}
              {pkg.offer && (
                <span className="absolute -top-3 right-3 px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold animate-pulse">
                  🔥 Oferta
                </span>
              )}
              <h3 className="text-lg font-bold">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-2xl font-extrabold text-primary">{pkg.price}</p>
                {pkg.oldPrice && (
                  <p className="text-sm text-muted-foreground line-through">{pkg.oldPrice}</p>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1 mb-3">{pkg.description}</p>

              {/* Cash discount badge */}
              <div className="flex items-center gap-1.5 mb-3 px-2 py-1 rounded-lg bg-green-500/10 border border-green-500/20">
                <DollarSign className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span className="text-[10px] text-green-400 font-semibold">10% OFF pagando en efectivo</span>
              </div>

              <ul className="space-y-2 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                    {f.includes("IA") ? (
                      <Sparkles className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    ) : f.includes("Grupo exclusivo") ? (
                      <Users className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                    ) : f.includes("web") || f.includes("Página") ? (
                      <Globe className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                    ) : f.includes("Mantenimiento") ? (
                      <Wrench className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                    ) : (
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    )}
                    {f}
                  </li>
                ))}
              </ul>

              {pkg.hasWeb && pkg.name !== "Next U VIP" && (
                <p className="text-[10px] text-muted-foreground mt-2 italic border-t border-border pt-2">
                  * Incluye mantenimiento web con costo mensual accesible
                </p>
              )}
              {pkg.name === "Next U VIP" && (
                <p className="text-[10px] text-muted-foreground mt-2 italic border-t border-border pt-2">
                  * Mantenimiento anual incluido en un solo pago, valor acordado directamente con el dueño
                </p>
              )}

              <a
                href="#contacto"
                className={`mt-4 text-center py-2 rounded-full text-sm font-semibold transition-all ${
                  pkg.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
                onClick={() => {
                  document.querySelector<HTMLButtonElement>("[data-radix-dialog-close]")?.click();
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent("open-cita", { detail: { plan: pkg.name } }));
                  }, 300);
                }}
              >
                Elegir Plan
              </a>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Packages;
