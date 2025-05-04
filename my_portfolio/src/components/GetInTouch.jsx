"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Code, Send } from "lucide-react"

const GetInTouch = () => {
  // Animation variants
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
    <>
      <div className="py-20 bg-gradient-to-b from-navy-800 to-navy-900 relative overflow-hidden" id="contact">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-20 top-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>

          {/* Code pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="contact-pattern"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <path d="M25,0 L50,25 L25,50 L0,25 Z" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#contact-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10">
          {/* Main Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>

          {/* Subheading */}
          <motion.h5
            className="text-lg md:text-xl font-normal text-center text-gray-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Reach out to me through any of the platforms below!
          </motion.h5>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                className="bg-navy-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-navy-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-navy-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-navy-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-navy-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 shadow-lg mb-6"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-blue-500/20 rounded-full">
                        <Mail className="text-blue-400 w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <a
                          href="mailto:kshitijratnawat@gmail.com"
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          kshitijratnawat@gmail.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-green-500/20 rounded-full">
                        <Phone className="text-green-400 w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <a href="tel:+919755345095" className="text-white hover:text-green-400 transition-colors">
                          +91-9755345095
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-purple-500/20 rounded-full">
                        <MapPin className="text-purple-400 w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <a
                          href="https://maps.app.goo.gl/mC6RjYiNhHXesB9N6"
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          Indore, Madhya Pradesh, India
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                  variants={itemVariants}
                  className="bg-navy-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 shadow-lg"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">Find Me Online</h3>

                  {/* Social Media Icons */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      {
                        icon: <Linkedin className="w-6 h-6" />,
                        url: "https://www.linkedin.com/in/kshitij-ratnawat/",
                        color: "bg-blue-500/20",
                        textColor: "text-blue-400",
                      },
                      {
                        icon: <Github className="w-6 h-6" />,
                        url: "https://github.com/kshitijrat",
                        color: "bg-gray-500/20",
                        textColor: "text-gray-400",
                      },
                      {
                        icon: <Instagram className="w-6 h-6" />,
                        url: "https://www.instagram.com/kshitijratnawat_/",
                        color: "bg-pink-500/20",
                        textColor: "text-pink-400",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center justify-center p-4 ${social.color} rounded-lg ${social.textColor} hover:scale-110 transition-transform`}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 15px rgba(79, 70, 229, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>

                  {/* Coding Profiles */}
                  <h4 className="text-lg font-medium text-white mb-4">Coding Profiles</h4>
                  <div className="space-y-3">
                    {[
                      { name: "Codeforces", url: "https://codeforces.com/profile/kshitijrat" },
                      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/kshitijrhrii/" },
                      { name: "LeetCode", url: "https://leetcode.com/u/kshitijratnawat/" },
                    ].map((profile, index) => (
                      <motion.a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Code className="text-blue-400 w-4 h-4" />
                        <span>{profile.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-navy-950 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400">© 2025 Kshitij Ratnawat. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Made with ❤️ using React & Framer Motion</p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

export default GetInTouch
