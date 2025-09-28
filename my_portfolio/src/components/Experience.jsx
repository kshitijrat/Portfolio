"use client"
import { motion } from "framer-motion"
import { Briefcase, Award, Calendar, MapPin, ArrowRight, Link } from "lucide-react"

const experiences = [
  {
    role: "Software Development Intern (Java Full Stack)",
    company: "Saakshi IT TechSolutions Pvt. Ltd.",
    duration: "January 2025 – Jun 2025",
    location: "Indore, M.P.",
    description:
      "Worked on building and optimizing REST APIs using Spring Boot and Hibernate. Integrated JWT-based authentication and developed scalable microservices for internal tools.",
    skills: ["Java", "Spring Boot", "Hibernate", "JWT","React.js", "MySQL"],
    certificateLink: "https://drive.google.com/file/d/1hoKcNrRswi_IjJ1CgO97-cvEyD4c6qzy/view?usp=sharing",
  },
  // {
  //   role: "Hackathon Finalist - Simhastha Tech Hackathon 2025",
  //   company: "Govt. of Madhya Pradesh",
  //   duration: "March 2025",
  //   location: "Ujjain, M.P.",
  //   description:
  //     "Developed a real-time Disaster Alert & Rescue Recommendation System. Integrated multiple APIs for earthquake and weather data, and used IoT sensors for live monitoring.",
  //   skills: ["React.js", "Node.js", "MongoDB", "Leaflet.js", "Socket.IO"],
  // },
  // {
  //   role: "Smart India Hackathon 2024",
  //   company: "Govt. of India",
  //   duration: "Aug 2024",
  //   location: "Bhopal, M.P.",
  //   description:
  //     "Built a Career & Skill Development Portal to help users track their progress and improve employability skills with secure authentication and interactive quizzes.",
  //   skills: ["React.js", "Spring Boot", "JWT", "MySQL"],
  // },
]

const Experience = () => {
 return (
    <section id="experience" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative border border-gray-100 dark:border-gray-900 rounded-2xl p-6 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 bg-white dark:bg-black shadow-sm hover:shadow-md"
              >
                {/* Role & Company */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-cyan-500" />
                      {exp.role}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-500 mt-3 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Certificate Button */}
                {exp.certificateLink && (
                  <div className="text-right">
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-400 text-gray-900 dark:text-white rounded-lg transition-all duration-300"
                    >
                      <Link className="w-4 h-4" />
                      Certificate
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
