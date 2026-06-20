import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import my_pic from "../assets/my_pic.png"

const skills = [
   "Java", "Spring Boot", "Spring MVC", "Spring Security",
  "Spring Data JPA", "Hibernate", "React.js", "Angular CLI",
  "JavaScript (ES6+)", "Tailwind CSS", "MySQL", "Oracle SQL",
  "MongoDB", "Microservices", "REST APIs", "JWT / OAuth2",
  "API Gateway", "Kafka", "Python", "Git & GitHub",
  "OpenShift", "JIRA", "Android Studio",
]

const About = () => {
  return (
    <section id="about" className="py-14 border-gray-50 border-1">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">About</h2>

          <div className="grid md:grid-cols-3 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative inline-block mb-0 w-50 h-50 overflow-hidden rounded-full">
                <img
                  src={my_pic}
                  alt="Kshitij Ratnawat"
                  width={200}
                  height={200}
                  className="w-50 h-full object-cover transition-all duration-300 grayscale hover:grayscale-0"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Full-Stack Engineer pursuing Master of Computer Application at MANIT Bhopal (CGPA: 7.65).
                  Currently contributing to live production banking systems at Intellect Design Arena, Chennai —
                  developing Spring Boot microservices handling real financial transactions for PSU banks.
                </p>
                <p>
                  With expertise spanning full-stack development, I've architected microservices systems,
                  built AI-powered APIs, and delivered full-stack platforms. I've solved 400+ coding challenges
                  and achieved All India Rank 370 in NIMCET 2023.
                </p>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-medium mb-6 text-gray-900 dark:text-white">Technologies</h3>
                <div className="grid grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-8 pt-8 text-sm text-gray-500 dark:text-gray-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Pan India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About