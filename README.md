# LECIM Institutional Portal

الموقع المؤسسي الجديد لرابطة المدارس الإسلامية والنموذجية في كوت ديفوار.

A modern bilingual institutional portal for the Ligue des Établissements Confessionnels Islamiques et des Médersas en Côte d’Ivoire.

## المزايا

- واجهة عربية RTL وفرنسية LTR مع تبديل فوري للغة.
- صفحات مستقلة للرابطة، المدارس، الخدمات، الامتحانات، المشروعات، العضوية، الأخبار، الشركاء، السياسات والتواصل.
- دليل مدارس قابل للبحث والتصفية حسب حالة الاعتراف.
- بوابة امتحانات تشمل المواعيد والمسار الإجرائي والأدلة.
- نماذج تواصل وعضوية قابلة للربط بـ Formspree أو أي API.
- تصميم متجاوب للجوال واللوحي وسطح المكتب.
- إعدادات نشر جاهزة لـ Vercel وNetlify.
- محتوى مؤسسي نظيف دون بقايا قوالب أو صفحات متجر تجريبية.

## التقنية

- React
- TypeScript
- Vite
- React Router
- Lucide Icons
- CSS مخصص دون الاعتماد على إطار واجهات ثقيل

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح:

```text
http://localhost:4173/ar
http://localhost:4173/fr
```

## التحقق والبناء

```bash
npm run check
npm run build
npm run preview
```

## ربط النماذج

انسخ ملف البيئة:

```bash
cp .env.example .env
```

ثم أضف رابط Formspree:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

عند عدم إضافة الرابط، تُجهز النماذج رسالة بريد إلى `lecimnational@gmail.com` تلقائيًا.

## النشر

### Vercel

1. اربط المستودع في Vercel.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. لا تحتاج لإضافة إعدادات إعادة التوجيه؛ ملف `vercel.json` موجود.

### Netlify

ملف `netlify.toml` جاهز. اربط المستودع وسيُستخدم البناء والنشر تلقائيًا.

## قبل الإطلاق الرسمي

البيانات التالية تحتاج اعتمادًا رسميًا من الرابطة قبل النشر النهائي:

- قائمة المدارس وأسماؤها وحالة الاعتراف.
- الإحصاءات وتاريخ آخر تحديث لها.
- الوثائق والسياسات بصيغتها المعتمدة.
- تواريخ الامتحانات والملفات القابلة للتنزيل.
- صور المدارس والأنشطة المملوكة للرابطة.
- أسماء الشركاء وشعاراتهم بعد الحصول على الموافقة.

## هيكل المحتوى

```text
src/
  components/   عناصر الواجهة المشتركة
  pages/        صفحات الموقع
  data.ts       البيانات التجريبية المركزية
  i18n.ts       إعدادات اللغتين
  styles.css    نظام التصميم والاستجابة
public/assets/  الشعار والصور
```
