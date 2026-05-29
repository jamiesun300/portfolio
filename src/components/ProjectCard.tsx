'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/data/projects'

interface Props {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        {/* ── Image ────────────────────────────────────────────────── */}
        <div className="relative aspect-[4/3] overflow-hidden bg-border mb-4">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Subtle dark overlay on hover */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />

          {/* Category pill */}
          <div className="absolute top-4 left-4">
            <span className="bg-cream/90 backdrop-blur-sm text-ink text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-body">
              {project.category}
            </span>
          </div>

          {/* Arrow reveal */}
          <div className="absolute bottom-4 right-4 w-9 h-9 bg-accent flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-cream text-sm">→</span>
          </div>
        </div>

        {/* ── Meta ─────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-xl text-ink group-hover:text-accent transition-colors duration-200 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-muted font-body">{project.tagline}</p>
          </div>
          <span className="text-xs text-muted font-body shrink-0 mt-1">{project.year}</span>
        </div>
      </Link>
    </motion.article>
  )
}
