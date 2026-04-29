import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./component/sections/layout/ui/NavBar";
import Footer from "./component/sections/layout/ui/Footer";

// Heading font: Bold, professional, and modern
const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Body font: Highly readable and clean
const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L.A | Agence RH & Stratégie Digitale",
  description: "L'excellence humaine au service de votre stratégie. Placement RH, Stratégie Digitale et Conseil à Kinshasa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
    <NavBar />
    <html
      lang="fr" // Changed to French since your content is in French
      className={`${poppins.variable} ${openSans.variable} scroll-smooth`}
    >
     

      <body className="bg-brand-off-white font-sans antialiased text-brand-dark-purple">
        <main>
            {children}
        </main>
      
      
      <footer>
        <Footer />
      </footer>
      </body>
    </html>
    </>
  );
}