import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { profile } from '../data/content';

describe('Hero', () => {
  it('renders the name in the heading', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { name: new RegExp(profile.name) }),
    ).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<Hero />);
    expect(screen.getByText(profile.tagline)).toBeInTheDocument();
  });

  it('links the contact button to the profile email', () => {
    render(<Hero />);
    const contact = screen.getByRole('link', { name: /get in touch/i });
    expect(contact).toHaveAttribute('href', `mailto:${profile.email}`);
  });

  it('links the primary CTA to the work section', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /see my work/i });
    expect(cta).toHaveAttribute('href', '#work');
  });
});
