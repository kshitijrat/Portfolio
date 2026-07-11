import { motion } from "framer-motion"
import { Briefcase, Award, Calendar, MapPin, ArrowRight, Link } from "lucide-react"

const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Intellect Design Arena",
    duration: "January 2026 – June 2026",
    location: "Chennai, Tamil Nadu",
    description: [
      "Developed Spring Boot microservices for the Cash Management in a live PSU banking project deployed at Indian Bank.",
      "Built an auto-return feature for transactions stuck in the GL-to-GL process, reducing manual intervention.",
      "Implemented direct file routing to GAMEFT, streamlining payment file processing.",
      "Re-architected a legacy payment cloud service into a faster, more reliable module using optimized data structures.",
      "Optimized Oracle Database queries, improving transaction processing speed by 40%+ through indexing and query tuning.",
      "Wrote unit and integration tests (SIT/UAT) and participated in code reviews to ensure clean, production-ready code."
    ],
    skills: ["Java", "Spring Boot", "REST APIs", "Oracle SQL", "Microservices", "Git", "OpenShift", "System Design"],
    certificateLink: ""
  }
  // {
  //   role: "Web Development Intern",
  //   company: "Saakshi IT Solution Pvt. Ltd.",
  //   duration: "May 2025 – Oct 2025",
  //   location: "Kota, India",
  //   description: [
  //     "Built a real-time Disaster Alert System using Spring Boot, Spring Security, and MongoDB with focus on performance and scalability.",
  //     "Worked on backend web development using Java and related technologies.",
  //     "Gained hands-on experience in REST API design and database management."
  //   ],
  //   skills: ["Java", "Spring Boot", "Spring Security", "MongoDB", "REST APIs", "JavaScript"],
  //   certificateLink: ""
  // }
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
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed mb-4 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-sm">{point}</li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
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