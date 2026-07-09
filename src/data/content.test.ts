import { describe, it, expect } from 'vitest';
import {
  profile,
  github,
  letterOpening,
  craft,
  skills,
  projects,
  tinkering,
  familyProse,
  blogIntro,
  blogPosts,
  signoff,
} from './content';

describe('content data', () => {
  it('exposes a complete profile', () => {
    expect(profile.name).toBe('Matthew White');
    expect(profile.role).toBe('Systems Engineer');
    expect(profile.email).toContain('@');
    expect(profile.salutation.length).toBeGreaterThan(0);
  });

  it('opens the letter with three paragraphs of prose', () => {
    expect(letterOpening).toHaveLength(3);
    letterOpening.forEach((paragraph) => {
      expect(paragraph.length).toBeGreaterThan(40);
    });
  });

  it('describes the craft and lists skills without invented percentages', () => {
    expect(craft.length).toBeGreaterThan(0);
    expect(skills.length).toBeGreaterThan(0);
    skills.forEach((skill) => {
      expect(skill).not.toMatch(/\d+\s*%/);
    });
  });

  it('tells project stories without fabricated metrics', () => {
    expect(projects.length).toBeGreaterThan(0);
    projects.forEach((project) => {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
      // Honesty gate: no invented quantitative claims in the copy.
      expect(project.story).not.toMatch(/\d+\s*%|\d+\s*×|\d+\+/);
    });
  });

  it('links tinkering to the GitHub account', () => {
    expect(tinkering.length).toBeGreaterThan(0);
    expect(github.url).toBe('https://github.com/BigX23');
    expect(github.label).toContain('BigX23');
  });

  it('shares family life as prose paragraphs', () => {
    expect(familyProse.length).toBeGreaterThan(0);
    familyProse.forEach((paragraph) => {
      expect(paragraph.length).toBeGreaterThan(40);
    });
  });

  it('provides blog posts with unique slugs and ISO dates', () => {
    expect(blogIntro.length).toBeGreaterThan(0);
    expect(blogPosts.length).toBeGreaterThan(0);
    const slugs = new Set(blogPosts.map((post) => post.slug));
    expect(slugs.size).toBe(blogPosts.length);
    blogPosts.forEach((post) => {
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.tags.length).toBeGreaterThan(0);
    });
  });

  it('closes the letter with a signoff and postscript', () => {
    expect(signoff.closing.length).toBeGreaterThan(0);
    expect(signoff.name).toBe('Matt');
    expect(signoff.postscript).toContain('p.s.');
  });

  it('uses typographic punctuation in rendered copy', () => {
    const prose = [...letterOpening, ...craft, ...tinkering, ...familyProse, blogIntro].join(' ');
    expect(prose).not.toContain("'");
    expect(prose).not.toContain('...');
  });
});
