"use client";

import { motion } from "framer-motion";
import { Hammer, ArrowRight, Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function UnderConstruction() {
  return (
    <main className="min-h-screen bg-brand-dark-purple text-white flex flex-col justify-between p-6 md:p-12 lg:p-24 relative overflow-hidden">
      
      {/* Subtle Background Glow for Tech/Agency Feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-mauve/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-beige/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. TOP BAR: Brand Identity */}
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center z-10">
        <div>
          <h1 className="text-3xl font-black font-heading tracking-tighter">L.A</h1>
          <p className="text-brand-silver/40 text-[9px] tracking-[0.3em] uppercase font-bold mt-0.5">
            Innovation & Excellence
          </p>
        </div>
        <span className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-brand-silver/80">
          <Hammer size={14} className="text-brand-mauve animate-pulse" />
          Bientôt disponible
        </span>
      </div>

      {/* 2. MAIN CONTENT: The Message & The Hook */}
      <div className="max-w-3xl w-full mx-auto my-auto py-20 z-10 text-center lg:text-left">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-mauve font-bold tracking-[0.25em] uppercase text-xs"
        >
          Lancement Officiel en 2026
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl font-extrabold font-heading leading-tight tracking-tight"
        >
          L&apos;excellence humaine <br />
          <span className="italic font-medium text-brand-mauve">se prépare.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-brand-silver/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
        >
          Notre plateforme est actuellement en cours d&apos;optimisation pour vous offrir une expérience d&apos;accompagnement RH et de stratégie digitale hors du commun à Kinshasa.
        </motion.p>

        {/* Dynamic Intake Field: Stay informed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-md mx-auto lg:mx-0"
        >
          <form className="flex flex-col sm:flex-row gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 px-3 flex-grow py-3 sm:py-0">
              <Mail size={18} className="text-brand-silver/40" />
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-transparent outline-none text-white text-sm w-full placeholder:text-brand-silver/30"
                required
              />
            </div>
            <button className="bg-brand-mauve text-brand-dark-purple font-bold px-6 py-3 rounded-xl text-sm hover:bg-white hover:text-brand-dark-purple transition-all flex items-center justify-center gap-2 shrink-0 group">
              Être averti
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="text-[10px] text-brand-silver/30 mt-3 text-left flex items-center gap-1.5 justify-center lg:justify-start font-medium">
            <ShieldCheck size={12} /> Zéro spam. Uniquement l&apos;annonce du lancement professionnel.
          </p>
        </motion.div>
      </div>

      {/* 3. BOTTOM BAR: Professional Contact Info */}
      <div className="max-w-7xl w-full mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-silver/40 z-10 font-medium">
        <div>
          <p>📍 05 Ave du Tchad, Imm. Initiative Center, Gombe — Kinshasa, RDC</p>
        </div>
        <div className="flex gap-6">
          <a href="mailto:contact@larecrutement.com" className="hover:text-white transition-colors">contact@larecrutement.com</a>
          <span>|</span>
          <p>📞 +243 973 895 243</p>
        </div>
      </div>

    </main>
  );
}