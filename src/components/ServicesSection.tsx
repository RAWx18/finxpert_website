import React, { useState } from "react";
import { 
  Building2, 
  Home, 
  Briefcase, 
  TrendingUp, 
  Calculator, 
  FileText,
  Users,
  CreditCard,
  X,
  Check,
  Phone,
  MessageCircle
} from "lucide-react";

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  image: string;
  detailedInfo: {
    overview: string;
    benefits: string[];
    eligibility: string[];
    documents: string[];
    interestRate: string;
    processingTime: string;
    loanAmount: string;
    tenure: string;
  };
}

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      icon: Building2,
      title: "Business Loans",
      description: "Tailored financing solutions for business growth and expansion needs.",
      features: ["Quick Processing", "Competitive Rates", "Flexible Terms"],
      image: "/images/business-loan.png",
      detailedInfo: {
        overview: "Our Business Loans are designed to fuel your entrepreneurial dreams and business expansion plans. Whether you're starting a new venture, expanding operations, or need working capital, we provide comprehensive financing solutions tailored to your business needs.",
        benefits: [
          "Competitive interest rates starting from 11.50% per annum",
          "Quick approval process within 3-7 working days",
          "Minimal documentation requirements",
          "Flexible repayment options",
          "No hidden charges or processing fees",
          "Dedicated relationship manager support"
        ],
        eligibility: [
          "Business should be operational for minimum 2 years",
          "Annual turnover of minimum ₹25 lakhs",
          "Good credit score (above 650)",
          "Profit-making business for last 2 years",
          "Age between 25-65 years"
        ],
        documents: [
          "Business registration certificate",
          "Income Tax Returns (last 3 years)",
          "Bank statements (last 12 months)",
          "GST registration and returns",
          "Financial statements (P&L, Balance Sheet)",
          "Identity and address proof"
        ],
        interestRate: "11.50% - 18.00% per annum",
        processingTime: "3-7 working days",
        loanAmount: "₹5 lakhs - ₹5 crores",
        tenure: "1-7 years"
      }
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Make your dream home a reality with our comprehensive home loan solutions.",
      features: ["Low Interest Rates", "Easy Documentation", "Quick Approval"],
      image: "/images/home-loan.avif",
      detailedInfo: {
        overview: "Turn your dream of owning a home into reality with our attractive home loan offers. We provide financing for purchase of new/resale properties, construction, renovation, and home improvement with competitive rates and flexible terms.",
        benefits: [
          "Attractive interest rates starting from 8.75% per annum",
          "Loan up to 90% of property value",
          "Tenure up to 30 years",
          "Tax benefits under Section 80C and 24B",
          "Free property valuation",
          "Balance transfer facility available"
        ],
        eligibility: [
          "Age: 21-65 years",
          "Minimum income: ₹25,000 per month",
          "Employment: Salaried/Self-employed/Professional",
          "Good credit history",
          "Indian resident"
        ],
        documents: [
          "Income proof (salary slips/ITR)",
          "Identity and address proof",
          "Bank statements (6 months)",
          "Property documents",
          "Employment certificate",
          "Passport size photographs"
        ],
        interestRate: "8.75% - 12.00% per annum",
        processingTime: "7-15 working days",
        loanAmount: "₹10 lakhs - ₹10 crores",
        tenure: "5-30 years"
      }
    },
    {
      icon: Briefcase,
      title: "Working Capital Finance",
      description: "Maintain smooth business operations with our working capital solutions.",
      features: ["Cash Flow Management", "Quick Disbursement", "Flexible Repayment"],
      image: "/images/working-capital.jpg",
      detailedInfo: {
        overview: "Keep your business operations running smoothly with our flexible working capital finance solutions. We understand the importance of maintaining adequate liquidity for day-to-day operations and provide customized funding solutions.",
        benefits: [
          "Flexible credit limits",
          "Overdraft facility available",
          "Quick fund disbursement",
          "Competitive interest rates",
          "Minimal security requirements",
          "Online account management"
        ],
        eligibility: [
          "Business vintage of 3+ years",
          "Minimum annual turnover ₹50 lakhs",
          "Positive cash flow",
          "Good banking relationship",
          "Satisfactory credit rating"
        ],
        documents: [
          "Financial statements (3 years)",
          "Bank statements (12 months)",
          "GST returns",
          "Trade references",
          "Stock statements",
          "Business plan"
        ],
        interestRate: "12.50% - 16.00% per annum",
        processingTime: "5-10 working days",
        loanAmount: "₹10 lakhs - ₹2 crores",
        tenure: "12 months (renewable)"
      }
    },
    {
      icon: CreditCard,
      title: "Loan Against Property",
      description: "Unlock the value of your property for immediate financial needs.",
      features: ["Higher Loan Amount", "Lower Interest Rates", "Longer Tenure"],
      image: "/images/loan-against.avif",
      detailedInfo: {
        overview: "Leverage your property to meet your financial requirements with our Loan Against Property. Whether it's for business expansion, education, medical emergency, or any other purpose, we offer attractive rates and flexible terms.",
        benefits: [
          "Loan up to 70% of property value",
          "Attractive interest rates",
          "Longer repayment tenure",
          "No end-use restrictions",
          "Quick processing",
          "Retain property ownership"
        ],
        eligibility: [
          "Property owner aged 25-70 years",
          "Clear and marketable title",
          "Minimum income ₹30,000 per month",
          "Property age less than 30 years",
          "Good credit score"
        ],
        documents: [
          "Property documents (sale deed, title)",
          "Income documents",
          "Bank statements (6 months)",
          "Property valuation report",
          "Identity and address proof",
          "No Objection Certificate (if applicable)"
        ],
        interestRate: "10.50% - 14.00% per annum",
        processingTime: "10-21 working days",
        loanAmount: "₹15 lakhs - ₹5 crores",
        tenure: "5-20 years"
      }
    },
    {
      icon: TrendingUp,
      title: "Project Finance",
      description: "Comprehensive funding solutions for large-scale projects and ventures.",
      features: ["Structured Financing", "Risk Assessment", "Long-term Support"],
      image: "/images/project-finance.webp",
      detailedInfo: {
        overview: "Fund your ambitious projects with our comprehensive project finance solutions. We provide structured financing for infrastructure, manufacturing, real estate, and other large-scale projects with expert risk assessment and long-term support.",
        benefits: [
          "Customized financing structure",
          "Higher funding limits",
          "Expert project evaluation",
          "Flexible disbursement schedule",
          "Competitive pricing",
          "Long-term partnership approach"
        ],
        eligibility: [
          "Established promoter with track record",
          "Viable project with clear revenue model",
          "Adequate collateral security",
          "Environmental clearances (if required)",
          "Strong project management team"
        ],
        documents: [
          "Detailed project report",
          "Financial projections",
          "Environmental clearances",
          "Land documents",
          "Promoter background details",
          "Technical feasibility study"
        ],
        interestRate: "11.00% - 15.00% per annum",
        processingTime: "30-60 working days",
        loanAmount: "₹1 crore - ₹100 crores",
        tenure: "10-25 years"
      }
    },
    {
      icon: Calculator,
      title: "Financial Advisory",
      description: "Expert financial planning and advisory services for better financial health.",
      features: ["Investment Planning", "Risk Analysis", "Portfolio Management"],
      image: "/images/financial-advisory.jpg", 
      detailedInfo: {
        overview: "Make informed financial decisions with our expert advisory services. Our certified financial planners help you create wealth, manage risks, and achieve your financial goals through comprehensive planning and investment strategies.",
        benefits: [
          "Personalized financial planning",
          "Investment portfolio management",
          "Tax optimization strategies",
          "Retirement planning",
          "Insurance planning",
          "Regular portfolio reviews"
        ],
        eligibility: [
          "Individuals seeking financial planning",
          "Corporate treasury management",
          "HNI wealth management services",
          "Retirement planning needs",
          "Investment advisory requirements"
        ],
        documents: [
          "Income documents",
          "Existing investment details",
          "Bank statements",
          "Insurance policy details",
          "Financial goals documentation",
          "Risk assessment questionnaire"
        ],
        interestRate: "Fee-based service",
        processingTime: "Immediate consultation",
        loanAmount: "Advisory service",
        tenure: "Ongoing support"
      }
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const handleWhatsAppContact = () => {
    if (selectedService) {
      const message = `Hello FinXpert, I would like to know more about ${selectedService.title} and would like to apply for it.`;
      window.open(`https://wa.me/919898617043?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handlePhoneContact = () => {
    window.open('tel:+919898617043', '_self');
  };

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="finxpert-chip mx-auto mb-6">
            <span>Our Services</span>
          </div>
          <h2 className="section-title mb-6">Complete Financial Solutions</h2>
          <p className="section-subtitle mx-auto">
            We provide comprehensive financial services to meet all your capital requirements with expertise and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-finxpert-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className="mt-6">
                  <button
                    onClick={() => openModal(service)}
                    className="inline-flex items-center text-finxpert-600 hover:text-finxpert-700 font-medium text-sm transition-colors duration-300 group/btn"
                  >
                    Learn More
                    <svg 
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-finxpert-600 mb-2">30+</div>
                <div className="text-gray-600">Bank & NBFC Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-finxpert-600 mb-2">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-finxpert-600 mb-2">500+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-finxpert-100 rounded-xl flex items-center justify-center mr-4">
                  <selectedService.icon className="w-6 h-6 text-finxpert-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedService.title}</h2>
                  <p className="text-gray-600">Complete Details & Information</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
                <p className="text-gray-600 leading-relaxed">{selectedService.detailedInfo.overview}</p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-finxpert-50 p-4 rounded-xl">
                  <div className="text-sm text-finxpert-600 font-medium">Interest Rate</div>
                  <div className="text-lg font-semibold text-gray-800">{selectedService.detailedInfo.interestRate}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-sm text-green-600 font-medium">Processing Time</div>
                  <div className="text-lg font-semibold text-gray-800">{selectedService.detailedInfo.processingTime}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-sm text-blue-600 font-medium">Loan Amount</div>
                  <div className="text-lg font-semibold text-gray-800">{selectedService.detailedInfo.loanAmount}</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-sm text-purple-600 font-medium">Tenure</div>
                  <div className="text-lg font-semibold text-gray-800">{selectedService.detailedInfo.tenure}</div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.detailedInfo.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligibility Criteria</h3>
                <div className="space-y-3">
                  {selectedService.detailedInfo.eligibility.map((criteria, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-finxpert-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-finxpert-600">{index + 1}</span>
                      </div>
                      <span className="text-gray-600">{criteria}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Documents Required</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.detailedInfo.documents.map((document, index) => (
                    <div key={index} className="flex items-start">
                      <FileText className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{document}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-2xl">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppContact}
                  className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </button>
                <button
                  onClick={handlePhoneContact}
                  className="flex items-center justify-center px-6 py-3 bg-finxpert-600 hover:bg-finxpert-700 text-white rounded-xl font-medium transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Get expert guidance and quick approval for your {selectedService.title.toLowerCase()}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;