"use client";

import { SetStateAction, Dispatch } from "react";
import { motion } from "framer-motion";

interface AboutProps {
  setIsContact: Dispatch<SetStateAction<boolean>>;
  isContact: boolean;
  setClickPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
}

export default function About({
  setIsContact,
  isContact,
  setClickPosition,
}: AboutProps) {
  const handleContactToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsContact(!isContact);
  };

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
            I&apos;m Daniel Olov Mostad, an aspiring full-stack developer and 3D
            designer with a passion for technology and problem-solving. With
            nearly three years of programming experience, I&apos;ve developed
            skills in a variety of technologies, including Next.js, Tailwind
            CSS, Node.js, PostgreSQL, and Redis. I&apos;ve also worked on
            setting up and managing servers for websites and gaming platforms,
            such as Minecraft.
          </p>
          <p className="text-lg mb-6">
            My journey began in school, where I delved into programming as a
            subject, and it has since become my career aspiration. I thrive in
            both independent and collaborative environments, always bringing a
            positive, solution-oriented mindset to the table. From creating
            scalable web applications to automating workflows, I enjoy tackling
            challenges and delivering innovative solutions.
          </p>
          <p className="text-lg mb-6">
            Beyond development, I&apos;m deeply interested in server management,
            IT infrastructure, and exploring the latest advancements in
            technology. I&apos;m also an outdoor enthusiast who loves rock
            climbing, hiking, and engaging in creative hobbies like graphic
            design and sandbox gaming. My goal is to continually grow, learn,
            and contribute meaningfully to the tech industry.
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
  );
}
