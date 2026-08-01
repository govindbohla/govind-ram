import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AvailabilityModal from "./components/AvailabilityModal";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
    <AvailabilityModal />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Achievements /> */}
      <Contact />
      <FloatingWhatsapp />
      <Footer />

    </>
  );
}