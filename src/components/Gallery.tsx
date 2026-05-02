"use client";

import { motion } from "framer-motion";

const galleryPhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1761637823622-eaaaee0660db?q=80&w=2000&auto=format&fit=crop",
    title: "Paver Walkway",
    category: "Paver Walkways",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1707228700996-5862513fe7de?q=80&w=2000&auto=format&fit=crop",
    title: "Turf Around Pool",
    category: "Artificial Turf",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1769632971243-b1dea63afeab?q=80&w=2000&auto=format&fit=crop",
    title: "Decorative Pavers",
    category: "Hardscape Detail",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1775806383830-39512c641bd6?q=80&w=2000&auto=format&fit=crop",
    title: "Stone Walkway",
    category: "Paver Walkways",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1654546493292-7df731737090?q=80&w=2000&auto=format&fit=crop",
    title: "Fire Pit Patio",
    category: "Fire Pits",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-black border-t border-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3"
          >
            Our Recent Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Excellence in Landscape Design
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Take a look at some of the stunning outdoor spaces we've created for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px] bg-brand-gray border border-brand-gray"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${photo.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-green font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1 block">
                  {photo.category}
                </span>
                <h4 className="text-white text-lg sm:text-xl font-bold">{photo.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
