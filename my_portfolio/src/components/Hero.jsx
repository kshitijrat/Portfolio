import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import my_pic from '../assets/my_pic.jpg';
import Particles from 'react-tsparticles';
import { Download } from 'lucide-react'; // Import the Download icon

const CodePattern = () => (
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
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" fill="url(#pattern-circles)"></rect>
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#151b3b] to-[#06060e]"
    >
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 2 },
            opacity: { value: 0.7 },
            line_linked: { enable: true, distance: 150, color: "#ffffff" },
          },
        }}
      />

      {/* Programming-themed Background */}
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>

      <div className="container  px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row  gap-0">
          {/* Profile Image with Hover Animation */}
          <div className='w-full ml-2 h-full  max-h-fit max-w-xl'>
            <motion.div
              className="lg:w-1/2 w-72 h-72 py-5 md:w-96 md:h-96 mx-auto my-auto lg:mb-0 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative w-full h-full"
                initial={{ rotate: 0 }}
                whileHover={{
                  rotate: [20, -20],
                  transition: { duration: 1, repeat: 1 },
                }}
                animate={{ rotate: 0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-6 opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl transform -rotate-6 opacity-50"></div>
                <div className="absolute rounded-2xl w-full h-full overflow-hidden shadow-2xl">
                  <img
                    src={my_pic}
                    alt="Kshitij Ratnawat"
                    className="w-full h-full object-cover relative"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>


          {/* Text Content with Animated Name and Typing Effect */}
          <motion.div
            className="lg:w-2/3  text-center lg:text-left justify-center"
            initial={{ opacity: 0, y: 100 }} // Start from further off-screen
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-900"
              initial={{ opacity: 0 }}
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {/* Falling letters */}
              {Array.from("Kshitij Ratnawat").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={{
                    hidden: { y: -100, opacity: 0 }, // Start further off-screen
                    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Typing effect with infinite loop */}
            <motion.div className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
              <Typewriter
                words={["Full Stack Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              NIT Bhopal MCA student with a strong background in programming and problem-solving.
              Proficient in full-stack development, leveraging React.js and Spring Boot to deliver
              impactful software solutions.
            </p>

            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/kshitijrat"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/kshitij-ratnawat/"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:kshitijratnawat@gmail.com"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>

            <motion.button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowDown className="w-4 h-4" />
            </motion.button>

            {/* View resume button */}
            <motion.button
              onClick={() => window.open('https://drive.google.com/file/d/13Ros_IZKmcCvYfdu7i7bWNA3QdE-S_yi/view?usp=sharing', '_blank')}
              className="inline-flex items-center ml-5 gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
              <Download className="w-4 h-4" />
            </motion.button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
