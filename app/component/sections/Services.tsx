"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";

// ... interventionFields stays the same
const interventionFields = [
  {
    title: "Placement & Recrutement",
    description: "Identifiez les talents qui feront la différence. Nous sourçons et sélectionnons les profils les plus adaptés à votre culture d'entreprise.",
    image: "https://media.istockphoto.com/id/2198394905/photo/business-partners-shaking-hands-during-a-meeting-in-the-office.webp?s=2048x2048&w=is&k=20&c=xorTq8M16qUR1CZWhcUvnEn5W6gE71pWkCn4QP_Q2bE=",
    points: ["Personnel de service qualifié", "Personnel administratif", "Recrutement sur mesure", "Placement temporaire/permanent"],
    color: "bg-white"
  },
  {
    title: "Formation & Mise à niveau",
    description: "Le savoir est votre plus grand levier. Nous transformons le potentiel de vos équipes en performance mesurable.",
    image: "https://media.istockphoto.com/id/2148736113/photo/boardroom-discussion-and-executive-talking-to-staff-in-hospital-for-healthcare-of-patients.webp?s=2048x2048&w=is&k=20&c=FC_Tq4iDYwkAinbG1mGF6dpaoZ878A2QoNpPNyLUCPM=",
    points: ["Formation professionnelle", "Remise à niveau", "Encadrement technique"],
    color: "bg-brand-off-white" 
  },
  {
    title: "Conseil & Gestion de projets",
    description: "Structurez votre succès. Nous optimisons vos processus internes pour une exécution fluide et stratégique.",
    image: "https://plus.unsplash.com/premium_photo-1661963066357-4772e0a00c23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: ["Gestion de projets", "Structuration interne", "Optimisation des processus"],
    color: "bg-white"
  },
  {
    title: "Stratégie digitale sur mesure",
    description: "Dominez l'écosystème numérique. De la communication à l'accompagnement marketing, nous bâtissons votre image.",
    image: "/OFFICE.jpeg",
    points: ["Stratégie de communication", "Gestion des réseaux sociaux", "Accompagnement marketing"],
    color: "bg-brand-dark-purple text-white" // One dark banner for impact
  }
];

export default function Services() {
  return (
    <section id="services" className="overflow-hidden">
      {/* Section Header */}
      <div className="py-20 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-mauve font-bold tracking-[0.25em] uppercase text-[11px] font-heading"
          >
            02. Nos Domaines
          </motion.span>
          <h2 className="mt-4 text-5xl font-extrabold text-brand-dark-purple font-heading leading-tight">
            Expertises & <br /> 
            <span className="italic font-medium text-brand-mauve text-4xl md:text-5xl">Interventions.</span>
          </h2>
        </div>
      </div>


      {/* The Banners */}
{interventionFields.map((field, index) => {
  // 1. Detect if this is the dark banner to swap text colors
  const isDarkBg = field.color.includes("bg-brand-dark-purple");
  const textColor = isDarkBg ? "text-white" : "text-brand-dark-purple";
  const subTextColor = isDarkBg ? "text-brand-silver/80" : "text-brand-dark-purple/80";

  return (
    <div 
      key={index} 
      className={`py-24 px-6 md:px-12 lg:px-24 ${field.color} border-t border-brand-silver/10`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* IMAGE SIDE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`relative h-62.5 md:h-87.5 rounded-2xl overflow-hidden shadow-xl order-first ${
            index % 2 === 0 ? "lg:order-first" : "lg:order-last"
          }`}
        >
          <Image 
            src={field.image}
            alt={field.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
          {/* Subtle overlay to lift the image on white/off-white */}
          {!isDarkBg && <div className="absolute inset-0 bg-brand-dark-purple/5" />}
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className={`text-3xl md:text-4xl font-bold font-heading ${textColor}`}>
            {field.title}
          </h3>
          <p className={`text-lg leading-relaxed max-w-xl ${subTextColor}`}>
            {field.description}
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {field.points.map((point, pIndex) => (
              <li key={pIndex} className={`flex items-center gap-3 font-medium ${textColor}`}>
                {/* Checkmark color stays mauve for brand consistency */}
                <BadgeCheck size={18} className="text-brand-mauve shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <button className={`flex items-center gap-3 font-bold uppercase tracking-widest text-sm group ${textColor}`}>
              En savoir plus 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
})}
     
           
    </section>
  );
}

