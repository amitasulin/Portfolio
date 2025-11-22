'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'

interface Project {
  id: number
  name: string
  description: string
  longDescription?: string
  technologies: string[]
  year: number
  image?: string
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'אפליקציית E-Commerce',
    description: 'פלטפורמת מסחר אלקטרוני מלאה עם מערכת תשלומים',
    longDescription: 'אפליקציית מסחר אלקטרוני מתקדמת עם מערכת ניהול מלאי, עגלת קניות, תשלומים מאובטחים, ומערכת ניהול הזמנות. כולל ממשק ניהול למנהלים ודשבורד ללקוחות.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    year: 2024,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    name: 'מערכת ניהול משימות',
    description: 'אפליקציית ניהול פרויקטים עם שיתוף פעולה בזמן אמת',
    longDescription: 'מערכת ניהול משימות מתקדמת עם תכונות כמו משימות משותפות, התראות, לוחות זמנים, וסטטיסטיקות. כולל ממשק משתמש אינטואיטיבי ואנימציות חלקות.',
    technologies: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
    year: 2023,
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    name: 'בלוג טכנולוגי',
    description: 'פלטפורמת בלוגים עם מערכת תגובות ומנהל תוכן',
    longDescription: 'בלוג מודרני עם מערכת ניהול תוכן מלאה, תמיכה ב-Markdown, מערכת תגובות, חיפוש מתקדם, וטמפלטים מותאמים אישית. כולל SEO מותאם ואופטימיזציה לביצועים.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    year: 2023,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    name: 'אפליקציית מזג אוויר',
    description: 'אפליקציית מזג אוויר עם תחזיות מתקדמות',
    longDescription: 'אפליקציית מזג אוויר עם תחזיות ל-7 ימים, מפות אינטראקטיביות, התראות, ותמיכה במיקומים מרובים. כולל ממשק משתמש יפה ואנימציות חלקות.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
    year: 2022,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]

export default function ProjectsTimeline() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            מסע בזמן - פרויקטים
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            ציר זמן אינטראקטיבי של הפרויקטים שלי
          </p>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 transform translate-x-1/2 hidden md:block" />

            {/* Projects */}
            <div className="space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute right-1/2 transform translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10 hidden md:block" />

                  {/* Year Badge */}
                  <div className="md:w-1/4 flex justify-center md:justify-end">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="px-6 py-3 bg-primary-600 text-white rounded-lg font-bold text-xl shadow-lg"
                    >
                      {project.year}
                    </motion.div>
                  </div>

                  {/* Project Card */}
                  <div className="md:w-3/4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                            {project.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {project.description}
                          </p>
                        </div>
                        <motion.button
                          onClick={() => toggleExpand(project.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          {expandedProject === project.id ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </motion.button>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedProject === project.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                              <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {project.longDescription}
                              </p>
                              <div className="flex gap-3">
                                {project.githubUrl && (
                                  <motion.a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                                  >
                                    <Github size={18} />
                                    קוד מקור
                                  </motion.a>
                                )}
                                {project.liveUrl && (
                                  <motion.a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                                  >
                                    <ExternalLink size={18} />
                                    צפה בפרויקט
                                  </motion.a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

