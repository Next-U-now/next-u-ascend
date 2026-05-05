import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-extrabold mb-2">Privacy Policy — Next U</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: May 5, 2026</p>
        <p className="text-muted-foreground mb-6">Welcome to Next U ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, services, automation systems, digital tools, and communication channels.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Full name</li><li>Email address</li><li>Phone number</li><li>Business information</li><li>Website details</li>
          <li>Messages submitted through forms, WhatsApp, chat systems, or social media</li>
          <li>Payment or billing information when applicable</li>
          <li>Technical data such as IP address, browser type, cookies, and device information</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Provide digital services and automation solutions</li>
          <li>Create websites and online systems</li>
          <li>Improve customer support and communication</li>
          <li>Respond to inquiries and requests</li>
          <li>Send updates, marketing, or promotional content</li>
          <li>Analyze website performance and user behavior</li>
          <li>Improve our services and user experience</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">3. Third-Party Services</h2>
        <p className="text-muted-foreground mb-2">We may use trusted third-party platforms including but not limited to:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Meta Platforms (Facebook, Instagram, WhatsApp)</li>
          <li>OpenAI</li><li>Google Analytics</li><li>Stripe or payment providers</li>
          <li>Hosting and cloud providers</li><li>CRM and automation systems</li>
        </ul>
        <p className="text-muted-foreground mt-2">These platforms may process data according to their own privacy policies.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">4. Cookies and Tracking Technologies</h2>
        <p className="text-muted-foreground">Our website may use cookies and tracking technologies to improve functionality, analyze traffic, and personalize user experience. Users may disable cookies through their browser settings.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">5. Data Protection</h2>
        <p className="text-muted-foreground">We implement reasonable technical and organizational measures to protect user information against unauthorized access, misuse, disclosure, or destruction. However, no online platform can guarantee absolute security.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">6. Communication and Automation</h2>
        <p className="text-muted-foreground">By contacting Next U through forms, WhatsApp, chat systems, or social media, you acknowledge that automated systems and artificial intelligence tools may be used to assist communication and customer support.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">7. User Rights</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Access their personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of personal data</li>
          <li>Withdraw consent for communications</li>
        </ul>
        <p className="text-muted-foreground mt-2">Requests can be made through our contact channels.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">8. External Links</h2>
        <p className="text-muted-foreground">Our website may contain links to external websites or services. We are not responsible for the privacy practices of third-party websites.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">9. Changes to This Policy</h2>
        <p className="text-muted-foreground">We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with the updated effective date.</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">10. Contact Information</h2>
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

export default Privacy;
