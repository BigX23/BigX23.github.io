import { aiProjects, aiProjectsIntro } from '../data/content';
import { Section } from './Section';

export function Projects() {
  return (
    <Section id="projects" title="AI projects, deployed">
      <p>{aiProjectsIntro}</p>
      <div className="mt-8 space-y-8">
        {aiProjects.map((project) => (
          <article key={project.name}>
            <h3 className="font-display text-xl font-semibold text-ink">
              <a href={project.url} className="letter-link no-underline hover:underline">
                {project.name} →
              </a>
            </h3>
            <p className="mt-2 text-base">{project.blurb}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
