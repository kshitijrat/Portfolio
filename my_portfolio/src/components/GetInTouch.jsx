"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import axios from 'axios' // install this via `npm i axios`
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Send, ArrowRight } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from "../components/ui/input"
import { Textarea } from '../components/ui/textarea.jsx'


const GetInTouch = () => {

  // Inside your component
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })


  const [status, setStatus] = useState({ success: null, message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData)
      console.log('Server response:', res.data)  // response ka data console me dikhayega
      setStatus({ success: true, message: res.data.message || 'Message sent successfully!' })
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('Error sending message:', err.response?.data || err.message)
      alert(err.response?.data?.message || 'Failed to send message.')
    }
  }


  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Contact</h2>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-medium mb-6 text-gray-900 dark:text-white">Get In Touch</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    I'm always interested in discussing new opportunities and innovative projects.
                    Let's connect and explore how we can work together.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:kshitijratnawat@gmail.com"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                    <span>kshitijratnawat@gmail.com</span>
                  </a>

                  <a
                    href="tel:+919755345095"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 9755345095</span>
                  </a>

                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5" />
                    <span>Indore, M.P., India</span>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="flex space-x-6">
                    {[
                      { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/kshitijratnawat", label: "LinkedIn" },
                      { icon: <Github className="w-5 h-5" />, href: "https://github.com/kshitijratnawat", label: "GitHub" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-400 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="border-gray-200 dark:border-gray-800 focus:border-cyan-500 dark:focus:border-cyan-400 bg-white dark:bg-black"
                      />
                    </div>
                    <div>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="border-gray-200 dark:border-gray-800 focus:border-cyan-500 dark:focus:border-cyan-400 bg-white dark:bg-black"
                      />
                    </div>
                  </div>

                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border-gray-200 dark:border-gray-800 focus:border-cyan-500 dark:focus:border-cyan-400 bg-white dark:bg-black"
                  />

                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="border-gray-200 dark:border-gray-800 focus:border-cyan-500 dark:focus:border-cyan-400 bg-white dark:bg-black"
                  />

                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Message"
                    className="border-gray-200 dark:border-gray-800 focus:border-cyan-500 dark:focus:border-cyan-400 bg-white dark:bg-black resize-none"
                  />

                  <motion.button
                    type="submit"
                    className="w-full py-3 border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-400 text-gray-900 dark:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>

                  {status.message && (
                    <p className={status.success ? 'text-green-600' : 'text-red-600'}>
                      {status.message}
                    </p>
                  )}
                </form>


              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-500">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Kshitij Ratnawat. All rights reserved.</p>
            </div>
            <div className="flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default GetInTouch
