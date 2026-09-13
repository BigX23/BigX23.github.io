import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Projects } from './Projects';
import { aiProjects, aiProjectsIntro } from '../data/content';

describe('Projects', () => {
  it('renders the intro line', () => {
    render(<Projects />);
    expect(screen.getByText(aiProjectsIntro)).toBeInTheDocument();
  });

  it('links each project with a URL, and renders the rest as plain titles', () => {
    render(<Projects />);
    aiProjects.forEach((project) => {
      if (project.url) {
        const link = screen.getByRole('link', { name: new RegExp(project.name) });
        expect(link).toHaveAttribute('href', project.url);
      } else {
        const title = screen.getByText(project.name);
        expect(title.closest('a')).toBeNull();
      }
    });
  });

  it('renders each project blurb', () => {
    render(<Projects />);
    aiProjects.forEach((project) => {
      expect(screen.getByText(project.blurb)).toBeInTheDocument();
    });
  });

  it('wraps each project in a thin-bordered card', () => {
    const { container } = render(<Projects />);
    const cards = container.querySelectorAll('article.project-card');
    expect(cards).toHaveLength(aiProjects.length);
  });
});
