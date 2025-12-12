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
    <section className="relative h-screen flex items-center justify-between px-4 md:px-20 overflow-hidden">
      <Constellation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-10 md:ml-[400px]"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Daniel!</h1>
        <TypeAnimation
          sequence={[
            "I turn blank screens into 3D worlds",
            1000,
            "I build scalable web apps",
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
          className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
        >
          Explore My Work
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:block flex-1 z-10"
      >
        <div className="relative w-[400px] h-[500px] mx-auto">
          <Image
            src="/img/me.webp?height=500&width=400"
            alt="Daniel's portrait"
            fill
            className="object-cover rounded-2xl shadow-2xl backdrop-blur-sm"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
