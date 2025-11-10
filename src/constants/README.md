# 📁 Constants Folder - Editable Content

This folder contains all the **editable content** for your portfolio website. You can easily update your information without touching the component code.

---

## 📄 Files Overview

### 1. **translations.ts** 
**What it contains:** All text content in English and Indonesian

**When to edit:**
- Change any text on the website (titles, descriptions, button labels)
- Update your tagline, about me text, or contact information
- Modify section headings

**How to edit:**
1. Find the key you want to change (e.g., `heroGreeting`)
2. Update the text in both `en` (English) and `id` (Indonesian) sections
3. Save the file - changes will appear automatically

---

### 2. **skills.ts**
**What it contains:** Your technical and soft skills

**When to edit:**
- Add new skills you've learned
- Remove outdated skills
- Reorder skills by importance

**How to edit:**
1. **To add a skill:** Copy an existing line and modify it
   ```typescript
   { name: "New Skill", nameId: "Skill Baru" }
   ```
2. **To remove a skill:** Delete the entire line
3. **To reorder:** Cut and paste lines in your preferred order

---

### 3. **projects.ts**
**What it contains:** Your portfolio projects

**When to edit:**
- Add new projects you've completed
- Update project images or links
- Change project descriptions or technologies

**How to edit:**
1. **To add a project:**
   - Copy an existing project object
   - Change the `id` to a new number
   - Update `image`, `technologies`, and `link`
   - Add new `titleKey` and `descKey` to `translations.ts`

2. **To update a project:**
   - Find the project by its `id`
   - Modify any field (image, technologies, link)
   - If changing title/description, update `translations.ts`

3. **To remove a project:**
   - Delete the entire project object

**Example:**
```typescript
{
  id: 4,
  image: "https://your-image-url.com/project.jpg",
  titleKey: "project4Title",  // Add this to translations.ts
  descKey: "project4Desc",     // Add this to translations.ts
  technologies: ["React", "Node.js", "PostgreSQL"],
  link: "https://github.com/yourusername/project",
}
```

---

### 4. **certificates.ts**
**What it contains:** Your certificates and awards

**When to edit:**
- Add new certificates you've earned
- Update certificate verification links
- Remove old/expired certificates

**How to edit:**
1. **To add a certificate:**
   - Copy an existing certificate object
   - Change the `id` to a new number
   - Add new `titleKey` and `issuerKey` to `translations.ts`
   - Update the `link` to verification URL

2. **To update a certificate:**
   - Find the certificate by its `id`
   - Modify the `link` or update text in `translations.ts`

3. **To remove a certificate:**
   - Delete the entire certificate object

---

## 🎨 Personal Information to Update

### **In Hero Section (translations.ts):**
- Replace `"YOUR NAME"` in `Hero.tsx` component (line 30)
- Update `heroGreeting`, `heroTitle2`, `heroTitle3`

### **In Contact Section (Contact.tsx):**
- Update email: `your.email@example.com`
- Update WhatsApp: `+62 812-3456-7890`
- Update GitHub: `github.com/yourusername`

### **Profile Image:**
- Replace placeholder in `Hero.tsx` (line 95)
- Upload your photo to an image hosting service
- Update the `src` attribute with your image URL

---

## 🔄 Workflow for Adding New Content

### Adding a New Project:
1. ✅ Add project object to `projects.ts`
2. ✅ Add `projectXTitle` and `projectXDesc` to `translations.ts` (both EN and ID)
3. ✅ Upload project image and update `image` field
4. ✅ Update `link` to your GitHub/live demo

### Adding a New Certificate:
1. ✅ Add certificate object to `certificates.ts`
2. ✅ Add `certXTitle` and `certXIssuer` to `translations.ts` (both EN and ID)
3. ✅ Update `link` to verification URL

### Adding a New Skill:
1. ✅ Add skill object to `skills.ts` (either technical or soft skills array)
2. ✅ Provide both English (`name`) and Indonesian (`nameId`) translations

---

## 💡 Tips

- **Always save files after editing** - Vite will auto-reload the page
- **Test both languages** - Click EN/ID button to verify translations
- **Use descriptive names** - Make translation keys meaningful
- **Keep backups** - Save a copy before major changes
- **Check console** - Open browser DevTools to see any errors

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors (F12)
2. Make sure all translation keys match between files
3. Verify JSON syntax (commas, quotes, brackets)
4. Restart the dev server: `npm run dev`

---

**Happy editing! 🚀**

