import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Work } from './Work';
import { projects } from '../data/content';

describe('Work', () => {
  it('renders each project title, year, and story', () => {
    render(<Work />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.year)).toBeInTheDocument();
      expect(screen.getByText(project.story)).toBeInTheDocument();
    });
  });

  it('renders the stack as a prose line, not chips', () => {
    render(<Work />);
    projects.forEach((project) => {
      expect(
        screen.getByText(`Built with ${project.stack.join(', ')}.`),
      ).toBeInTheDocument();
    });
  });
});
