import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="container-page">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
          {eyebrow}
        </p>
        <h2 className="section-heading mb-10">{title}</h2>
        {children}
      </div>
    </section>
  );
}
