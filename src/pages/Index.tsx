import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { B2BSection } from "@/components/B2BSection";
import { SignUpSection } from "@/components/SignUpSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Benefits />
      <B2BSection />
      <SignUpSection />
      <Footer />
    </main>
  );
};

export default Index;
