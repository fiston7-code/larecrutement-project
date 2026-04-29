import Hero from "./component/sections/Hero";
import Section from "./component/sections/Section";
import Services from "./component/sections/Services";
import Mission from "./component/sections/Mission";
import TrustSection from "./component/sections/TrustSection";
import Feedback from "./component/sections/Feedback";
import ContactSection from "./component/sections/ContactSection";
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Section />
      <Services/>
      <Mission />
      <TrustSection />
      <Feedback />
      <ContactSection />


    </main>
  );
}