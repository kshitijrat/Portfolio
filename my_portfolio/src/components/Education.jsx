"use client"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Maulana Azad National Institute of Technology, Bhopal",
      period: "Aug 2023 - May 2026",
      achievements: ["CGPA: 7.650"],
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Rajiv Gandhi Govt. PG College, Mandsaur",
      period: "July 2020 - April 2023",
      achievements: ["CGPA: 7.02"],
    },
    {
      degree: "Higher Secondary School (XIIth)",
      institution: "Alpha Senior Secondary School, Shamgarh",
      period: "July 2019 - May 2020",
      achievements: ["Percentage: 81.6"],
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-navy-950 to-purple-950 transition-colors text-white duration-300 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>

        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full w-1 h-1"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(79, 70, 229, 0.2)",
              }}
              className="bg-navy-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/30 transition-all duration-300 hover:bg-navy-700 hover:shadow-xl relative overflow-hidden mt-8"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 rounded-br-full z-0"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/20 rounded-tl-full z-0"></div>

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-semibold mb-2 text-white flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-400" />
                  {edu.degree}
                </motion.h3>

                <motion.p
                  className="text-xl text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {edu.institution}
                </motion.p>

                <motion.p
                  className="text-gray-400 mb-4 flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                  {edu.period}
                </motion.p>

                <motion.h4
                  className="text-lg font-medium mb-2 text-gray-200 flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Award className="w-5 h-5 mr-2 text-blue-400" />
                  Key Achievements:
                </motion.h4>

                <motion.ul
                  className="list-disc list-inside space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
