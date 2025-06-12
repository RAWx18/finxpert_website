
import React from "react";
import { 
  Building2, 
  Home, 
  Briefcase, 
  TrendingUp, 
  Calculator, 
  FileText,
  Users,
  CreditCard
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Loans",
      description: "Tailored financing solutions for business growth and expansion needs.",
      features: ["Quick Processing", "Competitive Rates", "Flexible Terms"]
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Make your dream home a reality with our comprehensive home loan solutions.",
      features: ["Low Interest Rates", "Easy Documentation", "Quick Approval"]
    },
    {
      icon: Briefcase,
      title: "Working Capital Finance",
      description: "Maintain smooth business operations with our working capital solutions.",
      features: ["Cash Flow Management", "Quick Disbursement", "Flexible Repayment"]
    },
    {
      icon: CreditCard,
      title: "Loan Against Property",
      description: "Unlock the value of your property for immediate financial needs.",
      features: ["Higher Loan Amount", "Lower Interest Rates", "Longer Tenure"]
    },
    {
      icon: TrendingUp,
      title: "Project Finance",
      description: "Comprehensive funding solutions for large-scale projects and ventures.",
      features: ["Structured Financing", "Risk Assessment", "Long-term Support"]
    },
    {
      icon: Calculator,
      title: "Financial Advisory",
      description: "Expert financial planning and advisory services for better financial health.",
      features: ["Investment Planning", "Risk Analysis", "Portfolio Management"]
    }
  ];

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
              className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-finxpert-100 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-finxpert-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-finxpert-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
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
                <div className="text-3xl font-bold text-finxpert-600 mb-2">2+</div>
                <div className="text-gray-600">Decades Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-finxpert-600 mb-2">100+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
