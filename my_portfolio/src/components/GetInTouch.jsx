import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react'; // Import icons

const GetInTouch = () => {
  return (
    <div className="py-20 bg-navy-900" id="contact">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <div className="space-y-6 justify-self-center p-4 mr-20">
            <h3 className="text-2xl font-semibold text-white mb-2 mr-20">Contact Information</h3>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" size={24} />
                <a
                  href="mailto:kshitijratnawat@gmail.com"
                  className="text-white hover:underline"
                >
                  kshitijratnawat@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" size={24} />
                <a href="tel:+919755345095" className="text-white hover:underline">
                  +91-9755345095
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" size={24} />
                <p className="text-white">Indore, Madhya Pradesh, India</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/kshitij-ratnawat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="text-blue-400 hover:text-blue-500 transition" size={24} />
                </a>
                <a
                  href="https://github.com/kshitijrat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="text-blue-400 hover:text-blue-500 transition" size={24} />
                </a>
                <a
                  href="https://www.instagram.com/kshitijratnawat_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="text-blue-400 hover:text-blue-500 transition" size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-navy-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-navy-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                className="w-full bg-navy-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
