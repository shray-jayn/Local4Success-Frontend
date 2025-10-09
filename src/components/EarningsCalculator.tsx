import { useState, useEffect, useRef } from "react";
import { Calculator, DollarSign } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export const EarningsCalculator = () => {
  const [reviewsPerWeek, setReviewsPerWeek] = useState([10]);
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

  const perReview = 8;
  const weeklyEarnings = reviewsPerWeek[0] * perReview;
  const monthlyEarnings = weeklyEarnings * 4;
  const yearlyEarnings = monthlyEarnings * 12;

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto max-w-5xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Calculator className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">Calculate Your Potential</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How Much Can You Earn?
          </h2>
          <p className="text-xl text-muted-foreground">
            Adjust the slider to see your earning potential
          </p>
        </div>

        <div className={`glass-card p-8 md:p-12 rounded-3xl ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <label className="text-lg font-semibold">Reviews per week</label>
              <div className="text-3xl font-black text-accent">{reviewsPerWeek[0]}</div>
            </div>
            <Slider
              value={reviewsPerWeek}
              onValueChange={setReviewsPerWeek}
              max={50}
              min={1}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>1 review</span>
              <span>50 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
              <div className="text-sm font-semibold text-accent mb-2">Weekly</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <DollarSign className="w-6 h-6 text-accent" />
                <div className="text-4xl font-black">{weeklyEarnings}</div>
              </div>
              <div className="text-xs text-muted-foreground">per week</div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="text-sm font-semibold text-primary mb-2">Monthly</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <DollarSign className="w-6 h-6 text-primary" />
                <div className="text-4xl font-black">{monthlyEarnings}</div>
              </div>
              <div className="text-xs text-muted-foreground">per month</div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20">
              <div className="text-sm font-semibold text-emerald-500 mb-2">Yearly</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <DollarSign className="w-6 h-6 text-emerald-500" />
                <div className="text-4xl font-black">{yearlyEarnings.toLocaleString()}</div>
              </div>
              <div className="text-xs text-muted-foreground">per year</div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-primary/5 rounded-2xl text-center">
            <p className="text-sm text-muted-foreground">
              💡 <span className="font-semibold">Pro tip:</span> Add referral bonuses and you could earn even more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
