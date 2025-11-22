'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Briefcase, Smile, Zap } from 'lucide-react'

type AboutMode = 'normal' | 'professional' | 'funny' | 'short'

const aboutTexts: Record<AboutMode, { title: string; content: string; icon: typeof User }> = {
  normal: {
    title: 'מי אני?',
    content: `אני מתכנת Full Stack עם תשוקה ליצירת פתרונות דיגיטליים חדשניים ואיכותיים. 
    בעל ניסיון בפיתוח אפליקציות ווב מודרניות, החל מפרונט-אנד אינטראקטיבי ועד לבקאנד חזק ומאובטח.
    אני מאמין בקוד נקי, ארכיטקטורה טובה, וחוויית משתמש מעולה.`,
    icon: User,
  },
  professional: {
    title: 'פרופיל מקצועי',
    content: `מתכנת Full Stack עם התמחות בפיתוח אפליקציות ווב מתקדמות. 
    בעל ניסיון נרחב בטכנולוגיות מודרניות כולל React, Next.js, Node.js, TypeScript, ועוד.
    מתמחה ביצירת ארכיטקטורות scalable, ביצועים גבוהים, וקוד maintainable.
    בעל יכולת עבודה בצוותים, ניהול פרויקטים, ופתרון בעיות מורכבות.`,
    icon: Briefcase,
  },
  funny: {
    content: `אני כמו בוגר - אבל במקום לקחת את הכסף, אני בונה אתרים! 🚀
    כשאני לא כותב קוד, אני כנראה מחפש באגים... או בונה עוד פרויקט צדדי.
    מאמין ש-Stack Overflow הוא החבר הכי טוב של כל מתכנת.
    אם יש לך רעיון משוגע - בוא נבנה אותו ביחד! 💻✨`,
    title: 'הגרסה המצחיקה',
    icon: Smile,
  },
  short: {
    title: 'בקצרה',
    content: `Full Stack Developer.
    React • Next.js • Node.js
    בונה דברים מגניבים.`,
    icon: Zap,
  },
}

export default function AboutMe() {
  const [currentMode, setCurrentMode] = useState<AboutMode>('normal')

  const modes: AboutMode[] = ['normal', 'professional', 'funny', 'short']

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            אודותיי
          </h2>

          {/* Mode Toggle Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {modes.map((mode) => {
              const Icon = aboutTexts[mode].icon
              return (
                <motion.button
                  key={mode}
                  onClick={() => setCurrentMode(mode)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    currentMode === mode
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  {aboutTexts[mode].title}
                </motion.button>
              )
            })}
          </div>

          {/* Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-primary-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = aboutTexts[currentMode].icon
                  return <Icon size={32} className="text-primary-600 dark:text-primary-400" />
                })()}
                <h3 className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {aboutTexts[currentMode].title}
                </h3>
              </div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {aboutTexts[currentMode].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

