
import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-finxpert-900 text-white py-12" id="contact">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-20 h-8 flex items-center justify-center">
                <img
                  src="/images/footer_logo.png" 
                  alt="FinXpert Logo"
                  className="h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-white text-lg">FinXpert</span>
                <p className="text-xs text-finxpert-200">A Complete Capital Solution</p>
              </div>
            </div>
            <p className="text-finxpert-200 text-sm mb-4">
              Your trusted financial partner with 20+ years of experience in providing comprehensive capital solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-finxpert-400" />
                <span className="text-sm text-finxpert-200">+91 9016508900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-finxpert-400" />
                <span className="text-sm text-finxpert-200">g.madhuwala@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-finxpert-200">
              <li>Business Loans</li>
              <li>Home Loans</li>
              <li>Working Capital Finance</li>
              <li>Loan Against Property</li>
              <li>Project Finance</li>
              <li>Financial Advisory</li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact & Location</h3>
            <div className="space-y-3 text-sm text-finxpert-200">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-finxpert-400 mt-1 flex-shrink-0" />
                <div>
                  104-106, Akash Complex, Near Municipal Market<br />
                  Behind Citi Bank, C.G.Road, Navrangpura<br />
                  Ahmedabad, Gujarat - 380009
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-finxpert-400" />
                <a 
                  href="https://whatsapp.com/channel/0029VaiCa3tCsU9OC15Z5t1y" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-finxpert-200 hover:text-white transition-colors"
                >
                  Join WhatsApp Channel
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-finxpert-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-finxpert-300">
              © 2025 FinXpert. All rights reserved.
            </div>
            <div className="text-sm text-finxpert-300">
              Made by{" "}
              <span className="text-finxpert-400 font-medium">RAWx18</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
