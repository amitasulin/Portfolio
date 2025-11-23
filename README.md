# 🚀 אתר פורטפוליו - Amit Asulin

אתר פורטפוליו מקצועי, ייחודי וחדשני למתכנת Full Stack, המציג עבודות, ניסיון, פרויקטים, כישורים, פרטים ליצירת קשר וחוויית משתמש אינטראקטיבית.

**אתר חי:** [https://portfolio-react-nu-rust-20.vercel.app/](https://portfolio-react-nu-rust-20.vercel.app/)  
**GitHub:** [https://github.com/amitasulin](https://github.com/amitasulin)

## ✨ תכונות ייחודיות

- **Interactive Skills Map** – מפה אינטראקטיבית שמציגה את הכישורים כציור גיאומטרי/כוכב שמתעדכן עם Hover
- **Project Timelines אנימטיבי** – "מסע בזמן" שמציג את הפרויקטים בצורה ויזואלית
- **AI About Me** – כפתור שמראה כמה גרסאות שונות של "מי אני" (פורמלי / מצחיק / קצר / מקצועי)

## 🛠️ טכנולוגיות

- **Next.js 14** – Framework React עם App Router
- **TypeScript** – טייפ-ספייפ בטוח
- **TailwindCSS** – עיצוב מודרני ורספונסיבי
- **Framer Motion** – אנימציות חלקות ואינטראקטיביות
- **Monaco Editor** – עורך קוד מתקדם (כמו VS Code)
- **Lucide React** – אייקונים מודרניים

## 📦 התקנה

1. התקן את התלויות:
```bash
npm install
```

2. הרץ את שרת הפיתוח:
```bash
npm run dev
```

3. פתח את הדפדפן בכתובת:
```
http://localhost:3000
```

## 🏗️ מבנה הפרויקט

```
Portfolio/
├── app/
│   ├── layout.tsx          # Layout ראשי עם Header ו-Footer
│   ├── page.tsx            # דף הבית
│   └── globals.css         # סגנונות גלובליים
├── components/
│   ├── Header.tsx          # תפריט ניווט דביק
│   ├── Footer.tsx          # Footer עם קישורים חברתיים
│   ├── Hero.tsx            # סקשן הבית עם אנימציות
│   ├── AboutMe.tsx        # אודות עם 4 מצבי הצגה
│   ├── SkillsMap.tsx     # מפת כישורים אינטראקטיבית
│   ├── ProjectsTimeline.tsx # ציר זמן פרויקטים
│   └── Contact.tsx         # יצירת קשר
├── public/                 # קבצים סטטיים
└── package.json
```

## 🎨 דפים/חלקים באתר

### 1. דף הבית (Hero Section)
- תמונה/איור של המתכנת
- כותרת מרכזית
- טקסט קצר
- כפתורי ניווט לפרויקטים / יצירת קשר
- אפקטים של אנימציה עדינה

### 2. About Me
- 4 מצבי הצגה: רגיל, מקצועי, מצחיק, מקוצר
- מעבר בין המצבים ע"י לחצן Toggle אנימטיבי

### 3. Interactive Skills Map
- הצגת כישורים כצורה גרפית (Radar Chart)
- כל כישור מקבל אנימציית Hover + Tooltip
- אפשרות לסנן (Frontend / Backend / Tools)

### 4. Projects Timeline
- פרויקטים מוצגים על ציר אנימטיבי
- לכל פרויקט: שם, תיאור קצר, טכנולוגיות, הדגמה/תמונה
- כפתור "Expand" לפתיחה של עוד מידע

### 5. יצירת קשר (Contact)
- טופס (לא שולח מייל – רק פרונט) עם הודעת "ההודעה הועתקה למייל"
- כפתור "Copy Email"
- קישורים ל-Github / LinkedIn

## 📱 רספונסיביות

האתר מותאם לנייד, טאבלט ודסקטופ:
- ה-Timeline ואזור הכישורים מקבלים גרסה אנכית במקום רוחבית
- תפריט נייד עם כפתור המבורגר
- עיצוב מותאם לכל הגדלי מסך

## 🎯 תכונות נוספות

- **Dark Mode** – תמיכה מלאה במצב כהה/בהיר
- **Smooth Scrolling** – גלילה חלקה בין סקשנים
- **Animations** – אנימציות עדינות עם Framer Motion
- **RTL Support** – תמיכה מלאה בעברית וכיוון RTL

## 🔒 אבטחה

- הגבלת קוד ב-Playground (אין JS מסוכן)
- מניעת XSS ב-iframe (sandbox mode)
- כל הקוד רץ בצד הלקוח בלבד

## 📝 התאמה אישית

### שינוי פרטי יצירת קשר והגדרות כלליות
ערוך את הקובץ `data/config.ts`:
```typescript
export const siteConfig = {
  name: 'Your Name',
  githubUsername: 'yourusername',
  githubUrl: 'https://github.com/yourusername',
  linkedinUrl: 'https://linkedin.com/in/yourusername',
  email: 'your-email@example.com',
  // ...
}
```

### הוספת פרויקטים
ערוך את הקובץ `data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: 1,
    name: 'שם הפרויקט',
    description: 'תיאור קצר',
    longDescription: 'תיאור מפורט',
    technologies: ['React', 'Next.js'],
    year: 2025,
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
  },
  // הוסף פרויקטים חדשים כאן
]
```

### הוספת כישורים
ערוך את הקובץ `components/SkillsMap.tsx`:
```typescript
const skills: Skill[] = [
  { name: 'React', level: 9, category: 'frontend' },
  // הוסף כישורים חדשים כאן
]
```

### שינוי טקסטים ב-About Me
ערוך את הקובץ `components/AboutMe.tsx`:
```typescript
const aboutTexts: Record<AboutMode, {...}> = {
  normal: {
    title: 'מי אני?',
    content: 'הטקסט שלך כאן...',
  },
  // ...
}
```

## 🚀 בנייה לפרודקשן

```bash
npm run build
npm start
```

## 📄 רישיון

פרויקט זה הוא קוד פתוח וזמין תחת רישיון MIT.

## 👨‍💻 פיתוח

נבנה עם ❤️ באמצעות Next.js, TypeScript, ו-TailwindCSS.

---

**הערה:** זהו פרויקט פרונט-אנד בלבד. אין שרת אמיתי, והטופס לא שולח מיילים אמיתיים.

