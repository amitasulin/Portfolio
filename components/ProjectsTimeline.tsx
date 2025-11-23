'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp, Calendar, Code2 } from 'lucide-react'
import { projects } from '@/data/projects'

export default function ProjectsTimeline() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  // מיון הפרויקטים לפי שנה (מהחדש לישן)
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-block mb-4"
            >
              <Code2 size={48} className="text-primary-600 dark:text-primary-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
              מסע בזמן - פרויקטים
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              ציר זמן אינטראקטיבי המציג את מסע הפיתוח שלי לאורך השנים
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Animated Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700 transform translate-x-1/2 hidden md:block shadow-lg"
              style={{ transformOrigin: 'top' }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(14, 165, 233, 0.4)',
                    '0 0 20px rgba(14, 165, 233, 0.6)',
                    '0 0 0px rgba(14, 165, 233, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-primary-400 rounded-full"
              />
            </motion.div>

            {/* Projects */}
            <div className="space-y-16 md:space-y-20">
              {sortedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 100 }}
                  className={`relative flex items-start gap-6 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  } flex-col`}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute right-1/2 transform translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2, type: 'spring' }}
                      className="relative"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="absolute inset-0 bg-primary-400 rounded-full"
                      />
                      <div className="relative w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full border-4 border-white dark:border-gray-900 shadow-xl" />
                    </motion.div>
                  </div>

                  {/* Enhanced Year Badge */}
                  <div className="md:w-1/4 flex justify-center md:justify-end relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-primary-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative px-6 py-4 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl font-bold text-xl shadow-2xl flex items-center gap-2">
                        <Calendar size={20} />
                        {project.year}
                      </div>
                    </motion.div>
                  </div>

                  {/* Enhanced Project Card */}
                  <div className="md:w-3/4 w-full relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group relative"
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                      
                      <div className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <motion.h3
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-3"
                            >
                              {project.name}
                            </motion.h3>
                            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          <motion.button
                            onClick={() => toggleExpand(project.id)}
                            whileHover={{ scale: 1.15, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all shadow-md hover:shadow-lg"
                          >
                            {expandedProject === project.id ? (
                              <ChevronUp size={22} />
                            ) : (
                              <ChevronDown size={22} />
                            )}
                          </motion.button>
                        </div>

                        {/* Enhanced Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/50 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all border border-primary-200 dark:border-primary-700"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Enhanced Expanded Content */}
                        <AnimatePresence>
                          {expandedProject === project.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 border-t-2 border-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-700">
                                <motion.p
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 }}
                                  className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed"
                                >
                                  {project.longDescription}
                                </motion.p>
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 }}
                                  className="flex flex-wrap gap-3"
                                >
                                  {project.githubUrl && (
                                    <motion.a
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      whileHover={{ scale: 1.05, y: -2 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="group flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all shadow-lg hover:shadow-xl"
                                    >
                                      <Github size={20} className="group-hover:rotate-12 transition-transform" />
                                      <span className="font-semibold">קוד מקור</span>
                                    </motion.a>
                                  )}
                                  {project.liveUrl && (
                                    <motion.a
                                      href={project.liveUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      whileHover={{ scale: 1.05, y: -2 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="group flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
                                    >
                                      <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                                      <span className="font-semibold">צפה בפרויקט</span>
                                    </motion.a>
                                  )}
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
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

