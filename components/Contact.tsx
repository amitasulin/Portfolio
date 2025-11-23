'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react'
import { siteConfig } from '@/data/config'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const email = siteConfig.email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
      alert('ההודעה הועתקה למייל! (זהו דמו - אין שרת אמיתי)')
    }, 500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            יצירת קשר
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            יש לך פרויקט מעניין? בואו נדבר!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                שלח הודעה
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    שם
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="הכנס את שמך"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    placeholder="מה תרצה לספר?"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <Check size={20} />
                      נשלח!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      שלח הודעה
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                  פרטי יצירת קשר
                </h3>

                {/* Email */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      אימייל
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
                      {email}
                    </code>
                    <motion.button
                      onClick={handleCopyEmail}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      title="העתק אימייל"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </motion.button>
                  </div>
                  {copied && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-green-600 dark:text-green-400 mt-2"
                    >
                      הועתק!
                    </motion.p>
                  )}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-medium mb-4 text-gray-700 dark:text-gray-300">
                    רשתות חברתיות
                  </h4>
                  <div className="flex gap-4">
                    <motion.a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github size={20} />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={siteConfig.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  💡 <strong>טיפ:</strong> הטופס לא שולח מייל אמיתי - זהו דמו בלבד.
                  <br />
                  ניתן להעתיק את האימייל או ליצור קשר דרך הרשתות החברתיות.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

