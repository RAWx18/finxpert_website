
import React from "react";
import { MapPin, Users, Award, Target, Phone, Mail, Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="finxpert-chip mb-6">
              <span>About FinXpert</span>
            </div>
            <h2 className="section-title mb-6">Your Trusted Financial Partner Since 2015</h2>
            <p className="text-lg text-gray-700 mb-6">
              FinXpert is a Partnership Firm established in 2015, based in Ahmedabad with business spread across Gujarat. 
              Our promoters bring more than 20 years of experience in providing the best financial solutions to clients.
            </p>
            <p className="text-gray-600 mb-8">
              We specialize in all kinds of capital solutions, providing both secured and unsecured (collateral-free) loans 
              from various financial institutions. Our association with 30+ Banks/NBFCs ensures we can provide customized 
              financial solutions to fulfill the precise needs of our customers.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-finxpert-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-finxpert-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Experienced Team</h4>
                  <p className="text-sm text-gray-600">20+ years of industry expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-finxpert-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-finxpert-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Wide Network</h4>
                  <p className="text-sm text-gray-600">30+ Bank & NBFC partners</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-finxpert-50 rounded-3xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Leadership</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img
                        src="/images/gaurav.jpeg" // Replace with actual image path
                        alt="Gaurav Madhuwala"
                        className="h-full object-contain"
                      />
                    </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-gray-900">Gaurav Madhuwala</h4>
                        <p className="text-finxpert-600 font-medium mb-2">Founder and Partner</p>
                        <p className="text-gray-600 text-sm mb-3">Leading FinXpert with vision and expertise in financial solutions</p>
                        <div className="flex items-center space-x-3">
                          <a href="tel:+919016508900" className="flex items-center text-finxpert-600 hover:text-finxpert-700 text-sm">
                            <Phone className="w-4 h-4 mr-1" />
                            +91 9016508900
                          </a>
                          <a href="mailto:g.madhuwala@gmail.com" className="flex items-center text-finxpert-600 hover:text-finxpert-700 text-sm">
                            <Mail className="w-4 h-4 mr-1" />
                            Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img
                        src="/images/vivek.png" // Replace with actual image path
                        alt="Vivek Swami"
                        className="h-full object-contain"
                      />
                    </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-gray-900">Vivek Swami</h4>
                        <p className="text-finxpert-600 font-medium mb-2">Partner</p>
                        <p className="text-gray-600 text-sm mb-3">Driving business growth and client relationships</p>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-500 text-sm">Partner since 2015</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-finxpert-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Location</h4>
                    <p className="text-gray-600 text-sm">
                      104-106, Akash Complex, Near Municipal Market<br />
                      Behind Citi Bank, C.G.Road, Navrangpura<br />
                      Ahmedabad, Gujarat - 380009
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
