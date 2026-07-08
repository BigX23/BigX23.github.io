import { profile } from '../data/content';

/**
 * N9 · Edge-aligned minimal — wordmark hard-left, single action hard-right,
 * the empty space between is the design. A letter needs no link row.
 */
export function Navbar() {
  return (
    <header className="border-b border-rule">
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-lg font-semibold leading-none text-ink">
          {profile.name}
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="letter-link whitespace-nowrap font-body text-base leading-none"
        >
          Say hello →
        </a>
      </nav>
    </header>
  );
}
