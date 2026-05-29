'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import FlipBook from '@/components/FlipBook'
import { getProjectBySlug, projects } from '@/data/projects'

// Fade-in helper for sections
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Section label with red dash
function SectionLabel({ text }: { text: string }) {
  return (
    <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted mb-4">
      <span className="w-5 h-px bg-accent shrink-0" />
      {text}
    </p>
  )
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug)

  // 404 if slug not found
  if (!project) notFound()

  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <PageTransition>
      {/* ════════════════════════════════════════════════════
          HERO IMAGE
      ════════════════════════════════════════════════════ */}
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />

        {/* Back link */}
        <Link
          href="/work"
          className="absolute top-24 left-6 md:left-10 flex items-center gap-2 text-cream/80 hover:text-cream text-xs tracking-widest uppercase font-body transition-colors"
        >
          ← All Projects
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-10 left-6 md:left-10">
          <p className="text-cream/70 text-[10px] tracking-[0.3em] uppercase mb-3 font-body">
            {project.category} &nbsp;·&nbsp; {project.year}
          </p>
          <h1 className="font-display font-bold text-[clamp(3rem,7vw,7rem)] text-cream leading-none">
            {project.title}<span className="text-accent">.</span>
          </h1>
        </div>

        {/* Red corner accent */}
        <div className="absolute bottom-0 right-0 w-1 h-24 bg-accent" />
      </div>

      {/* ════════════════════════════════════════════════════
          BODY
      ════════════════════════════════════════════════════ */}
      <div className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">

          {/* ── Metadata grid ─────────────────────────────────── */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-border pb-12 mb-16">
              {[
                ['Role', project.role],
                ['Year', project.year],
                ['Type', project.projectType],
                ['Tools', project.tools.join(', ')],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-2">{label}</p>
                  <p className="text-sm text-ink font-body leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ── Pull quote / tagline ────────────────────────────── */}
          <FadeIn delay={0.05}>
            <blockquote className="mb-16 md:mb-24 border-l-2 border-accent pl-6">
              <p className="font-display font-bold text-3xl md:text-5xl text-ink leading-tight max-w-3xl">
                "{project.tagline}"
              </p>
            </blockquote>
          </FadeIn>

          {/* ── Concept ────────────────────────────────────────── */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <SectionLabel text="Concept" />
                <p className="text-ink leading-relaxed font-body">{project.concept}</p>
              </div>
            </div>
          </FadeIn>

          {/* ── First image pair ───────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            {project.images.slice(0, 2).map((src, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative overflow-hidden bg-border" style={{ minHeight: '300px' }}>
                  <Image
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* ── Interactive Flipbook (if project has pages) ─────── */}
          {project.flipbookPages && project.flipbookPages.length > 0 && (
            <FadeIn>
              <div className="mb-20">
                <SectionLabel text="Flip Through" />
                <FlipBook pages={project.flipbookPages} />
              </div>
            </FadeIn>
          )}

          {/* ── Video (if project has one) ──────────────────────── */}
          {project.video && (
            <FadeIn>
              <div className="mb-20">
                <SectionLabel text="In Motion" />
                <video
                  src={project.video}
                  controls
                  playsInline
                  className="w-full max-h-[600px] object-contain bg-ink"
                >
                  Your browser does not support this video format.
                </video>
              </div>
            </FadeIn>
          )}

          {/* ── Three process sections ──────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {[
              { label: 'Challenge', text: project.challenge },
              { label: 'Process',   text: project.process },
              { label: 'Outcome',   text: project.outcome },
            ].map(({ label, text }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <SectionLabel text={label} />
                <p className="text-sm text-ink leading-relaxed font-body">{text}</p>
              </FadeIn>
            ))}
          </div>

          {/* ── Remaining images ────────────────────────────────── */}
          {project.images.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
              {project.images.slice(2).map((src, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div
                    className={`relative overflow-hidden bg-border ${
                      i === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                    }`}
                    style={{ minHeight: '220px' }}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — detail ${i + 3}`}
                      width={900}
                      height={700}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* ── Navigation: back + next project ─────────────────── */}
          <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <Link
              href="/work"
              className="text-xs tracking-[0.2em] uppercase text-muted hover:text-accent transition-colors font-body flex items-center gap-2"
            >
              ← All Projects
            </Link>

            {nextProject && (
              <Link href={`/work/${nextProject.slug}`} className="group text-right">
                <p className="text-[10px] tracking-widest uppercase text-muted mb-2 font-body">
                  Next Project
                </p>
                <p className="font-display font-bold text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors flex items-center gap-3 justify-end">
                  {nextProject.title}
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
