import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, MapPin, Star } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="glass-card p-4 rounded-2xl">
          <DollarSign className="w-8 h-8 text-accent" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <div className="glass-card p-4 rounded-2xl">
          <Star className="w-8 h-8 text-yellow-400" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce-slow">
        <div className="glass-card p-4 rounded-2xl">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold mb-4 animate-scale-in">
            💸 Support Local & Get Paid
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
            Get Paid to Support
            <span className="block bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
              Local Businesses
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Write honest reviews for local shops and get rewarded — help your community grow while earning cash.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('signup')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full hover-lift hover-glow group"
            >
              Start Earning Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('business')}
              className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 px-8 py-6 text-lg rounded-full hover-lift"
            >
              I'm a Business Owner
            </Button>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm md:text-base">$8 per review</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm md:text-base">Instant payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm md:text-base">Flexible schedule</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
