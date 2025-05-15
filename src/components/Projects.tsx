import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface Project {
  name: string;
  about: string;
  photo: string;
  tasks: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    name: "Washington Academy",
    about: "A modern web application for managing private academies",
    photo: "/assets/academy-app.jpg",
    tasks: ["Built responsive UI", "Integrated third API endpoints", "Optimized performance"],
    technologies: ["React", "TypeScript", "Laravel", "MySql"],
  },
  {
    name: "YoCripto",
    about: "A fintech mobile app offering Bitcoin rewards",
    photo: "/assets/mobile-app.jpg",
    tasks: ["Implemented a rating feature in both the Play Store and App Store apps", "Build dashboard from UX design", "Download account statements"],
    technologies: ["React Native", "Typescript", "AWS"],
  },
  {
    name: "CALT Desktop app",
    about: "A private software solution for transport access management at the Port of Veracruz",
    photo: "/assets/access-app.jpg",
    tasks: ["Build desktop app", "Build private API", "Implement CI/CD Pipeline with Jenkins"],
    technologies: ["C#", "Jenkins", "Entoty Framework"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
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

                  {/* Technologies */}
                  <CardFooter className="p-0">
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
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 