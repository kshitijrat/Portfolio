import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Zap } from 'lucide-react';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Define skill boxes as an array of objects
  const skills = [
    {
      title: 'Frontend',
      icon: <Code2 className="text-blue-400 mb-4" size={32} />,
      tech: 'React.js, HTML, CSS, JavaScript, Tailwind',
      delay: 0.2
    },
    {
      title: 'Backend',
      icon: <Server className="text-green-400 mb-4" size={32} />,
      tech: 'Java, Spring Boot, Spring Security, Hibernate',
      delay: 0.3
    },
    {
      title: 'Database',
      icon: <Database className="text-purple-400 mb-4" size={32} />,
      tech: 'MySQL, MongoDB',
      delay: 0.4
    },
    {
      title: 'Other',
      icon: <Zap className="text-yellow-400 mb-4" size={32} />,
      tech: 'DSA, OOP, OS, DBMS',
      delay: 0.5
    }
  ];

  return (
    <div
      className="py-20 bg-gradient-to-b from-indigo-900 to-navy-700 text-white"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="prose text-gray-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4">
              MCA student at NIT Bhopal with strong programming and problem-solving skills. Experienced in full-stack development using React.js and Spring Boot. Passionate about contributing to impactful projects and excelling in software development roles.
            </p>
            <p>
              I have hands-on experience in building and deploying web applications using Java, Spring Boot, React.js, and other related technologies. I am a quick learner and always eager to explore new technologies and frameworks to enhance my skills and contribute to innovative projects.
            </p>
          </motion.div>

          {/* Map over the skills array to render skill boxes */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-navy-800 p-6 rounded-lg hover:bg-navy-700 hover:shadow-2xl transition-colors"
                variants={cardVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05}}
                transition={{ delay: index * 0.01 }}
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
