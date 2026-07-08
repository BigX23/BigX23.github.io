import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Family } from './Family';
import { familyProse } from '../data/content';

describe('Family', () => {
  it('renders every family paragraph', () => {
    render(<Family />);
    familyProse.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });

  it('renders the section heading', () => {
    render(<Family />);
    expect(
      screen.getByRole('heading', { name: /Life outside the terminal/ }),
    ).toBeInTheDocument();
  });
});
