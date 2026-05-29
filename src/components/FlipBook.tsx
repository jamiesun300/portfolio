'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface FlipBookProps {
  pages: string[]
}

export default function FlipBook({ pages }: FlipBookProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [autoPlay, setAutoPlay] = useState(false)

  const goTo = useCallback((index: number) => {
    if (index === current) return
    setDirection(index > current ? 'next' : 'prev')
    setCurrent(index)
  }, [current])

  const goNext = useCallback(() => {
    if (current < pages.length - 1) goTo(current + 1)
  }, [current, pages.length, goTo])

  const goPrev = useCallback(() => {
    if (current > 0) goTo(current - 1)
  }, [current, goTo])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent(p => {
        if (p >= pages.length - 1) { setAutoPlay(false); return p }
        setDirection('next')
        return p + 1
      })
    }, 1200)
    return () => clearInterval(timer)
  }, [autoPlay, pages.length])

  // Page flip animation variants
  const variants = {
    enter: (dir: string) => ({
      rotateY: dir === 'next' ? 60 : -60,
      opacity: 0,
      scale: 0.92,
      z: -80,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        rotateY: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        opacity:  { duration: 0.25 },
        scale:    { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      },
    },
    exit: (dir: string) => ({
      rotateY: dir === 'next' ? -60 : 60,
      opacity: 0,
      scale: 0.92,
      z: -80,
      transition: {
        rotateY: { duration: 0.35, ease: [0.55, 0, 1, 0.45] },
        opacity:  { duration: 0.2 },
      },
    }),
  }

  const progress = ((current + 1) / pages.length) * 100

  return (
    <div className="w-full max-w-3xl mx-auto select-none">

      {/* ── Book frame ─────────────────────────────────────── */}
      <div
        className="relative overflow-hidden bg-[#1c1a18] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        style={{ perspective: '1400px', aspectRatio: '1/1' }}
      >

        {/* Animated page */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ transformStyle: 'preserve-3d', position: 'absolute', inset: 0 }}
          >
            <Image
              src={pages[current]}
              alt={`Page ${current + 1} of ${pages.length}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain bg-[#faf7f2]"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Click zones */}
        <button
          onClick={goPrev}
          disabled={current === 0}
          aria-label="Previous page"
          className="absolute left-0 top-0 bottom-0 w-2/5 z-30 cursor-w-resize disabled:cursor-default"
        />
        <button
          onClick={goNext}
          disabled={current === pages.length - 1}
          aria-label="Next page"
          className="absolute right-0 top-0 bottom-0 w-2/5 z-30 cursor-e-resize disabled:cursor-default"
        />

        {/* Page number badge */}
        <div className="absolute bottom-4 right-5 z-30 bg-ink/60 backdrop-blur-sm px-3 py-1">
          <span className="text-[10px] text-cream/70 font-body tracking-widest">
            {current + 1} / {pages.length}
          </span>
        </div>

      </div>

      {/* ── Progress bar ───────────────────────────────────── */}
      <div className="h-px bg-border mt-0">
        <motion.div
          className="h-full bg-accent"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* ── Controls ───────────────────────────────────────── */}
      <div className="flex items-center justify-between py-4 px-1">
        {/* Prev */}
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="text-[10px] tracking-[0.2em] uppercase font-body text-muted hover:text-accent disabled:opacity-20 transition-colors flex items-center gap-2"
        >
          ← Prev
        </button>

        {/* Page dots + autoplay */}
        <div className="flex items-center gap-4">
          {/* Dots (show max 16) */}
          <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px]">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? 'w-4 h-1.5 bg-accent'
                    : 'w-1.5 h-1.5 bg-border hover:bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Auto-play button */}
          <button
            onClick={() => { setAutoPlay(a => !a); if (!autoPlay && current === pages.length - 1) setCurrent(0) }}
            className={`text-[10px] tracking-[0.2em] uppercase font-body transition-colors border px-3 py-1.5 ${
              autoPlay
                ? 'border-accent text-accent'
                : 'border-border text-muted hover:border-ink hover:text-ink'
            }`}
          >
            {autoPlay ? '⏸ Pause' : '▶ Play'}
          </button>
        </div>

        {/* Next */}
        <button
          onClick={goNext}
          disabled={current === pages.length - 1}
          className="text-[10px] tracking-[0.2em] uppercase font-body text-muted hover:text-accent disabled:opacity-20 transition-colors flex items-center gap-2"
        >
          Next →
        </button>
      </div>

      <p className="text-center text-[10px] text-muted/50 font-body tracking-wide -mt-2">
        Click left / right side of book to turn pages · or use ← → arrow keys
      </p>
    </div>
  )
}
