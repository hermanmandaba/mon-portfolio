'use client'
import { useLanguage } from "../context/LanguageContext";
import services from "../types/Services";
import { translations } from "../utils/translations";
import { Card, CardContent } from "./ui/card";




const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].services;
    return (
        <section id="services" className="py-20 bg-[#1A2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#D4AF37] mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-[#0F1629] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-poppins text-[#D4AF37] mb-4 group-hover:text-[#E6C659] transition-colors duration-200">
                  {service.title[language]}
                </h3>
                <p className="text-gray-300 mb-6 font-inter leading-relaxed">
                  {service.description[language]}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                      <span className="text-gray-300 font-inter">{feature[language]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;