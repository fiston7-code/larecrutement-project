"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // Animation variants for cleaner code
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="bg-brand-off-white mt-4 py-32 px-6 md:px-12 lg:px-24 min-h-[80vh] flex items-center">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* 1. Animated Badge */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-brand-mauve font-bold mt-4 tracking-[0.3em] uppercase text-xs font-heading"
        >
          Agence de Placement • Stratégie • Digital
        </motion.span>
        
        {/* 2. Main Title with staggered line reveal */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-5xl md:text-7xl lg:text-8xl font-extrabold text-brand-dark-purple leading-[1.05] tracking-tighter font-heading"
        >
          L’Excellence Humaine <br /> 
          <span className="text-brand-mauve italic font-medium">au service de votre Stratégie.</span>
        </motion.h1>
        
        {/* 3. Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 text-lg md:text-xl text-brand-dark-purple/70 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Placement RH, Conseil en gestion de projets et Stratégie Digitale. 
          Nous transformons vos défis en résultats concrets.
        </motion.p>
        
        {/* 4. CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-12"
        >
          <button className="bg-brand-dark-purple text-brand-off-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-brand-mauve transition-all duration-300 shadow-xl hover:shadow-brand-mauve/20">
            Discuter de votre projet
          </button>
        </motion.div>

      </div>
    </section>
  );
}

