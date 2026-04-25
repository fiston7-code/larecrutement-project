"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "À Propos", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (


<motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  className={`fixed top-0 w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? "bg-brand-off-white/95 backdrop-blur-md py-3 shadow-sm" 
      : "bg-transparent py-6"
  }`}
>
  {/* The "Slit" Line - Positioned absolutely at the bottom of the header */}
  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-dark-purple/10" />

  <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo - Priority ensures no flickering on load */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center"
        >
          <Image
            src="/LOGO 1.png"
            alt="L.A Logo"
            width={70}
            height={48}
            className="h-auto w-auto"
            priority // Replaces preload={true}
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-dark-purple/70 hover:text-brand-mauve transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-mauve transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="hidden md:block"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 bg-brand-dark-purple text-brand-off-white px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-mauve transition-all shadow-sm active:scale-95"
          >
            Contact
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark-purple" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-off-white border-b border-brand-silver/20 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-brand-dark-purple">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-brand-dark-purple text-brand-off-white p-4 text-center font-bold uppercase tracking-widest">
                Contactez-nous
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

