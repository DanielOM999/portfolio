'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Lenis from "lenis"
import Hero from '@/src/app/components/Hero'
import Skills from '@/src/app/components/Skills'
import Projects from '@/src/app/components/Prosjects'
import Header from '@/src/app/components/Header'
import Footer from '@/src/app/components/Footer'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero onExplore={() => scrollToSection(skillsRef)} />
      <motion.div ref={skillsRef}>
        <div className="overflow-x-hidden">
          <Skills />
        </div>
      </motion.div>
      <motion.div ref={projectsRef}>
        <Projects />
      </motion.div>
      <Footer />
    </main>
  )
}