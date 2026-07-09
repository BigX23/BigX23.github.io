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
    <section id={id} className={`scroll-mt-16 ${space === 'roomy' ? 'pt-32 pb-24' : 'pt-20 pb-16'}`}>
      <div className="measure">
        {divider && (
          <p aria-hidden="true" className="mb-16 text-center tracking-[0.6em] text-neutral">
            * * *
          </p>
        )}
        <h2 className="small-caps-head mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}
