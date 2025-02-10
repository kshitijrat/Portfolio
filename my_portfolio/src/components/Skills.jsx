import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Palette, GitBranch, Code2, Box, Globe2, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-blue-400" size={24} />,
      tech: 'React.js, HTML, CSS, JavaScript, Tailwind', // Updated tech
      description: 'Building responsive and interactive user interfaces.' // Updated description
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-green-400" size={24} />,
      tech: 'Java, Spring Boot, Spring Security, Hibernate', // Updated tech
      description: 'Creating robust and scalable server-side applications.' // Updated description
    },
    {
      title: 'Database Management',
      icon: <Database className="text-purple-400" size={24} />,
      tech: 'MySQL, MongoDB', // Updated tech
      description: 'Designing and managing efficient databases.' // Updated description
    },
    {
      title: 'UI/UX Design', // Keep if relevant. Remove if you don't focus on UI/UX
      icon: <Palette className="text-pink-400" size={24} />,
      tech: 'Tailwind CSS', // Updated tech - removed Material UI if not used
      description: 'Creating user-friendly interfaces with Tailwind CSS.' // Updated description
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="text-orange-400" size={24} />,
      tech: 'Git, GitHub',
      description: 'Managing code versions and collaborating on projects.'
    },
    {
      title: 'Languages', // Changed from TypeScript to Languages
      icon: <Code2 className="text-yellow-400" size={24} />,
      tech: 'Java, Python, C, C++', // Updated tech
      description: 'Proficient in multiple programming languages.' // Updated description
    },
    {
      title: 'Core Concepts', // Changed from State Management
      icon: <Box className="text-red-400" size={24} />,
      tech: 'DSA, OOP, OS, DBMS', // Updated tech
      description: 'Strong foundation in core computer science concepts.' // Updated description
    },
    {
      title: 'API Development',
      icon: <Globe2 className="text-indigo-400" size={24} />,
      tech: 'REST', // Updated tech - removed GraphQL if not used
      description: 'Designing and implementing RESTful APIs.' // Updated description
    },
    {
      title: 'Web Performance',
      icon: <Zap className="text-blue-400" size={24} />,
      tech: 'Optimization', // Updated tech
      description: 'Optimizing web applications for performance.' // Updated description
    }
  ];

  // ... (rest of the component code remains the same)
  return (
    <div
      className="py-20 bg-gradient-to-b relative overflow-hidden from-navy-700 to-indigo-900 text-white" id="about"
    >

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>


      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="w-full h-full border border-white/10" />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-navy-800 p-6 rounded-lg hover:bg-navy-700 hover:shadow-xl transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.01 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">{skill.tech}</p>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;