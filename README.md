# Ezekiel Matomi Lucky — Portfolio Website

> **Innovating at the Intersection of Cloud, Code & Community**

Personal portfolio and kinetic showcase for **Ezekiel Matomi Lucky** — DevOps Engineer, Cloud Architect, and Full-Stack Developer. Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and optimized for high-performance static hosting.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI & Components**: [React 19](https://react.dev/), [Lucide React](https://lucide.dev/), [@icons-pack/react-simple-icons](https://simple-icons.github.io/simple-icons-react/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Deployment**: Static HTML Export (`output: 'export'`), optimized for Cloudflare Pages, GitHub Pages, or Vercel static hosting

---

## 🛠️ Getting Started

### 1. Prerequisites
Make sure you have Node.js 20+ and `pnpm` (or `npm`) installed.

### 2. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 3. Development Server
Run the local development server with Turbopack:
```bash
pnpm dev
# or
pnpm devlocal
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building and Previewing

This project is configured with `output: 'export'` in `next.config.ts`, producing a standalone static site inside the `out/` directory.

### Build Production Static Export
```bash
pnpm build
# or
npm run build
```
This compiles TypeScript, optimizes static assets, and exports HTML/CSS/JS to the `out/` folder.

### Preview the Static Export Locally
Because the project uses static export, `next start` (which requires a Node.js server) is replaced by a local static file server:
```bash
pnpm start
# or
npx serve out
```
> **Note**: `next start` does not work with `output: 'export'`. Running `pnpm start` runs `npx -y serve out` to preview the production build.

---

## 📂 Project Structure

```
├── app/
│   ├── about/
│   │   ├── page.tsx                        # About Me page (Bio, Education, Experience, Skills)
│   │   ├── SophisticatedPortraitMotion.tsx # Kinetic portrait motion graphic
│   │   └── MotionCard.tsx                  # Interactive motion cards
│   ├── layout.tsx                          # Root layout & font configurations
│   ├── page.tsx                            # Home page with kinetic avatar & fluid image showcase
│   ├── KineticBrandAvatar.tsx              # Interactive brand kinetic avatar
│   ├── FoodImg.tsx                         # Image array & metadata
│   └── globals.css                         # Global Tailwind styles
├── public/
│   ├── about_profile_picx/                 # High-resolution profile photography
│   ├── food-pictures/                      # Carousel media assets
│   └── logo/                               # Social & tech stack SVG icons
├── unuse/                                  # Archived modules (contact API, legacy pages)
├── next.config.ts                          # Next.js configuration (static export, image unoptimized)
├── package.json                            # Scripts and dependencies
└── tsconfig.json                           # TypeScript configuration
```

---

## 📄 License
Private portfolio of Ezekiel Matomi Lucky. All rights reserved.