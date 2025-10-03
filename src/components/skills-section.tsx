import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React", "TypeScript", "JavaScript", "Next.js", "Vue.js", "HTML5", "CSS3"]
    },
    {
      title: "Styling & Design",
      skills: ["Tailwind CSS", "Sass", "CSS Modules", "Styled Components", "Figma", "Adobe XD"]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "Webpack", "Vite", "Jest", "Cypress", "ESLint", "Prettier"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always learning and staying up-to-date with the latest technologies 
            and best practices in web development. Currently exploring Web3 technologies 
            and advanced React patterns.
          </p>
        </div>
      </div>
    </section>
  );
}