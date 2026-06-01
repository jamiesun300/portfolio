'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import ProjectCard from '@/components/ProjectCard'
import { getFeaturedProjects } from '@/data/projects'

const featured = getFeaturedProjects()

// Helper: staggered text reveal (word by word)
function SplitHeadline({
  words,
  className,
  delay = 0,
}: {
  words: string[]
  className?: string
  delay?: number
}) {
  return (
    <div className={`overflow-hidden pb-5 ${className ?? ''}`}>
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {words.join(' ')}
      </motion.span>
    </div>
  )
}

export default function HomePage() {
  return (
    <PageTransition>
      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="min-h-screen pt-16 px-6 md:px-10 flex flex-col">
        <div className="max-w-[1400px] mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">

          {/* ── Left: Text ──────────────────────────────────── */}
          <div>
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-muted mb-10"
            >
              <span className="w-8 h-px bg-accent" />
              Taipei, Taiwan — Los Angeles
            </motion.p>

            {/* Big stacked headline */}
            <div className="font-display font-bold leading-[0.95] text-[clamp(3.5rem,9vw,8.5rem)] text-ink mb-10">
              <SplitHeadline words={['Design']} delay={0.05} />
              <SplitHeadline
                words={['as']}
                delay={0.15}
                className="pl-[18%] text-ink"
              />
              <div className="overflow-hidden pb-6">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Story<span className="text-accent">.</span>
                </motion.span>
              </div>
            </div>

            {/* Bio blurb */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-muted leading-relaxed max-w-sm font-body mb-10"
            >
              Multidisciplinary designer and photographer based in Taipei, Taiwan. I create
              visual experiences that explore the intersection of design, culture, and
              human connection.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 bg-ink text-cream px-7 py-3.5 hover:bg-accent transition-colors duration-300"
              >
                <span className="text-xs tracking-[0.2em] uppercase font-body">View Work</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/about"
                className="text-xs tracking-[0.2em] uppercase font-body text-muted hover:text-accent transition-colors border-b border-current pb-0.5"
              >
                About Me
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Hero image ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Hero image */}
            <div className="relative aspect-[4/3] max-h-[680px] overflow-hidden">
              <Image
                src="/images/hero-card.png"
                alt="Jamie Sun — Visual Designer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            {/* Geometric accent: red vertical bar */}
            <div className="absolute top-6 -right-3 w-2.5 h-20 bg-accent" />

            {/* Geometric accent: open square */}
            <div className="absolute -bottom-5 -left-5 w-20 h-20 border-2 border-accent pointer-events-none" />
          </motion.div>
        </div>

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="max-w-[1400px] mx-auto w-full pb-8 flex items-center gap-3 text-muted"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-8 bg-muted/40"
          />
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════
          MARQUEE BAND
      ════════════════════════════════════════════════════ */}
      <div className="border-y border-border overflow-hidden py-3.5 bg-ink">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-6 pr-6 whitespace-nowrap shrink-0"
            >
              {['Brand Identity', 'Publication Design', 'Photography', 'Illustration', 'Editorial Design', 'Visual Storytelling'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-6 text-[11px] tracking-[0.22em] uppercase text-cream/70 font-body">
                    {item}
                    <span className="text-accent">·</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          FEATURED WORK
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-14 border-b border-border pb-8 gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3 flex items-center gap-3"
              >
                <span className="w-6 h-px bg-accent" />
                Selected Work
              </motion.p>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-bold text-5xl md:text-7xl text-ink leading-none"
                >
                  Featured<br />Projects<span className="text-accent">.</span>
                </motion.h2>
              </div>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted hover:text-accent transition-colors group shrink-0"
            >
              All Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link
              href="/work"
              className="text-xs tracking-[0.2em] uppercase text-muted hover:text-accent transition-colors"
            >
              All Work →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ABOUT TEASER
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-ink text-cream">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.3em] uppercase text-cream/40 mb-6"
            >
              About Jamie
            </motion.p>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
              >
                Design, culture,
                <br />
                <span className="text-accent">and human connection.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-cream/60 leading-relaxed max-w-md mb-10 font-body"
            >
              Multidisciplinary designer and photographer based in Taipei, Taiwan — with a background
              in visual communication from USC. My work spans graphic design, branding, publication
              design, photography, and visual storytelling across digital and physical experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 border border-cream/20 px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300 text-xs tracking-[0.2em] uppercase"
              >
                Read More
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Dual-image column layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/gaia-01.png"
                alt="GAIA — Children's Book Design"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden mt-10">
              <Image
                src="/images/fading-mockup-01.jpg"
                alt="Fading Footprints — Infographics Booklet"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FULL-BLEED EDITORIAL IMAGE
      ════════════════════════════════════════════════════ */}
      <div className="relative h-[50vw] min-h-[360px] max-h-[700px] overflow-hidden">
        <Image
          src="/images/amas-box-01.jpg"
          alt="AMA's Kitchen — Board Game Design"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-cream text-[10px] md:text-xs uppercase tracking-[0.4em] font-body"
          >
            Work that endures
          </motion.p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-10 text-center">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.35em] uppercase text-muted mb-6"
          >
            Available for projects
          </motion.p>
          <div className="overflow-hidden mb-12">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-[clamp(3rem,8vw,8rem)] text-ink leading-[0.9]"
            >
              Let's work<br />together<span className="text-accent">.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-ink text-cream px-10 py-4 hover:bg-accent transition-colors duration-300 text-xs tracking-[0.2em] uppercase font-body"
            >
              Get in Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
