'use client'
import { Check } from "lucide-react";
import pricingPlans from "../types/Pricing";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";


const PricingSection = () => {
    const { language } = useLanguage();
  const t = translations[language].pricing;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-[#0F1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#D4AF37] mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-[#1A2332] border transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                plan.popular 
                  ? 'border-[#D4AF37] border-2 shadow-lg shadow-[#D4AF37]/20 pb-10' 
                  : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#D4AF37] text-[#0F1629] px-4 py-1 rounded-full text-sm font-semibold font-inter">
                    {t.mostPopular} 
                  </span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-poppins text-[#D4AF37] mb-2">
                    {plan.name[language]}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold font-poppins text-white">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-300 font-inter">
                    {plan.description[language]}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features[language].map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check size={20} className="text-[#D4AF37] mr-3 flex-shrink-0" />
                      <span className="text-gray-300 font-inter">{feature}</span>
                    </div>
                  ))}
                </div>
                  <Link href="#contact">
                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-3 font-semibold transition-all duration-200 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#D4AF37] hover:bg-[#E6C659] text-[#0F1629]'
                      : 'bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F1629]'
                  }`}
                >
                  {t.button}
                </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 font-inter mb-4">
            {t.footerText}
          </p>
          <Link href="#contact">
          <Button 
            onClick={scrollToContact}
            className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F1629] font-semibold px-8 py-3 transition-all duration-200 cursor-pointer"
          >
            {t.customQuote}
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
