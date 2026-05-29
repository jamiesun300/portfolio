import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { href: 'mailto:sunchiehming@gmail.com', label: 'sunchiehming@gmail.com' },
  { href: 'https://linkedin.com/in/jamie-sun', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Top red stripe */}
      <div className="h-1 bg-accent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block font-display font-bold text-2xl text-cream hover:text-accent transition-colors duration-200 mb-4"
            >
              Jamie Sun<span className="text-accent">.</span>
            </Link>
            <p className="text-cream/50 text-sm leading-relaxed">
              Multidisciplinary designer &amp; photographer.<br />
              Taipei, Taiwan — Working globally.
            </p>
            {/* Availability dot */}
            <div className="flex items-center gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-cream/40 tracking-wide">Available for projects</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-cream/30 mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-cream/30 mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-cream/25">
            © {new Date().getFullYear()} Jamie Sun. All rights reserved.
          </p>
          <p className="text-xs text-cream/25 tracking-wide">Design as Story.</p>
        </div>
      </div>
    </footer>
  )
}
