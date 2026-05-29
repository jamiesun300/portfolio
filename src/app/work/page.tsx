'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import ProjectCard from '@/components/ProjectCard'
import { projects, Category } from '@/data/projects'

// 'All' is a UI-only value — not a real Category type
type Filter = 'All' | Category

const FILTERS: Filter[] = [
  'All',
  'Branding',
  'Publication',
  'Illustration',
  'UI/UX',
  'Photography',
  'Installation',
]

export default function WorkPage() {
  const [active, setActive] = useState<Filter>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <PageTransition>
      <div className="pt-36 pb-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          {/* ── Page header ────────────────────────────────────── */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-muted mb-5"
            >
              <span className="w-6 h-px bg-accent" />
              Portfolio
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-[clamp(4rem,10vw,9rem)] text-ink leading-none"
              >
                Work<span className="text-accent">.</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted mt-5 max-w-md leading-relaxed font-body"
            >
              A selection of projects across branding, editorial design, photography, UI/UX,
              and spatial installation.
            </motion.p>
          </div>

          {/* ── Category filters ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 md:gap-3 mb-16 border-b border-border pb-8"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-body transition-all duration-250 border ${
                  active === f
                    ? 'bg-ink text-cream border-ink'
                    : 'bg-transparent text-muted border-border hover:border-ink hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
            {/* Count */}
            <span className="ml-auto text-xs text-muted font-body">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </span>
          </motion.div>

          {/* ── Grid ───────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="text-muted text-center py-20 font-body">
              No projects in this category yet.
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
