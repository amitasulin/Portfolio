import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amit Asulin - Full Stack Developer Portfolio',
  description: 'Portfolio website showcasing projects, skills, and experience. Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

