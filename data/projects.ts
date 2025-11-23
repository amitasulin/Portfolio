// פרויקטים מ-GitHub: https://github.com/amitasulin
export interface Project {
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

export const projects: Project[] = [
  {
    id: 1,
    name: 'Portfolio',
    description: 'אתר פורטפוליו מקצועי עם Next.js ו-TypeScript',
    longDescription: 'אתר פורטפוליו מודרני ומתקדם שנבנה עם Next.js 14, TypeScript, ו-TailwindCSS. כולל תכונות אינטראקטיביות, אנימציות חלקות, ותמיכה מלאה בעברית ו-RTL.',
    technologies: ['TypeScript', 'Next.js', 'React', 'TailwindCSS'],
    year: 2025,
    githubUrl: 'https://github.com/amitasulin/Portfolio',
    liveUrl: 'https://portfolio-react-nu-rust-20.vercel.app/',
  },
  {
    id: 2,
    name: 'InsuranceAgent',
    description: 'מערכת לניהול סוכני ביטוח',
    longDescription: 'מערכת ניהול מתקדמת לסוכני ביטוח, כולל ניהול לקוחות, פוליסות, ותהליכי עבודה. נבנה עם TypeScript ו-React.',
    technologies: ['TypeScript', 'React', 'Next.js'],
    year: 2025,
    githubUrl: 'https://github.com/amitasulin/InsuranceAgent',
  },
  {
    id: 3,
    name: 'minyan-now',
    description: 'אפליקציה למציאת מניינים',
    longDescription: 'אפליקציה שימושית למציאת מניינים בקרבת מקום. כולל מפה אינטראקטיבית, חיפוש מתקדם, ומידע עדכני.',
    technologies: ['TypeScript', 'React', 'Next.js'],
    year: 2025,
    githubUrl: 'https://github.com/amitasulin/minyan-now',
  },
  {
    id: 4,
    name: 'LawWeb',
    description: 'אתר למשרדי עורכי דין',
    longDescription: 'פלטפורמה מקצועית למשרדי עורכי דין, כולל ניהול תיקים, לקוחות, ותהליכים משפטיים. נבנה עם TypeScript.',
    technologies: ['TypeScript', 'React', 'Next.js'],
    year: 2025,
    githubUrl: 'https://github.com/amitasulin/LawWeb',
  },
  {
    id: 5,
    name: 'MernChat',
    description: 'אפליקציית צ\'אט מלאה עם MERN Stack',
    longDescription: 'אפליקציית צ\'אט בזמן אמת שנבנתה עם MERN Stack (MongoDB, Express, React, Node.js). כולל אימות משתמשים, חדרים, והודעות בזמן אמת.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    year: 2024,
    githubUrl: 'https://github.com/amitasulin/MernChat',
  },
  {
    id: 6,
    name: 'mern-blog',
    description: 'פלטפורמת בלוגים עם MERN Stack',
    longDescription: 'פלטפורמת בלוגים מלאה עם מערכת ניהול תוכן, תגובות, ואימות משתמשים. נבנה עם MERN Stack.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    year: 2024,
    githubUrl: 'https://github.com/amitasulin/mern-blog',
  },
  {
    id: 7,
    name: 'Social-react',
    description: 'רשת חברתית עם React',
    longDescription: 'אפליקציית רשת חברתית מלאה עם תכונות כמו פוסטים, תגובות, לייקים, ומעקב אחרי משתמשים. נבנה עם React.',
    technologies: ['JavaScript', 'React'],
    year: 2024,
    githubUrl: 'https://github.com/amitasulin/Social-react',
  },
  {
    id: 8,
    name: 'react-music-player',
    description: 'נגן מוזיקה עם React',
    longDescription: 'נגן מוזיקה מתקדם עם ממשק משתמש יפה, רשימת השמעה, ושליטה מלאה בנגינה. נבנה עם React.',
    technologies: ['JavaScript', 'React'],
    year: 2023,
    githubUrl: 'https://github.com/amitasulin/react-music-player',
  },
  {
    id: 9,
    name: 'amit-project',
    description: 'פרויקט אישי מתקדם',
    longDescription: 'פרויקט אישי מקיף המשלב טכנולוגיות מודרניות ופתרונות יצירתיים. כולל תכונות מתקדמות וחוויית משתמש מעולה.',
    technologies: ['JavaScript', 'React'],
    year: 2023,
    githubUrl: 'https://github.com/amitasulin/amit-project',
  },
]

