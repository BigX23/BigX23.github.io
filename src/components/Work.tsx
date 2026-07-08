import { projects } from '../data/content';
import { Section } from './Section';

export function Work() {
  return (
    <Section id="work" eyebrow="Systems Engineering" title="Selected work">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="card flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-soft">
              {project.year}
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
              {project.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
