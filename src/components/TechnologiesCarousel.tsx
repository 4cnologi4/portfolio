"use client"; // Required for framer-motion animations

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  FaReact, FaNodeJs, FaAngular, FaHtml5, FaCss3Alt, FaJs, 
  FaPython, FaJava, FaAws, FaLinux, FaWindows, FaGitAlt 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiSass, 
  SiLaravel, SiDotnet, SiGraphql, SiMongodb, 
  SiMysql, SiPostgresql, SiGooglecloud, SiJenkins, 
  SiFirebase, SiGithub, SiGitlab, SiSocketdotio,
  SiAntdesign, SiRedux
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandCSharp, TbApi } from "react-icons/tb";
import { GiZigzagLeaf } from "react-icons/gi";

interface Technology {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'devops' | 'other';
}

const technologies: Technology[] = [
  // Frontend Technologies
  { name: "Angular", icon: <FaAngular className="h-6 w-6" />, category: 'frontend' },
  { name: "React", icon: <FaReact className="h-6 w-6" />, category: 'frontend' },
  { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6" />, category: 'frontend' },
  { name: "Framer Motion", icon: <TbBrandFramerMotion className="h-6 w-6" />, category: 'frontend' },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6" />, category: 'frontend' },
  { name: "TypeScript", icon: <SiTypescript className="h-6 w-6" />, category: 'frontend' },
  { name: "Sass", icon: <SiSass className="h-6 w-6" />, category: 'frontend' },
  { name: "HTML5", icon: <FaHtml5 className="h-6 w-6" />, category: 'frontend' },
  { name: "CSS3", icon: <FaCss3Alt className="h-6 w-6" />, category: 'frontend' },
  { name: "JavaScript", icon: <FaJs className="h-6 w-6" />, category: 'frontend' },

  // Backend Technologies
  { name: "Node.js", icon: <FaNodeJs className="h-6 w-6" />, category: 'backend' },
  { name: "Python", icon: <FaPython className="h-6 w-6" />, category: 'backend' },
  { name: "C#", icon: <TbBrandCSharp className="h-6 w-6" />, category: 'backend' },
  { name: "Java", icon: <FaJava className="h-6 w-6" />, category: 'backend' },
  { name: "Laravel", icon: <SiLaravel className="h-6 w-6" />, category: 'backend' },
  { name: "Entity Framework", icon: <SiDotnet className="h-6 w-6" />, category: 'backend' },
  { name: "REST", icon: <TbApi className="h-6 w-6" />, category: 'backend' },
  { name: "GraphQL", icon: <SiGraphql className="h-6 w-6" />, category: 'backend' },
  { name: "MongoDB", icon: <SiMongodb className="h-6 w-6" />, category: 'backend' },
  { name: "MySQL", icon: <SiMysql className="h-6 w-6" />, category: 'backend' },

  // DevOps & Version Control
  { name: "AWS", icon: <FaAws className="h-6 w-6" />, category: 'devops' },
  { name: "Google Cloud", icon: <SiGooglecloud className="h-6 w-6" />, category: 'devops' },
  { name: "Jenkins", icon: <SiJenkins className="h-6 w-6" />, category: 'devops' },
  { name: "Linux", icon: <FaLinux className="h-6 w-6" />, category: 'devops' },
  { name: "Windows", icon: <FaWindows className="h-6 w-6" />, category: 'devops' },
  { name: "Firebase", icon: <SiFirebase className="h-6 w-6" />, category: 'devops' },
  { name: "Git", icon: <FaGitAlt className="h-6 w-6" />, category: 'devops' },
  { name: "GitHub", icon: <SiGithub className="h-6 w-6" />, category: 'devops' },
  { name: "GitLab", icon: <SiGitlab className="h-6 w-6" />, category: 'devops' },

  // Other Technologies
  { name: "Ant Design", icon: <SiAntdesign className="h-6 w-6" />, category: 'other' },
  { name: "shadcn", icon: <SiTailwindcss className="h-6 w-6" />, category: 'other' }, // Using Tailwind icon as placeholder
  { name: "Redux", icon: <SiRedux className="h-6 w-6" />, category: 'other' },
  { name: "Zustand", icon: <GiZigzagLeaf className="h-6 w-6" />, category: 'other' },
  { name: "SQL Server", icon: <SiMongodb className="h-6 w-6" />, category: 'other' },
  { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6" />, category: 'other' },
  { name: "Web Sockets", icon: <SiSocketdotio className="h-6 w-6" />, category: 'other' },
  { name: "React Native", icon: <FaReact className="h-6 w-6" />, category: 'other' }
];

const getCarouselItems = (category: 'frontend' | 'backend' | 'devops' | 'other') => {
  const filtered = technologies.filter(tech => tech.category === category);
  const items = [];
  while (items.length < 10) {
    items.push(...filtered);
  }
  return items.slice(0, 10);
};

const Carousel = ({ items, direction }: { items: Technology[], direction: 'left' | 'right' }) => {
  const duplicatedItems = [...items, ...items];
  
  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex"
        animate={{
          x: direction === 'left' ? ["0%", "-100%"] : ["-100%", "0%"],
          transition: {
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <div key={`${direction}-${tech.name}-${index}`} className="flex-shrink-0 px-4">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              {tech.icon}
              {tech.name}
            </Button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function TechnologiesCarousel() {
  const frontendItems = getCarouselItems('frontend');
  const backendItems = getCarouselItems('backend');
  const devopsItems = getCarouselItems('devops');
  const otherItems = getCarouselItems('other');

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">Frontend Technologies</h3>
        <Carousel items={frontendItems} direction="left" />
        <Carousel items={frontendItems} direction="right" />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">Backend Technologies</h3>
        <Carousel items={backendItems} direction="left" />
        <Carousel items={backendItems} direction="right" />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">DevOps & Version Control</h3>
        <Carousel items={devopsItems} direction="left" />
        <Carousel items={devopsItems} direction="right" />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">Other Technologies</h3>
        <Carousel items={otherItems} direction="left" />
        <Carousel items={otherItems} direction="right" />
      </div>
    </div>
  );
} 