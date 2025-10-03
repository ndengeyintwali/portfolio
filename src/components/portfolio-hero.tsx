import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { CVDownload } from "./cv-download";

export function PortfolioHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-6 tracking-tight">
          <span className="block mb-2">Hello, I'm</span>
          <span className="block">Ndengeyintwali Fils Canisius</span>
        </h1>
        <h2 className="mb-8 text-muted-foreground max-w-2xl mx-auto">
          Frontend Developer specializing in React, TypeScript, and modern web technologies. 
          I create beautiful, accessible, and performant user experiences.
        </h2>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            Get In Touch
          </Button>
          <CVDownload />
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}