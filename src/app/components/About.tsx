'use client'

import { SetStateAction, Dispatch } from 'react'
import { motion } from 'framer-motion'

interface AboutProps {
  setIsContact: Dispatch<SetStateAction<boolean>>
  isContact: boolean
  setClickPosition: Dispatch<SetStateAction<{ x: number; y: number }>>
}

export default function About({ setIsContact, isContact, setClickPosition }: AboutProps) {

  const handleContactToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setClickPosition({ x: event.clientX, y: event.clientY })
    setIsContact(!isContact)
  }

  return (
    <section className="py-20 about-bg">
      <div className="px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-6">
            I&apos;m a passionate full-stack developer and 3D designer, currently working on a large file storage and sharing program using Next.js, Tailwind, Node, PostgreSQL, and Redux. I also have experience in setting up servers, including Minecraft servers.
          </p>
          <p className="text-lg mb-6">
            I&apos;m always eager to learn and take on new challenges. Whether it&apos;s programming, 3D design, or exploring new technologies, I&apos;m excited to collaborate and create innovative solutions.
          </p>
          <p className="text-lg mb-6">
            When I&apos;m not coding or designing, you can find me exploring the latest advancements in server management and scalable web applications. I believe in the power of continuous learning and staying up-to-date with the ever-evolving tech landscape.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              onClick={handleContactToggle}
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}