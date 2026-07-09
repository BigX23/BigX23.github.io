import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { chess, github, linkedin, navLinks, profile } from '../data/content';

describe('Navbar', () => {
  it('renders the wordmark linking to the top of the page', () => {
    render(<Navbar />);
    const wordmark = screen.getByRole('link', { name: profile.name });
    expect(wordmark).toHaveAttribute('href', '#top');
  });

  it('renders every section link', () => {
    render(<Navbar />);
    navLinks.forEach((link) => {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href);
    });
  });

  it('links the GitHub icon to the GitHub profile', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', github.url);
  });

  it('links the LinkedIn icon to the LinkedIn profile', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', linkedin.url);
  });

  it('links the chess pawn icon to the Chess.com profile', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'Chess.com' })).toHaveAttribute('href', chess.url);
  });

  it('is a frosted sticky bar', () => {
    const { container } = render(<Navbar />);
    const header = container.querySelector('header');
    expect(header?.className).toContain('sticky');
    expect(header?.className).toContain('nav-frost');
  });
});
