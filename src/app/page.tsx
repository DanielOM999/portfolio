'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Lenis from "lenis"
import Hero from '@/src/app/components/Hero'
import Skills from '@/src/app/components/Skills'
import About from '@/src/app/components/About'
import Projects from '@/src/app/components/Prosjects'
import Header from '@/src/app/components/Header'
import Footer from '@/src/app/components/Footer'
import Contact from '@/src/app/components/Contact'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  const skillsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [isContact, setIsContact] = useState(false)
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header 
        isContact={isContact}
        setIsContact={setIsContact}
        setClickPosition={setClickPosition}
        onHero={() => scrollToSection(heroRef)}
        onSkills={() => scrollToSection(skillsRef)}
        onWork={() => scrollToSection(projectsRef)}
        onAbout={() => scrollToSection(aboutRef)}
      />
      <motion.div ref={heroRef}>
        <Hero onExplore={() => scrollToSection(skillsRef)} />
      </motion.div>
      <motion.div ref={skillsRef}>
        <div className="overflow-x-hidden">
          <Skills />
        </div>
      </motion.div>
      <motion.div ref={projectsRef}>
        <Projects />
      </motion.div>
      <motion.div ref={aboutRef}>
        <About
          isContact={isContact}
          setIsContact={setIsContact}
          setClickPosition={setClickPosition}
        />
      </motion.div>
      <Footer 
        onSkills={() => scrollToSection(skillsRef)}
        onWork={() => scrollToSection(projectsRef)}
        onAbout={() => scrollToSection(aboutRef)}
      />

      {isContact && (
        <Contact
          isOpen={isContact}
          onClose={() => setIsContact(false)}
          clickPosition={clickPosition}
        />
      )}
    </main>
  )
}