import { Rocket, TrendingUp, Lightbulb, Bot, Zap, Cpu } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Inicia tu Negocio",
    description: "Te guiamos desde la idea hasta el lanzamiento. Estrategia, branding, plan de negocios y todo lo que necesitas para despegar.",
  },
  {
    icon: TrendingUp,
    title: "Crece & Escala",
    description: "Optimizamos tus procesos, marketing y operaciones para que tu negocio alcance su máximo potencial de crecimiento.",
  },
  {
    icon: Rocket,
    title: "Expande tu Alcance",
    description: "Llevamos tu marca a nuevos mercados con estrategias digitales, presencia online y posicionamiento de marca.",
  },
  {
    icon: Bot,
    title: "Inteligencia Artificial",
    description: "Integramos soluciones de IA en tu negocio: chatbots inteligentes, análisis predictivo, generación de contenido y asistentes virtuales personalizados.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Automatizamos tareas repetitivas, flujos de trabajo, emails, facturación y procesos internos para que te enfoques en lo que importa.",
  },
  {
    icon: Cpu,
    title: "Transformación Digital",
    description: "Digitalizamos tu operación completa con herramientas de IA, dashboards en tiempo real, CRM automatizado y sistemas inteligentes.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Servicios</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Lo que hacemos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Combinamos estrategia empresarial con <span className="text-primary font-semibold">Inteligencia Artificial</span> y <span className="text-primary font-semibold">automatización</span> para llevar tu negocio al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 glow-border"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
