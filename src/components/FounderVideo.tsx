
import React, { useState } from "react";
import { Play, Pause } from "lucide-react";

const FounderVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById('founder-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="finxpert-chip mx-auto mb-6">
            <span>From Our Founder</span>
          </div>
          <h2 className="section-title mb-4">Meet the Vision Behind FinXpert</h2>
          <p className="section-subtitle mx-auto">
            Discover how our founder's passion for financial excellence drives FinXpert's mission to transform lives through expert financial solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            {/* Video Container */}
            <div className="relative aspect-video">
              <video
                id="founder-video"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls
              >
                <source src="/images/finxpert_founder.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button
                    onClick={handlePlayPause}
                    className="bg-finxpert-500 hover:bg-finxpert-600 text-white rounded-full p-6 shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                A Message from Our Founder
              </h3>
              <p className="text-gray-600">
                Learn about FinXpert's journey, our commitment to excellence, and how we're revolutionizing financial services with personalized solutions and 20+ years of expertise.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Ready to start your financial journey?</p>
            <a 
              href="https://wa.me/919898617043?text=Hello%20FinXpert,%20I%20would%20like%20to%20get%20started%20with%20your%20financial%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVideo;
