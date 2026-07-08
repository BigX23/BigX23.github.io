import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Work } from './Work';
import { projects } from '../data/content';

describe('Work', () => {
  it('renders each project title and year', () => {
    render(<Work />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getAllByText(project.year).length).toBeGreaterThan(0);
    });
  });

  it('renders every technology in each stack', () => {
    render(<Work />);
    projects.forEach((project) => {
      project.stack.forEach((tech) => {
        expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
      });
    });
  });
});
