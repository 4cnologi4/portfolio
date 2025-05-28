import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Project {
  name: string;
  about: string;
  photo: string;
  tasks: string[];
  technologies: string[];
  category: "private" | "public";
  link: string;
}

const projects: Project[] = [
  {
    name: "Washington Academy",
    about: "A modern web application for managing private academies",
    photo: "/assets/academy-app.jpg",
    tasks: ["Built responsive UI", "Integrated third API endpoints", "Optimized performance"],
    technologies: ["React", "TypeScript", "Laravel", "MySql"],
    category: "private",
    link: ""
  },
  {
    name: "YoCripto",
    about: "A fintech mobile app offering Bitcoin rewards",
    photo: "/assets/mobile-app.jpg",
    tasks: ["Implemented a rating feature in both the Play Store and App Store apps", "Build dashboard from UX design", "Download account statements"],
    technologies: ["React Native", "Typescript", "AWS"],
    category: "private",
    link: ""
  },
  {
    name: "CALT Desktop app",
    about: "A private software solution for transport access management at the Port of Veracruz",
    photo: "/assets/access-app.jpg",
    tasks: ["Build desktop app", "Build private API", "Implement CI/CD Pipeline with Jenkins"],
    technologies: ["C#", "Jenkins", "Entoty Framework"],
    category: "private",
    link: ""
  },
  {
    name: "Capybara API",
    about: "A private API for Capybara",
    photo: "/assets/capy_api_icon_v4.png",
    tasks: ["Design API", "Build API endpoints", "Develop api explorer", "Build and deploy"],
    technologies: ["React", "Tailwind CSS", "Next.js", "Shadcn UI", "Zustand"],
    category: "public",
    link: "https://capybara-pixel-doc.vercel.app/"
  }
];

export default function Projects() {
  const privateProjects = projects.filter(project => project.category === "private");
  const publicProjects = projects.filter(project => project.category === "public");

  const renderProjectCard = (project: Project) => (
    <Card key={project.name} className="group overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 w-4/5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left: Project Image */}
        <div className="relative h-64 w-full md:h-full bg-red-100">
          <Image
            src={project.photo}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Content */}
        <div className="p-8 space-y-6">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
            <CardDescription className="text-lg text-gray-200 mt-2">
              {project.about}
            </CardDescription>
          </CardHeader>

          {/* Tasks */}
          <CardContent className="p-0">
            <h3 className="text-lg font-medium text-gray-200 mb-3">Key Tasks</h3>
            <ul className="space-y-2">
              {project.tasks.map((task) => (
                <li key={task} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-200">{task}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          {/* Technologies and Link */}
          <CardFooter className="p-0 flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="cursor-pointer">
                  View Project
                </Button>
              </Link>
            )}
          </CardFooter>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Featured Projects</h2>
        
        {/* Public Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Public Projects</h3>
          <div className="grid grid-cols-1 gap-12">
            {publicProjects.map(renderProjectCard)}
          </div>
        </div>

        {/* Private Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Private Projects</h3>
          <div className="grid grid-cols-1 gap-12">
            {privateProjects.map(renderProjectCard)}
          </div>
        </div>
      </div>
    </section>
  );
} 