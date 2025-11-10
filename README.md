# 🚀 Modern Portfolio Website

A beautiful, responsive portfolio website built with **React 18**, **Vite**, and **Tailwind CSS v4**. Features a dark theme with light blue accents, smooth animations, and bilingual support (English/Indonesian).

---

## ✨ Features

- 🎨 **Modern Dark Theme** - Professional gradient design with glow effects
- 🌐 **Bilingual Support** - Switch between English and Indonesian
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎭 **Smooth Animations** - Scroll-triggered entrance animations
- 🎯 **Easy to Customize** - All content in organized constant files

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   └── sections/        # Hero, About, Skills, Projects, Certificates, Contact
│   ├── constants/           # ⭐ EDIT YOUR CONTENT HERE
│   │   ├── translations.ts  # All text content (EN/ID)
│   │   ├── skills.ts        # Your skills
│   │   ├── projects.ts      # Your projects
│   │   ├── certificates.ts  # Your certificates
│   │   └── README.md        # Guide for editing constants
│   ├── hooks/               # Custom React hooks
│   ├── contexts/            # React Context (Language)
│   └── styles/              # Global CSS and animations
├── public/                  # Static assets
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## ✏️ How to Customize

### 1. **Update Personal Information**

#### Your Name
- Open `src/components/sections/Hero.tsx`
- Find line with `YOUR NAME` (around line 30)
- Replace with your actual name

#### Profile Photo
- Open `src/components/sections/Hero.tsx`
- Find the `<img>` tag (around line 95)
- Replace the `src` URL with your photo URL

#### Contact Information
- Open `src/components/sections/Contact.tsx`
- Update email, WhatsApp, and GitHub (lines 10-30)

---

### 2. **Edit Text Content**

All text is in `src/constants/translations.ts`

**Example: Change your tagline**
```typescript
// English
heroTitle3: "PASSIONATE ABOUT INNOVATION.",

// Indonesian
heroTitle3: "BERSEMANGAT TENTANG INOVASI.",
```

See `src/constants/README.md` for detailed guide.

---

### 3. **Add/Edit Skills**

Open `src/constants/skills.ts`

**Add a new skill:**
```typescript
export const technicalSkills = [
  { name: "React.js", nameId: "React.js" },
  { name: "Your New Skill", nameId: "Skill Baru Anda" }, // ← Add here
];
```

---

### 4. **Add/Edit Projects**

Open `src/constants/projects.ts`

**Add a new project:**
```typescript
{
  id: 4,
  image: "https://your-image-url.com/project.jpg",
  titleKey: "project4Title",
  descKey: "project4Desc",
  technologies: ["React", "Node.js", "PostgreSQL"],
  link: "https://github.com/yourusername/project",
}
```

**Then add translations in `translations.ts`:**
```typescript
project4Title: "My Awesome Project",
project4Desc: "Description of the project...",
```

---

### 5. **Add/Edit Certificates**

Open `src/constants/certificates.ts`

**Add a new certificate:**
```typescript
{
  id: 3,
  titleKey: "cert3Title",
  issuerKey: "cert3Issuer",
  link: "https://verify.certificate.com/abc123",
}
```

**Then add translations in `translations.ts`:**
```typescript
cert3Title: "Certificate Name",
cert3Issuer: "Issuing Organization - Issued Date",
```

---

## 🎨 Customizing Colors

Colors are defined in `src/styles/globals.css`:

```css
:root {
  --light-blue: #66CCFF;      /* Primary accent color */
  --dark-bg: #0A192F;         /* Dark blue background */
  --darker-bg: #030712;       /* Black background */
  --text-light: #E2E8F0;      /* Light text */
  --text-dark: #94A3B8;       /* Muted text */
}
```

Change these values to customize your color scheme.

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

---

## 🚀 Deploy

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool
- **Tailwind CSS v4.1.3** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Montserrat & Inter

---

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🎯 Folder Guide for Editing

| What to Edit | File Location |
|--------------|---------------|
| Text content | `src/constants/translations.ts` |
| Skills | `src/constants/skills.ts` |
| Projects | `src/constants/projects.ts` |
| Certificates | `src/constants/certificates.ts` |
| Your name | `src/components/sections/Hero.tsx` |
| Profile photo | `src/components/sections/Hero.tsx` |
| Contact info | `src/components/sections/Contact.tsx` |
| Colors | `src/styles/globals.css` |

---

## 💡 Tips

- **Auto-reload**: Changes appear instantly in the browser
- **Test both languages**: Click EN/ID button to verify translations
- **Check console**: Press F12 to see any errors
- **Keep backups**: Save a copy before major changes

---

## 📞 Support

If you encounter issues:
1. Check browser console (F12) for errors
2. Verify all translation keys match
3. Restart dev server: `npm run dev`
4. Check `src/constants/README.md` for detailed guide

---

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ using React + Vite + Tailwind CSS**
