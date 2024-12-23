import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-background py-10 text-gray-200">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-white">
            DanielOM99
          </h3>
          <p className="text-sm text-gray-200">
            Hi! i am Daniel Olov Mostad, a dedicated IT student in his second year of vocational high school. I am passionate about programming, 3D design, and backend development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="space-y-2" style={{ transform: "translateX(0px)" }}>
            {["Home", "Skills", "Work"].map((link, index) => (
              <li key={index}>
                <Link
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="transition-colors cursor-pointer z-10 hover:text-white/75"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-white">
            Find Me At
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://github.com/DanielOM999"
                className="flex items-center space-x-2 transition-colors hover:text-white/75"
                style={{ transform: "translateX(0px)" }}
              >
                <span>Github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-10 text-white"
                  style={{ transform: 'translateY(-2px)' }}
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} SwiftBinderUB. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
