import { profile, skills } from '../data/content';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-10 md:grid-cols-5">
        <p className="text-lg leading-relaxed text-slate-300 md:col-span-3">
          {profile.intro}
        </p>
        <div className="md:col-span-2">
          <h3 className="mb-4 font-display text-lg font-semibold text-white">
            What I work with
          </h3>
          <ul className="space-y-4">
            {skills.map((skill) => (
              <li key={skill.name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-200">{skill.name}</span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-accent"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={skill.name}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
