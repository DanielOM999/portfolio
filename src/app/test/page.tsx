'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function BreakingBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Create smooth animations with springs
  const maskScale = useSpring(
    useTransform(scrollYProgress, [0.3, 0.5], [0, 1]), 
    { stiffness: 100, damping: 30 }
  )

  const imageScale = useSpring(
    useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]),
    { stiffness: 100, damping: 30 }
  )

  const glowOpacity = useSpring(
    useTransform(scrollYProgress, [0.3, 0.7], [0, 1]),
    { stiffness: 100, damping: 30 }
  )

  const textOpacity = useSpring(
    useTransform(scrollYProgress, [0.4, 0.8], [0, 1]),
    { stiffness: 100, damping: 30 }
  )

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <motion.div
              className="absolute inset-0"
              style={{ scale: imageScale }}
            >
              <div className="relative w-full h-full">
                <motion.div
                  className="absolute inset-0"
                  style={{ opacity: maskScale }}
                >
                  <img
                    src="/img/image.png"
                    alt="Project"
                    className="w-full h-full object-cover rounded-lg mask-image"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0"
                  style={{ opacity: glowOpacity }}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 mask-image">
                      <div className="w-full h-full bg-blue-900/30 blur-xl" />
                    </div>

                    <div className="absolute inset-0 mask-image">
                      <div className="w-full h-full bg-blue-800/50 blur-md" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}