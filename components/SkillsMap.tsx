'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Database, Wrench, Filter } from 'lucide-react'

type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools'

interface Skill {
  name: string
  level: number // 1-10
  category: 'frontend' | 'backend' | 'tools'
  icon?: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 9, category: 'frontend' },
  { name: 'Next.js', level: 8, category: 'frontend' },
  { name: 'TypeScript', level: 8, category: 'frontend' },
  { name: 'TailwindCSS', level: 9, category: 'frontend' },
  { name: 'JavaScript', level: 9, category: 'frontend' },
  { name: 'HTML/CSS', level: 10, category: 'frontend' },
  // Backend
  { name: 'Node.js', level: 8, category: 'backend' },
  { name: 'Express', level: 7, category: 'backend' },
  { name: 'MongoDB', level: 7, category: 'backend' },
  { name: 'PostgreSQL', level: 6, category: 'backend' },
  { name: 'REST API', level: 8, category: 'backend' },
  { name: 'GraphQL', level: 6, category: 'backend' },
  // Tools
  { name: 'Git', level: 9, category: 'tools' },
  { name: 'Docker', level: 6, category: 'tools' },
  { name: 'AWS', level: 5, category: 'tools' },
  { name: 'Linux', level: 7, category: 'tools' },
]

export default function SkillsMap() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory)

  // Calculate positions for radar chart (circular layout)
  const getSkillPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2 // Start from top
    const radius = 150
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    return { x, y, angle }
  }

  const categories: { value: SkillCategory; label: string; icon: typeof Code }[] = [
    { value: 'all', label: 'הכל', icon: Filter },
    { value: 'frontend', label: 'Frontend', icon: Code },
    { value: 'backend', label: 'Backend', icon: Database },
    { value: 'tools', label: 'כלים', icon: Wrench },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            מפת הכישורים
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            גע על כישור כדי לראות פרטים נוספים
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(({ value, label, icon: Icon }) => (
              <motion.button
                key={value}
                onClick={() => setSelectedCategory(value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === value
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <Icon size={18} />
                {label}
              </motion.button>
            ))}
          </div>

          {/* Skills Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl aspect-square">
              <svg
                viewBox="-200 -200 400 400"
                className="w-full h-full"
                style={{ transform: 'scaleY(-1)' }} // Flip vertically for RTL
              >
                {/* Grid circles */}
                {[1, 2, 3, 4, 5].map((level) => (
                  <circle
                    key={level}
                    cx="0"
                    cy="0"
                    r={(level * 150) / 5}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gray-200 dark:text-gray-700"
                  />
                ))}

                {/* Grid lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="0"
                    y1="0"
                    x2={Math.cos((angle * Math.PI) / 180) * 150}
                    y2={Math.sin((angle * Math.PI) / 180) * 150}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gray-200 dark:text-gray-700"
                  />
                ))}

                {/* Skills as points */}
                <AnimatePresence>
                  {filteredSkills.map((skill, index) => {
                    const { x, y } = getSkillPosition(index, filteredSkills.length)
                    const radius = (skill.level / 10) * 150
                    const skillX = Math.cos((index / filteredSkills.length) * 2 * Math.PI - Math.PI / 2) * radius
                    const skillY = Math.sin((index / filteredSkills.length) * 2 * Math.PI - Math.PI / 2) * radius

                    return (
                      <g key={skill.name}>
                        {/* Line from center to skill */}
                        <motion.line
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          x1="0"
                          y1="0"
                          x2={skillX}
                          y2={skillY}
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-primary-400 opacity-30"
                        />
                        {/* Skill point */}
                        <motion.circle
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          cx={skillX}
                          cy={skillY}
                          r="8"
                          fill="currentColor"
                          className={`cursor-pointer transition-all ${
                            hoveredSkill === skill.name
                              ? 'text-primary-600 dark:text-primary-400 scale-150'
                              : 'text-primary-500'
                          }`}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        />
                        {/* Skill label */}
                        <motion.text
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.6 }}
                          x={skillX}
                          y={skillY - 15}
                          textAnchor="middle"
                          fontSize="12"
                          fill="currentColor"
                          className="text-gray-700 dark:text-gray-300 font-medium pointer-events-none"
                          style={{ transform: 'scaleY(-1)' }}
                        >
                          {skill.name}
                        </motion.text>
                      </g>
                    )
                  })}
                </AnimatePresence>
              </svg>

              {/* Tooltip */}
              {hoveredSkill && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-10"
                >
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">
                      {hoveredSkill}
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      רמה:{' '}
                      {skills.find((s) => s.name === hoveredSkill)?.level || 0}/10
                    </div>
                    <div className="mt-2 w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${(skills.find((s) => s.name === hoveredSkill)?.level || 0) * 10}%`,
                        }}
                        className="h-full bg-primary-600"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Skills List (Mobile/Alternative View) */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:hidden">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center"
              >
                <div className="font-semibold mb-2">{skill.name}</div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level * 10}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-full bg-primary-600"
                  />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {skill.level}/10
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

