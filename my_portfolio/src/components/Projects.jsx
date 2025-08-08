"use client"

import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Send, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from "../components/ui/input"
import { Textarea } from '../components/ui/textarea.jsx'
import { useState } from "react"
import { motion } from 'framer-motion'

const projectData = [
  {
    title: "Career & Skill Development Portal",
    description:
      "Portal to enhance career skills with resources, quizzes, and progress tracking. Built for Smart India Hackathon 2024 with secure JWT auth.",
    githubLink: "https://github.com/kshitijrat/careerportal",
    imageUrl: "https://your-image-host.com/career_portal_pic.png",
    tags: ["React", "Spring Boot", "JWT", "MySQL"],
  },
  {
    title: "Human Gait Cycle Analysis",
    description:
      "Analyzes human walking patterns using polynomial regression for healthcare diagnostics.",
    githubLink:
      "https://github.com/kshitijrat/gait-cycle-analysis-using-polynomial-regression-main",
    imageUrl: "https://your-image-host.com/human_gait_pic.png",
    tags: ["Python", "Regression", "Healthcare", "Data Analysis"],
  },
  {
    title: "Finance Tracker",
    description:
      "A personal finance tool to manage expenses and budgets. Built during Kriyeta 3.0 Hackathon.",
    githubLink: "https://github.com/kshitijrat/Finance-Tracker",
    imageUrl: "https://your-image-host.com/finance_tracker_pic.png",
    tags: ["React", "JavaScript", "CSS", "LocalStorage"],
  },
  {
    title: "Stay Manager",
    description:
      "Spring Boot based accommodation and hostel management tool with MySQL and Thymeleaf.",
    githubLink: "https://github.com/kshitijrat/Hostel_Hub",
    imageUrl: "https://your-image-host.com/stay_manger_pic.png",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
  },
  {
    title: "DevScope",
    description:
      "A developer portfolio analyzer that visualizes GitHub stats with clean UI and dynamic comparisons.",
    githubLink: "https://github.com/kshitijrat/devscope",
    liveDemo: "https://devscope.vercel.app/",
    imageUrl: "https://your-image-host.com/devscope.png",
    tags: ["React", "Tailwind", "GitHub API", "Vite"],
  },
  {
    title: "Disaster Alert System",
    description:
      "Real-time disaster alerts using location, earthquake APIs, weather data, and IoT sensor input. Built for Simhastha Tech Hackathon 2025.",
    githubLink: "https://github.com/kshitijrat/disaster-alert-system",
    liveDemo: "https://disaster-alert.live",
    imageUrl: "https://your-image-host.com/disaster_alert.png",
    tags: ["React", "Spring Boot", "MongoDB", "Map", "Socket.IO"],
  },
]

const Projects = () => {
  
  const projects = [
    {
      title: "Hostel Hub",
      description: "Full-stack hostel management system with role-based authentication and comprehensive operations management.",
      technologies: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf", "Spring Security"],
      github: "#",
      live: null,
      image: "/placeholder.svg?height=240&width=400&text=Hostel+Hub"
    },
    {
      title: "DevScope",
      description: "Modern GitHub profile explorer with interactive data visualization and side-by-side profile comparison.",
      technologies: ["React.js", "Tailwind CSS", "GitHub API", "Chart.js"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=240&width=400&text=DevScope"
    },
    {
      title: "Disaster Alert Detection",
      description: "Real-time disaster monitoring application with dynamic mapping and multi-API integration.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Leaflet.js"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=240&width=400&text=Disaster+Alert"
    }
  ]


  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Selected Work</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border border-gray-100 dark:border-gray-900 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 bg-white dark:bg-black">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={240}
                      className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-medium text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-500 dark:text-gray-500 border-b border-gray-200 dark:border-gray-800 pb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center space-x-1"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center space-x-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/kshitijratnawat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span>View more on GitHub</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
