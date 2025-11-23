# 🚀 הוראות הגדרה והתחלה

## התקנה ראשונית

1. **שכפל את הפרויקט:**
```bash
git clone <your-repo-url>
cd Portfolio
```

2. **התקן את התלויות:**
```bash
npm install
```

3. **עדכן את הנתונים האישיים שלך:**

### עדכון פרטים אישיים
ערוך את הקובץ `data/config.ts`:
```typescript
export const siteConfig = {
  name: 'השם שלך',
  githubUsername: 'yourusername',
  githubUrl: 'https://github.com/yourusername',
  linkedinUrl: 'https://linkedin.com/in/yourusername',
  email: 'your-email@example.com',
  portfolioUrl: 'https://your-portfolio.vercel.app',
  // ...
}
```

### עדכון פרויקטים
ערוך את הקובץ `data/projects.ts` והוסף/עדכן את הפרויקטים שלך.

### עדכון כישורים
ערוך את הקובץ `components/SkillsMap.tsx` ועדכן את רשימת הכישורים.

### עדכון טקסטים
ערוך את הקובץ `components/AboutMe.tsx` ועדכן את הטקסטים האישיים.

4. **הרץ את שרת הפיתוח:**
```bash
npm run dev
```

5. **פתח בדפדפן:**
```
http://localhost:3000
```

## 🚀 פרסום ל-Vercel

1. **צור חשבון ב-Vercel** (אם אין לך)

2. **התחבר ל-GitHub** ב-Vercel

3. **ייבא את הפרויקט:**
   - לחץ על "Add New Project"
   - בחר את ה-repository שלך
   - Vercel יזהה אוטומטית שזה Next.js
   - לחץ על "Deploy"

4. **האתר יפורסם אוטומטית!**

## 📝 עדכון הפרויקט

לאחר שתעדכן את הקוד:
```bash
git add .
git commit -m "עדכון פרויקטים/כישורים"
git push
```

Vercel יעדכן אוטומטית את האתר!

## 🎨 התאמה אישית נוספת

- **צבעים:** ערוך את `tailwind.config.js` כדי לשנות את צבעי האתר
- **פונטים:** ערוך את `app/layout.tsx` כדי לשנות את הפונט
- **סגנונות:** ערוך את `app/globals.css` לעיצובים נוספים

## 📞 תמיכה

אם יש בעיות, בדוק:
- שהכל מותקן נכון (`npm install`)
- שאין שגיאות בקונסול הדפדפן
- שה-Node.js בגרסה 18+ (`node --version`)

