import { craft, skills } from '../data/content';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" title="What I do">
      <div className="space-y-6">
        {craft.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <ul className="space-y-1 border-l border-rule pl-5 text-muted">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
