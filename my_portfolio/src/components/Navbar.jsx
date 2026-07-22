"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Calendar } from "lucide-react"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Apna Cal.com ya Calendly link yahan dalo
  const BOOKING_LINK = "https://cal.com/kshitij-ratnawat-zpq7of/15-min-enquiry-call" 

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 120

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
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm' 
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <motion.div
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer flex items-center gap-2 text-xl font-bold tracking-wider text-gray-900 dark:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 flex items-center justify-center text-xs font-mono font-bold">
                KR
              </span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Ratnawat
              </span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-900/50 p-1.5 rounded-full border border-gray-200/60 dark:border-gray-800/60 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-gray-900 dark:text-white font-semibold'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {item.id === 'services' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                      {item.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Book A Meeting CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all duration-300 shadow-sm shadow-cyan-500/20 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Meeting
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-black/95 border-b border-gray-200 dark:border-gray-800 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-6 py-6 space-y-3">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-2 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? 'bg-cyan-500/10 text-cyan-500 font-medium border border-cyan-500/20'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="text-xs bg-cyan-500 text-black px-2 py-0.5 rounded-full font-semibold">Active</span>}
                    </button>
                  )
                })}
                
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 py-3 bg-cyan-400 text-black font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Meeting
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar