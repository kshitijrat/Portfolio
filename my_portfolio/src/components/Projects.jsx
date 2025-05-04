"use client"

import finance_tracker_pic from "../assets/finance_tracker_pic.png"
import Human_Gait_Cycle_Analysis from "../assets/Human_gait_pic.png"
import stay_manager_pic from "../assets/stay_manger_pic.png"
import career_portal_pic from "../assets/career_portal_pic.png"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, BarChart, Home, DollarSign, Github, ExternalLink } from "lucide-react"

// Replace local image imports with online image URLs
const projectData = [
  {
    title: "Career & Skill Development Portal",
    description:
      "A portal to help individuals enhance their career skills with resources, tests, and progress tracking. Developed during Smart India Hackathon 2024, with JWT authentication for security.",
    githubLink: "https://github.com/kshitijrat/careerportal",
    icon: <BarChart className="text-blue-400 w-8 h-8" />,
    imageUrl:
      career_portal_pic,
    tags: ["React", "Spring Boot", "JWT", "MySQL"],
  },
  {
    title: "Human Gait Cycle Analysis",
    description:
      "A project that uses regression techniques and polynomial fitting to analyze human gait. It tracks and studies human walking patterns for health assessments and diagnostics.",
    githubLink: "https://github.com/kshitijrat/gait-cycle-analysis-using-polynomial-regression-main",
    icon: <Home className="text-blue-400 w-8 h-8" />,
    imageUrl:
      Human_Gait_Cycle_Analysis,
    tags: ["Python", "Regression", "Data Analysis", "Healthcare"],
  },
  {
    title: "Finance Tracker",
    description:
      "A personal finance tool designed to help users manage their finances, track expenses, and plan budgets. Built during Kriyeta 3.0 Hackathon.",
    githubLink: "https://github.com/kshitijrat/Finance-Tracker",
    icon: <DollarSign className="text-blue-400 w-8 h-8" />,
    imageUrl:
      finance_tracker_pic,
    tags: ["React", "JavaScript", "CSS", "LocalStorage"],
  },
  {
    title: "Stay Manager",
    description:
      "A project designed to help manage stays and accommodations efficiently, ensuring proper tracking and organization of stay details.",
    githubLink: "https://github.com/kshitijrat/Hostel_Hub",
    icon: <Home className="text-blue-400 w-8 h-8" />,
    imageUrl:
      stay_manager_pic,
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
  },
]

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-navy-900 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                filter: "blur(50px)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/30 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(index)}>
                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                    {project.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
                <motion.span
                  className="text-blue-400 bg-blue-400/10 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </motion.span>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="mt-4 overflow-hidden rounded-lg relative group">
                        <img
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-56 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <div className="flex flex-wrap gap-2 mb-2">
                              {project.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg mt-4 text-gray-300">{project.description}</p>

                      <div className="mt-4 flex gap-4">
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </motion.a>

                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
