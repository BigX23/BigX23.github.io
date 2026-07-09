import { github, tinkering } from '../data/content';
import { Section } from './Section';

export function Tinkering() {
  return (
    <Section id="tinkering" title="What I’m tinkering with">
      <div className="space-y-6">
        {tinkering.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <p>
          You can watch it all take shape at{' '}
          <a href={github.url} className="letter-link whitespace-nowrap">
            {github.label} →
          </a>
        </p>
      </div>
    </Section>
  );
}
