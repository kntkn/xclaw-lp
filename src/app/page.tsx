import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClawKoshien from "@/components/ClawKoshien";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Activities from "@/components/Activities";
import Community from "@/components/Community";
import Membership from "@/components/Membership";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClawKoshien />
        <About />
        <HowItWorks />
        <Activities />
        <Community />
        <Membership />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
