import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Niches from "@/components/Niches";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Niches />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <Stats />
        <div className="section-divider" />
        <WhyUs />
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
