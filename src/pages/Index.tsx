import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <Portfolio />
    </main>
    <Footer />
    <ChatBot />
  </>
);

export default Index;
