"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "hardscape",
    title: "Hardscape",
    description:
      "Expertly designed and installed hardscaping to transform your outdoor space into a functional and beautiful living area.",
    features: ["Patios", "Walkways", "Custom artificial turf"],
    image:
      "https://images.unsplash.com/photo-1761637823622-eaaaee0660db?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "turf-installation",
    title: "Turf Installation",
    description:
      "Lush, green, and maintenance-free professional artificial turf. Perfect for backyards, dog runs, and surrounding swimming pools.",
    features: ["Pet-Friendly", "Water Conservation", "Always Green"],
    image:
      "https://images.unsplash.com/photo-1707228700996-5862513fe7de?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "custom-pavers",
    title: "Custom Pavers",
    description:
      "Premium paver layouts tailored to your taste—we help you choose patterns, colors, and finishes so your hardscape is built exactly how you envision it.",
    features: ["Made to your specifications", "Durable finishes", "Expert installation"],
    image:
      "https://images.unsplash.com/photo-1775806383830-39512c641bd6?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Everything Your Yard Needs
          </motion.h3>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full lg:w-1/2 flex justify-center"
                >
                  <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-md rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-brand-gray group">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
                  </div>
                </motion.div>

                {/* Description Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="bg-brand-gray p-8 sm:p-10 rounded-2xl shadow-xl space-y-8 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-shadow duration-300">
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-green group-hover:bg-brand-orange transition-colors duration-300"></div>
                    
                    <h4 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {service.title}
                    </h4>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-200 font-medium">
                          <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6">
                      <Link 
                        href="#quote"
                        className="inline-flex items-center justify-center px-6 py-3 bg-brand-green hover:bg-brand-green-hover text-white rounded-md font-semibold transition-colors group/btn"
                      >
                        Get a Free Quote
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}