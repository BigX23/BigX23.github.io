import { familyMoments } from '../data/content';
import { Section } from './Section';

export function Family() {
  return (
    <Section id="family" eyebrow="Family" title="Life outside the terminal">
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300">
        The systems I care about most run on love, not uptime. Here is what keeps
        our weekends full.
      </p>
      <div className="grid gap-6 sm:grid-cols-3">
        {familyMoments.map((moment) => (
          <div key={moment.title} className="card text-center">
            <div className="text-4xl" aria-hidden="true">
              {moment.emoji}
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-white">
              {moment.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {moment.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
