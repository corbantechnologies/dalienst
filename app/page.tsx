import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CompanySpotlight from "@/components/sections/CompanySpotlight";
import PlatformShowcase from "@/components/sections/PlatformShowcase";
import EnterpriseCaseStudies from "@/components/sections/EnterpriseCaseStudies";
import ArchitecturePhilosophy from "@/components/sections/ArchitecturePhilosophy";
import TechStackGrid from "@/components/sections/TechStackGrid";
import ContactConsole from "@/components/sections/ContactConsole";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CompanySpotlight />
        <PlatformShowcase />
        <EnterpriseCaseStudies />
        <ArchitecturePhilosophy />
        <TechStackGrid />
        <ContactConsole />
      </main>
      <Footer />
    </div>
  );
}
