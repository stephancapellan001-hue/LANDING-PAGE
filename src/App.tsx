import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import CarbonFiberBackground from "./components/CarbonFiberBackground";
import ParticleBackground from "./components/ParticleBackground";
import { FloatingChartsBackground } from "./components/FloatingChartsBackground";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-cyan selection:text-black">
      <CarbonFiberBackground />
      <ParticleBackground />
      <FloatingChartsBackground />
      <ScrollIndicator />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
