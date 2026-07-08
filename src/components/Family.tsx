import { familyProse } from '../data/content';
import { Section } from './Section';

export function Family() {
  return (
    <Section id="family" title="Life outside the terminal">
      <div className="space-y-6">
        {familyProse.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
