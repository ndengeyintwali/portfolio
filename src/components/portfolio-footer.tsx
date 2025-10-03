import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function PortfolioFooter() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="mb-2">Ndengeyintwali Fils Canisius</h3>
            <p className="text-muted-foreground">Frontend Developer</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
          <p className="text-muted-foreground mt-2">
            © 2025 Ndengeyintwali Fils Canisius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}