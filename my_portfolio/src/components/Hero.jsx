import { motion } from "framer-motion"
import { Linkedin, Github, ExternalLink, ChevronDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">


      <section id="her" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto">
            {/* Heading and subtitle */}
            <motion.h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              Kshitij Ratnawat
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 font-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
              Full-Stack Developer crafting digital experiences
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Icons below buttons */}
            <motion.div
              className="mt-8 flex justify-center space-x-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}>
              <a href="https://www.linkedin.com/in/kshitij-ratnawat/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="https://github.com/kshitijrat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://drive.google.com/file/d/1IlCLxfdkVYM7V7iJgkIEuKOChGqfdv95/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                View Resume
              </a>
            </motion.div>

            {/* platforms  */}
            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                {
                  name: "GFG",
                  url: "https://www.geeksforgeeks.org/user/kshitijrhrii/"
                },
                {
                  name: "LeetCode",
                  url: "https://leetcode.com/u/kshitijratnawat/"
                },
                {
                  name: "Codeforces",
                  url: "https://codeforces.com/profile/kshitijrat"
                }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {/* Developer icon */}
                  <div className="bg-gray-800 p-3 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  </div>
                  <span className="mt-2 text-sm">{item.name}</span>
                </a>
              ))}
            </motion.div>



          </motion.div>

          {/* Scroll down arrow */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>
      </section>
    </section>
  )
}
