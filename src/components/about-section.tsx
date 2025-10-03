import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate frontend developer with 5+ years of experience building 
              modern web applications. I specialize in React, TypeScript, and creating 
              seamless user experiences that bridge the gap between design and technology.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me contributing to open source projects, 
              writing technical articles, or exploring the latest web technologies. 
              I believe in writing clean, maintainable code and following best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="mb-2">Experience</h4>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
              <div>
                <h4 className="mb-2">Projects</h4>
                <p className="text-muted-foreground">50+ Completed</p>
              </div>
            </div>
          </div>
          
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="mb-4">What I Do</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Frontend Development with React & TypeScript
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Responsive Web Design & Mobile-First Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Performance Optimization & Web Accessibility
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  API Integration & State Management
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}