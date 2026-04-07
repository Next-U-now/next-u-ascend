import { useState } from "react";
import { Calendar, Gift, ChevronDown } from "lucide-react";

const plans = ["Next U ($50)", "Next U Plus ($125)", "Next U Premium ($399)", "Next U VIP (Personalizado)", "Sin plan — Consulta inicial"];

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

const FormFields = ({ formData, setFormData, showPlan, onSent }: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  showPlan: boolean;
  onSent: () => void;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = showPlan ? "Crear Cita" : "Primera Asesoría Gratis";
    const message = `*${title}*%0ANombre: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0ATel: ${formData.phone}%0ANegocio: ${formData.businessName}%0ATipo: ${formData.businessType}%0ARequerimientos: ${formData.requirements}%0APresupuesto: ${formData.budget}${showPlan ? `%0APlan: ${formData.plan}` : ""}`;
    window.open(`https://wa.me/18093501344?text=${message}`, "_blank");
    onSent();
  };

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const inputClass = "w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
      <input required placeholder="Nombre *" value={formData.firstName} onChange={update("firstName")} className={inputClass} />
      <input required placeholder="Apellido *" value={formData.lastName} onChange={update("lastName")} className={inputClass} />
      <input required type="email" placeholder="Email *" value={formData.email} onChange={update("email")} className={inputClass} />
      <input required type="tel" placeholder="Teléfono *" value={formData.phone} onChange={update("phone")} className={inputClass} />
      <input required placeholder="Nombre del negocio *" value={formData.businessName} onChange={update("businessName")} className={inputClass} />
      <select required value={formData.businessType} onChange={update("businessType")} className={inputClass}>
        <option value="">Tipo de negocio *</option>
        {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      {showPlan && (
        <select required value={formData.plan} onChange={update("plan")} className={`${inputClass} sm:col-span-2`}>
          <option value="">Selecciona un plan *</option>
          {plans.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      )}
      <textarea required placeholder="¿Qué necesitas? Describe tus requerimientos *" value={formData.requirements} onChange={update("requirements")} rows={3} className={`${inputClass} sm:col-span-2 resize-none`} />
      <input placeholder="Presupuesto estimado (opcional)" value={formData.budget} onChange={update("budget")} className={inputClass} />
      <button type="submit" className="sm:col-start-2 rounded-full bg-primary text-primary-foreground font-semibold py-2.5 hover:opacity-90 transition-opacity">
        Enviar
      </button>
    </form>
  );
};

const ContactForm = () => {
  const [openSection, setOpenSection] = useState<"cita" | "free" | null>(null);
  const [appointmentData, setAppointmentData] = useState<FormData>({ ...emptyForm });
  const [freeData, setFreeData] = useState<FormData>({ ...emptyForm });
  const [sentMsg, setSentMsg] = useState<string | null>(null);

  const handleSent = () => {
    setSentMsg("¡Mensaje enviado! 🎉 Te contactaremos pronto.");
    setOpenSection(null);
    setTimeout(() => setSentMsg(null), 4000);
  };

  const toggle = (section: "cita" | "free") => {
    setOpenSection(prev => prev === section ? null : section);
    setSentMsg(null);
  };

  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Agenda tu Cita</h2>
          <p className="text-muted-foreground">Elige una opción y cuéntanos sobre tu negocio</p>
        </div>

        {sentMsg && (
          <div className="text-center py-4 mb-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-primary font-bold">{sentMsg}</p>
          </div>
        )}

        <div className="space-y-4">
          {/* Crear una Cita */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <button
              onClick={() => toggle("cita")}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-secondary/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Crear una Cita</h3>
                  <p className="text-muted-foreground text-sm">Selecciona tu plan y agenda una reunión</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openSection === "cita" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-400 ${openSection === "cita" ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-5 pb-6 md:px-6">
                <FormFields formData={appointmentData} setFormData={setAppointmentData} showPlan={true} onSent={handleSent} />
              </div>
            </div>
          </div>

          {/* Primera asesoría gratis */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <button
              onClick={() => toggle("free")}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-secondary/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-green-500/10 text-green-400">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">¿Buscas tu primera asesoría? ¡Podría ser gratis!</h3>
                  <p className="text-muted-foreground text-sm">Cuéntanos sobre tu negocio para una conferencia inicial</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openSection === "free" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-400 ${openSection === "free" ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-5 pb-6 md:px-6">
                <FormFields formData={freeData} setFormData={setFreeData} showPlan={false} onSent={handleSent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
