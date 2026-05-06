import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Sparkles, Globe, Wrench, DollarSign, Users, CreditCard, Wallet, CalendarClock, FileSignature, UserCheck } from "lucide-react";
import { countries, defaultCountry } from "@/lib/countries";

const businessTypes = ["Comercio / Retail", "Servicios profesionales", "Restaurante / Alimentos", "Tecnología", "Salud / Bienestar", "Educación", "Otro"];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  requirements: string;
  budget: string;
  plan: string;
}

const emptyForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  businessName: "",
  businessType: "",
  requirements: "",
  budget: "",
  plan: "",
};

const packages = [
  {
    name: "Next U VIP",
    price: "Un solo pago",
    oldPrice: null,
    description: "Sin límites, a tu medida — experiencia 100% personalizada",
    features: ["Todo de Next U Plus", "Asesoría personalizada 1 a 1 para diagnosticar necesidades reales", "Estrategia inteligente y estética adaptada a tu cliente", "Valor acordado directamente con el dueño", "Acceso directo al CEO", "Grupo exclusivo VIP"],
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
    price: "$300",
    oldPrice: "$599",
    description: "Escala con inteligencia artificial",
    features: ["Todo de Next U Plus", "Página web profesional", "Hosting y dominio por 1 año incluidos", "Mantenimiento web por 1 año incluido", "8 sesiones de mentoría", "Chatbot IA personalizado", "Estrategia de redes con IA", "Diseño de marca", "Grupo exclusivo"],
    highlight: false,
    offer: true,
    hasWeb: true,
  },
];

