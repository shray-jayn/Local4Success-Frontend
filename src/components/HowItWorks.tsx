import { Edit3, DollarSign, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Edit3,
    title: "Write Reviews",
    description: "Choose local businesses near you and share genuine feedback.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: DollarSign,
    title: "Get Paid Instantly",
    description: "Earn around $8 per approved review.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Users,
    title: "Refer Friends",
    description: "Get bonuses when your friends start writing reviews too.",
    color: "from-purple-500 to-purple-600"
  }
];

export const HowItWorks = () => {
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
    <section ref={sectionRef} className="py-24 px-6 gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start earning in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-card p-8 rounded-3xl hover-lift hover-glow h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-tl-full -z-10" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
