import React from 'react';
import { Building2 } from 'lucide-react';

const BankLogos = () => {
  // Bank logos data - you can replace these with actual logo URLs
  const banks = [
        { name: 'Punjab National Bank', logo: '/banks/pnb.png', alt: 'PNB Logo' },
        { name: 'Bank of Baroda', logo: '/banks/bob.png', alt: 'BOB Logo' },
        { name: 'Axis Bank', logo: '/banks/axis.png', alt: 'Axis Logo' },
        { name: 'HDFC Bank', logo: '/banks/hdfc.png', alt: 'HDFC Logo' },
        { name: 'State Bank of India', logo: '/banks/sbi.png', alt: 'SBI Logo' },
        { name: 'Kotak Mahindra Bank', logo: '/banks/kotak.png', alt: 'Kotak Logo' },
        { name: 'ICICI Bank', logo: '/banks/icici.png', alt: 'ICICI Logo' },
        { name: 'Canara Bank', logo: '/banks/canara.png', alt: 'Canara Logo' },
        { name: 'Union Bank', logo: '/banks/union.png', alt: 'Union Logo' },
        { name: 'IndusInd Bank', logo: '/banks/indusland.png', alt: 'IndusInd Logo' },
        { name: 'Yes Bank', logo: '/banks/yes.png', alt: 'Yes Bank Logo' },
        { name: 'Federal Bank', logo: '/banks/federal.png', alt: 'Federal Logo' },
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedBanks = [...banks, ...banks];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="finxpert-chip mx-auto mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            <span>Banking Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Leading Banks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have partnerships with major banks across India to provide you with the best financial solutions
          </p>
        </div>

        {/* Moving Logos Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling logos */}
          <div className="flex animate-scroll-left space-x-8 py-8">
            {duplicatedBanks.map((bank, index) => (
              <div
                key={`${bank.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <img
                  src={bank.logo}
                  alt={bank.alt}
                  className="max-w-24 max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row moving in opposite direction */}
        <div className="relative overflow-hidden mt-8">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling logos in reverse */}
          <div className="flex animate-scroll-right space-x-8 py-8">
            {duplicatedBanks.reverse().map((bank, index) => (
              <div
                key={`reverse-${bank.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <img
                  src={bank.logo}
                  alt={bank.alt}
                  className="max-w-24 max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-finxpert-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-finxpert-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">30+ Banking Partners</h3>
            <p className="text-gray-600">Extensive network of trusted financial institutions</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-finxpert-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-finxpert-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Verified Partnerships</h3>
            <p className="text-gray-600">All partnerships are officially verified and regulated</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-finxpert-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-finxpert-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Transactions</h3>
            <p className="text-gray-600">Bank-level security for all your financial transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankLogos;