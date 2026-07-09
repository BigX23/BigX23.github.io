import { projects } from '../data/content';
import { Section } from './Section';

export function Work() {
  return (
    <Section id="work" title="Work I’m proud of" divider space="roomy">
      <div className="space-y-10">
        {projects.map((project) => (
          <article key={project.title}>
            <h3 className="font-display text-2xl font-semibold text-ink">
              {project.title}
              <span className="ml-3 font-body text-base font-normal text-muted">
                {project.year}
              </span>
            </h3>
            <p className="mt-3">{project.story}</p>
            <p className="mt-2 text-base text-muted">
              Built with {project.stack.join(', ')}.
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
