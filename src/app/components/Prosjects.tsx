'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'Large File Storage and Sharing',
      description: 'A program for storing and sharing large files using Next.js, Tailwind, Node, PostgreSQL, and Redux.',
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redux'],
      image: 'https://placeholder.pics/svg/400x300?height=300&width=400',
    },
  ])

  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMore = () => {
    setVisibleProjects(prevVisible => prevVisible + 3)
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
  )
}