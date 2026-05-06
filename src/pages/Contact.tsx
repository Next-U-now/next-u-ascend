import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, Globe, Clock } from "lucide-react";

const Contact = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-8 px-6">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact — Next U</h1>
        <p className="text-muted-foreground mb-10">Have questions or ready to grow your business with Next U? We help businesses scale through automation, websites, AI solutions, branding, and intelligent digital systems designed for modern growth.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-3">Our Services</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
              <li>Website Development</li>
              <li>Business Automation</li>
              <li>AI Integrations</li>
              <li>WhatsApp Systems</li>
              <li>Branding &amp; Marketing</li>
              <li>Domain &amp; Hosting Assistance</li>
              <li>Digital Strategy</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 space-y-3 text-sm">
            <h2 className="text-xl font-bold mb-3">Contact Information</h2>
            <a href="http://www.thenextunow.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Globe className="w-4 h-4 text-primary" />www.thenextunow.com</a>
            <a href="mailto:next.u.now@outlook.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Mail className="w-4 h-4 text-primary" />next.u.now@outlook.com</a>
            <a href="mailto:info@thenextunow.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Mail className="w-4 h-4 text-primary" />info@thenextunow.com</a>
            <a href="https://wa.me/593998575218" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Phone className="w-4 h-4 text-primary" />+593 998 575 218</a>
            <div className="flex items-center gap-3 text-muted-foreground pt-2"><Clock className="w-4 h-4 text-primary" />Mon – Fri · 9:00 AM – 6:00 PM</div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 mb-4">
          <h2 className="text-2xl font-bold mb-2">Let's Build the Future of Your Business</h2>
          <p className="text-muted-foreground">Next U helps modern businesses optimize, automate, and scale using intelligent technology, modern design, and innovative digital solutions.</p>
        </div>
      </section>

      <ContactForm />
    </main>
    <Footer />
  </>
);

export default Contact;
