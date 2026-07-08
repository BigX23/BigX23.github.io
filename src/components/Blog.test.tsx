import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Blog } from './Blog';
import { blogIntro, blogPosts } from '../data/content';
import { formatDate, readingTime } from '../lib/format';

describe('Blog', () => {
  it('renders the reading-list intro', () => {
    render(<Blog />);
    expect(screen.getByText(blogIntro)).toBeInTheDocument();
  });

  it('renders each post title linking to its slug', () => {
    render(<Blog />);
    blogPosts.forEach((post) => {
      const link = screen.getByRole('link', { name: new RegExp(post.title) });
      expect(link).toHaveAttribute('href', `#${post.slug}`);
    });
  });

  it('renders date, reading time, and tags as one meta line', () => {
    render(<Blog />);
    blogPosts.forEach((post) => {
      const meta = `${formatDate(post.date)} · ${readingTime(post.readingMinutes)} · ${post.tags.join(' · ')}`;
      expect(
        screen.getByText((_, element) => element?.textContent === meta && element.tagName === 'P'),
      ).toBeInTheDocument();
    });
  });

  it('renders each excerpt', () => {
    render(<Blog />);
    blogPosts.forEach((post) => {
      expect(screen.getByText(post.excerpt)).toBeInTheDocument();
    });
  });
});
