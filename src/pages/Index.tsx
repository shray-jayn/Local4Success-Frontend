import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Stats } from "@/components/Stats";
import { EarningsCalculator } from "@/components/EarningsCalculator";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedBusinesses } from "@/components/FeaturedBusinesses";
import { B2BSection } from "@/components/B2BSection";
import { FAQ } from "@/components/FAQ";
import { SignUpSection } from "@/components/SignUpSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <HowItWorks />
      <Benefits />
      <EarningsCalculator />
      <Testimonials />
      <FeaturedBusinesses />
      <B2BSection />
      <FAQ />
      <SignUpSection />
      <Footer />
    </main>
  );
};

export default Index;
