import { useState } from "react";
import AmbientBackground from "@/components/landing/AmbientBackground";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Differentiators from "@/components/landing/Differentiators";
import DemoPreview from "@/components/landing/DemoPreview";
import EarlyAccessForm from "@/components/landing/EarlyAccessForm";
import Footer from "@/components/landing/Footer";
import SpendviaLogo from "@/components/landing/SpendviaLogo";
import DemoModal from "@/components/landing/DemoModal";
import FormModal from "@/components/landing/FormModal";

const Index = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const logo = <SpendviaLogo size="lg" />;

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AmbientBackground />
      
      <main className="relative z-10">
        <Hero
          logo={logo}
          onOpenForm={() => setIsFormOpen(true)}
          onOpenDemo={() => setIsDemoOpen(true)}
        />
        <Problem />
        <HowItWorks />
        <Differentiators />
        <DemoPreview onOpenDemo={() => setIsDemoOpen(true)} />
        <EarlyAccessForm />
        <Footer logo={<SpendviaLogo size="md" />} />
      </main>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Index;
