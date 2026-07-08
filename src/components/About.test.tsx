import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import { profile, skills } from '../data/content';

describe('About', () => {
  it('renders the intro paragraph', () => {
    render(<About />);
    expect(screen.getByText(profile.intro)).toBeInTheDocument();
  });

  it('renders a progressbar for every skill with the right value', () => {
    render(<About />);
    const bars = screen.getAllByRole('progressbar');
    expect(bars).toHaveLength(skills.length);
    skills.forEach((skill) => {
      const bar = screen.getByRole('progressbar', { name: skill.name });
      expect(bar).toHaveAttribute('aria-valuenow', String(skill.level));
      expect(bar).toHaveStyle({ width: `${skill.level}%` });
    });
  });
});
