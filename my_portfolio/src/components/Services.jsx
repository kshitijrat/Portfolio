import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: 'Full Stack Development', // More general title
      description: 'Building complete web solutions from frontend to backend.' // More general description
    },
    {
      icon: <Server className="text-green-400" size={32} />,
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side applications using Java and Spring Boot.' // More specific
    },
    {
      icon: <Database className="text-purple-400" size={32} />,
      title: 'Database Design & Management', // More specific
      description: 'Designing, implementing, and managing efficient databases with MySQL and MongoDB.' // More specific
    },
    {
      icon: <Layout className="text-pink-400" size={32} />,
      title: 'Frontend Development', // More specific
      description: 'Developing user-friendly interfaces with React.js, HTML, CSS, JavaScript, and Tailwind.' // More specific
    },
    {
      icon: <Globe className="text-orange-400" size={32} />,
      title: 'API Development',
      description: 'Building RESTful APIs for seamless data integration.' // More concise
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: 'Performance Optimization',
      description: 'Optimizing web applications for speed and efficiency.'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-purple-950 to-navy-900" id="services"> {/* Added ID */}
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-navy-800 p-8 rounded-lg hover:shadow-xl hover:bg-navy-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05}}
              transition={{ delay: index * 0.01 }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;