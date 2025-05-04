"use client"
import { motion } from "framer-motion"
import { Code, Server, Database, Layout, Globe, Zap } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "Full Stack Development",
      description: "Building complete web solutions from frontend to backend.",
    },
    {
      icon: <Server className="text-green-400" size={32} />,
      title: "Backend Development",
      description: "Creating robust and scalable server-side applications using Java and Spring Boot.",
    },
    {
      icon: <Database className="text-purple-400" size={32} />,
      title: "Database Design & Management",
      description: "Designing, implementing, and managing efficient databases with MySQL and MongoDB.",
    },
    {
      icon: <Layout className="text-pink-400" size={32} />,
      title: "Frontend Development",
      description: "Developing user-friendly interfaces with React.js, HTML, CSS, JavaScript, and Tailwind.",
    },
    {
      icon: <Globe className="text-orange-400" size={32} />,
      title: "API Development",
      description: "Building RESTful APIs for seamless data integration.",
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed and efficiency.",
    },
  ]

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="py-20 bg-gradient-to-b from-purple-950 to-navy-900 relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-navy-800/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700/30 hover:shadow-xl hover:bg-navy-700 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(79, 70, 229, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="mb-6 text-opacity-80 group-hover:text-opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>

              <motion.div
                className="w-12 h-1 bg-blue-500 mt-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Services
