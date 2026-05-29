// ─────────────────────────────────────────────────────────────────────────────
// projects.ts — Portfolio data file
//
// HOW TO UPDATE:
// 1. Add a new object to the `projects` array below.
// 2. Give it a unique `slug` (used in the URL: /work/your-slug).
// 3. Replace coverImage + images with your own paths or URLs.
// 4. Set `featured: true` to show it on the home page (keep to 3 max).
// ─────────────────────────────────────────────────────────────────────────────

// All valid category values
export type Category =
  | 'Branding'
  | 'Publication'
  | 'UI/UX'
  | 'Photography'
  | 'Installation'
  | 'Illustration';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  year: string;
  client: string;
  role: string;
  tools: string[];
  projectType: string;
  concept: string;
  challenge: string;
  process: string;
  outcome: string;
  coverImage: string;
  images: string[];
  video?: string; // optional: path to a video file e.g. '/images/project-video.mov'
  flipbookPages?: string[]; // optional: array of page images for interactive flipbook viewer
  featured: boolean;
}

// ─── Project data ─────────────────────────────────────────────────────────────
// Replace picsum.photos URLs with your own image paths, e.g. '/images/projects/meridian/cover.jpg'

export const projects: Project[] = [
  {
    slug: 'amas-kitchen',
    title: "AMA's Kitchen",
    tagline: 'A board game about love, food, and family.',
    category: 'Branding',
    year: '2023',
    client: 'Personal Project',
    role: 'Game Designer, Illustrator, Brand Designer',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    projectType: 'Board Game Design',
    concept:
      '"AMA\'s Kitchen" is a board game that honors my Taiwanese grandmother\'s love for cooking. In Taiwan, like in many places, expressing love through food is a tradition. This game captures the spirit of Taiwanese culture, family closeness, and finding a balance between old traditions and modern well-being.',
    challenge:
      'Translating the warmth and intimacy of a grandmother\'s kitchen into a visual system and game experience that feels both culturally authentic and inviting to all players.',
    process:
      'Developed the visual identity, illustration system, packaging design, and game board simultaneously — each element needed to feel cohesive while carrying its own personality within the game world.',
    outcome:
      'A fully designed board game celebrating the special connection between grandkids and their grandmas. A tribute to the love that passes down through generations and the flavors of Taiwanese heritage.',
    coverImage: '/images/amas-box-01.jpg',
    images: [
      '/images/amas-box-02.jpg',
      '/images/amas-screen-01.png',
      '/images/amas-screen-02.png',
      '/images/amas-screen-03.png',
      '/images/amas-screen-04.png',
      '/images/amas-foodcard.jpg',
      '/images/amas-playercard.jpg',
      '/images/amas-supportcard.jpg',
    ],
    featured: true,
  },
  {
    slug: 'blubear',
    title: 'Blubear™',
    tagline: 'Skateboarding meets style.',
    category: 'Branding',
    year: '2025',
    client: 'Conceptual Project',
    role: 'Brand Designer, Illustrator',
    tools: ['Illustrator', 'Photoshop', 'Procreate'],
    projectType: 'Brand Identity System',
    concept:
      'Blubear™ is a conceptual skateboard clothing brand that fuses bold design with street-ready attitude. Rooted in skate culture, the brand embraces movement, creativity, and individuality — built for those who dare to stand out.',
    challenge:
      'Creating a brand identity that feels authentically rooted in skate culture without relying on tired tropes. The visual system needed to feel high-energy and chaotic but still function as a coherent, professional brand.',
    process:
      'Developed a complete brand system from the ground up — custom character design, logotype, color palette, typography, iconography, patterns, and applications. The mascot character became the emotional core of everything.',
    outcome:
      'A full brand guidelines document covering logo use, color, typography, iconography, patterns, and real-world applications across street posters, packaging, and digital surfaces.',
    coverImage: '/images/blubear-brand-cover.svg',
    images: [
      '/images/blubear-street.png',
      '/images/blubear-poster-01.png',
      '/images/blubear-packaging.png',
      '/images/blubear-poster-02.png',
      '/images/blubear-cover.jpg',
      '/images/blubear-skater.png',
      '/images/blubear-guidelines.png',
      '/images/blubear-colors.svg',
      '/images/blubear-typography.svg',
      '/images/blubear-brand-voice.svg',
    ],
    featured: false,
  },
  {
    slug: 'editorial-photobook-design',
    title: 'Editorial Photobook Design',
    tagline: 'Life\'s beauty through diverse perspectives.',
    category: 'Publication',
    year: '2023',
    client: 'Personal Project',
    role: 'Book Designer, Art Director',
    tools: ['InDesign', 'Photoshop', 'Lightroom'],
    projectType: 'Photobook Design',
    concept:
      'A photographic collection featuring interviews and personal reflections on life\'s beauty from diverse perspectives. The book pairs in-depth narratives with each image, organized into thematic sections to enrich the storytelling experience.',
    challenge:
      'Designing a book where photography and text carry equal weight — neither overpowering the other. The layout needed to feel intimate and considered, like a personal object rather than a printed product.',
    process:
      'Developed a warm, tactile visual language using kraft-toned paper textures and generous white space. Each spread was designed around the specific image and narrative it carried, rather than fitting content into a rigid grid.',
    outcome:
      'A photobook that combines visual and textual elements to engage and inspire readers — a design that honors both the photography and the personal stories behind each image.',
    coverImage: '/images/beauty-01.jpg',
    images: [
      '/images/beauty-02.jpg',
      '/images/beauty-03.jpg',
      '/images/beauty-04.jpg',
    ],
    flipbookPages: Array.from({ length: 19 }, (_, i) =>
      `/images/beauty-pages/page-${String(i + 1).padStart(2, '0')}.png`
    ),
    featured: false,
  },
  {
    slug: 'posters-and-illustration',
    title: 'Posters & Illustration',
    tagline: 'Type, color, and characters that stick.',
    category: 'Illustration',
    year: '2024',
    client: 'Various',
    role: 'Illustrator, Poster Designer',
    tools: ['Illustrator', 'Photoshop', 'Procreate'],
    projectType: 'Poster Design & Illustration',
    concept:
      'A collection of poster design and illustration work spanning event branding, editorial illustration, and personal projects. Each piece explores a different visual language — from retro pixel art to expressive character-driven scenes.',
    challenge:
      'Keeping a strong personal voice across wildly different briefs and styles. The challenge with both posters and illustration is making something that works instantly at a glance while rewarding a longer look.',
    process:
      'Each project starts with concept and tone before any visuals — what feeling does this need to create? From there, color, type, and composition are built to carry that feeling as directly as possible.',
    outcome:
      'A diverse body of work including the Pixel Fest event poster and badge system, typographic poster work, and a series of editorial illustrations across themes of identity, surrealism, and everyday life.',
    coverImage: '/images/pi-cover.svg',
    images: [
      '/images/pi-01.png',
      '/images/pi-02.png',
      '/images/pi-03.png',
      '/images/pi-04.png',
      '/images/pi-05.png',
      '/images/pi-06.png',
      '/images/pi-07.png',
      '/images/pi-08.png',
      '/images/pi-09.png',
      '/images/pi-10.png',
    ],
    featured: false,
  },
  {
    slug: 'fading-footprints',
    title: 'Fading Footprints',
    tagline: 'Visual storytelling for wildlife conservation.',
    category: 'Publication',
    year: '2024',
    client: 'Personal Project',
    role: 'Designer, Illustrator',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    projectType: 'Infographics Booklet',
    concept:
      'An infographics booklet investigating endangered and vulnerable wildlife — focusing on their habitats, diets, behaviors, and conservation needs. Detailed illustrations are paired with informative data visualizations to engage and educate a broad audience on the urgent need for wildlife conservation.',
    challenge:
      'Making complex ecological data feel emotionally compelling and visually accessible. The challenge was designing infographics that inform without overwhelming — balancing scientific accuracy with visual storytelling.',
    process:
      'Researched each featured species in depth before designing. Developed a consistent illustration style and data visualization system that could flex across very different animals and ecosystems while keeping the booklet cohesive.',
    outcome:
      'A booklet featuring species including the Red Panda, Snow Leopard, and Yangtze Finless Porpoise — each spread crafted to deepen audience engagement and emphasize the urgency of conservation action.',
    coverImage: '/images/fading-mockup-01.jpg',
    images: [
      '/images/fading-mockup-02.jpg',
      '/images/fading-mockup-03.jpg',
      '/images/fading-01.png',
      '/images/fading-02.png',
      '/images/fading-03.jpg',
    ],
    video: '/images/fading-flipbook.mov',
    featured: false,
  },
  {
    slug: 'gaia-book-design',
    title: 'GAIA',
    tagline: 'Girls\' Aspirations in Action.',
    category: 'Publication',
    year: '2025',
    client: 'GAIA',
    role: 'Book Designer, Illustrator',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    projectType: 'Children\'s Book Design',
    concept:
      'A black-and-white children\'s publication designed for girls, functioning both as a visual inspiration guide and a customizable coloring book. Using a monochrome branding system, original graphic designs and illustrations were created that young readers can print and color at home.',
    challenge:
      'Designing a book that speaks authentically to young girls — engaging, empowering, and visually rich — while working in two modes simultaneously: as a finished publication and as a blank canvas for personal expression.',
    process:
      'Developed a monochrome illustration system flexible enough to support a wide range of content — leadership prompts, identity worksheets, aspiration exercises — while keeping the visual language cohesive, playful, and age-appropriate.',
    outcome:
      'A children\'s publication that blends creativity with flexibility, encouraging girls to express themselves and see their own potential. Designed to empower young women to recognize themselves as leaders from an early age.',
    coverImage: '/images/gaia-01.png',
    images: [
      '/images/gaia-02.png',
      '/images/gaia-03.png',
      '/images/gaia-04.png',
      '/images/gaia-05.png',
      '/images/gaia-06.png',
      '/images/gaia-07.png',
      '/images/gaia-08.png',
      '/images/gaia-09.png',
      '/images/gaia-10.png',
      '/images/gaia-11.png',
      '/images/gaia-12.png',
    ],
    featured: true,
  },
  {
    slug: 'museum-merchandise',
    title: 'USC Pacific Asia Museum',
    tagline: 'Where art meets ecological awareness.',
    category: 'Branding',
    year: '2024',
    client: 'USC Pacific Asia Museum',
    role: 'Designer, Illustrator',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    projectType: 'Product & Merchandise Design',
    concept:
      'This project combines museum art with sustainability by creating two products that promote ecological awareness. Each piece functions as both a collectible and an educational object — something you keep, something you learn from, something you plant.',
    challenge:
      'Designing products that feel like genuine museum merchandise while carrying a meaningful environmental message — without being preachy or losing the sense of delight.',
    process:
      'Developed two product lines in parallel: illustrated bird-themed blind box stickers paired with educational cards introducing each bird\'s habitat and conservation status, and seed-embedded plantable postcards that grow into native flowers supporting local ecosystems.',
    outcome:
      'A cohesive merchandise line for USC Pacific Asia Museum that connects visitors to nature through illustrated storytelling and sustainable design. Products were accompanied by messages on habitat preservation and sustainable living.',
    coverImage: '/images/cover.png',
    images: [
      '/images/museum-01.jpg',
      '/images/museum-02.jpg',
      '/images/museum-03.jpg',
      '/images/museum-04.jpg',
      '/images/museum-05.jpg',
      '/images/museum-06.jpg',
      '/images/museum-07.jpg',
      '/images/museum-08.jpg',
      '/images/museum-09.jpg',
      '/images/museum-10.jpg',
      '/images/museum-screen-02.png',
    ],
    featured: false,
  },
  {
    slug: 'roots-and-roads',
    title: 'Roots & Roads',
    tagline: 'Documenting Chinese neighborhoods in LA.',
    category: 'Publication',
    year: '2025',
    client: 'Personal Project',
    role: 'Designer, Photographer, Writer',
    tools: ['InDesign', 'Illustrator', 'Photoshop'],
    projectType: 'Booklet Design',
    concept:
      'A visual storytelling publication that documents the lives and experiences of Chinese small business owners in Los Angeles\' San Gabriel Valley. Through interviews, photography, and design inspired by street flyer culture and traditional Chinese elements.',
    challenge:
      'Capturing the rich cultural identity of these communities while making the design feel both authentic and contemporary.',
    process:
      'Conducted interviews and photography sessions with local business owners, then developed a visual language drawing from street flyer culture and traditional Chinese graphic elements.',
    outcome:
      'A booklet exploring themes of identity, resilience, and cultural adaptation across generations of immigrants in the San Gabriel Valley. The project also included a physical woodwork installation that brought the publication into three-dimensional space.',
    coverImage: '/images/covers.png',
    images: [
      '/images/printed-01.jpg',
      '/images/printed-02.jpg',
      '/images/printed-03.jpg',
      '/images/printed-04.jpg',
      '/images/printed-05.jpg',
      '/images/printed-06.jpg',
      '/images/printed-07.jpg',
      '/images/printed-08.jpg',
      '/images/printed-09.jpg',
      '/images/installation-01.png',
      '/images/installation-02.png',
      '/images/installation-03.png',
      '/images/spread-02.jpg',
      '/images/spread-03.jpg',
      '/images/spread-04.jpg',
      '/images/spread-05.jpg',
      '/images/spread-06.jpg',
      '/images/spread-07.jpg',
      '/images/spread-08.jpg',
      '/images/spread-09.jpg',
      '/images/spread-10.jpg',
      '/images/spread-11.jpg',
      '/images/spread-12.jpg',
    ],
    featured: true,
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────
export const getFeaturedProjects = () => projects.filter((p) => p.featured)
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
export const getProjectsByCategory = (category: Category) =>
  projects.filter((p) => p.category === category)
