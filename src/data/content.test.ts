import { describe, it, expect } from 'vitest';
import {
  profile,
  navLinks,
  skills,
  projects,
  familyMoments,
  blogPosts,
} from './content';

describe('content data', () => {
  it('exposes a complete profile', () => {
    expect(profile.name).toBe('Matthew White');
    expect(profile.role).toBe('Systems Engineer');
    expect(profile.email).toContain('@');
    expect(profile.intro.length).toBeGreaterThan(20);
  });

  it('has nav links pointing at on-page sections', () => {
    expect(navLinks).toHaveLength(4);
    navLinks.forEach((link) => {
      expect(link.href.startsWith('#')).toBe(true);
      expect(link.label.length).toBeGreaterThan(0);
    });
  });

  it('keeps skill levels within 0-100', () => {
    expect(skills.length).toBeGreaterThan(0);
    skills.forEach((skill) => {
      expect(skill.level).toBeGreaterThanOrEqual(0);
      expect(skill.level).toBeLessThanOrEqual(100);
    });
  });

  it('describes projects with a stack', () => {
    expect(projects.length).toBeGreaterThan(0);
    projects.forEach((project) => {
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.title.length).toBeGreaterThan(0);
    });
  });

  it('lists family moments with emoji', () => {
    expect(familyMoments.length).toBeGreaterThan(0);
    familyMoments.forEach((moment) => {
      expect(moment.emoji.length).toBeGreaterThan(0);
    });
  });

  it('provides blog posts with unique slugs and ISO dates', () => {
    expect(blogPosts.length).toBeGreaterThan(0);
    const slugs = new Set(blogPosts.map((post) => post.slug));
    expect(slugs.size).toBe(blogPosts.length);
    blogPosts.forEach((post) => {
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.tags.length).toBeGreaterThan(0);
    });
  });
});
