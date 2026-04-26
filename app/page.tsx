import Hero from "./component/sections/Hero";
import Section from "./component/sections/Section";
import Services from "./component/sections/Services";
import Mission from "./component/sections/Mission";
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Section />
      <Services/>
      <Mission />

    </main>
  );
}