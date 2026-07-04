import About from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { MenuHighlights } from "@/components/sections/MenuHighlights";
import Reservation from "@/components/sections/Reservation";
import { JsonLd } from "@/components/seo/JsonLd";

const Home = () => {
  return (
    <main>
      <JsonLd />
      <Hero />
      <MenuHighlights />
      <Reservation />
      <About />
    </main>
  );
};

export default Home;
