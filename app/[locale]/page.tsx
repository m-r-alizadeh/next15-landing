import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import IntroReveal from "../components/IntroReveal";
import Logos from "../components/Logos";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Logos />
      <IntroReveal />
      <Features />
      <Marquee />
      <Faq />
      <CallToAction />
      <Footer />
    </div>
  );
}
