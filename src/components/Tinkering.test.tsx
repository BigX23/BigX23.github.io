import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tinkering } from './Tinkering';
import { github, tinkering } from '../data/content';

describe('Tinkering', () => {
  it('renders every tinkering paragraph', () => {
    render(<Tinkering />);
    tinkering.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });

  it('links to the GitHub account', () => {
    render(<Tinkering />);
    const link = screen.getByRole('link', { name: new RegExp(github.label) });
    expect(link).toHaveAttribute('href', github.url);
  });

  it('renders the section heading', () => {
    render(<Tinkering />);
    expect(
      screen.getByRole('heading', { name: /What I’m tinkering with/ }),
    ).toBeInTheDocument();
  });
});
