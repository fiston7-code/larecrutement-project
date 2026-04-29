"use client";

import { motion } from "framer-motion";
import { Plus, Minus, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Grâce à L.A, nous avons restructuré notre département administratif en moins de deux mois. Un gain de productivité immense.",
    author: "Directeur Général",
    company: "PME Kinshasa",
  },
  {
    quote: "Leur stratégie digitale a donné une visibilité internationale à nos services. Une équipe réactive et très professionnelle.",
    author: "Responsable Marketing",
    company: "Agence de Voyage",
  }
];

const faqs = [
  {
    q: "Comment se déroule le processus de recrutement ?",
    a: "Nous commençons par un diagnostic de vos besoins, suivi d'un sourcing rigoureux et d'entretiens techniques avant de vous présenter les 3 meilleurs profils."
  },
  {
    q: "Proposez-vous des formations sur mesure ?",
    a: "Absolument. Nos programmes sont adaptés selon le niveau de vos équipes et les objectifs spécifiques de votre entreprise."
  }
];

export default function Feedback() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-brand-off-white/50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Testimonials */}
        <div>
          <span className="text-brand-mauve font-bold tracking-widest uppercase text-xs">Témoignages</span>
          <h2 className="mt-4 text-4xl font-extrabold text-brand-dark-purple font-heading mb-12">
            Ils parlent <br /> <span className="italic font-medium text-brand-mauve">de leur expérience.</span>
          </h2>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-silver/10 relative"
              >
                <Quote className="absolute top-4 right-4 text-brand-mauve/10" size={40} />
                <p className="text-brand-dark-purple/80 italic leading-relaxed mb-6">&quot;{t.quote}&quot;</p>
                <div>
                  <p className="font-bold text-brand-dark-purple">{t.author}</p>
                  <p className="text-sm text-brand-mauve">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: FAQ */}
        <div className="pt-10 lg:pt-0">
          <span className="text-brand-mauve font-bold tracking-widest uppercase text-xs">Questions fréquentes</span>
          <h2 className="mt-4 text-3xl font-bold text-brand-dark-purple font-heading mb-12">
            Des réponses à vos <span className="text-brand-mauve">interrogations.</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-brand-silver/20 pb-4">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-4 text-left group"
                >
                  <span className="font-bold text-brand-dark-purple group-hover:text-brand-mauve transition-colors">
                    {faq.q}
                  </span>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="text-brand-dark-purple/70 text-sm leading-relaxed pb-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}