"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Constellation from "@/src/app/components/Constellation";

export default function NotFound() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 md:px-20 overflow-hidden">
      <Constellation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <TypeAnimation
          sequence={[
            "Page not found",
            1000,
            "Lost in the digital space",
            1000,
            "Exploring uncharted territory",
            1000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-3xl text-blue-400 mb-8"
          repeat={Infinity}
        />
        <p className="text-xl mb-8">
          Oops! It seems you've ventured into an unexplored dimension.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Return to Known Space
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <p className="text-sm text-gray-400">
          Lost? Don't worry, even the best explorers sometimes drift off course.
        </p>
      </motion.div>
    </section>
  );
}
