"use client"

import skills from "@/app/types/Skills";
import Image from "next/image";
import { motion, useAnimation, useInView, easeInOut } from "framer-motion"
import { useRef, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";



const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease:  easeInOut,
    },
  },
}


const AboutSection = () => {

  const { language } = useLanguage();
  const t = translations[language].aboutMe;

const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])


  return (
    <section id="about" className="py-20 bg-[#1A2332]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="flex justify-center lg:justify-start"
            >
            <div className="relative">
              <div className=" relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-2xl">
                <Image 
                src="/Hermann_Mandaba.jpg"
                alt="Hermann Mandaba" 
                fill
                className="w-full h-full object-cover" 
                priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="text-[#0F1629] font-bold text-2xl">HM</span>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="animate-slide-up"
            >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#D4AF37] mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-inter leading-relaxed">
              {t.paragraph1}
            </p>
            <p className="text-lg text-gray-300 mb-8 font-inter leading-relaxed">
              {t.paragraph2}
            </p>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-poppins text-white mb-4">{t.skillsTitle}</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={controls}
                  transition={{ delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="text-white font-inter">{skill.name}</span>
                    <span className="text-[#D4AF37] font-inter">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#0F1629] rounded-full h-2">
                    <div 
                      className="bg-[#D4AF37] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;