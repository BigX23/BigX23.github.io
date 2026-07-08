import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { profile } from '../data/content';

describe('Navbar', () => {
  it('renders the wordmark linking to the top of the page', () => {
    render(<Navbar />);
    const wordmark = screen.getByRole('link', { name: profile.name });
    expect(wordmark).toHaveAttribute('href', '#top');
  });

  it('renders a single mail action and no link row', () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2); // wordmark + say hello, nothing else
    const hello = screen.getByRole('link', { name: /say hello/i });
    expect(hello).toHaveAttribute('href', `mailto:${profile.email}`);
  });

  it('has no menu button — a letter needs no menu', () => {
    render(<Navbar />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
