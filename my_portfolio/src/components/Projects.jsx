import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing the dropdown icons

const projectData = [
  {
    title: "Career & Skill Development Portal",
    description:
      "A portal to help individuals enhance their career skills with resources, tests, and progress tracking. Developed during Smart India Hackathon 2024, with JWT authentication for security.",
    githubLink: "https://github.com/kshitijrat/careerportal",
  },
  {
    title: "Human Gait Cycle Analysis",
    description:
      "A project that uses regression techniques and polynomial fitting to analyze human gait. It tracks and studies human walking patterns for health assessments and diagnostics.",
    githubLink: "https://github.com/kshitijrat/gait-cycle-analysis-using-polynomial-regression-main",
  },
  {
    title: "Finance Tracker",
    description:
      "A personal finance tool designed to help users manage their finances, track expenses, and plan budgets. Built during Kriyeta 3.0 Hackathon.",
    githubLink: "https://github.com/kshitijrat/Finance-Tracker",
  },
  {
    title: "Stay Manager",
    description:
      "A project designed to help manage stays and accommodations efficiently, ensuring proper tracking and organization of stay details.",
    githubLink: "https://github.com/kshitijrat/Hostel_Hub",
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
        <div className="space-y-6">
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
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <span className="text-blue-400">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" /> // ChevronUp icon when details are visible
                  ) : (
                    <ChevronDown className="w-5 h-5" /> // ChevronDown icon when details are hidden
                  )}
                </span>
              </div>
              <motion.div
                className="mt-4"
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
