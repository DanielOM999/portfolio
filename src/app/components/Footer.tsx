import { motion } from "framer-motion";

interface StartContactProps {
  onSkills: () => void;
  onWork: () => void;
  onAbout: () => void;
}

export default function Footer({
  onSkills,
  onWork,
  onAbout,
}: StartContactProps) {
  return (
    <footer className="mt-20 border-t border-white/10 bg-background py-10 text-gray-200">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-white">DanielOM999</h3>
          <p className="text-sm leading-6">
            Hi! I am Daniel Olov Mostad, a dedicated IT student in his second
            year of vocational high school. I am passionate about programming,
            3D design, and backend development.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/DanielOM999"
              aria-label="GitHub"
              className="hover:text-white/75 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {["Skills", "Work", "About"].map((link, index) => {
              const handleClick = () => {
                if (link === "Skills") onSkills();
                if (link === "Work") onWork();
                if (link === "About") onAbout();
              };

              return (
                <li key={index}>
                  <button
                    onClick={handleClick}
                    className="transition-colors cursor-pointer hover:text-white/75"
                  >
                    {link}
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Skills & Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-white">Education</h3>
          <ul className="space-y-2">
            <li>3 years at Svensedammen Secondary School</li>
            <li>2 years at Åssiden High School</li>
            <li>
              Specialized in Information Technology and Media Production (Year
              1)
            </li>
            <li>Specialized in Information Technology (Year 2)</li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} DanielOM999. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
