import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Code } from 'lucide-react'; // Added Code icon for coding profiles

const GetInTouch = () => {
  return (
    <>
      <div className="py-20 bg-gradient-to-b from-navy-800 to-navy-900" id="contact">
        <div className="container mx-auto px-4 md:px-12">
          {/* Main Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            You can find me on
          </motion.h2>

          {/* Subheading */}
          <motion.h5
            className="text-lg md:text-2xl font-normal text-center text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Reach out to me through any of the platforms below!
          </motion.h5>

          {/* Contact & Social Media Section */}
          <div className="border-gray-700 text-center">
            <div className="space-y-6 mt-6 text-white">
              <div className="flex flex-wrap justify-center gap-6">
                {/* Email */}
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Mail className="text-blue-400" size={24} />
                  <a href="mailto:kshitijratnawat@gmail.com" className="hover:underline">
                    kshitijratnawat@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Phone className="text-blue-400" size={24} />
                  <a href="tel:+919755345095" className="hover:underline">
                    +91-9755345095
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <MapPin className="text-blue-400" size={24} />
                  <p>Indore, Madhya Pradesh, India</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <a
                  href="https://www.linkedin.com/in/kshitij-ratnawat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="text-blue-400 hover:text-blue-500 transition-all duration-300" size={28} />
                </a>
                <a
                  href="https://github.com/kshitijrat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="text-blue-400 hover:text-blue-500 transition-all duration-300" size={28} />
                </a>
                <a
                  href="https://www.instagram.com/kshitijratnawat_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="text-blue-400 hover:text-blue-500 transition-all duration-300" size={28} />
                </a>
              </div>

              {/* Coding Profiles */}
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <a
                  href="https://codeforces.com/profile/kshitijrat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <Code className="text-blue-400" size={24} />
                  <span>Codeforces</span>
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/kshitijrhrii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <Code className="text-blue-400" size={24} />
                  <span>GeeksforGeeks</span>
                </a>
                <a
                  href="https://leetcode.com/u/kshitijratnawat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <Code className="text-blue-400" size={24} />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-gray-400 text-sm md:text-base">© 2025 Kshitij Ratnawat. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GetInTouch;