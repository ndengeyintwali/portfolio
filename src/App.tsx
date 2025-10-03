import { PortfolioHero } from "./components/portfolio-hero";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";
import { PortfolioFooter } from "./components/portfolio-footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <PortfolioFooter />
    </div>
  );
}