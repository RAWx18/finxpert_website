
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ReviewCardProps {
  content: string;
  author: string;
  company: string;
  rating: number;
  index: number;
}

const ReviewCard = ({ content, author, company, rating, index }: ReviewCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-finxpert-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm sm:text-base mb-4">"{content}"</p>
      <div>
        <h4 className="font-semibold text-gray-900">{author}</h4>
        <p className="text-finxpert-600 text-sm">{company}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const reviews = [
    {
      content: "FinXpert helped us secure a business loan with amazing terms. Their expertise and guidance throughout the process was exceptional.",
      author: "Rajesh Patel",
      company: "Patel Industries",
      rating: 5
    },
    {
      content: "Quick and hassle-free home loan approval. The team at FinXpert made our dream home a reality with their professional service.",
      author: "Priya Sharma",
      company: "Software Engineer",
      rating: 5
    },
    {
      content: "Working capital finance was arranged swiftly. Their network of banks helped us get the best rates in the market.",
      author: "Amit Shah",
      company: "Shah Textiles",
      rating: 5
    },
    {
      content: "Professional financial advisory services. They understood our needs and provided customized solutions that perfectly fit our requirements.",
      author: "Neha Gupta",
      company: "Gupta Enterprises",
      rating: 4
    },
    {
      content: "Excellent service for loan against property. The documentation process was smooth and transparent throughout.",
      author: "Vikram Singh",
      company: "Real Estate Developer",
      rating: 5
    },
    {
      content: "Highly recommend FinXpert for all financial needs. Their 20+ years of experience really shows in their service quality.",
      author: "Meera Joshi",
      company: "Restaurant Owner",
      rating: 5
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="reviews" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="finxpert-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Customer Reviews</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            What Our Clients Say <br className="hidden sm:block" />About FinXpert
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Trusted by hundreds of clients across Gujarat for their financial needs and capital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              content={review.content}
              author={review.author}
              company={review.company}
              rating={review.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
