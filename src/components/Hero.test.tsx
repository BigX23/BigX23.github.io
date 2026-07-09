import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { letterOpening, profile } from '../data/content';

describe('Hero', () => {
  it('opens with the salutation as the page heading', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { level: 1, name: profile.salutation }),
    ).toBeInTheDocument();
  });

  it('has no location dateline', () => {
    render(<Hero />);
    expect(screen.queryByText(/^From /)).not.toBeInTheDocument();
  });

  it('renders every opening paragraph', () => {
    render(<Hero />);
    letterOpening.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });

  it('keeps the fold free of buttons and links — it is a letter', () => {
    render(<Hero />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
