'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

export default function UntranslatableTaiwanPage() {
  return (
    <PageTransition>
      {/* ── Header ── */}
      <div className="pt-32 pb-8 px-6 md:px-10 max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-muted mb-5"
        >
          <span className="w-6 h-px bg-accent" />
          UI/UX · 2025
        </motion.p>

        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-[clamp(2.5rem,6vw,6rem)] text-ink leading-none"
          >
            Lost in Translation<span className="text-accent">.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted max-w-xl leading-relaxed font-body text-sm"
        >
          An interactive editorial platform exploring Taiwanese Mandarin words that cannot be
          fully translated into English — combining AI explanations, cultural context,
          photography, and typography motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap gap-2 mt-6"
        >
          {['HTML / CSS / JS', 'Editorial Design', 'Motion Design', 'Illustration'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase border border-border text-muted font-body"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Live iframe ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full px-6 md:px-10 pb-4 max-w-[1400px] mx-auto"
      >
        <div
          className="w-full overflow-hidden border border-border shadow-lg"
          style={{ height: '85vh' }}
        >
          <iframe
            src="/lost-in-translation/index.html"
            className="w-full h-full"
            style={{ border: 'none' }}
            title="Lost in Translation — Interactive Demo"
          />
        </div>
        <p className="text-[10px] tracking-[0.15em] uppercase text-muted mt-3 font-body text-center">
          Interactive demo — click any word to explore
        </p>
      </motion.div>

      {/* ── Back link ── */}
      <div className="px-6 md:px-10 pb-24 max-w-[1400px] mx-auto">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors font-body"
        >
          ← Back to Work
        </Link>
      </div>
    </PageTransition>
  )
}
