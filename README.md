# Portfolio Site

A clean, editorial design portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## Quick Start

### 1. Install Node.js (if you haven't already)

The recommended method on macOS is to install [Homebrew](https://brew.sh) first, then Node:

```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Node.js
brew install node
```

Or download directly from [nodejs.org](https://nodejs.org) (LTS version).

### 2. Install dependencies

```bash
cd ~/Desktop/mysite
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## File Structure

```
mysite/
├── src/
│   ├── app/                   # Pages (Next.js App Router)
│   │   ├── layout.tsx         # Root layout (nav, footer, fonts)
│   │   ├── page.tsx           # Home page
│   │   ├── work/
│   │   │   ├── page.tsx       # Work grid with category filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Individual project detail page
│   │   ├── about/page.tsx     # About page
│   │   └── contact/page.tsx   # Contact page
│   ├── components/
│   │   ├── Navigation.tsx     # Sticky nav + mobile menu
│   │   ├── Footer.tsx         # Site footer
│   │   ├── ProjectCard.tsx    # Reusable project grid card
│   │   └── PageTransition.tsx # Framer Motion page wrapper
│   └── data/
│       └── projects.ts        # ← ALL your project data lives here
└── public/
    └── images/                # Put your own images here
```

---

## How to Update Content

### Add a new project

Open `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  slug: 'my-new-project',          // URL: /work/my-new-project
  title: 'Project Name',
  tagline: 'One-line description.',
  category: 'Branding',            // Branding | Publication | UI/UX | Photography | Installation
  year: '2025',
  client: 'Client Name',
  role: 'Your Role',
  tools: ['Figma', 'Illustrator'],
  projectType: 'Type of Work',
  concept: 'What the project is about...',
  challenge: 'What made it interesting...',
  process: 'How you approached it...',
  outcome: 'What resulted...',
  coverImage: '/images/projects/my-project/cover.jpg', // or a URL
  images: [
    '/images/projects/my-project/01.jpg',
    '/images/projects/my-project/02.jpg',
  ],
  featured: false, // set true to show on home page (keep to 3 max)
},
```

### Use your own images

1. Place your images in `public/images/` (e.g. `public/images/projects/meridian/cover.jpg`)
2. Reference them as `/images/projects/meridian/cover.jpg` in `projects.ts`

The placeholder images from `picsum.photos` are just for development — swap them out as you go.

### Update personal info

- **Name / studio name**: Search for `Studio` in layout.tsx, Navigation.tsx, Footer.tsx
- **Bio text**: `src/app/about/page.tsx` — edit the paragraph text directly
- **Email**: `src/app/contact/page.tsx` and `src/components/Footer.tsx`
- **Social links**: `src/app/contact/page.tsx` (SOCIAL array) and `src/components/Footer.tsx`

### Show on home page

Set `featured: true` on up to 3 projects in `projects.ts`. The home page automatically shows featured projects.

---

## Design System

| Token     | Value       | Usage                         |
|-----------|-------------|-------------------------------|
| `cream`   | `#EFE9DF`   | Background                    |
| `ink`     | `#0D0D0D`   | Primary text                  |
| `accent`  | `#C41E1E`   | Red accents, hover states     |
| `muted`   | `#7A7A7A`   | Secondary text, labels        |
| `border`  | `#DDD7CC`   | Dividers                      |

Fonts: **Space Grotesk** (display/headings) + **Inter** (body) — loaded via Next.js Google Fonts.

---

## Build for Production

```bash
npm run build
npm start
```

Or deploy to [Vercel](https://vercel.com) with one click — just connect your GitHub repo.
