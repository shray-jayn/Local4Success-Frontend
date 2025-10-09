import { MapPin, Star, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const businesses = [
  {
    name: "The Daily Grind Café",
    category: "Coffee & Bakery",
    location: "Downtown",
    rating: 4.8,
    reviews: 234,
    growth: "+180 reviews",
    emoji: "☕"
  },
  {
    name: "Fresh Cuts Salon",
    category: "Beauty & Wellness",
    location: "West End",
    rating: 4.9,
    reviews: 189,
    growth: "+145 reviews",
    emoji: "💇"
  },
  {
    name: "Tony's Pizza House",
    category: "Italian Restaurant",
    location: "Little Italy",
    rating: 4.7,
    reviews: 312,
    growth: "+220 reviews",
    emoji: "🍕"
  },
  {
    name: "FitZone Gym",
    category: "Fitness Center",
    location: "Central District",
    rating: 4.6,
    reviews: 167,
    growth: "+98 reviews",
    emoji: "💪"
  },
  {
    name: "Book Nook",
    category: "Bookstore & Café",
    location: "Arts Quarter",
    rating: 4.9,
    reviews: 156,
    growth: "+122 reviews",
    emoji: "📚"
  },
  {
    name: "Green Leaf Market",
    category: "Organic Grocery",
    location: "Riverside",
    rating: 4.8,
    reviews: 203,
    growth: "+165 reviews",
    emoji: "🥬"
  }
];

export const FeaturedBusinesses = () => {
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
    <section ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Businesses Thriving with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Local businesses growing their online presence and customer base
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-3xl hover-lift group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {business.emoji}
                </div>
                <div className="flex items-center gap-1 bg-yellow-500/10 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-sm">{business.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1">{business.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{business.category}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>{business.location}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="text-2xl font-bold">{business.reviews}</div>
                  <div className="text-xs text-muted-foreground">Total Reviews</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-accent">{business.growth}</div>
                  <div className="text-xs text-muted-foreground">Last 3 months</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
