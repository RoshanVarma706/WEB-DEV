import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cuisines from "./components/Cuisines";
import SignatureDishes from "./components/SignatureDishes";
import Gallery from "./components/Gallery";
import FixLunch from "./components/FixLunch";
import MenuSection from "./components/MenuSection";
import Booking from "./components/Booking";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import { useScrollReveal } from "./lib/hooks";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Cuisines />
        <SignatureDishes />
        <Gallery />
        <FixLunch />
        <MenuSection />
        <Booking />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
