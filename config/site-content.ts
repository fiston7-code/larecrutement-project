// // src/config/site-content.ts

// export const siteConfig = {
//   agency: {
//     name: "L.A",
//     fullName: "L.A - Agence RH & Stratégie",
//     tagline: "L’Excellence Humaine au service de votre Stratégie",
//     description: "Placement de ressources humaines, stratégie digitale et conseil en gestion de projets.",
//   },
  
//   // All colors and branding links
//   appearance: {
//     heroBg: "bg-brand-off-white",
//     primaryButton: "bg-brand-dark-purple",
//     accentText: "text-brand-mauve",
//   },

//   // Navigation Links
//   nav: [
//     { label: "Accueil", href: "/" },
//     { label: "Services", href: "#services" },
//     { label: "Contact", href: "#contact" },
//   ],

//   // Services Section
//   services: [
//     {
//       title: "Placement RH",
//       description: "Recrutement de talents qualifiés adaptés à votre culture d'entreprise.",
//       icon: "Users",
//     },
//     {
//       title: "Stratégie Digitale",
//       description: "Optimisation de votre présence en ligne et croissance numérique.",
//       icon: "BarChart",
//     },
//     {
//       title: "Gestion de Projets",
//       description: "Accompagnement structuré pour garantir le succès de vos initiatives.",
//       icon: "Settings",
//     },
//   ],

//   // Contact Info
//   contact: {
//     email: "contact@la-agence.com",
//     address: "Kinshasa, DRC",
//     successMessage: "Merci ! Votre message a été envoyé avec succès.",
//     formFields: {
//       name: "Nom complet",
//       email: "Email professionnel",
//       company: "Entreprise",
//       message: "Votre message",
//       submit: "Envoyer le message",
//     }
//   },

//   // Socials
//   socials: {
//     linkedin: "https://linkedin.com/company/la-agence",
//     tiktok: "https://tiktok.com/@la_dev",
//   }
// };

// export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  agency: {
    name: "L.A",
    hero: {
      category: "Stratégie & Conseil",
      titleMain: "L’Excellence Humaine",
      titleAccent: "au service de votre Stratégie.",
      description: "Placement RH, Conseil en gestion de projets et Stratégie Digitale. Nous transformons vos défis en résultats concrets.",
      cta: "Discuter de votre projet"
    }
  },
  appearance: {
    heroBg: "bg-brand-off-white",
    primaryButton: "bg-brand-dark-purple hover:bg-brand-mauve shadow-lg",
    accentText: "text-brand-mauve",
  }
  // ... rest of your config
};