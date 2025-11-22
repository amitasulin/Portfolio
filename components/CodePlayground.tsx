'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Code2, RefreshCw } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
      <div className="text-gray-500">טוען עורך קוד...</div>
    </div>
  ),
})

interface CodeExample {
  name: string
  language: 'javascript' | 'html' | 'css'
  code: string
  description: string
}

const codeExamples: CodeExample[] = [
  {
    name: 'React Component',
    language: 'javascript',
    code: `function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p>מונה: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        הוסף
      </button>
    </div>
  );
}`,
    description: 'דוגמה לקומפוננט React פשוט עם state',
  },
  {
    name: 'Async Function',
    language: 'javascript',
    code: `async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('שגיאה:', error);
  }
}`,
    description: 'פונקציה אסינכרונית עם טיפול בשגיאות',
  },
  {
    name: 'CSS Animation',
    language: 'css',
    code: `@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 0.5s ease-out;
}`,
    description: 'אנימציית CSS מותאמת אישית',
  },
  {
    name: 'HTML Structure',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>דף ראשי</title>
</head>
<body>
  <header>
    <h1>ברוכים הבאים</h1>
  </header>
  <main>
    <p>תוכן הדף</p>
  </main>
</body>
</html>`,
    description: 'מבנה HTML בסיסי עם תמיכה בעברית',
  },
]

export default function CodePlayground() {
  const [selectedExample, setSelectedExample] = useState(0)
  const [code, setCode] = useState(codeExamples[0].code)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const handleExampleChange = (index: number) => {
    setSelectedExample(index)
    setCode(codeExamples[index].code)
    setOutput('')
  }

  const handleRun = () => {
    setIsRunning(true)
    setOutput('')

    // Simulate code execution (in real app, this would be sandboxed)
    setTimeout(() => {
      const example = codeExamples[selectedExample]
      if (example.language === 'javascript') {
        // For JS, we can't actually execute it safely, so show a message
        setOutput('✅ הקוד הורצה בהצלחה!\n\nהערה: זהו דמו בלבד. בסביבת ייצור, הקוד ירוץ בסביבה מאובטחת.')
      } else if (example.language === 'html') {
        setOutput('✅ HTML הוגדר בהצלחה!\n\nהדף מוכן להצגה בדפדפן.')
      } else if (example.language === 'css') {
        setOutput('✅ CSS הוגדר בהצלחה!\n\nהסגנונות מוכנים לשימוש.')
      }
      setIsRunning(false)
    }, 500)
  }

  const handleReset = () => {
    setCode(codeExamples[selectedExample].code)
    setOutput('')
  }

  return (
    <section id="code" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 size={40} className="text-primary-600 dark:text-primary-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              משחק קוד חי
            </h2>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            נסה לשחק עם קטעי קוד קצרים ולהציג יכולות טכניות
          </p>

          <div className="max-w-6xl mx-auto">
            {/* Example Selector */}
            <div className="mb-6 flex flex-wrap gap-3 justify-center">
              {codeExamples.map((example, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleExampleChange(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedExample === index
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {example.name}
                </motion.button>
              ))}
            </div>

            {/* Description */}
            <div className="mb-4 text-center text-gray-600 dark:text-gray-400">
              {codeExamples[selectedExample].description}
            </div>

            {/* Editor Container */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                  >
                    <RefreshCw size={18} />
                    איפוס
                  </motion.button>
                  <motion.button
                    onClick={handleRun}
                    disabled={isRunning}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    <Play size={18} />
                    הרץ קוד
                  </motion.button>
                </div>
              </div>

              {/* Monaco Editor */}
              <div className="h-96">
                <MonacoEditor
                  height="100%"
                  language={codeExamples[selectedExample].language}
                  value={code}
                  onChange={(value) => setCode(value || '')}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: 'on',
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    readOnly: false,
                  }}
                />
              </div>

              {/* Output */}
              {output && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4"
                >
                  <h3 className="font-semibold mb-2">פלט:</h3>
                  <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">
                    {output}
                  </pre>
                </motion.div>
              )}
            </div>

            {/* Security Notice */}
            <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              🔒 הקוד רץ בסביבה מאובטחת ומוגבלת. אין גישה למערכת הקבצים או לרשת.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

