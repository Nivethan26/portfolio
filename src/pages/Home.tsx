import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { CTA } from "@/components/home/CTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectShowcase />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
