import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { profile, signoff } from '../data/content';

describe('Footer', () => {
  it('closes like a letter with the signoff', () => {
    render(<Footer year={2026} />);
    expect(screen.getByText(signoff.closing)).toBeInTheDocument();
    expect(screen.getByText(`— ${signoff.name}`)).toBeInTheDocument();
  });

  it('renders the provided year in the byline', () => {
    render(<Footer year={2026} />);
    expect(
      screen.getByText(`${profile.name} · 2026`),
    ).toBeInTheDocument();
  });

  it('renders a postscript mail link', () => {
    render(<Footer year={2026} />);
    const link = screen.getByRole('link', { name: new RegExp(profile.email) });
    expect(link).toHaveAttribute('href', `mailto:${profile.email}`);
  });
});
