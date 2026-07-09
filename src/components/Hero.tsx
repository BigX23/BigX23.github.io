import { letterOpening, profile } from '../data/content';

/**
 * H5 · Letter hero — a first-person greeting, then prose. No buttons in the fold.
 */
export function Hero() {
  return (
    <section id="top" className="pt-24 pb-36">
      <div className="measure">
        <h1 className="font-display text-4xl font-semibold text-ink">
          {profile.salutation}
        </h1>
        <div className="mt-8 space-y-6">
          {letterOpening.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
