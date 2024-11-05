import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="container mx-auto font-[family-name:var(--font-geist-sans)] ">
      <Navbar />
      <Hero />
      <About /> 
      <Services />    
      <Contact/>
    </div>
  );
}
