'use client'

/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { toast } from 'sonner';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';

const ContactSection = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hermann.mandaba@example.com';
  };

  return (
    <section id="contact" className="py-20 bg-[#0F1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#D4AF37] mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-[#1A2332] border border-[#D4AF37]/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold font-poppins text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#0F1629] border-[#D4AF37]/30 text-white placeholder-gray-400 focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#0F1629] border-[#D4AF37]/30 text-white placeholder-gray-400 focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-[#0F1629] border-[#D4AF37]/30 text-white placeholder-gray-400 focus:border-[#D4AF37] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#E6C659] text-[#0F1629] font-semibold py-3 rounded-lg transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold font-poppins text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 font-inter leading-relaxed">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you need a complete website or just want to discuss ideas, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#0F1629]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">hermann.mandaba@example.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#0F1629]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Available Worldwide</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleEmailClick}
              className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F1629] font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              Email Me Directly
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
