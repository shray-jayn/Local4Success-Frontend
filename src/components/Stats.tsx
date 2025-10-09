import { useEffect, useRef, useState } from "react";
import { Users, Building2, DollarSign, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 5420,
    suffix: "+",
    label: "Active Reviewers",
    color: "text-accent"
  },
  {
    icon: Building2,
    value: 1250,
    suffix: "+",
    label: "Partner Businesses",
    color: "text-primary"
  },
  {
    icon: DollarSign,
    value: 186000,
    prefix: "$",
    label: "Paid to Community",
    color: "text-emerald-500"
  },
  {
    icon: Star,
    value: 23500,
    suffix: "+",
    label: "Reviews Written",
    color: "text-yellow-500"
  }
];

const useCountUp = (end: number, duration: number = 2000, isVisible: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return count;
};

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Growing Fast, Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a thriving community making a real impact
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const count = useCountUp(stat.value, 2000, isVisible);
            
            return (
              <div
                key={index}
                className={`glass-card p-8 rounded-3xl text-center hover-lift ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>
                  {stat.prefix}{count.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-semibold">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
