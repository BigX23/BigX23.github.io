import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Blog } from './Blog';
import { blogPosts } from '../data/content';
import { formatDate, readingTime } from '../lib/format';

describe('Blog', () => {
  it('renders each post title linking to its slug', () => {
    render(<Blog />);
    blogPosts.forEach((post) => {
      const link = screen.getByRole('link', { name: post.title });
      expect(link).toHaveAttribute('href', `#${post.slug}`);
    });
  });

  it('renders the formatted date and reading time for each post', () => {
    render(<Blog />);
    blogPosts.forEach((post) => {
      expect(screen.getByText(formatDate(post.date))).toBeInTheDocument();
      expect(screen.getAllByText(readingTime(post.readingMinutes)).length).toBeGreaterThan(0);
    });
  });

  it('renders each tag prefixed with a hash', () => {
    render(<Blog />);
    blogPosts.forEach((post) => {
      post.tags.forEach((tag) => {
        expect(screen.getAllByText(`#${tag}`).length).toBeGreaterThan(0);
      });
    });
  });
});
