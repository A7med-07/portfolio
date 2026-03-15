# دليل التشغيل - Portfolio Website

## 🎯 نظرة عامة

موقع بورتفوليو احترافي مبني بـ Next.js 15 و TypeScript و Tailwind CSS مع كل المميزات اللي محتاجها.

## 📋 المميزات

✅ تصميم عصري ونظيف
✅ وضع داكن/فاتح (Dark/Light Mode)
✅ متجاوب مع كل الشاشات
✅ سرعة عالية مع Next.js
✅ محسّن لمحركات البحث (SEO)
✅ رسوم متحركة سلسة
✅ صفحة عرض المشاريع مع فلترة
✅ قسم المهارات مع نسب الإتقان
✅ نموذج تواصل

## 🚀 خطوات التشغيل

### 1. تثبيت Node.js

تأكد إن عندك Node.js 18 أو أحدث مثبت على جهازك
- حمّله من: https://nodejs.org/

### 2. تثبيت الـ Dependencies

افتح الـ Terminal أو Command Prompt في مجلد المشروع واكتب:

\`\`\`bash
npm install
\`\`\`

هيأخذ شوية دقائق لتحميل كل المكتبات المطلوبة.

### 3. تشغيل المشروع

بعد ما التثبيت يخلص، شغّل المشروع بالأمر:

\`\`\`bash
npm run dev
\`\`\`

### 4. فتح الموقع

افتح المتصفح واكتب:
\`\`\`
http://localhost:3000
\`\`\`

مبروك! الموقع شغال دلوقتي 🎉

## ✏️ التعديل والتخصيص

### تغيير المعلومات الشخصية

#### 1. القسم الرئيسي (Hero)
افتح ملف `components/Hero.tsx`:
- غير "Your Name" باسمك
- عدّل الوصف والعنوان
- حط روابط حساباتك (GitHub, LinkedIn, Email)

#### 2. قسم About Me
افتح ملف `components/About.tsx`:
- اكتب نبذة عنك
- حدّث سنين الخبرة وعدد المشاريع
- ضيف صورتك (بدل الـ placeholder)

#### 3. قسم المهارات
افتح ملف `components/Skills.tsx`:
- عدّل مصفوفة `skillsData`
- ضيف أو احذف مهارات
- غير نسب الإتقان (من 0 لـ 100)

مثال:
\`\`\`javascript
{
  category: 'Frontend',
  skills: [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '▲' },
  ]
}
\`\`\`

#### 4. قسم المشاريع
افتح ملف `components/Projects.tsx`:
- عدّل مصفوفة `projectsData`
- ضيف مشاريعك الحقيقية
- حط صور ووصف لكل مشروع
- ضيف روابط GitHub والـ Demo

مثال:
\`\`\`javascript
{
  id: 1,
  title: 'اسم المشروع',
  description: 'وصف المشروع...',
  tags: ['React', 'Next.js', 'TypeScript'],
  category: 'web',
  github: 'رابط GitHub',
  demo: 'رابط الموقع الحي'
}
\`\`\`

#### 5. قسم التواصل
افتح ملف `components/Contact.tsx`:
- غير البريد الإلكتروني
- حدّث الموقع الجغرافي
- ربط النموذج بخدمة إيميل (اختياري)

#### 6. الـ Footer
افتح ملف `components/Footer.tsx`:
- غير اسمك في الـ Copyright
- حدّث روابط السوشيال ميديا

### تغيير الألوان

افتح ملف `tailwind.config.js` وعدّل:

\`\`\`javascript
colors: {
  primary: {
    500: '#0ea5e9',  // اللون الأساسي
    600: '#0284c7',  // درجة أغمق
  },
}
\`\`\`

## 📤 رفع الموقع على Vercel

### الطريقة الأولى: من GitHub

1. ارفع المشروع على GitHub:
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
\`\`\`

2. اذهب لـ [Vercel](https://vercel.com)
3. سجّل دخول بحساب GitHub
4. اختار "New Project"
5. استورد المشروع من GitHub
6. اضغط Deploy

خلاص! الموقع هيكون شغال على Vercel

### الطريقة الثانية: مباشرة من الكمبيوتر

1. ثبّت Vercel CLI:
\`\`\`bash
npm i -g vercel
\`\`\`

2. ادخل مجلد المشروع واكتب:
\`\`\`bash
vercel
\`\`\`

3. اتبع التعليمات على الشاشة

## 🎨 نصائح إضافية

### إضافة صور

1. حط صورك في مجلد `public`
2. استخدمها في المكونات:
\`\`\`javascript
<img src="/your-image.jpg" alt="description" />
\`\`\`

### إضافة CV

1. حط ملف الـ CV في مجلد `public`
2. غير الرابط في `components/About.tsx`:
\`\`\`javascript
<a href="/your-cv.pdf" download>
\`\`\`

### تفعيل نموذج التواصل

استخدم خدمة زي:
- EmailJS (مجاني)
- SendGrid
- Formspree

مثال مع EmailJS:
\`\`\`bash
npm install @emailjs/browser
\`\`\`

## 🛠️ أوامر مفيدة

\`\`\`bash
# تشغيل المشروع للتطوير
npm run dev

# عمل Build للإنتاج
npm run build

# تشغيل النسخة المبنية
npm run start

# فحص الأخطاء
npm run lint
\`\`\`

## 📱 اختبار التجاوب

جرب الموقع على:
- Desktop (شاشة كبيرة)
- Laptop (لابتوب)
- Tablet (تابلت)
- Mobile (موبايل)

استخدم Developer Tools في المتصفح للتجربة.

## ⚡ تحسين الأداء

- استخدم صور بحجم مناسب (WebP أفضل)
- فعّل Lazy Loading للصور
- استخدم Next.js Image component
- قلل حجم الـ JavaScript

## 🎓 موارد للتعلم

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [React Docs](https://react.dev)

## ❓ حل المشاكل الشائعة

### المشروع مش شغال
- تأكد إنك مثبت Node.js
- امسح مجلد `node_modules` واعمل `npm install` تاني
- تأكد من Port 3000 مش مستخدم

### الـ Dark Mode مش شغال
- تأكد من `ThemeProvider` موجود في `layout.tsx`

### الصور مش ظاهرة
- تأكد من الصور موجودة في `public`
- تأكد من كتابة المسار صح

## 📞 دعم

لو عندك أي مشكلة أو استفسار:
- شوف التوثيق الرسمي لـ Next.js
- ابحث في Stack Overflow
- اسأل في مجتمعات البرمجة

---

بالتوفيق في بورتفوليوك! 🚀✨
\`\`\`
