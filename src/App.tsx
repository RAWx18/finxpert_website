import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import PamphletsGallery from "./components/PamphletsGallery";
import IndiaFinanceNews from "./components/IndiaFinanceNews";
import BankLogos from "./components/BankLogos";
import EMICalculator from "./components/EMICalculator";
import ShareMemories from "./components/ShareMemories";
import Footer from "./components/Footer";
import FounderVideo from "./components/FounderVideo";

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all elements with the fade-in class
    const elementsToAnimate = document.querySelectorAll('.fade-in-element');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FounderVideo />
      <ServicesSection />
      <AboutSection />
      <BankLogos />
      <EMICalculator />
      <PamphletsGallery />
      <ShareMemories />
      <IndiaFinanceNews />
      <Footer />
    </div>
  );
}

export default App;