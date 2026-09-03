# TabMind — landing page
```this is just a trial project for people who forget to close their unneccessary tabs```

Plain HTML/CSS/JS static site. Koi build step nahi hai — jaise hai waise hi deploy ho jaayega.

```
tabmind-site/
├── index.html          # landing page
├── privacy.html         # Chrome Web Store ke liye zaroori privacy policy
├── styles.css
├── script.js
├── icons/               # favicon + og icon
└── tabmind-extension.zip  # download button isi file ko serve karta hai
```

## Vercel pe deploy karna

### Option A — Dashboard se (sabse aasan, no CLI)

1. Is poore `tabmind-site` folder ko GitHub pe ek naye repo mein push karo
   (ya seedha folder ko [vercel.com/new](https://vercel.com/new) pe drag-and-drop bhi kar sakte ho).
2. [vercel.com](https://vercel.com) pe login karo (GitHub account se ho jaata hai).
3. **Add New → Project** → apna repo select karo.
4. Framework Preset apne aap **"Other"** detect hoga — kuch change karne ki zarurat nahi
   (Build Command khaali chhod do, Output Directory root `.` rakho).
5. **Deploy** dabao. 30-60 second mein live URL mil jaayega (jaise `tabmind.vercel.app`).

### Option B — CLI se

```bash
npm install -g vercel
cd tabmind-site
vercel          # pehli baar setup + preview deploy
vercel --prod   # production URL pe deploy
```

## Deploy karne se pehle ye zaroor karo

- `privacy.html` mein `hello@example.com` ko apni real contact email se replace karo.
- Agar extension update karo, to naya zip `tabmind-extension.zip` isi folder mein overwrite kar dena
  (download button automatically usi naam ki file uthaata hai).
- Custom domain chahiye to Vercel project settings → **Domains** mein add kar sakte ho (free hai, sirf domain khud kharidna padega).

## Chrome Web Store se link karna

Jab extension Chrome Web Store pe publish ho jaaye, to `index.html` mein
`Download TabMind (.zip)` button ka link Store ke listing URL se replace kar dena —
abhi ke liye ye direct zip download deta hai kyunki listing pending hai.
