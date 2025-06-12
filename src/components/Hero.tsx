
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-br from-finxpert-50 to-white" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-finxpert-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="finxpert-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-finxpert-500 text-white mr-2">
                <TrendingUp className="w-3 h-3" />
              </span>
              <span>20+ years of Experience</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              FinXpert: <br className="hidden sm:inline" />
              <span className="text-finxpert-600">A Complete Capital Solution</span>
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-700 font-normal text-base sm:text-lg text-left"
            >
              FinXpert is the most trusted Financial services providing company with more than 20 years of Experience to cater best Financial Solution to our Clients.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <a 
                href="https://api.whatsapp.com/send/?phone=919898617043&text=Hello+FinXpert%2C+I+would+like+to+get+started+with+your+financial+services.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center group w-full sm:w-auto text-center bg-finxpert-500 text-white px-4 py-2 rounded"
              >
                Get Financial Solution
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#services" 
                className="button-secondary w-full sm:w-auto text-center"
              >
                Our Services
              </a>
            </div>
            </div>

            {/* Trust indicators */}
            <div 
              className="flex flex-wrap gap-6 mt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 text-finxpert-500 mr-2" />
                30+ Bank Partners
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 text-finxpert-500 mr-2" />
                Trusted by 100+ Clients
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-finxpert-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Loan Assessment</h3>
                  <p className="text-gray-600">Get personalized financial solutions</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-finxpert-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-finxpert-600">20+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-finxpert-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-finxpert-600">30+</div>
                    <div className="text-sm text-gray-600">Bank Partners</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Business Loans</span>
                    <span className="text-finxpert-600 text-sm">Available</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Home Loans</span>
                    <span className="text-finxpert-600 text-sm">Available</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Working Capital</span>
                    <span className="text-finxpert-600 text-sm">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-finxpert-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
