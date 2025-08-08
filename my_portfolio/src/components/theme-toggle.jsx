'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      ) : (
        <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      )}
    </motion.button>
  )
}
