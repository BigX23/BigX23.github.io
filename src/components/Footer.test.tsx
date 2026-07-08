import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { profile } from '../data/content';

describe('Footer', () => {
  it('renders the provided year and name', () => {
    render(<Footer year={2026} />);
    expect(screen.getByText(/© 2026/)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(profile.name))).toBeInTheDocument();
  });

  it('links to the profile email', () => {
    render(<Footer year={2026} />);
    const link = screen.getByRole('link', { name: profile.email });
    expect(link).toHaveAttribute('href', `mailto:${profile.email}`);
  });
});
