import { Download } from "lucide-react";
import { Button } from "./ui/button";

export function CVDownload() {
  const handleDownloadCV = () => {
    // Create CV content
    const cvContent = `
NDENGEYINTWALI FILS CANISIUS
Frontend Developer

Contact Information:
Email: ndengeyintwalifils@gmail.com
Phone: 0788274130
Location: Kigali, Rwanda

Professional Summary:
Passionate frontend developer with 5+ years of experience building modern web applications. 
Specializing in React, TypeScript, and creating seamless user experiences that bridge the 
gap between design and technology.

Technical Skills:
• Frontend: React, TypeScript, JavaScript, Next.js, Vue.js, HTML5, CSS3
• Styling: Tailwind CSS, Sass, CSS Modules, Styled Components
• Tools: Git, Webpack, Vite, Jest, Cypress, ESLint, Prettier
• Design: Figma, Adobe XD
• Backend: Node.js, Express, MongoDB, PostgreSQL, REST APIs, GraphQL

Experience:
• 5+ years of frontend development experience
• 50+ completed projects
• Strong focus on responsive design and web accessibility
• Experience with performance optimization
• Contributions to open source projects

Education & Continuous Learning:
• Always learning and staying up-to-date with latest technologies
• Currently exploring Web3 technologies and advanced React patterns
• Active in developer community and technical writing

Portfolio:
• Analytics Dashboard - React, TypeScript, Tailwind CSS, Recharts
• Mobile Banking App - React Native, Expo, TypeScript, React Query
• E-commerce Platform - Next.js, Prisma, Stripe, PostgreSQL

What I Do:
• Frontend Development with React & TypeScript
• Responsive Web Design & Mobile-First Development
• Performance Optimization & Web Accessibility
• API Integration & State Management
`;

    // Create and download the file
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ndengeyintwali_Fils_Canisius_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button variant="outline" size="lg" className="gap-2" onClick={handleDownloadCV}>
      <Download className="w-4 h-4" />
      Download CV
    </Button>
  );
}