import { profile, signoff } from '../data/content';

interface FooterProps {
  year: number;
}

/**
 * Ft6 · Letter close — the page ends the way a letter does.
 */
export function Footer({ year }: FooterProps) {
  return (
    <footer className="pb-28 pt-14">
      <div className="measure">
        <p aria-hidden="true" className="mb-16 text-center tracking-[0.6em] text-neutral">
          * * *
        </p>
        <p>{signoff.closing}</p>
        <p className="mt-4 font-display text-3xl font-semibold text-ink">— {signoff.name}</p>
        <p className="mt-2 text-base text-muted">
          {profile.name} · {year}
        </p>
        <p className="mt-10 text-base text-muted">
          {signoff.postscript}{' '}
          <a href={`mailto:${profile.email}`} className="letter-link whitespace-nowrap">
            {profile.email} →
          </a>
        </p>
      </div>
    </footer>
  );
}
