import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2">Terms &amp; Conditions — Next U</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: May 5, 2026</p>
        <p className="text-muted-foreground mb-6">Welcome to Next U. By accessing or using our website and services, you agree to the following Terms &amp; Conditions.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">1. Services</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Website design and development</li>
          <li>Business automation systems</li>
          <li>Marketing and branding solutions</li>
          <li>AI integrations and chatbot systems</li>
          <li>Domain and hosting assistance</li>
          <li>Digital consulting services</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">2. User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Provide accurate information</li>
          <li>Use services lawfully</li>
          <li>Avoid misuse of our systems or website</li>
          <li>Respect intellectual property rights</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">3. Payments and Refunds</h2>
        <p className="text-muted-foreground">Payments for services must be completed according to agreed terms. Due to the digital nature of our services, refunds may not be guaranteed once work has started unless otherwise agreed in writing.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">4. Project Timelines</h2>
        <p className="text-muted-foreground">Delivery timelines may vary depending on project complexity, client communication, revisions, and external service providers.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">5. Intellectual Property</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Next U retains ownership of internal systems, templates, automation structures, and proprietary tools.</li>
          <li>Clients retain ownership of their logos, branding, and provided materials.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">6. Third-Party Platforms</h2>
        <p className="text-muted-foreground mb-2">Some services may depend on third-party providers including:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Meta Platforms</li><li>Google</li><li>Hosting providers</li><li>Domain registrars</li><li>Automation platforms</li>
        </ul>
        <p className="text-muted-foreground mt-2">Next U is not responsible for outages, restrictions, bans, or changes made by third-party services.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">7. Limitation of Liability</h2>
        <p className="text-muted-foreground">Next U is not liable for indirect damages, loss of profits, business interruptions, or technical issues caused by third-party platforms, hosting providers, internet failures, or user misuse.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">8. Service Modifications</h2>
        <p className="text-muted-foreground">We reserve the right to modify, suspend, or discontinue services or website features at any time.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">9. Privacy</h2>
        <p className="text-muted-foreground">Use of our services is also governed by our <a href="/privacidad" className="text-primary hover:underline">Privacy Policy</a>.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">10. Contact</h2>
        <div className="text-muted-foreground space-y-1">
          <p>Next U</p>
          <p>Website: <a href="http://www.thenextunow.com" className="text-primary hover:underline">www.thenextunow.com</a></p>
          <p>Email: <a href="mailto:next.u.now@outlook.com" className="text-primary hover:underline">next.u.now@outlook.com</a></p>
          <p>Phone/WhatsApp: +593 998 575 218</p>
          <p>Facebook: <a href="https://www.facebook.com/TheNextUNow" className="text-primary hover:underline">facebook.com/TheNextUNow</a></p>
          <p>Instagram: <a href="https://www.instagram.com/nextu_now/" className="text-primary hover:underline">instagram.com/nextu_now</a></p>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default Terms;
