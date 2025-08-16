"use client"

import { Trophy, Users, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { motion } from "framer-motion"

const achievementsData = [
  {
    title: "NIMCET 2023",
    subtitle: "All India Rank 370",
    details: ["Among top performers in National MCA Entrance Test 2023."]
  },
  {
    title: "Hackathons",
    subtitle: "Kriyeta 3.0 & SIH 2024",
    details: [
      "Solved real-world problem in Kriyeta 3.0 National Hackathon.",
      "Advanced in Smart India Hackathon (internal round).",
      <a
        key="cert-hackathon"
        href="https://drive.google.com/file/d/1xpoODsNrc5o66_npLc2OvxEQmXM9e5XA/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View Certificates
      </a>
    ]
  },
  {
    title: "Internship",
    subtitle: "IBM SkillBuild (2024)",
    details: [
      "40-day internship gaining hands-on experience in industry-relevant technologies.",
      <a
        key="cert-internship"
        href="https://drive.google.com/file/d/1qauyaEJlWGYiLu2mQtIjUHGXbZbhky4Q/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View Certificate
      </a>
    ]
  }
]


const softSkillsData = [
  {
    title: "Leadership",
    subtitle: "2+ Years University Experience",
    details: ["Led multiple academic projects & coordinated team efforts."]
  },
  {
    title: "Teamwork",
    subtitle: "Hackathons & Projects",
    details: ["Collaborated with peers in hackathons and group projects to deliver results under deadlines."]
  },
  {
    title: "Problem-Solving",
    subtitle: "Competitive Coding & Projects",
    details: ["Ability to break down complex problems into efficient solutions."]
  },
  {
    title: "Flexibility",
    subtitle: "Adapting to Tech & Tools",
    details: ["Quickly learn new frameworks, APIs, and environments."]
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b">
      <div className="container mx-auto px-6">
        
        {/* Achievements & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Achievements</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementsData.map((ach, index) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-100 dark:border-gray-900 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 bg-white dark:bg-black h-full flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="text-xl font-medium text-gray-900 dark:text-white flex items-center space-x-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span>{ach.title}</span>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {ach.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {ach.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Soft Skills & Leadership</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkillsData.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-100 dark:border-gray-900 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 bg-white dark:bg-black h-full flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="text-xl font-medium text-gray-900 dark:text-white flex items-center space-x-2">
                      <Users className="w-5 h-5 text-green-500" />
                      <span>{skill.title}</span>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {skill.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {skill.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
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
