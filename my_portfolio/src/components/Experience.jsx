import React from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSectionHeader from './AnimatedSectionHeader'; // Assuming you have this component

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Full Stack Java Developer",
      company: "Remote",
      period: "Oct 2024 - Dec 2024",
      achievements: [
        "Designed and developed a responsive e-commerce website with product listing, advanced filters, and secure checkout.",
        "Built RESTful APIs for seamless frontend-backend communication and implemented JWT security for secure authentication.",
      ],
    },
    
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-navy-900 via-navy-700 to-purple-950 transition-colors text-white duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Experience" />
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:bg-navy-700 hover:shadow-xl relative overflow-hidden mt-4"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <Briefcase className="w-6 h-6 mr-2" />
                  {exp.title}
                </h3>
                <p className="text-xl text-gray-400 dark:text-gray-300 mb-4">{exp.company}</p>
                <p className="text-gray-400 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, idx) => (
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
};

export default Experience;
