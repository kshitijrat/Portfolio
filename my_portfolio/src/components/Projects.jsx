import React, { useState } from "react";
import { motion } from "framer-motion";
import career_portal_pic from '../assets/career_portal_pic.png';
import finance_tracker_pic from '../assets/finance_tracker_pic.png';
import stay_manager_pic from "../assets/stay_manger_pic.png"
import Human_gait_pic from '../assets/Human_gait_pic.png';
import { ChevronDown, ChevronUp, Github, BarChart, Home, DollarSign } from "lucide-react"; // Importing icons

const projectData = [
  {
    title: "Career & Skill Development Portal",
    description:
      "A portal to help individuals enhance their career skills with resources, tests, and progress tracking. Developed during Smart India Hackathon 2024, with JWT authentication for security.",
    githubLink: "https://github.com/kshitijrat/careerportal",
    icon: <BarChart className="text-blue-400 w-8 h-8" />, // Adding an icon
    imageUrl: career_portal_pic,
  },
  {
    title: "Human Gait Cycle Analysis",
    description:
      "A project that uses regression techniques and polynomial fitting to analyze human gait. It tracks and studies human walking patterns for health assessments and diagnostics.",
    githubLink: "https://github.com/kshitijrat/gait-cycle-analysis-using-polynomial-regression-main",
    icon: <Home className="text-blue-400 w-8 h-8" />, // Adding an icon
    imageUrl: Human_gait_pic,
  },
  {
    title: "Finance Tracker",
    description:
      "A personal finance tool designed to help users manage their finances, track expenses, and plan budgets. Built during Kriyeta 3.0 Hackathon.",
    githubLink: "https://github.com/kshitijrat/Finance-Tracker",
    icon: <DollarSign className="text-blue-400 w-8 h-8" />, // Adding an icon
    imageUrl: finance_tracker_pic,
  },
  {
    title: "Stay Manager",
    description:
      "A project designed to help manage stays and accommodations efficiently, ensuring proper tracking and organization of stay details.",
    githubLink: "https://github.com/kshitijrat/Hostel_Hub",
    icon: <Home className="text-blue-400 w-8 h-8" />, // Adding an icon
    imageUrl: stay_manager_pic,
  },
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the dropdown
  };

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex items-center gap-4">
                  {project.icon}
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
                <span className="text-blue-400">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" /> // ChevronUp icon when details are visible
                  ) : (
                    <ChevronDown className="w-5 h-5" /> // ChevronDown icon when details are hidden
                  )}
                </span>
              </div>
              <motion.div
                className="mt-4 overflow-hidden"
                initial={{ height: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <a href={project.imageUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                </a>
                <p className="text-lg">{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 mt-4 block"
                >
                  View on GitHub
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
