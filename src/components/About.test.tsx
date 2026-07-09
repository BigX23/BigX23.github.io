import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import { craft } from '../data/content';

describe('About', () => {
  it('renders every craft paragraph', () => {
    render(<About />);
    craft.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });

  it('renders the section heading with no skill bars or lists', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /What I do/ })).toBeInTheDocument();
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
