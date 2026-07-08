import { profile } from '../data/content';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/30 blur-[140px]"
      />
      <div className="container-page relative animate-fade-up">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent-soft">
          {profile.role} · {profile.location}
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
          Hi, I&apos;m {profile.name}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft hover:text-ink"
          >
            See my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent-soft hover:text-accent-soft"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
