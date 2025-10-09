import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How much can I really earn?",
    answer: "Most reviewers earn $8 per approved review. Active members write 30-50 reviews per month, earning $240-$400. Top reviewers who refer friends can earn even more through our referral bonus program!"
  },
  {
    question: "Are these real reviews or fake ones?",
    answer: "100% real! We only accept honest reviews from people who actually visit the businesses. Fake reviews violate our terms and review platforms' policies. You must genuinely experience the business to write a review."
  },
  {
    question: "How do I get paid?",
    answer: "We offer instant payments via PayPal, Venmo, or direct deposit. Once your review is approved (usually within 24-48 hours), you can cash out immediately with no minimum balance required."
  },
  {
    question: "What kind of businesses can I review?",
    answer: "Any local business in your area! Restaurants, cafés, salons, gyms, retail stores, service providers - if it's local and has an online presence, you can review it and earn."
  },
  {
    question: "How does the B2B exchange work?",
    answer: "Local businesses can partner with each other to exchange reviews. For example, a café and a bookstore can review each other authentically after genuinely experiencing each other's services, helping both grow their online presence."
  },
  {
    question: "Is there a limit to how many reviews I can write?",
    answer: "No hard limit! However, we do have quality checks to ensure all reviews are genuine. You can write as many honest reviews as you want, as long as you've actually visited the businesses."
  },
  {
    question: "What if a business doesn't like my review?",
    answer: "Honesty is key! We protect reviewers who write truthful feedback. Businesses sign up knowing they'll get authentic reviews - both positive and constructive. Your honest opinion is valued and protected."
  },
  {
    question: "How long does it take to get started?",
    answer: "Less than 5 minutes! Sign up, verify your email, and you can start writing your first review immediately. Your first payment typically arrives within 48 hours of your first approved review."
  }
];

export const FAQ = () => {
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
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about earning with Local 4 Success
          </p>
        </div>

        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
