"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { Timer, LayoutGrid, TrendingUp, UserCheck, ShieldCheck, Headphones } from "lucide-react";

const reasons = [
  { title: "Gain de temps", desc: "Concentrez-vous sur votre cœur de métier pendant que nous gérons le reste.", icon: <Timer size={24} /> },
  { title: "Profils qualifiés", desc: "Chaque candidat est rigoureusement vérifié avant présentation.", icon: <UserCheck size={24} /> },
  { title: "Approche structurée", desc: "Une méthodologie professionnelle héritée des standards internationaux.", icon: <LayoutGrid size={24} /> },
  { title: "Suivi après intervention", desc: "Nous ne vous abandonnons pas après la mission. Le suivi est inclus.", icon: <ShieldCheck size={24} /> },
  { title: "Solutions adaptées", desc: "Pas de copier-coller. Chaque client reçoit une stratégie unique.", icon: <Headphones size={24} /> },
  { title: "Croissance accélérée", desc: "Nos interventions visent une performance mesurable et rapide.", icon: <TrendingUp size={24} /> },
];

const partners = [
  { name: "Entreprises", logo: "/logos/enterprise.svg" },
  { name: "PME", logo: "/logos/pme.svg" },
  { name: "Particuliers", logo: "/logos/individual.svg" },
  { name: "Organisations", logo: "/logos/organisation.svg" },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Why Us Header */}
        <div className="text-center mb-20">
          <motion.span className="text-brand-mauve font-bold tracking-widest uppercase text-xs">
            Engagement & Valeurs
          </motion.span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-brand-dark-purple font-heading">
            Pourquoi choisir <span className="text-brand-mauve">L.A ?</span>
          </h2>
        </div>

        {/* Why Us Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {reasons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-brand-silver/10 bg-brand-off-white/30 rounded-2xl hover:shadow-lg transition-all group"
            >
              <div className="text-brand-mauve mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark-purple mb-2 font-heading">{item.title}</h3>
              <p className="text-brand-dark-purple/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners / Clients Section */}
        <div className="pt-20 border-t border-brand-silver/20">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-brand-dark-purple/40 uppercase tracking-[0.3em]">
              Ils nous font confiance
            </p>
          </div>
          
          {/* Logo Cloud (Grayscale for Premium look) */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Replace with real logos later */}
             <div className="text-2xl font-black text-brand-dark-purple">
                <Image src="/LOGO 1.png" alt="Entreprise Logo" width={120} height={60} className="object-contain" />
             </div>
             <div className="text-2xl font-black text-brand-dark-purple">
                <Image src="/logos/pme.svg" alt="PME Logo" width={120} height={60} className="object-contain" />
             </div>
             <div className="text-2xl font-black text-brand-dark-purple">
                <Image src="/logos/individual.svg" alt="Particulier Logo" width={120} height={60} className="object-contain" />
             </div>
             <div className="text-2xl font-black text-brand-dark-purple">
                <Image src="/logos/organisation.svg" alt="Organisation Logo" width={120} height={60} className="object-contain" />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}