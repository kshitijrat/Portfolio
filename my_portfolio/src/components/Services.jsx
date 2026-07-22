"use client"

import { Code, Server, Zap, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { motion } from "framer-motion"

const servicesData = [
  {
    id: "fullstack",
    title: "Full-Stack Web App Development",
    subtitle: "Custom MVPs & Production-Ready Scalable Applications",
    icon: Code,
    badge: "Most Popular",
    description: "End-to-end development tailored for startups and businesses needing high-performance web applications with modern UIs and rock-solid backends.",
    deliverables: [
      "Responsive React.js / Next.js Frontend",
      "Robust RESTful API Integration",
      "Secure Authentication & Authorization (JWT/OAuth)",
      "Database Schema Design (SQL/NoSQL)"
    ],
    techStack: ["React.js", "Java", "Spring Boot", "Node.js", "MySQL", "Tailwind CSS"]
  },
  {
    id: "backend",
    title: "Backend & Microservices Engineering",
    subtitle: "Enterprise-Grade Architecture & High-Throughput APIs",
    icon: Server,
    badge: "Enterprise Standard",
    description: "Specialized in designing resilient distributed backend systems capable of handling high-volume transaction loads with sub-second response times.",
    deliverables: [
      "Microservices & REST API Architecture",
      "Database Query Optimization & Indexing",
      "Third-party Payment & Service Gateways",
      "Asynchronous Task & Event Processing"
    ],
    techStack: ["Java", "Spring Boot", "Hibernate", "Microservices", "MySQL", "REST APIs"]
  },
  {
    id: "optimization",
    title: "System Performance & Code Audits",
    subtitle: "Refactoring, Bottleneck Removal & Monolith Modernization",
    icon: Zap,
    badge: "High ROI",
    description: "For existing applications struggling with high latency, database locks, or messy legacy codebases that need modernizing.",
    deliverables: [
      "Backend Latency & Memory Leak Audits",
      "Database Indexing & Connection Pool Tuning",
      "Monolith to Microservices Refactoring",
      "Clean Code & Security Best Practices"
    ],
    techStack: ["Spring Boot", "MySQL Tuning", "Docker", "Git", "System Design"]
  }
]

const engagementModels = [
  {
    title: "Project-Based Fixed Scope",
    desc: "Best for clearly defined MVPs, single features, or complete app builds with fixed requirements and milestones."
  },
  {
    title: "Dedicated Technical Partner",
    desc: "Monthly retainer for ongoing backend engineering, system architecture support, and continuous development."
  },
  {
    title: "Consulting & Technical Audit",
    desc: "Short-term engagement to review existing codebases, solve critical performance bottlenecks, or advise on tech stack."
  }
]

export default function ServicesPage() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-cyan-500 font-medium text-sm tracking-widest uppercase mb-3 block">
            Engineering Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-900 dark:text-white">
            Services & Technical Capabilities
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I partner with founders, tech leads, and businesses to design, build, and scale high-reliability web apps and backend architecture.
          </p>
        </motion.div>

        {/* Services List Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="border border-gray-200 dark:border-gray-900 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 bg-white dark:bg-black flex flex-col justify-between w-full shadow-sm hover:shadow-md">
                  
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-800">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <CardTitle className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                        {service.subtitle}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                        Key Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-400 gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-900">
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Engagement Models Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-950 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-900 mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-light mb-3 text-gray-900 dark:text-white">
              Flexible Engagement Models
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Choose the work structure that aligns best with your project lifecycle and team needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, i) => (
              <div key={i} className="p-5 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-900 space-y-2">
                <h4 className="font-medium text-base text-gray-900 dark:text-white">{model.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white">
            Have a project or backend requirement in mind?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl mx-auto">
            Let's discuss your system architecture, timelines, and business goals to see how we can build it right.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-black font-medium text-sm rounded-xl transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss Your Project
            </a>
            <a
              href="https://www.linkedin.com/in/kshitij-ratnawat/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-300 dark:border-gray-800 hover:border-cyan-500 text-gray-900 dark:text-white text-sm rounded-xl transition-all duration-300"
            >
              <span>Connect on LinkedIn</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}