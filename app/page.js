
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import About2 from "@/components/About2";


export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] ">
      <Navbar />
      <Hero />
      {/* <About />  */}
      <About2/>
      <Services />    
      <Contact/>
      <Footer/>
    </div>
  );
}
