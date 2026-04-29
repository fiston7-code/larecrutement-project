"use client";

import Image from "next/image";


import {  Phone, Mail, Globe, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark-purple text-white pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-px bg-white/10 mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            {/* <h2 className="text-3xl font-black font-heading">L.A</h2> */}
            <Image src="/LOGO 2.png" alt="L.A Logo" width={120} height={48} className="object-contain" />
            <p className="text-brand-silver/50 text-sm leading-relaxed">
              Immeuble Initiative Center<br />
              05 Avenue du Tchad, Gombe<br />
              Kinshasa, RDC
            </p>
            <div className="flex gap-4">
              {/* <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-mauve transition-all"><Clock size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-mauve transition-all"><MapPin size={18} /></a> */}
              <a href="https://www.larecrutement.com" className="p-2 bg-white/5 rounded-full hover:bg-brand-mauve transition-all"><Globe size={18} /></a>
            </div>
          </div>

          {/* Column 2: Hours (New) */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-mauve flex items-center gap-2">
              <Clock size={14} /> Horaires de Bureau
            </h4>
            <ul className="space-y-2 text-sm text-brand-silver/80 font-medium">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span className="text-white">9:00 - 17:00</span>
              </li>
              <li className="flex justify-between opacity-50">
                <span>Samedi - Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-mauve">Navigation</h4>
            <ul className="space-y-2 text-sm text-brand-silver/80">
              <li><a href="#services" className="hover:text-white transition-colors">Nos Domaines</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Pourquoi L.A ?</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contactez-Nous</a></li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-mauve">Contact Direct</h4>
            <p className="text-sm font-bold text-white tracking-tight">+243 973 895 243</p>
            <p className="text-sm text-brand-silver/80 break-all">contact@larecrutement.com</p>
            <div className="pt-2">
               <span className="inline-block px-3 py-1 bg-brand-mauve/20 text-brand-mauve text-[10px] font-bold rounded-full">
                 @LA_RECRUTEMENT
               </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-brand-silver/30 font-bold text-center md:text-left">
          <p>© 2026 L.A Agency. Tous droits réservés.</p>
          <div className="flex justify-center md:justify-end gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <p className="text-brand-mauve/40">Design by Kalkan Tech</p>
          </div>
        </div>
      </div>
    </footer>
  );
}