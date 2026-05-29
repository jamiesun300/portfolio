'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

// ── Data ─────────────────────────────────────────────────────────────────────
// Replace with your own info

const SKILLS = [
  'Graphic Design',
  'Brand Identity',
  'Publication Design',
  'Editorial Design',
  'Photography',
  'Illustration',
  'Art Direction',
  'Book Design',
  'Visual Storytelling',
]

const TOOLS = [
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Adobe InDesign',
  'Procreate',
  'Lightroom',
]

const EDUCATION = [
  {
    school: 'University of Southern California',
    degree: 'Master of Fine Arts — Visual Communication Design',
    year: 'Los Angeles, CA',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-36 pb-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">

          {/* ── Header ────────────────────────────────────────── */}
          <div className="mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-muted mb-5"
            >
              <span className="w-6 h-px bg-accent" />
              About
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-[clamp(4rem,10vw,9rem)] text-ink leading-none"
              >
                Jamie Sun<span className="text-accent">.</span>
              </motion.h1>
            </div>
          </div>

          {/* ── Bio + Portrait ────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-28 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-display text-xl md:text-2xl text-ink leading-relaxed mb-6">
                Hi, I'm Jamie Sun, a multidisciplinary designer and photographer based in Taipei, Taiwan.
              </p>
              <p className="text-muted leading-relaxed mb-5 font-body">
                With a background in visual communication, photography, and storytelling, my work explores
                the intersection of design, culture, and human connection. I specialize in graphic design,
                branding, publication design, photography, and visual storytelling across both digital and
                physical experiences.
              </p>
              <p className="text-muted leading-relaxed mb-5 font-body">
                Having studied and worked in Los Angeles for several years, I bring an international
                perspective into my creative process while staying deeply inspired by Asian culture and
                everyday life. I'm passionate about creating thoughtful visual experiences that feel both
                emotionally engaging and culturally grounded.
              </p>

              {/* Chinese version */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-4">中文</p>
                <p className="font-display text-lg text-ink leading-relaxed mb-4">
                  嗨，我是 Jamie Sun，一位來自台灣台北的多領域設計師與攝影師。
                </p>
                <p className="text-muted leading-relaxed mb-4 font-body">
                  我的創作結合視覺設計、攝影與故事敘事，關注文化、日常生活與人之間的連結。作品領域涵蓋品牌設計、平面設計、出版設計、攝影以及視覺敘事，並探索數位與實體體驗之間的可能性。
                </p>
                <p className="text-muted leading-relaxed font-body">
                  曾於洛杉磯生活與學習多年，讓我在創作中融合國際視角與亞洲文化背景。我希望透過設計創造具有情感溫度、文化感與故事性的視覺體驗。
                </p>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-h-[580px] overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/about-portrait/800/1067"
                  alt="Designer portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Accents */}
              <div className="absolute top-5 -left-3 w-2 h-16 bg-accent" />
              <div className="absolute -bottom-5 right-8 w-16 h-16 border-2 border-ink pointer-events-none" />
            </motion.div>
          </div>

          {/* ── Disciplines ───────────────────────────────────── */}
          <div className="border-t border-border pt-12 mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-7">Disciplines</p>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="border border-border px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent transition-all duration-200 cursor-default font-body"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ── Tools ─────────────────────────────────────────── */}
          <div className="border-t border-border pt-12 mb-24">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-7">Tools</p>
            <div className="flex flex-wrap gap-0">
              {TOOLS.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm text-muted hover:text-accent transition-colors duration-200 cursor-default font-body"
                >
                  {tool}
                  {i < TOOLS.length - 1 && <span className="text-accent mx-3">·</span>}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ── Education ────────────────────────────────────── */}
          <div className="mb-24">
            <div className="max-w-xl">
              <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted mb-8">
                <span className="w-5 h-px bg-accent" />
                Education
              </p>
              <div className="space-y-8">
                {EDUCATION.map((edu) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border-b border-border pb-7"
                  >
                    <div className="flex items-start justify-between mb-1 gap-4">
                      <h3 className="font-display font-bold text-base text-ink leading-snug">
                        {edu.school}
                      </h3>
                      <span className="text-xs text-muted font-body shrink-0 ml-2">{edu.year}</span>
                    </div>
                    <p className="text-sm text-muted font-body">{edu.degree}</p>
                  </motion.div>
                ))}
              </div>

              {/* Available badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 border border-accent p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] tracking-widest uppercase text-accent font-body">
                    Currently available
                  </span>
                </div>
                <p className="text-sm text-ink font-body leading-relaxed">
                  Open to graphic design, branding, publication design, photography, and
                  creative collaborations — local and international.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ── CTA block ─────────────────────────────────────── */}
          <div className="bg-ink text-cream p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-cream/50 text-xs mb-3 tracking-wide font-body">
                Let's make something worth keeping.
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                Start a conversation<span className="text-accent">.</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="shrink-0 group border border-cream/20 px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300 text-xs tracking-[0.2em] uppercase font-body flex items-center gap-3"
            >
              Get in Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
