import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { profile } from './data/content';

describe('App', () => {
  it('renders all four content sections', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#about')).not.toBeNull();
    expect(container.querySelector('#work')).not.toBeNull();
    expect(container.querySelector('#family')).not.toBeNull();
    expect(container.querySelector('#blog')).not.toBeNull();
  });

  it('renders the hero heading with the name', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: new RegExp(profile.name), level: 1 }),
    ).toBeInTheDocument();
  });

  it('renders a footer with the current year', () => {
    render(<App />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });
});
