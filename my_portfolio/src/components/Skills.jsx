"use client"
import { motion } from "framer-motion"
import { Code, Server, Database, Palette, GitBranch, Code2, Box, Globe2, Zap } from "lucide-react"

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-400" size={24} />,
      tech: "React.js, HTML, CSS, JavaScript, Tailwind",
      description: "Building responsive and interactive user interfaces.",
      proficiency: 85,
    },
    {
      title: "Backend Development",
      icon: <Server className="text-green-400" size={24} />,
      tech: "Java, Spring Boot, Spring Security, Hibernate",
      description: "Creating robust and scalable server-side applications.",
      proficiency: 80,
    },
    {
      title: "Database Management",
      icon: <Database className="text-purple-400" size={24} />,
      tech: "MySQL, MongoDB",
      description: "Designing and managing efficient databases.",
      proficiency: 75,
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="text-pink-400" size={24} />,
      tech: "Tailwind CSS",
      description: "Creating user-friendly interfaces with Tailwind CSS.",
      proficiency: 70,
    },
    {
      title: "Version Control",
      icon: <GitBranch className="text-orange-400" size={24} />,
      tech: "Git, GitHub",
      description: "Managing code versions and collaborating on projects.",
      proficiency: 85,
    },
    {
      title: "Languages",
      icon: <Code2 className="text-yellow-400" size={24} />,
      tech: "Java, Python, C, C++",
      description: "Proficient in multiple programming languages.",
      proficiency: 80,
    },
    {
      title: "Core Concepts",
      icon: <Box className="text-red-400" size={24} />,
      tech: "DSA, OOP, OS, DBMS",
      description: "Strong foundation in core computer science concepts.",
      proficiency: 75,
    },
    {
      title: "API Development",
      icon: <Globe2 className="text-indigo-400" size={24} />,
      tech: "REST",
      description: "Designing and implementing RESTful APIs.",
      proficiency: 80,
    },
    {
      title: "Web Performance",
      icon: <Zap className="text-blue-400" size={24} />,
      tech: "Optimization",
      description: "Optimizing web applications for performance.",
      proficiency: 70,
    },
  ]

  return (
    <div className="py-20 bg-gradient-to-b relative overflow-hidden from-navy-700 to-indigo-900 text-white" id="skills">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-navy-800/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700/30 hover:bg-navy-700 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(79, 70, 229, 0.2)",
              }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>

              <p className="text-gray-400 text-sm mb-3">{skill.tech}</p>
              <p className="text-gray-300 mb-4">{skill.description}</p>

              {/* Skill proficiency bar */}
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
                <motion.div
                  className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: "0%" }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                />
              </div>
              <div className="flex justify-end">
                <span className="text-xs text-gray-400">{skill.proficiency}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
