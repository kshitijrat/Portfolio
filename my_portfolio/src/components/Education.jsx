"use client"

import { GraduationCap, Calendar, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { motion } from "framer-motion"

const educationData = [
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
    achievements: ["Percentage: 81.6%"],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gradient-to-b">

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Education</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-100 dark:border-gray-900 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 bg-white dark:bg-black h-full flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="text-xl font-medium text-gray-900 dark:text-white flex items-center space-x-2">
                      <GraduationCap className="w-5 h-5 text-blue-500" />
                      <span>{edu.degree}</span>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      {edu.period}
                    </p>

                    <div className="mt-4">
                      <p className="text-sm font-semibold flex items-center text-gray-700 dark:text-gray-300 mb-1">
                        <Award className="w-4 h-4 mr-2 text-blue-400" />
                        Key Achievement:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                        {edu.achievements.map((ach, idx) => (
                          <li key={idx}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
