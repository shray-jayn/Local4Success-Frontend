import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Part-time Reviewer",
    image: "👩‍💼",
    rating: 5,
    text: "I've made over $800 in the last 2 months just by reviewing local businesses I already visit. It's the easiest side hustle ever!",
    earnings: "$800+ earned"
  },
  {
    name: "Mike T.",
    role: "Business Owner",
    image: "👨‍💼",
    rating: 5,
    text: "Our café went from 12 reviews to 150+ in just 6 weeks. We're seeing 40% more foot traffic. This platform is a game-changer!",
    earnings: "40% growth"
  },
  {
    name: "Jessica L.",
    role: "Student Reviewer",
    image: "👩‍🎓",
    rating: 5,
    text: "Perfect for college students! I write reviews between classes and make enough for groceries each week. Love supporting local too!",
    earnings: "$320/month"
  },
  {
    name: "David R.",
    role: "Restaurant Owner",
    image: "👨‍🍳",
    rating: 5,
    text: "The quality of reviews is outstanding. Real customers, real feedback. Our Google rating jumped from 3.8 to 4.6 stars!",
    earnings: "4.6★ rating"
  }
];

export const Testimonials = () => {
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
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Star className="w-5 h-5 text-accent fill-accent" />
            <span className="text-sm font-semibold text-accent">Loved by thousands</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Real Stories, Real Earnings
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our community members are saying
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-3xl hover-lift relative overflow-hidden ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-sm mb-4 leading-relaxed">{testimonial.text}</p>

              <div className="inline-block px-3 py-1 bg-accent/10 rounded-full">
                <span className="text-xs font-bold text-accent">{testimonial.earnings}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
