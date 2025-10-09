import { Button } from "@/components/ui/button";
import { Building2, Handshake, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const B2BSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="business" ref={sectionRef} className="py-24 px-6 gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">B2B Network</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Local Businesses Helping Each Other Grow
          </h2>
        </div>

        <div className={`glass-card p-8 lg:p-12 rounded-3xl hover-lift ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Exchange Verified Reviews</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Businesses can exchange verified reviews or collaborations with other local brands.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                <p className="text-lg font-semibold mb-2">Example Partnership:</p>
                <p className="text-muted-foreground">
                  "A local café reviews a bakery, and the bakery reviews the café — both gain traction and build authentic local partnerships."
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm font-medium">Verified partnerships</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm font-medium">Mutual growth</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm font-medium">Local trust</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Button 
                size="lg" 
                onClick={scrollToSignup}
                className="gradient-primary text-white px-8 py-6 text-lg rounded-full hover-lift hover-glow group"
              >
                Join Our B2B Network
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {[
            { number: "500+", label: "Partner Businesses" },
            { number: "2,500+", label: "Reviews Exchanged" },
            { number: "95%", label: "Satisfaction Rate" },
            { number: "3x", label: "Average Growth" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
              <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
