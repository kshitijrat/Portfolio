import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSectionHeader from './AnimatedSectionHeader'; // Assuming you have this component

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Maulana Azad National Institute of Technology, Bhopal",
      period: "Aug 2023 - May 2026",
      achievements: [
        "CGPA: 7.650",
        // Add any relevant achievements, coursework, or specializations
      ],
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Rajiv Gandhi Govt. PG College, Mandsaur",
      period: "July 2020 - April 2023",
      achievements: [
        "CGPA: 7.02",
        // Add any relevant achievements, coursework, or specializations
      ],
    },
    {
      degree: "Higher Secondary School (XIIth)",
      institution: "Alpha Senior Secondary School, Shamgarh",
      period: "July 2019 - May 2020",
      achievements: [
        "Percentage: 81.6",
        // Add any relevant achievements, coursework, or specializations
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-navy-950 to-purple-950 transition-colors text-white duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:bg-navy-700 hover:shadow-xl relative overflow-hidden mt-4"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-400 dark:text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-400 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-400 dark:text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
