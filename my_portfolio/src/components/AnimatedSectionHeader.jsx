"use client"
import { motion } from "framer-motion"

export default function AnimatedSectionHeader({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-white">{title}</h2>
    </motion.div>
  )
}