const Packages = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({ ...emptyForm });
  const [sentMsg, setSentMsg] = useState<string | null>(null);
  const [dialCode, setDialCode] = useState<string>(defaultCountry.dial);
  const fullPhone = () => `${dialCode} ${formData.phone}`.trim();

  const openForPlan = (pkg: typeof packages[0]) => {
    const isVip = pkg.name === "Next U VIP";
    setFormData({
      ...emptyForm,
      plan: isVip ? pkg.name : `${pkg.name} (${pkg.price})`,
      budget: isVip ? "" : pkg.price,
    });
    setSentMsg(null);
    setDialogOpen(true);
  };

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.businessName || !formData.businessType || !formData.requirements) {
      setSentMsg("Por favor completa los campos obligatorios.");
      setTimeout(() => setSentMsg(null), 3000);
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const message = `*Agendar Cita*%0APlan: ${formData.plan}%0ANombre: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0ATel: ${fullPhone()}%0ANegocio: ${formData.businessName}%0ATipo: ${formData.businessType}%0ARequerimientos: ${formData.requirements}%0APresupuesto: ${formData.budget}`;
    window.open(`https://wa.me/593998575218?text=${message}`, "_blank");
    setSentMsg("¡Mensaje enviado por WhatsApp! 🎉");
    setTimeout(() => { setDialogOpen(false); setSentMsg(null); }, 3000);
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`Agendar Cita - ${formData.plan}`);
    const body = encodeURIComponent(`Plan: ${formData.plan}\nNombre: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nTel: ${fullPhone()}\nNegocio: ${formData.businessName}\nTipo: ${formData.businessType}\nRequerimientos: ${formData.requirements}\nPresupuesto: ${formData.budget}`);
    window.open(`mailto:info@thenextunow.com?subject=${subject}&body=${body}`, "_blank");
    setSentMsg("¡Abriendo tu correo! 📧");
    setTimeout(() => { setDialogOpen(false); setSentMsg(null); }, 3000);
  };

  const inputClass = "w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <section id="paquetes" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Paquetes</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Nuestros Paquetes</h2>
          <p className="text-muted-foreground mt-4">Potenciados con Inteligencia Artificial</p>
        </div>

        <div className="relative mb-8 mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base font-semibold text-foreground leading-snug">
                Todos nuestros paquetes <span className="text-primary">incluyen la visita de nuestro experto</span> para analizar tus necesidades y acompañarte en todo el proceso.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1.5 flex items-center gap-1.5 flex-wrap">
                <CalendarClock className="w-3.5 h-3.5 text-primary" />
                Agéndala sin problema —
                <FileSignature className="w-3.5 h-3.5 text-primary" />
                también para firmar el contrato del servicio.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mb-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border bg-secondary/30 p-3 flex items-center gap-2">
            <Wallet className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="text-xs font-semibold text-foreground">Un solo pago en efectivo</p>
              <p className="text-[10px] text-primary">10% de descuento</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-secondary/30 p-3 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="text-xs font-semibold text-foreground">Pago con tarjeta</p>
              <p className="text-[10px] text-muted-foreground">Crédito o débito</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-secondary/30 p-3 flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="text-xs font-semibold text-foreground">Pago en cuotas</p>
              <p className="text-[10px] text-muted-foreground">Plan flexible a tu medida</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  Más Popular
                </span>
              )}
              {pkg.offer && (
                <span className="absolute -top-3 right-3 px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground text-xs font-bold animate-pulse">
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

              <div className="flex items-center gap-1.5 mb-3 px-2 py-1 rounded-lg bg-primary/10 border border-primary/20">
                <DollarSign className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-[10px] text-primary font-semibold">Efectivo · Tarjeta · Cuotas</span>
              </div>

              <ul className="space-y-2 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                    {f.includes("IA") ? (
                      <Sparkles className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    ) : f.includes("Grupo exclusivo") ? (
                      <Users className="w-3.5 h-3.5 text-accent-foreground mt-0.5 shrink-0" />
                    ) : f.includes("web") || f.includes("Página") ? (
                      <Globe className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    ) : f.includes("Mantenimiento") ? (
                      <Wrench className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                    ) : (
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    )}
                    {f}
                  </li>
                ))}
              </ul>

              {pkg.name === "Next U VIP" && (
                <p className="text-[10px] text-muted-foreground mt-2 italic border-t border-border pt-2">
                  * Asesoría personalizada para diseñar una solución inteligente y estética según las necesidades reales de tu cliente
                </p>
              )}

              <button
                onClick={() => openForPlan(pkg)}
                className={`mt-4 text-center py-2 rounded-full text-sm font-semibold transition-all ${
                  pkg.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                Empezar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog for appointment */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Agenda tu Cita</DialogTitle>
            <p className="text-muted-foreground text-center text-sm">
              Plan seleccionado: <span className="text-primary font-semibold">{formData.plan}</span>
            </p>
          </DialogHeader>

          {sentMsg ? (
            <div className="text-center py-6">
              <p className="text-primary font-bold text-lg">{sentMsg}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input required placeholder="Nombre *" value={formData.firstName} onChange={update("firstName")} className={inputClass} />
              <input required placeholder="Apellido *" value={formData.lastName} onChange={update("lastName")} className={inputClass} />
              <input required type="email" placeholder="Email *" value={formData.email} onChange={update("email")} className={inputClass} />
              <div className="flex gap-2">
                <select value={dialCode} onChange={(e) => setDialCode(e.target.value)} className="rounded-xl border border-border bg-secondary/30 px-1 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-11 shrink-0 text-center appearance-none" aria-label="Código de país" title={`Código ${dialCode}`}>
                  {countries.map(c => (
                    <option key={c.code} value={c.dial}>{c.flag}</option>
                  ))}
                </select>
                <input required type="tel" placeholder="Teléfono *" value={formData.phone} onChange={update("phone")} className={`${inputClass} flex-1`} />
              </div>
              <input required placeholder="Nombre del negocio *" value={formData.businessName} onChange={update("businessName")} className={inputClass} />
              <select required value={formData.businessType} onChange={update("businessType")} className={inputClass}>
                <option value="">Tipo de negocio *</option>
                {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <textarea required placeholder="¿Qué necesitas? *" value={formData.requirements} onChange={update("requirements")} rows={3} className={`${inputClass} sm:col-span-2 resize-none`} />
              <input placeholder="Presupuesto estimado (opcional)" value={formData.budget} onChange={update("budget")} className={inputClass} />
              <button type="submit" className="rounded-full bg-primary text-primary-foreground font-semibold py-2.5 hover:opacity-90 transition-opacity">
                Enviar por WhatsApp
              </button>
              <button type="button" onClick={sendEmail} className="rounded-full border border-primary text-primary font-semibold py-2.5 hover:bg-primary/10 transition-colors">
                Enviar por Correo
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Packages;
