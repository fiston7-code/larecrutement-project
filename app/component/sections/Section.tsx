"use client";

import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Soft background glow */}
            <div className="absolute -top-12 -left-12 w-72 h-72 bg-brand-beige/30 -z-10 rounded-full blur-3xl" />
            
            <div className="relative z-10 border border-brand-silver/20 p-3 bg-white shadow-sm">
              <div className="aspect-[4/5] bg-brand-off-white flex items-center justify-center group overflow-hidden">
                <div className="text-brand-dark-purple/10 transition-transform duration-1000 group-hover:scale-105">
                  <User size={160} strokeWidth={0.5} />
                </div>
              </div>
              
              {/* Founder Badge */}
              <div className="absolute -bottom-8 -right-8 bg-brand-dark-purple text-brand-beige p-8 shadow-2xl min-w-[240px]">
                <p className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-80">Fondatrice</p>
                <p className="text-2xl font-bold font-heading tracking-tight">Lisa Kezer</p>
                <div className="mt-4 h-1 w-8 bg-brand-mauve" />
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <span className="text-brand-mauve font-bold tracking-[0.25em] uppercase text-[11px] font-heading">
                L&apos;Essence de l&apos;Agence
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-purple leading-[1.1] font-heading">
                L’expertise humaine <br /> 
                <span className="italic font-medium text-brand-mauve">au cœur du digital.</span>
              </h2>
            </div>

            <div className="space-y-6 text-brand-dark-purple/80 text-lg leading-relaxed font-sans">
              <p>
                L.A est une agence spécialisée dans le placement de ressources humaines, 
                la stratégie digitale et le conseil en gestion de projets.
              </p>
              <p>
                Nous accompagnons entreprises et particuliers dans la recherche de solutions 
                adaptées, avec une approche structurée et orientée résultats.
              </p>
              
              <div className="relative py-4">
                <p className="text-base text-brand-dark-purple font-medium italic border-l-4 border-brand-mauve pl-6 leading-relaxed">
                  &quot;Derrière L.A, il y a une vision portée par Lisa Kezer, fondatrice, dont l’engagement 
                  et l’expertise façonnent chaque approche de l’agence. Animée par une volonté réelle 
                  de créer des moyens utiles et efficaces, elle met son savoir-faire au service d’une 
                  clientèle diversifiée. Son approche repose sur un équilibre essentiel : performance, 
                  innovation et exigence.&quot;
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="group flex items-center gap-3 text-brand-dark-purple font-bold uppercase text-xs tracking-widest hover:text-brand-mauve transition-all">
                Notre Vision
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

