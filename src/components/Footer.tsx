import { profile } from '../data/content';

interface FooterProps {
  year: number;
}

export function Footer({ year }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <p>
          © {year} {profile.name}. Built in {profile.location}.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="font-medium text-slate-300 transition hover:text-accent-soft"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
