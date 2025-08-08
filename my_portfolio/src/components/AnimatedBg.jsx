import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c15] to-[#050509] opacity-90" />

      {/* Subtle Animated Circles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-cyan-400/10 blur-md"
            style={{
              width: Math.random() * 100 + 60,
              height: Math.random() * 100 + 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Code pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="1.5" fill="#ffffff" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#pattern-circles)" />
      </svg>
    </div>
  )
}

export default AnimatedBackground
