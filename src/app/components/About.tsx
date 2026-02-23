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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-6">
            I&apos;m Daniel Olov Mostad, a full-stack developer and 3D designer
            currently working as an IT Developer Apprentice at Visma Flyt. For
            me, IT has always been about the joy of creating. It started as
            curiosity in primary school, where I used commands in Minecraft to
            control the game, and quickly evolved into coding my own projects
            like websites. I&apos;m driven by problem-solving and the thrill of
            making a computer execute my ideas.
          </p>
          <p className="text-lg mb-6">
            After two years of vocational high school specializing in
            Information Technology, I started my apprenticeship in August 2025
            to gain real-world experience. Today I work across a wide range of
            technologies including C#, ASP.NET, Vue.js, Next.js, Node.js,
            PostgreSQL, and MariaDB. I&apos;m at my best when I can dive deep
            into the logic behind the code, and I thrive in both independent and
            collaborative environments — always bringing a curious,
            solution-oriented mindset to the table.
          </p>
          <p className="text-lg mb-6">
            Beyond work, I spend a lot of my free time on hobby programming
            projects, exploring new languages and technologies like C and
            Python. I&apos;m also into gaming — especially sandbox games where
            you can build something of your own — and I stay active through rock
            climbing, skating, bandy, and mountain hikes. People tend to
            describe me as both a &quot;nerd&quot; and an extrovert: I won&apos;t
            give up until I understand a problem, but I&apos;m equally happy
            organizing social events and helping others with technical
            challenges.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              onClick={handleContactToggle}
              className="cursor-pointer px-7 py-3.5 glow-blue bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-400 hover:to-blue-500 transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
