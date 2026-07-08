import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  /** Render a `* * *` letter separator above the section. */
  divider?: boolean;
  /** Vertical rhythm — letters don't pad every section equally. */
  space?: 'tight' | 'roomy';
}

export function Section({ id, title, children, divider = false, space = 'tight' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-16 ${space === 'roomy' ? 'pt-20 pb-14' : 'pt-12 pb-10'}`}>
      <div className="measure">
        {divider && (
          <p aria-hidden="true" className="mb-12 text-center tracking-[0.6em] text-neutral">
            * * *
          </p>
        )}
        <h2 className="small-caps-head mb-6 flex items-baseline gap-3">
          <span aria-hidden="true" className="inline-block h-2 w-2 self-center bg-accent" />
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
