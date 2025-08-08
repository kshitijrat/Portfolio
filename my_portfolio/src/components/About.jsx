"use client"
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Send, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from "../components/ui/input"
import { Textarea } from '../components/ui/textarea.jsx'
import my_pic from "../assets/my_pic.jpg"

const About = () => {

  // Define skill boxes as an array of objects
  // const skills = [
  //   {
  //     title: "Frontend",
  //     icon: <Code2 className="text-blue-400 mb-4" size={32} />,
  //     tech: "React.js, HTML, CSS, JavaScript, Tailwind",
  //     delay: 0.2,
  //   },
  //   {
  //     title: "Backend",
  //     icon: <Server className="text-green-400 mb-4" size={32} />,
  //     tech: "Java, Spring Boot, Spring Security, Hibernate",
  //     delay: 0.3,
  //   },
  //   {
  //     title: "Database",
  //     icon: <Database className="text-purple-400 mb-4" size={32} />,
  //     tech: "MySQL, MongoDB",
  //     delay: 0.4,
  //   },
  //   {
  //     title: "Other",
  //     icon: <Zap className="text-yellow-400 mb-4" size={32} />,
  //     tech: "DSA, OOP, OS, DBMS",
  //     delay: 0.5,
  //   },
  // ]

  const skills = [
  "Java", 
  "Spring Boot", 
  "Spring MVC", 
  "Spring Security", 
  "Hibernate", 
  "React.js", 
  "Tailwind CSS", 
  "MySQL", 
  "MongoDB", 
  "JavaScript", 
  "Python",  
  "Node.js", 
  "Git",
  "Version Control",
  "CI/CD",
  "Jenkins",
  
]


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
                  srcSet={`${my_pic} 1x, ${my_pic}@2x.jpeg 2x`}
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
                  Currently pursuing Master of Computer Application at MANIT Bhopal with a CGPA of 7.61/10.0.
                  My approach to development combines technical precision with creative problem-solving.
                </p>

                <p>
                  With expertise spanning full-stack development, I've built solutions ranging from enterprise
                  management systems to real-time monitoring applications. I've solved 400+ coding challenges
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
                      transition={{ delay: index * 0.05, duration: 0.3 }}
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
                  <span>Indore, M.P.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
