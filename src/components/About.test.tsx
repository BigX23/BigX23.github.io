import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import { craft, skills } from '../data/content';

describe('About', () => {
  it('renders every craft paragraph', () => {
    render(<About />);
    craft.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });

  it('lists every skill as plain text without percentage bars', () => {
    render(<About />);
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });
});
