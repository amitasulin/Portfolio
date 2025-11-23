'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: siteConfig.githubUrl, label: 'GitHub' },
    { icon: Linkedin, href: siteConfig.linkedinUrl, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Portfolio. כל הזכויות שמורות.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

