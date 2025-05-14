"use client"; // Required for framer-motion animations

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

interface Technology {
  name: string;
  icon: React.ReactNode; // React icon component
}

const technologies: Technology[] = [
  { name: "React", icon: <FaReact className="h-6 w-6" /> },
  { name: "TypeScript", icon: <SiTypescript className="h-6 w-6" /> },
  { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6" /> },
  { name: "Node.js", icon: <FaNodeJs className="h-6 w-6" /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion className="h-6 w-6" /> },
  { name: "MongoDB", icon: <SiMongodb className="h-6 w-6" /> },
];

// Create enough items for 10 in each carousel
const getCarouselItems = () => {
  const items = [];
  while (items.length < 10) {
    items.push(...technologies);
  }
  return items.slice(0, 10);
};

export default function TechnologiesCarousel() {
  const carouselItems = getCarouselItems();
  const duplicatedItems = [...carouselItems, ...carouselItems];

  return (
    <div className="space-y-8">
      {/* First Carousel (Left to Right) */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"], // Right to left movement
            transition: {
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <div key={`left-${tech.name}-${index}`} className="flex-shrink-0 px-4">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                {tech.icon}
                {tech.name}
              </Button>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Carousel (Right to Left) */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"], // Left to right movement
            transition: {
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <div key={`right-${tech.name}-${index}`} className="flex-shrink-0 px-4">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                {tech.icon}
                {tech.name}
              </Button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 