import { CheckCircle2, TrendingUp, Heart, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reviewerBenefits = [
  "Earn flexible income anytime, anywhere",
  "Help small businesses grow and thrive",
  "Build your local reputation online",
  "Join a supportive community",
];

const businessBenefits = [
  "Grow visibility with genuine feedback",
  "Improve Google Maps and Yelp ranking",
  "Attract new, loyal customers fast",
  "Stand out from competitors",
];

export const Benefits = () => {
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

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Join Local 4 Success?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefits for everyone in the community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Reviewers Card */}
          <div className={`glass-card p-8 lg:p-10 rounded-3xl hover-lift ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold">For Reviewers</h3>
            </div>
            
            <ul className="space-y-4">
              {reviewerBenefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-accent/10 rounded-2xl border border-accent/20">
              <p className="text-sm font-semibold text-accent">
                💰 Average earnings: $240-$400/month
              </p>
            </div>
          </div>

          {/* Business Card */}
          <div className={`glass-card p-8 lg:p-10 rounded-3xl hover-lift ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold">For Businesses</h3>
            </div>
            
            <ul className="space-y-4">
              {businessBenefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-primary/10 rounded-2xl border border-primary/20">
              <p className="text-sm font-semibold text-primary">
                📈 Average growth: 3x more visibility in 30 days
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
            <Heart className="w-5 h-5 text-accent" />
            <span className="font-semibold">Join 1,000+ happy members</span>
          </div>
        </div>
      </div>
    </section>
  );
};
