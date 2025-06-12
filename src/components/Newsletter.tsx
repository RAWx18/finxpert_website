
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about FinXpert services soon."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-white py-16">
      <div className="section-container">
        <div className="max-w-6xl mx-auto text-center">
          <div className="finxpert-chip mx-auto mb-6">
            <span>Newsletter</span>
          </div>
          <h2 className="section-title mb-4 text-center"> Whatsapp Newsletter</h2>
          <p className="section-subtitle mb-10 text-center" style={{ margin: '0 auto', display: 'block' }}>
            Be first to hear about new financial solutions, expert advice, and exclusive offers.
          </p>
          <br/>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (!name) {
                alert("Please enter your name.");
                return;
              }

              const message = `I am ${name} and I want to subscribe for the newsletter.`;
              const whatsappUrl = `https://api.whatsapp.com/send/?phone=919898617043&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

              window.open(whatsappUrl, '_blank');
            }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto text-center"
          >
            <div className="relative w-full">
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Your name" 
                className="w-full px-6 py-4 text-center rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-finxpert-500 text-gray-700" 
                required 
              />
            </div>

            <button 
              type="submit" 
              className="bg-finxpert-500 hover:bg-finxpert-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 whitespace-nowrap text-center"
            >
              Subscribe via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
