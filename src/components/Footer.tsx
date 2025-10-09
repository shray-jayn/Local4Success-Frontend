import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Local 4 Success</h3>
            <p className="text-background/70 max-w-md leading-relaxed">
              Connecting local communities through authentic reviews and mutual growth. 
              Support local businesses while earning money.
            </p>
            <div className="flex items-center gap-2 mt-4 text-accent">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Made with love for local communities</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#business" className="text-background/70 hover:text-background transition-colors">
                  For Businesses
                </a>
              </li>
              <li>
                <a href="#signup" className="text-background/70 hover:text-background transition-colors">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2025 Local 4 Success. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Facebook
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
