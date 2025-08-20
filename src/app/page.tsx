// import Image from "next/image";

// * Components
import { Benefits } from "./_components/Benefits";
import { CTA } from "./_components/CTA";
import { Features } from "./_components/Features";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Testimonials } from "./_components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
