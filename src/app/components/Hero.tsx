"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Constellation from "@/src/app/components/Constellation";

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <Constellation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 z-10"
        >
          <h1 className="text-5xl font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="text-blue-400">Daniel!</span>
          </h1>
          <TypeAnimation
            sequence={[
              "IT Developer Apprentice at Visma Flyt",
              1000,
              "I build scalable web apps",
              1000,
              "I turn blank screens into 3D worlds",
              1000,
              "I create immersive experiences",
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-3xl text-blue-400"
            repeat={Infinity}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExplore}
            className="cursor-pointer mt-8 px-7 py-3.5 glow-blue bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-400 hover:to-blue-500 transition-all duration-300"
          >
            Explore My Work
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex flex-1 z-10 justify-end"
        >
          <div className="relative w-100 h-125">
            <Image
              src="/img/me.webp"
              alt="Daniel's portrait"
              fill
              unoptimized
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
