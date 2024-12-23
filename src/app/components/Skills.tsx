'use client'

import { motion } from 'framer-motion'
import { Progress } from "@/src/app/components/ui/progress"
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
  SiMongodb,
  SiGit,
  SiRedux,
  SiTailwindcss
} from 'react-icons/si'
import { PiFileCSharp as SiCSharp } from "react-icons/pi";
import { FaJava as SiJava } from "react-icons/fa";

interface Skill {
  name: string
  level: number
  icon: React.ComponentType<{ className?: string }>
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "TypeScript", level: 95, icon: SiTypescript },
        { name: "JavaScript", level: 90, icon: SiJavascript },
        { name: "Python", level: 85, icon: SiPython },
        { name: "C#", level: 80, icon: SiCSharp },
        { name: "C++", level: 75, icon: SiCplusplus },
        { name: "Java", level: 70, icon: SiJava },
        { name: "Lua", level: 65, icon: SiLua },
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 95, icon: SiReact },
        { name: "Next.js", level: 90, icon: SiNextdotjs },
        { name: "HTML", level: 95, icon: SiHtml5 },
        { name: "CSS", level: 90, icon: SiCss3 },
        { name: "Tailwind", level: 85, icon: SiTailwindcss },
        { name: "Redux", level: 80, icon: SiRedux },
      ]
    },
    {
      name: "Backend & Database",
      skills: [
        { name: "Express.js", level: 85, icon: SiExpress },
        { name: "PostgreSQL", level: 80, icon: SiPostgresql },
        { name: "MongoDB", level: 75, icon: SiMongodb },
      ]
    },
    {
      name: "Tools & 3D",
      skills: [
        { name: "Git", level: 90, icon: SiGit },
        { name: "Blender", level: 85, icon: SiBlender },
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-gray-400" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-gray-700"
                        indicatorClassName="bg-gradient-to-r from-blue-500 to-blue-400"
                      />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

