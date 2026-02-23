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
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PO Assistant — AI-Powered Jira Chatbot",
    description:
      "A full-stack chatbot built as an internal tool that integrates ChatGPT with Jira. Users can talk to the AI to generate tickets, edit them in a live canvas, and sync them directly into Jira with one click.",
    technologies: [
      "Vue.js",
      "Node.js",
      "ChatGPT API",
      "Jira API",
    ],
    image: "/img/po-assistant.webp",
    link: "",
  },
  {
    id: 2,
    title: "KLP Bank",
    description:
      "A modern banking system prototype built for KLP's apprenticeship program, featuring account management, transactions, and financial data visualization.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
    ],
    image: "",
    link: "https://github.com/DanielOM999/KLP-bank",
  },
  {
    id: 3,
    title: "Aranea Rete — Web Search Engine",
    description:
      "A TF-IDF based web search engine with ethical web scraping that respects robots.txt. Features a PostgreSQL-backed index and a web-based search interface, all containerized with Docker.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
    ],
    image: "",
    link: "https://github.com/DanielOM999/Aranea-Rete",
  },
  {
    id: 4,
    title: "SwiftBinder — Large File Storage and Sharing",
    description:
      "A full-stack application for storing and sharing large files, built with Next.js, Tailwind, Node.js, PostgreSQL, and Redis. The service has since been taken down.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Redis",
    ],
    image: "/img/swift.webp",
    link: "",
  },
  {
    id: 5,
    title: "QuestBros",
    description:
      "A website dedicated to ghost hunting and related topics, featuring a forum where users can start discussions and share experiences.",
    technologies: [
      "JavaScript",
      "CSS",
      "Handlebars",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
    ],
    image: "/img/ghost.webp",
    link: "https://github.com/DanielOM999/QuestBros",
  },
  {
    id: 6,
    title: "AuthGuard",
    description:
      "A project exploring a login system with Supabase, JavaScript, CSS, Handlebars, and Node.js.",
    technologies: ["Supabase", "JavaScript", "CSS", "Handlebars", "Node.js"],
    image: "/img/authguard.webp",
    link: "https://github.com/DanielOM999/AuthGuard",
  },
  {
    id: 7,
    title: "Website about Networking",
    description:
      "A simple static website for a school project on networking, designed to be viewed using a live server or static hosting.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/img/netverk1.webp",
    link: "https://github.com/DanielOM999/Nettverk1",
  },
];

export default function Projects() {
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
                  {project.image && (
                    <div className="relative w-full md:w-[400px] aspect-video">
                      <div className="absolute -inset-4 bg-blue-500/20 rounded-2xl blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                      <Image
                        key={project.id}
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 400px"
                        style={{ objectFit: "cover" }}
                        className="rounded-xl"
                        priority={index < 2}
                      />
                    </div>
                  )}

                  <div className={`flex-1 space-y-4 ${project.image ? "max-w-sm" : ""}`}>
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

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.a>
                    )}
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
              className="cursor-pointer px-7 py-3.5 glow-blue bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-400 hover:to-blue-500 transition-all duration-300"
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
