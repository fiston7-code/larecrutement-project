"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-dark-purple text-white rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading leading-tight">
              Prêt à transformer <br /> 
              <span className="text-brand-mauve">votre vision ?</span>
            </h2>
            <p className="text-brand-silver/70 text-lg max-w-md">
              Que ce soit pour un recrutement stratégique ou une transformation digitale, parlons de votre prochain succès.
            </p>

            <div className="space-y-6 pt-8">
              {[
                { icon: <Mail />, label: "Email", val: "contact@la-agency.cd" },
                { icon: <Phone />, label: "Téléphone", val: "+243 820 000 000" },
                { icon: <MapPin />, label: "Adresse", val: "Gombe, Kinshasa, RDC" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-brand-mauve transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-silver/50 font-bold">{item.label}</p>
                    <p className="font-medium">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Modern Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl text-brand-dark-purple shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Nom complet" className="w-full p-4 bg-brand-off-white rounded-xl outline-none focus:ring-2 focus:ring-brand-mauve transition-all" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-brand-off-white rounded-xl outline-none focus:ring-2 focus:ring-brand-mauve transition-all" />
              </div>
              <select className="w-full p-4 bg-brand-off-white rounded-xl outline-none focus:ring-2 focus:ring-brand-mauve transition-all">
                <option>Service souhaité</option>
                <option>Recrutement</option>
                <option>Formation</option>
                <option>Stratégie Digitale</option>
              </select>
              <textarea rows={4} placeholder="Parlez-nous de votre projet..." className="w-full p-4 bg-brand-off-white rounded-xl outline-none focus:ring-2 focus:ring-brand-mauve transition-all" />
              
              <button className="w-full bg-brand-dark-purple text-white py-4 rounded-xl font-bold hover:bg-brand-mauve transition-all flex items-center justify-center gap-3 group">
                Envoyer le message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}