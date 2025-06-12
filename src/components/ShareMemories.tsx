
import React, { useEffect, useRef } from "react";

const ShareMemories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !column1Ref.current || !column2Ref.current || !column3Ref.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));

      // Different speeds for parallax effect
      const speed1 = scrollProgress * 100;
      const speed2 = scrollProgress * -80;
      const speed3 = scrollProgress * 120;

      column1Ref.current.style.transform = `translateY(${speed1}px)`;
      column2Ref.current.style.transform = `translateY(${speed2}px)`;
      column3Ref.current.style.transform = `translateY(${speed3}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workImages = [
    "/images/card.jpeg",
    "/images/check.jpeg",
    "/images/env_day.jpeg",
    "/images/hire.jpeg",
    "/images/loan.jpeg",
  ];

  const teamImages = [
    "/images/check.jpeg",
    "/images/env_day.jpeg",
    "/images/hire.jpeg",
    "/images/loan.jpeg",
  ];

  const officeImages = [
    "/images/card.jpeg",
    "/images/check.jpeg",
    "/images/env_day.jpeg",
    "/images/hire.jpeg",
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="finxpert-chip mx-auto mb-6">
            <span>Our Journey</span>
          </div>
          <h2 className="section-title mb-4">Share Memories & Moments</h2>
          <p className="section-subtitle mx-auto">
            A glimpse into our workspace, team collaboration, and the moments that define FinXpert's journey in financial excellence.
          </p>
        </div>

        <div className="flex gap-6 justify-center h-96 md:h-[500px]">
          {/* Column 1 - Moving Up */}
          <div ref={column1Ref} className="flex flex-col gap-4 transition-transform duration-100 ease-out">
            {workImages.map((image, index) => (
              <div key={index} className="w-48 md:w-64 h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Team working ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Column 2 - Moving Down */}
          <div ref={column2Ref} className="flex flex-col gap-4 transition-transform duration-100 ease-out mt-12">
            {teamImages.map((image, index) => (
              <div key={index} className="w-48 md:w-64 h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Team collaboration ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Column 3 - Moving Up Faster */}
          <div ref={column3Ref} className="flex flex-col gap-4 transition-transform duration-100 ease-out">
            {officeImages.map((image, index) => (
              <div key={index} className="w-48 md:w-64 h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Office environment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareMemories;
