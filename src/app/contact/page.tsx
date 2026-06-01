'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'

// ── Data ─────────────────────────────────────────────────────────────────────
// Update with your real links and handles

const SOCIAL = [
  { label: 'LinkedIn', handle: 'Chieh Ming Sun', href: 'https://www.linkedin.com/in/chiehmingsun' },
]

const SERVICES = [
  'Brand Identity & Visual Systems',
  'Editorial & Publication Design',
  'Illustration & Poster Design',
  'Photography',
  'Art Direction',
  'Creative Collaborations',
]

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-36 pb-28 px-6 md:px-10 flex flex-col">
        <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col">

          {/* ── Header ────────────────────────────────────────── */}
          <div className="mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-muted mb-5"
            >
              <span className="w-6 h-px bg-accent" />
              Get in Touch
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-[clamp(4rem,10vw,9rem)] text-ink leading-none"
              >
                Contact<span className="text-accent">.</span>
              </motion.h1>
            </div>
          </div>

          {/* ── Two-column layout ─────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 flex-1">

            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-muted leading-relaxed max-w-md mb-14 font-body">
                I'm always open to discussing new projects, creative directions, or just a
                good conversation about design. If you have something in mind — reach out.
                I respond to all messages within 24–48 hours.
              </p>

              {/* Email */}
              <div className="mb-12">
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3 font-body">
                  Email
                </p>
                <a
                  href="mailto:sunchiehming@gmail.com"
                  className="group font-display font-bold text-2xl md:text-3xl text-ink hover:text-accent transition-colors duration-200 flex items-center gap-4"
                >
                  sunchiehming@gmail.com
                  <span className="text-2xl opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    →
                  </span>
                </a>
              </div>

              {/* Phone */}
              <div className="mb-12">
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3 font-body">
                  Phone
                </p>
                <a
                  href="tel:+886930101201"
                  className="block text-ink font-body hover:text-accent transition-colors duration-200 mb-1"
                >
                  +886 930 101 201 <span className="text-muted text-sm ml-2">Taiwan</span>
                </a>
                <a
                  href="tel:+3109938138"
                  className="block text-ink font-body hover:text-accent transition-colors duration-200"
                >
                  +1 310 993 8138 <span className="text-muted text-sm ml-2">US</span>
                </a>
              </div>

              {/* Location */}
              <div className="mb-12">
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3 font-body">
                  Based In
                </p>
                <p className="text-ink font-body">
                  Taipei, Taiwan<br />
                  <span className="text-muted text-sm">Working globally.</span>
                </p>
              </div>

              {/* Social links */}
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-6 font-body">
                  Follow
                </p>
                <div className="space-y-1">
                  {SOCIAL.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + i * 0.07 }}
                      className="flex items-center justify-between border-b border-border py-4 group hover:border-accent transition-colors duration-200"
                    >
                      <div>
                        <span className="block text-[10px] tracking-widest uppercase text-muted mb-0.5 font-body group-hover:text-accent transition-colors">
                          {link.label}
                        </span>
                        <span className="font-display font-bold text-ink group-hover:text-accent transition-colors duration-200">
                          {link.handle}
                        </span>
                      </div>
                      <span className="text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right column: dark availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col"
            >
              <div className="flex-1 bg-ink p-10 md:p-14 flex flex-col justify-between min-h-[400px]">
                <div>
                  {/* Availability indicator */}
                  <div className="flex items-center gap-2 mb-10">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-body">
                      Currently available for
                    </span>
                  </div>

                  {/* Services list */}
                  <ul className="space-y-4">
                    {SERVICES.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 + i * 0.06 }}
                        className="flex items-start gap-4 text-cream/80 hover:text-cream transition-colors font-body text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom strip */}
                <div className="border-t border-cream/10 pt-7 mt-10">
                  <p className="text-[10px] tracking-widest uppercase text-cream/30 mb-2 font-body">
                    Response time
                  </p>
                  <p className="text-cream text-sm font-body">Within 24–48 hours.</p>
                </div>
              </div>

              {/* Red bottom accent bar */}
              <div className="h-1.5 bg-accent" />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
