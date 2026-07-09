import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Projects } from './Projects';
import { aiProjects, aiProjectsIntro } from '../data/content';

describe('Projects', () => {
  it('renders the intro line', () => {
    render(<Projects />);
    expect(screen.getByText(aiProjectsIntro)).toBeInTheDocument();
  });

  it('links each project to its URL', () => {
    render(<Projects />);
    aiProjects.forEach((project) => {
      const link = screen.getByRole('link', { name: new RegExp(project.name) });
      expect(link).toHaveAttribute('href', project.url);
    });
  });

  it('renders each project blurb', () => {
    render(<Projects />);
    aiProjects.forEach((project) => {
      expect(screen.getByText(project.blurb)).toBeInTheDocument();
    });
  });
});
