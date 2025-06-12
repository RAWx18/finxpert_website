
import React, { useState, useEffect } from "react";
import { X, Download, Share2, Eye } from "lucide-react";

const PamphletsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pamphlets = [
    {
      id: 1,
      title: "Hiring Staff 2024",
      description: "Apply for job at FinXpert",
      image: "/images/hire.jpeg",
      category: "Job"
    },
    {
      id: 2,
      title: "Loan Planning Essentials",
      description: "Essential tips for effective loan management",
      image: "/images/loan.jpeg",
      category: "Loan Planning"
    },
    {
      id: 3,
      title: "Business Loan Guide",
      description: "Plan your loan with expert guidance",
      image: "/images/business.jpeg",
      category: "Loan"
    },
    {
      id: 4,
      title: "Bank Tie-ups",
      description: "Get the best rates with our bank partners",
      image: "/images/companies.jpeg",
      category: "Partners"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % pamphlets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [pamphlets.length]);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % pamphlets.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? pamphlets.length - 1 : selectedImage - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="finxpert-chip mx-auto mb-6">
            <span>Resource Library</span>
          </div>
          <h2 className="section-title mb-4">Gallery of Pamphlets</h2>
          <p className="section-subtitle mx-auto">
            Download our comprehensive collection of financial guides and educational materials.
          </p>
        </div>

        {/* Featured Image Showcase */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative h-96 rounpamphletsded-3xl overflow-hidden shadow-2xl">
            <img
              src={pamphlets[currentImageIndex].image}
              alt={pamphlets[currentImageIndex].title}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block bg-finxpert-500 px-3 py-1 rounded-full text-sm font-medium mb-2">
                {pamphlets[currentImageIndex].category}
              </span>
              <h3 className="text-2xl font-bold mb-2">{pamphlets[currentImageIndex].title}</h3>
              <p className="text-gray-200">{pamphlets[currentImageIndex].description}</p>
            </div>
            <div className="absolute top-6 right-6">
              <button
                onClick={() => openModal(currentImageIndex)}
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {pamphlets.map((pamphlet, index) => (
            <div
              key={pamphlet.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={pamphlet.image}
                  alt={pamphlet.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-finxpert-500 px-2 py-1 rounded-full text-xs font-medium mb-2">
                    {pamphlet.category}
                  </span>
                  <h4 className="font-semibold text-sm leading-tight">{pamphlet.title}</h4>
                </div>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm text-white p-1.5 rounded-full">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img
              src={pamphlets[selectedImage].image}
              alt={pamphlets[selectedImage].title}
              className="w-full h-full object-contain rounded-2xl"
            />
            
            {/* Modal Controls */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              ←
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              →
            </button>

            {/* Modal Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-block bg-finxpert-500 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {pamphlets[selectedImage].category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{pamphlets[selectedImage].title}</h3>
                  <p className="text-gray-200">{pamphlets[selectedImage].description}</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-finxpert-500 hover:bg-finxpert-600 text-white p-2 rounded-full transition-colors duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PamphletsGallery;
