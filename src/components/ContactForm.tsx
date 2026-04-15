import { useState } from "react";
import { Gift } from "lucide-react";

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
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ ...emptyForm });
  const [sentMsg, setSentMsg] = useState<string | null>(null);

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Primera Asesoría Gratis*%0ANombre: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0ATel: ${formData.phone}%0ANegocio: ${formData.businessName}%0ATipo: ${formData.businessType}%0ARequerimientos: ${formData.requirements}%0APresupuesto: ${formData.budget}`;
    window.open(`https://wa.me/18093501344?text=${message}`, "_blank");
    setSentMsg("¡Mensaje enviado! 🎉 Te contactaremos pronto.");
    setFormData({ ...emptyForm });
    setTimeout(() => setSentMsg(null), 4000);
  };

  const inputClass = "w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4">
            <Gift className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">¿Buscas tu primera asesoría? ¡Podría ser gratis!</h2>
          <p className="text-muted-foreground">Cuéntanos sobre tu negocio para una conferencia inicial</p>
        </div>

        {sentMsg && (
          <div className="text-center py-4 mb-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-primary font-bold">{sentMsg}</p>
          </div>
        )}

        <div className="rounded-2xl border border-border bg-card p-6">
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
            <textarea required placeholder="¿Qué necesitas? Describe tus requerimientos *" value={formData.requirements} onChange={update("requirements")} rows={3} className={`${inputClass} sm:col-span-2 resize-none`} />
            <input placeholder="Presupuesto estimado (opcional)" value={formData.budget} onChange={update("budget")} className={inputClass} />
            <button type="submit" className="sm:col-start-2 rounded-full bg-primary text-primary-foreground font-semibold py-2.5 hover:opacity-90 transition-opacity">
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
