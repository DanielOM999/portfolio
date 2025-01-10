"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export default function Projects() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Large File Storage and Sharing",
      description:
        "A program for storing and sharing large files using Next.js, Tailwind, Node, PostgreSQL, and Redux.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Redux",
      ],
      image: "/img/image.png?height=300&width=400",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A fully-featured e-commerce platform built with React, Express, and MongoDB, featuring real-time inventory updates and secure payment processing.",
      technologies: ["React", "Express", "MongoDB", "Stripe", "Socket.io"],
      image: "/img/image.png?height=300&width=400",
    },
  ]);

  const [visibleProjects, setVisibleProjects] = useState(3);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const loadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);
  };

  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden py-20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          My Projects
        </motion.h2>

        <div className="space-y-52">
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                } max-w-3xl`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center
                  p-8 rounded-2xl
                  bg-gray-800/50 backdrop-blur-sm
                  border border-gray-700/50
                  transition-all duration-500
                  ${
                    hoveredProject === project.id
                      ? "bg-gray-800/80 scale-[1.02]"
                      : ""
                  }`}
                >
                  <div className="relative w-full md:w-[400px] aspect-video">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-2xl blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                      priority
                    />
                  </div>

                  <div className="flex-1 space-y-4 max-w-sm">
                    <h3 className="text-2xl font-semibold text-blue-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
