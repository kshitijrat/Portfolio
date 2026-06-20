import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { motion } from 'framer-motion'
import orderProcessing from '../assets/order-processing.svg?url'
import aiCodeAssistant from '../assets/ai-code-assistant.svg?url'
import taskBoard from '../assets/task-board.svg?url'
import devscope from '../assets/devscope.svg?url'
import gaitAnalysis from '../assets/gait-analysis.svg?url'

const projects = [
  {
    title: "Distributed Order Processing System",
    description:
      "Production-grade microservices architecture with 4 independent services (Order, Payment, Inventory, Notification). Implements JWT auth, role-based access, Razorpay webhook-based async payment processing, and API Gateway with service discovery.",
    technologies: ["Java", "Spring Boot", "Microservices", "JWT", "Razorpay", "MySQL"],
    github: "https://github.com/kshitijrat/distributed-order-processing-microservices",
    live: null,
    img: orderProcessing
  },
  {
    title: "AI-Powered Code Assistant",
    description:
      "Spring Boot REST API integrating Google Gemini LLM to answer programming and backend questions using prompt engineering. Features async response handling and token management.",
    technologies: ["Java", "Spring Boot", "Gemini API", "REST API", "LLM"],
    github: "https://github.com/kshitijrat/springboot-llm-api-assistant",
    live: null,
    img: aiCodeAssistant
  },
  {
    title: "Distributed Task Board & Workspace Collaboration",
    description:
      "Full-stack Kanban platform using React.js and Spring Boot with JWT authentication. Integrated REST APIs with React Context API for state management and MongoDB Atlas for persistence.",
    technologies: ["React.js", "Spring Boot", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/kshitijrat/trello-clone-collaborative-board",
    live: null,
    img: taskBoard
  },
  {
    title: "DevScope — GitHub Profile Analytics",
    description:
      "Interactive analytics platform providing deep insights into GitHub user statistics with beautiful data visualization. Features real-time GitHub API integration and responsive Tailwind CSS design.",
    technologies: ["React.js", "Tailwind CSS", "GitHub API", "Vite"],
    github: "https://github.com/kshitijrat/Devscope",
    live: "https://devscope.vercel.app/",
    img: devscope
  },
  {
    title: "Human Gait Cycle Analysis",
    description:
      "Machine learning model analyzing human walking patterns using polynomial regression for healthcare diagnostics. Achieved 94% prediction accuracy evaluated using MSE and R² metrics.",
    technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/kshitijrat/gait-cycle-analysis-using-polynomial-regression-main",
    live: null,
    img: gaitAnalysis
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Selected Work</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border border-gray-100 dark:border-gray-900 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 bg-white dark:bg-black h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-medium text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-500 dark:text-gray-500 border-b border-gray-200 dark:border-gray-800 pb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center space-x-1"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center space-x-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/kshitijrat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span>View more on GitHub</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
