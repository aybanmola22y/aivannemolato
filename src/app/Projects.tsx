"use client"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  demoUrl: string
}

interface ProjectsProps {
  darkMode: boolean
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects: Project[] = [
    {
      id: 1,
      title: "OJT Time Logging",
      description:
        "OJT Time Logging is a project designed to help track and manage the time spent during on-the-job training.",
      image: "/images/ojt-time-logging.jpg",
      demoUrl: "https://ojt-log.vercel.app/",
    },
    {
      id: 2,
      title: "Book of Love",
      description: "Book of Love is an online diary that serves as a digital scrapbook of cherished memories.",
      image: "/images/book-of-love.jpg",
      demoUrl: "https://book-of-love.vercel.app/",
    },
    {
      id: 3,
      title: "Virtual Cake",
      description: "Virtual Cake is an interactive web app that lets a person experience a digital cake.",
      image: "/images/virtual-cake.jpg",
      demoUrl: "https://hbd-po.vercel.app/",
    },
    {
      id: 4,
      title: "786 SG",
      description:
        "786 SG is a trusted halal meat supplier based in Singapore, providing fresh, high-quality, and ethically sourced halal meats for businesses and households.",
      image: "/images/ojt-time-logging.jpg",
      demoUrl: "https://786-sg.vercel.app/",
    },
    {
      id: 5,
      title: "Book of Love",
      description: "Book of Love is an online diary that serves as a digital scrapbook of cherished memories.",
      image: "/images/book-of-love.jpg",
      demoUrl: "https://book-of-love.vercel.app/",
    },
    {
      id: 6,
      title: "Virtual Cake",
      description: "Virtual Cake is an interactive web app that lets a person experience a digital cake.",
      image: "/images/virtual-cake.jpg",
      demoUrl: "https://hbd-po.vercel.app/",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="projects"
      className={`${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-black"
      } min-h-screen py-16 px-4 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? "text-white" : "text-black"}`}>Projects</h2>
        </motion.div>
        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`${
                darkMode ? "bg-[#1e293b] border-gray-700" : "bg-gray-50 border-gray-200"
              } rounded-lg border shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col min-h-[20rem]`}
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <div
                  className={`w-full h-full ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  } flex items-center justify-center`}
                >
                  {/* Placeholder for project image */}
                  <div className={`text-4xl ${darkMode ? "text-gray-500" : "text-gray-400"}`}>📱</div>
                  {/* Uncomment when you have actual images */}
                  {/* <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              {/* Project Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-black"}`}>{project.title}</h3>

                <p className={`text-sm leading-relaxed mb-4 flex-grow ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {project.description}
                </p>
                {/* Live Demo Button */}
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 text-sm font-medium mt-auto ${
                    darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"
                  } transition-colors duration-200`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
