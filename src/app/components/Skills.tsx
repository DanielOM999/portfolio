"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiLua,
  SiBlender,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiRedux,
  SiTailwindcss,
  SiQt,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiDotnet,
  SiSocketdotio,
  SiNginx,
  SiEjs,
  SiJquery,
  SiNpm,
  SiUnrealengine,
  SiHandlebarsdotjs,
} from "react-icons/si";
import { PiFileCSharp as SiCSharp } from "react-icons/pi";
import { FaJava as SiJava } from "react-icons/fa";
import { FaNodeJs as SiNodeJs } from "react-icons/fa";
import { DiMysql as SiMysql } from "react-icons/di";

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.6, y: 20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group relative"
    >
      <div className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:transform group-hover:scale-105">
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
          </motion.div>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {skill.name}
          </span>
          <motion.div
            className="h-1 bg-blue-400/20 rounded-full w-16 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <motion.div
              className="h-full bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "C#", level: 80, icon: SiCSharp },
        { name: "C++", level: 60, icon: SiCplusplus },
        { name: "JavaScript", level: 90, icon: SiJavascript },
        { name: "Python", level: 90, icon: SiPython },
        { name: "TypeScript", level: 80, icon: SiTypescript },
        { name: "Java", level: 60, icon: SiJava },
        { name: "Lua", level: 60, icon: SiLua },
      ],
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90, icon: SiHtml5 },
        { name: "CSS3", level: 90, icon: SiCss3 },
        { name: "React", level: 80, icon: SiReact },
        { name: "Next.js", level: 80, icon: SiNextdotjs },
        { name: "TailwindCSS", level: 80, icon: SiTailwindcss },
        { name: "Redux", level: 60, icon: SiRedux },
        { name: "jQuery", level: 60, icon: SiJquery },
        { name: "Handlebars", level: 80, icon: SiHandlebarsdotjs },
        { name: "EJS", level: 30, icon: SiEjs },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85, icon: SiNodeJs },
        { name: "Express.js", level: 85, icon: SiExpress },
        { name: ".NET", level: 60, icon: SiDotnet },
        { name: "Socket.io", level: 50, icon: SiSocketdotio },
        { name: "PostgreSQL", level: 80, icon: SiPostgresql },
        { name: "MySQL", level: 60, icon: SiMysql },
      ],
    },
    {
      name: "Tools & Frameworks",
      skills: [
        { name: "Git", level: 85, icon: SiGit },
        { name: "Nginx", level: 70, icon: SiNginx },
        { name: "NPM", level: 80, icon: SiNpm },
        { name: "Qt", level: 50, icon: SiQt },
      ],
    },
    {
      name: "Design & 3D Tools",
      skills: [
        { name: "Blender", level: 90, icon: SiBlender },
        { name: "Unreal Engine", level: 75, icon: SiUnrealengine },
        { name: "Adobe Photoshop", level: 60, icon: SiAdobephotoshop },
        { name: "Adobe Illustrator", level: 60, icon: SiAdobeillustrator },
        { name: "Adobe XD", level: 60, icon: SiAdobexd },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-gray-800/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative"
            >
              <motion.button
                className="w-full text-left p-4 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors flex items-center justify-between group"
                onClick={() =>
                  setOpenCategory(
                    openCategory === category.name ? null : category.name
                  )
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                  {category.name}
                </h3>
                <motion.div
                  animate={{ rotate: openCategory === category.name ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openCategory === category.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
                      <AnimatePresence>
                        {category.skills.map((skill, skillIndex) => (
                          <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={skillIndex}
                          />
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
