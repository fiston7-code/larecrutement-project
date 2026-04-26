"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, Globe, Check } from "lucide-react";

const interventionFields = [
  {
    title: "Placement & Recrutement",
    icon: <Users size={28} strokeWidth={1.5} />,
    points: ["Personnel de service qualifié", "Personnel administratif", "Recrutement sur mesure", "Placement temporaire/permanent"]
  },
  {
    title: "Formation & Mise à niveau",
    icon: <GraduationCap size={28} strokeWidth={1.5} />,
    points: ["Formation professionnelle", "Remise à niveau", "Encadrement technique"]
  },
  {
    title: "Conseil & Gestion de projets",
    icon: <Briefcase size={28} strokeWidth={1.5} />,
    points: ["Gestion de projets", "Structuration interne", "Optimisation des processus", "Décision stratégique"]
  },
  {
    title: "Stratégie digitale sur mesure",
    icon: <Globe size={28} strokeWidth={1.5} />,
    points: ["Stratégie de communication", "Gestion des réseaux sociaux", "Accompagnement marketing", "Structuration digitale"]
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-off-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-mauve font-bold tracking-[0.25em] uppercase text-[11px] font-heading"
          >
            02. Expertises
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl md:text-5xl font-extrabold text-brand-dark-purple font-heading"
          >
            Nos Domaines <br /> 
            <span className="italic font-medium text-brand-mauve">d’Intervention.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {interventionFields.map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 border border-brand-silver/10 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-brand-mauve bg-brand-beige/20 p-3 rounded-sm group-hover:bg-brand-mauve group-hover:text-white transition-colors duration-500">
                  {field.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark-purple font-heading">
                  {field.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {field.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-3 text-brand-dark-purple/70 font-sans text-sm md:text-base">
                    <Check size={16} className="text-brand-mauve mt-1 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}