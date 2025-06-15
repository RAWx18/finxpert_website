import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, TrendingUp, Shield, Users, Clock, Award, CheckCircle, Star, Plus, X, Building2, FileText } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllPoints, setShowAllPoints] = useState(false);

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

  const allWhyChooseUsPoints = [
    {
      icon: TrendingUp,
      title: "20+ Years Experience",
      description: "Two decades of expertise in financial services"
    },
    {
      icon: Users,
      title: "30+ Bank Partners",
      description: "Extensive network of banking relationships"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval in 24-48 hours"
    },
    {
      icon: Award,
      title: "Best Interest Rates",
      description: "Competitive rates from multiple lenders"
    },
    {
      icon: Shield,
      title: "100% Secure Process",
      description: "Bank-level security and data protection"
    },
    {
      icon: Star,
      title: "High Success Rate",
      description: "95% loan approval rate with our expertise"
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "Complete assistance from application to disbursement"
    },
    {
      icon: Building2,
      title: "Expert Team",
      description: "Certified financial advisors and consultants"
    },
    {
      icon: FileText,
      title: "Minimal Documentation",
      description: "Simplified paperwork and quick verification"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated relationship manager for each client"
    }
  ];

  // Show first 3 points in the main view
  const displayedPoints = allWhyChooseUsPoints.slice(0, 3);

  const openModal = () => {
    setShowAllPoints(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowAllPoints(false);
    document.body.style.overflow = 'unset';
  };
  
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
                Trusted by 500+ Clients
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-finxpert-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Us?</h3>
                  <p className="text-gray-600">What makes us different</p>
                </div>
                
                {/* Experience and Partners Stats */}
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
                
                {/* Why Choose Us Points - Show first 3 */}
                <div className="space-y-3">
                  {displayedPoints.map((point, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <point.icon className="w-4 h-4 text-finxpert-600 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-800">{point.title}</div>
                        <div className="text-xs text-gray-600">{point.description}</div>
                      </div>
                    </div>
                  ))}
                  
                  {/* View All Button */}
                  <button
                    onClick={openModal}
                    className="flex items-center justify-center w-full p-3 bg-finxpert-50 hover:bg-finxpert-100 rounded-lg transition-colors duration-300 group"
                  >
                    <Plus className="w-4 h-4 text-finxpert-600 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                    <span className="text-sm font-medium text-finxpert-600">View All Reasons</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-finxpert-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>

      {/* Modal for All Points */}
      {showAllPoints && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Why Choose FinXpert?</h2>
                <p className="text-gray-600">10 compelling reasons to trust us with your financial needs</p>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allWhyChooseUsPoints.map((point, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-finxpert-100 rounded-xl flex items-center justify-center mr-4">
                      <point.icon className="w-6 h-6 text-finxpert-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{point.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact CTA in Modal */}
              <div className="mt-8 text-center bg-finxpert-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ready to Experience the FinXpert Difference?</h3>
                <p className="text-gray-600 mb-4">Join hundreds of satisfied customers who trust us with their financial needs.</p>
                <a
                  href="https://api.whatsapp.com/send/?phone=919898617043&text=Hello+FinXpert%2C+I+want+to+know+more+about+your+services+after+seeing+why+you%27re+different.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-finxpert-600 hover:bg-finxpert-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                  onClick={closeModal}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;