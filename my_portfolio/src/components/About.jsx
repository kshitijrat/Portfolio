"use client"
import { motion } from "framer-motion"
import { Code2, Server, Database, Zap } from "lucide-react"

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Define skill boxes as an array of objects
  const skills = [
    {
      title: "Frontend",
      icon: <Code2 className="text-blue-400 mb-4" size={32} />,
      tech: "React.js, HTML, CSS, JavaScript, Tailwind",
      delay: 0.2,
    },
    {
      title: "Backend",
      icon: <Server className="text-green-400 mb-4" size={32} />,
      tech: "Java, Spring Boot, Spring Security, Hibernate",
      delay: 0.3,
    },
    {
      title: "Database",
      icon: <Database className="text-purple-400 mb-4" size={32} />,
      tech: "MySQL, MongoDB",
      delay: 0.4,
    },
    {
      title: "Other",
      icon: <Zap className="text-yellow-400 mb-4" size={32} />,
      tech: "DSA, OOP, OS, DBMS",
      delay: 0.5,
    },
  ]

  return (
    <div className="py-20 bg-gradient-to-b from-indigo-900 to-navy-700 text-white relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="prose text-gray-300 max-w-none"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              MCA student at NIT Bhopal with strong programming and problem-solving skills. Experienced in full-stack
              development using React.js and Spring Boot. Passionate about contributing to impactful projects and
              excelling in software development roles.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I have hands-on experience in building and deploying web applications using Java, Spring Boot, React.js,
              and other related technologies. I am a quick learner and always eager to explore new technologies and
              frameworks to enhance my skills and contribute to innovative projects.
            </motion.p>
          </motion.div>

          {/* Map over the skills array to render skill boxes with staggered animations */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-navy-800/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700/30 hover:bg-navy-700 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(79, 70, 229, 0.2)",
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
