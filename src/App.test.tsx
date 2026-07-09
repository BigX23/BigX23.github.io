import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { profile } from './data/content';

describe('App', () => {
  it('renders all five content sections in letter order', () => {
    const { container } = render(<App />);
    const ids = ['about', 'work', 'tinkering', 'family', 'blog'];
    ids.forEach((id) => {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    });
  });

  it('opens with the salutation as the level-1 heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: profile.salutation }),
    ).toBeInTheDocument();
  });

  it('closes with the current year in the letter byline', () => {
    render(<App />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`${profile.name} · ${profile.location} · ${year}`),
    ).toBeInTheDocument();
  });
});
