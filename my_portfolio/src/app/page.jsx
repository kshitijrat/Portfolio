'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Send, ArrowRight } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from "../components/ui/input"
import { Textarea } from '../components/ui/textarea.jsx'
import About from '../components/About.jsx'
import Navbar from '../components/Navbar.jsx'
import Projects from '../components/Projects.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import Hero from '../components/Hero.jsx'
import Education from '../components/Education.jsx'

export default function Portfolio() {

  return (
    <div className="dark">
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />


        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Education Section  */}
        <Education/>

        {/* GetInTouch + Footer */}
        <GetInTouch />
      </div>
    </div>
  )
}
