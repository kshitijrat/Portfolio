"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <>
      <motion.nav
          className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-900"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                className="text-xl px-1 font-semibold"
                whileHover={{ scale: 1.02 }}
              >
                KR
              </motion.div>
              <div className="overflow-x-auto ml-5 py-1 scrollbar-hide whitespace-nowrap flex items-center gap-6 md:gap-8">
                {['hero', 'about', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-sm transition-colors duration-200 ${activeSection === section
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>


    </>
  )
}

export default Navbar
