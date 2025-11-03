import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const GOOGLE_FORM_EMBED_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSeEddKkDF8ifEfVDlQN84EcIaSi2SR_RangDEGIU68usNZBjA/viewform?embedded=true";

export const SignUpSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="signup"
      ref={sectionRef}
      className="py-24 px-6 gradient-hero relative overflow-hidden"
    >
      {/* Animated background elements (unchanged) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Start Supporting Local Businesses and Earning?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join our community today and start making a difference while earning
            money
          </p>
        </div>

        {/* Google Form Embed */}
        <div
          className={`glass-card p-0 lg:p-0 rounded-3xl overflow-hidden ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-background/40 p-4 md:p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-sm text-muted-foreground">
                Fill the form below to sign up. We’ll reach out via email.
              </p>
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="rounded-xl"
              >
                <a
                  href={GOOGLE_FORM_EMBED_SRC.replace("?embedded=true", "")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in new tab
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Responsive iframe wrapper */}
            <div className="w-full">
              <iframe
                title="Sign up form"
                src={GOOGLE_FORM_EMBED_SRC}
                width="100%"
                // Pick a comfy height; Google Forms can be tall.
                height={1100}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>

        {/* Trust indicators (unchanged) */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Free to join</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
