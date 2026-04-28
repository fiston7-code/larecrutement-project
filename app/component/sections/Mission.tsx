"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const missionPoints = [
  "Trouver les bonnes ressources humaines",
  "Structurer efficacement leurs activités",
  "Améliorer leur performance",
  "Développer leur présence digitale",
];

export default function Mission() {
  return (
    <section className="relative bg-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Background Kinshasa modern structure watermark (Grayscale + Low Opacity) */}
      <Image
        src="/OFFICE.jpeg" // Example of sleek architecture
        alt="L.A Agency Business Environment"
        fill
        className="object-cover object-top opacity-30 grayscale" 
        priority
      />

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Main Title Column */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-mauve font-bold tracking-[0.2em] uppercase text-xs font-heading"
            >
              Notre Mission
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-4xl md:text-5xl font-extrabold text-brand-dark-purple font-heading leading-tight"
            >
              Offrir des solutions <br />
              <span className="italic font-medium text-brand-mauve">complètes et durables.</span>
            </motion.h2>
          </div>

          {/* Staggered Mission Points Column (Structural List) */}
          <div className="space-y-6 pt-6">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-brand-dark-purple/80 font-sans leading-relaxed mb-12"
            >
              Notre engagement est de permettre à nos clients de :
            </motion.p>
            
            <div className="space-y-5">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="bg-brand-off-white/70 p-6 border-l-4 border-brand-silver/20 hover:border-brand-mauve transition-all duration-500 shadow-sm"
                >
                  <p className="text-lg font-bold text-brand-dark-purple font-sans leading-snug">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}