"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Download } from "lucide-react"
import my_pic from "../assets/my_pic.jpg"
// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151b3b] to-[#06060e] opacity-80"></div>

      {/* Animated circles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Code pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
        </pattern>
        <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
      </svg>
    </div>
  )
}

export default function Hero() {
  // Using an online profile image
  // const profileImageUrl =
  //   "../assets/my_pic.jpg";

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image with enhanced animations */}
          <motion.div
            className="lg:w-1/2 w-72 h-72 md:w-96 md:h-96 mx-auto lg:mx-0 flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl"
                animate={{
                  rotate: [0, 6, 0, -6, 0],
                  scale: [1, 1.02, 1, 1.02, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                }}
                style={{ opacity: 0.5 }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl"
                animate={{
                  rotate: [0, -6, 0, 6, 0],
                  scale: [1, 1.02, 1, 1.02, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  delay: 0.5,
                }}
                style={{ opacity: 0.5 }}
              />

              {/* Image container with glow effect */}
              <div className="absolute rounded-2xl w-full h-full overflow-hidden shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                <img
                  src={my_pic || "/placeholder.svg"}
                  alt="Kshitij Ratnawat"
                  className="w-full h-full object-cover relative"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content with enhanced animations */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ opacity: 0 }}
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {/* Falling letters with improved animation */}
              {Array.from("Kshitij Ratnawat").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={{
                    hidden: { y: -100, opacity: 0, rotateY: 90 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      rotateY: 0,
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                      },
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Typing effect with enhanced styling */}
            <motion.div
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200 h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-blue-400 mr-2">I'm a</span>
              <Typewriter
                words={["Full Stack Developer", "Java Developer", "React Developer", "Problem Solver"]}
                loop={Number.POSITIVE_INFINITY}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              NIT Bhopal MCA student with a strong background in programming and problem-solving. Proficient in
              full-stack development, leveraging React.js and Spring Boot to deliver impactful software solutions.
            </motion.p>

            {/* Social links with hover animations */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              {[
                {
                  href: "https://github.com/kshitijrat",
                  icon: <Github className="w-6 h-6" />,
                  label: "GitHub Profile",
                },
                {
                  href: "https://www.linkedin.com/in/kshitij-ratnawat/",
                  icon: <Linkedin className="w-6 h-6" />,
                  label: "LinkedIn Profile",
                },
                {
                  href: "mailto:kshitijratnawat@gmail.com",
                  icon: <Mail className="w-6 h-6" />,
                  label: "Email Contact",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300 shadow-lg"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Action buttons with enhanced animations */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <motion.button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(79, 70, 229, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowDown className="w-4 h-4" />
              </motion.button>

              <motion.button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13Ros_IZKmcCvYfdu7i7bWNA3QdE-S_yi/view?usp=sharing",
                    "_blank",
                  )
                }
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
                <Download className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
