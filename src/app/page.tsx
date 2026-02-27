import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OwnerRelation from "@/components/OwnerRelation";
import WorkEnvironment from "@/components/WorkEnvironment";
import HowToJoin from "@/components/HowToJoin";
import Membership from "@/components/Membership";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Company from "@/components/Company";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <OwnerRelation />
        <WorkEnvironment />
        <HowToJoin />
        <Membership />
        <News />
        <FAQ />
        <FinalCTA />
        <Contact />
        <Company />
      </main>
      <Footer />
    </>
  );
}
