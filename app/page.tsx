import Hero from "./component/sections/Hero";
import Section from "./component/sections/Section";
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Section />
    </main>
  );
}