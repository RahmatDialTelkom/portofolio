# Technology Stack Documentation

This document provides a comprehensive overview of all technologies, frameworks, libraries, and tools used in this personal portfolio website project.

---

## 📋 Table of Contents

- [Core Technologies](#core-technologies)
- [Build Tools & Development](#build-tools--development)
- [UI Framework & Component Libraries](#ui-framework--component-libraries)
- [Styling Solutions](#styling-solutions)
- [Data Visualization](#data-visualization)
- [Form Management](#form-management)
- [Utilities & Helpers](#utilities--helpers)
- [Type Definitions](#type-definitions)
- [Project Structure](#project-structure)

---

## 🎯 Core Technologies

### Programming Languages
- **TypeScript** - Primary language for type-safe development
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Styling and animations
- **HTML5** - Markup structure

### Frontend Framework
- **React 18.3.1** - Modern UI library for building component-based interfaces
  - Uses React 18 features including concurrent rendering
  - Functional components with hooks
  - Context API for state management

### Runtime
- **React DOM 18.3.1** - React renderer for web applications

---

## 🛠️ Build Tools & Development

### Build Tool
- **Vite 6.3.5** - Next-generation frontend build tool
  - Lightning-fast HMR (Hot Module Replacement)
  - Optimized production builds
  - Native ES modules support
  - Configured to run on port 3000 with auto-open browser

### Vite Plugins
- **@vitejs/plugin-react-swc 3.10.2** - React plugin using SWC for faster builds
  - SWC (Speedy Web Compiler) for ultra-fast compilation
  - Replaces Babel for better performance

### TypeScript Configuration
- **@types/node 20.10.0** - Node.js type definitions
- **@types/react 19.2.2** - React type definitions
- **@types/react-dom 19.2.2** - React DOM type definitions

---

## 🎨 UI Framework & Component Libraries

### Component Library - Radix UI
A comprehensive collection of unstyled, accessible UI primitives:

#### Layout & Navigation
- **@radix-ui/react-accordion 1.2.3** - Collapsible content sections
- **@radix-ui/react-navigation-menu 1.2.5** - Accessible navigation menus
- **@radix-ui/react-tabs 1.1.3** - Tab-based navigation
- **@radix-ui/react-separator 1.1.2** - Visual dividers
- **@radix-ui/react-scroll-area 1.2.3** - Custom scrollable areas
- **@radix-ui/react-collapsible 1.1.3** - Expandable/collapsible content

#### Overlays & Dialogs
- **@radix-ui/react-dialog 1.1.6** - Modal dialogs
- **@radix-ui/react-alert-dialog 1.1.6** - Alert/confirmation dialogs
- **@radix-ui/react-popover 1.1.6** - Floating content containers
- **@radix-ui/react-hover-card 1.1.6** - Hover-triggered cards
- **@radix-ui/react-tooltip 1.1.8** - Accessible tooltips
- **@radix-ui/react-context-menu 2.2.6** - Right-click context menus
- **@radix-ui/react-dropdown-menu 2.1.6** - Dropdown menus
- **@radix-ui/react-menubar 1.1.6** - Menu bars

#### Form Components
- **@radix-ui/react-checkbox 1.1.4** - Checkbox inputs
- **@radix-ui/react-radio-group 1.2.3** - Radio button groups
- **@radix-ui/react-select 2.1.6** - Select dropdowns
- **@radix-ui/react-slider 1.2.3** - Range sliders
- **@radix-ui/react-switch 1.1.3** - Toggle switches
- **@radix-ui/react-label 2.1.2** - Form labels
- **@radix-ui/react-toggle 1.1.2** - Toggle buttons
- **@radix-ui/react-toggle-group 1.1.2** - Toggle button groups

#### Display Components
- **@radix-ui/react-avatar 1.1.3** - User avatars with fallbacks
- **@radix-ui/react-aspect-ratio 1.1.2** - Aspect ratio containers
- **@radix-ui/react-progress 1.1.2** - Progress indicators

#### Utilities
- **@radix-ui/react-slot 1.1.2** - Composition utility for merging props

### Additional UI Components
- **cmdk 1.1.1** - Command menu/palette component (⌘K style)
- **embla-carousel-react 8.6.0** - Lightweight carousel/slider library
- **input-otp 1.4.2** - One-time password input component
- **vaul 1.1.2** - Drawer/bottom sheet component
- **react-resizable-panels 2.1.7** - Resizable panel layouts

### Icons
- **lucide-react 0.487.0** - Beautiful, consistent icon library
  - 1000+ open-source icons
  - Fully customizable
  - Tree-shakeable

---

## 🎨 Styling Solutions

### CSS Framework
- **Tailwind CSS v4.1.3** - Utility-first CSS framework
  - Custom design system with CSS variables
  - Responsive design utilities
  - Dark mode support
  - Custom animations and keyframes

### Styling Utilities
- **class-variance-authority 0.7.1** - CVA for managing component variants
  - Type-safe variant management
  - Conditional styling logic
- **clsx** - Utility for constructing className strings conditionally
- **tailwind-merge** - Merge Tailwind CSS classes without conflicts

### Theme Management
- **next-themes 0.4.6** - Theme switching (light/dark mode)
  - System preference detection
  - Persistent theme selection
  - No flash of unstyled content

### Custom Fonts
- **Google Fonts**:
  - **Montserrat** (400, 700, 800, 900) - Headings and display text
  - **Inter** (400, 600, 700) - Body text and UI elements

### Custom Animations
The project includes extensive custom CSS animations:
- **fade-in-up** - Entrance animations
- **tilt** - Subtle rotation effect
- **spin-slow** / **spin-reverse** - Rotating elements
- **float** - Floating effect
- **glow** - Glowing box-shadow effect
- **shimmer** - Shimmer/shine effect
- **wiggle** - Wiggle animation
- **gradient-shift** - Animated gradient backgrounds

---

## 📊 Data Visualization

### Charting Library
- **recharts 2.15.2** - Composable charting library built on React components
  - Built on D3.js
  - Responsive charts
  - Customizable and declarative

### D3.js Dependencies (via Recharts)
- **d3-array** - Array manipulation utilities
- **d3-color** - Color manipulation
- **d3-ease** - Easing functions for animations
- **d3-format** - Number formatting
- **d3-interpolate** - Interpolation methods
- **d3-path** - SVG path generation
- **d3-scale** - Scale functions
- **d3-shape** - Shape generators
- **d3-time** - Time intervals
- **d3-time-format** - Time formatting
- **d3-timer** - Animation timing

---

## 📝 Form Management

### Form Library
- **react-hook-form 7.55.0** - Performant form validation library
  - Minimal re-renders
  - Easy integration with UI libraries
  - Built-in validation
  - TypeScript support

### Date Picker
- **react-day-picker 8.10.1** - Flexible date picker component
  - Customizable calendar
  - Date range selection
  - Localization support

### Date Utilities
- **date-fns** - Modern JavaScript date utility library
  - Modular and tree-shakeable
  - Immutable and pure functions

---

## 🔧 Utilities & Helpers

### Toast Notifications
- **sonner 2.0.3** - Opinionated toast component for React
  - Beautiful default styling
  - Promise-based API
  - Customizable

### Utility Libraries
- **lodash** - JavaScript utility library
  - Array, object, and string manipulation
  - Functional programming helpers

### Other Utilities
- **decimal.js-light** - Arbitrary-precision decimal arithmetic
- **eventemitter3** - Fast event emitter
- **fast-equals** - Deep equality checking
- **nanoid** - Tiny, secure URL-friendly unique ID generator

---

## 📦 Type Definitions

All major dependencies include TypeScript type definitions for full type safety:
- `@types/node` - Node.js APIs
- `@types/react` - React library
- `@types/react-dom` - React DOM

---

## 🏗️ Project Structure

### Source Organization
```
src/
├── components/
│   ├── figma/          # Figma-related components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   └── ui/             # Reusable UI components (47 components)
├── constants/          # Static data and configurations
│   ├── certificates.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── translations.ts
│   └── workExperience.ts
├── contexts/           # React Context providers
│   └── LanguageContext.tsx
├── hooks/              # Custom React hooks
│   ├── useScrollAnimation.ts
│   └── useTranslation.ts
├── styles/             # Global styles
│   └── globals.css
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Tailwind CSS output
```

### Key Features Implemented
1. **Internationalization (i18n)** - Multi-language support via LanguageContext
2. **Scroll Animations** - Custom scroll-based animations
3. **Dark Mode** - Theme switching with persistence
4. **Responsive Design** - Mobile-first approach
5. **Custom Cursor** - Enhanced user interaction
6. **Animated Background** - Dynamic visual effects
7. **Component Library** - 47+ reusable UI components

---

## 🚀 Development Scripts

```json
{
  "dev": "vite",           // Start development server
  "build": "vite build"    // Build for production
}
```

### Development Server
- Runs on `http://localhost:3000`
- Auto-opens browser on start
- Hot Module Replacement (HMR) enabled

### Production Build
- Output directory: `build/`
- Target: `esnext`
- Optimized and minified

---

## 🎯 Design System

### Color Palette
The project uses a custom color system with CSS variables:
- **Blue shades** (50, 100, 200, 400, 500, 600)
- **Gray shades** (100, 500, 600, 700, 800)
- **White** and transparency variants
- **OKLCH color space** for better color interpolation

### Spacing System
- Base spacing unit: `0.25rem` (4px)
- Consistent spacing scale (1-80 units)

### Typography
- Font sizes: sm, base, lg, xl, 2xl
- Font weights: normal (400), medium (500)
- Custom line heights for readability

### Border Radius
- Default radius: `0.625rem` (10px)
- Variants: lg, xl, full

---

## 📄 License & Attribution

This project uses open-source libraries and follows their respective licenses. See `src/Attributions.md` for detailed attribution information.

---

**Last Updated:** 2025-10-31
**Project Version:** 0.1.0

