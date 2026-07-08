import { useState } from 'react';
import { navLinks, profile } from '../data/content';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav className="container-page flex items-center justify-between py-4">
        <a href="#top" className="font-display text-lg font-bold text-white">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="container-page flex flex-col gap-4 pb-4 md:hidden" data-testid="mobile-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-sm font-medium text-slate-300 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
