// import Image from "next/image";

// * Components
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "react-day-picker";

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
