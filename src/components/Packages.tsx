import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Básico",
    price: "$99",
    description: "Para quienes están comenzando",
    features: ["Consultoría inicial", "Plan de negocios básico", "1 sesión de mentoría", "Guía de primeros pasos"],
    highlight: false,
  },
  {
    name: "Normal",
    price: "$249",
    description: "Para negocios en crecimiento",
    features: ["Todo del Básico", "Estrategia de marketing", "4 sesiones de mentoría", "Análisis de mercado", "Branding básico"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$499",
    description: "Para escalar tu negocio",
    features: ["Todo del Normal", "Presencia digital completa", "8 sesiones de mentoría", "Estrategia de redes sociales", "Diseño de marca", "Reportes mensuales"],
    highlight: true,
  },
  {
    name: "Exclusivo",
    price: "$999",
    description: "Transformación total",
    features: ["Todo del Premium", "Desarrollo web/app", "Sesiones ilimitadas", "Gestión de campañas", "Automatización de procesos", "Soporte prioritario"],
    highlight: false,
  },
  {
    name: "VIP",
    price: "Personalizado",
    description: "A tu medida, sin límites",
    features: ["Todo del Exclusivo", "Equipo dedicado", "Estrategia 360°", "Expansión a nuevos mercados", "Partnership estratégico", "Acceso directo al CEO"],
    highlight: false,
  },
];

const Packages = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center mb-2">
            Nuestros Paquetes
          </DialogTitle>
          <p className="text-muted-foreground text-center text-sm">
            Elige el plan perfecto para tu negocio
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-6">
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
              <h3 className="text-lg font-bold">{pkg.name}</h3>
              <p className="text-2xl font-extrabold text-primary mt-1">{pkg.price}</p>
              <p className="text-xs text-muted-foreground mt-1 mb-4">{pkg.description}</p>
              <ul className="space-y-2 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-4 text-center py-2 rounded-full text-sm font-semibold transition-all ${
                  pkg.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
                onClick={() => document.querySelector<HTMLButtonElement>("[data-radix-dialog-close]")?.click()}
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
