import { useState } from "react";
import { Calendar, Gift } from "lucide-react";

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

const ContactSection = ({ title, subtitle, icon: Icon, accentClass, formData, setFormData, showPlan }: {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accentClass: string;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  showPlan: boolean;
}) => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*${title}*%0ANombre: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0ATel: ${formData.phone}%0ANegocio: ${formData.businessName}%0ATipo: ${formData.businessType}%0ARequerimientos: ${formData.requirements}%0APresupuesto: ${formData.budget}${showPlan ? `%0APlan: ${formData.plan}` : ""}`;
    window.open(`https://wa.me/18093501344?text=${message}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const inputClass = "w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-xl ${accentClass}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-6">{subtitle}</p>

      {sent ? (
        <div className="text-center py-10">
          <p className="text-primary font-bold text-lg">¡Mensaje enviado! 🎉</p>
          <p className="text-muted-foreground text-sm mt-1">Te contactaremos pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      )}
    </div>
  );
};

const ContactForm = () => {
  const [appointmentData, setAppointmentData] = useState<FormData>({ ...emptyForm });
  const [freeData, setFreeData] = useState<FormData>({ ...emptyForm });

  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Agenda tu Cita</h2>
          <p className="text-muted-foreground">Elige tu plan y cuéntanos sobre tu negocio</p>
        </div>

        <ContactSection
          title="Crear una Cita"
          subtitle="Selecciona tu plan y completa tus datos para agendar"
          icon={Calendar}
          accentClass="bg-primary/10 text-primary"
          formData={appointmentData}
          setFormData={setAppointmentData}
          showPlan={true}
        />

        <ContactSection
          title="¿Buscas tu primera asesoría? ¡Podría ser gratis!"
          subtitle="Cuéntanos sobre tu negocio y te contactaremos para una conferencia inicial sin costo"
          icon={Gift}
          accentClass="bg-green-500/10 text-green-400"
          formData={freeData}
          setFormData={setFreeData}
          showPlan={false}
        />
      </div>
    </section>
  );
};

export default ContactForm;
