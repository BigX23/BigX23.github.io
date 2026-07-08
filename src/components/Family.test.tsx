import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Family } from './Family';
import { familyMoments } from '../data/content';

describe('Family', () => {
  it('renders each family moment title and description', () => {
    render(<Family />);
    familyMoments.forEach((moment) => {
      expect(screen.getByText(moment.title)).toBeInTheDocument();
      expect(screen.getByText(moment.description)).toBeInTheDocument();
    });
  });

  it('renders each emoji', () => {
    render(<Family />);
    familyMoments.forEach((moment) => {
      expect(screen.getByText(moment.emoji)).toBeInTheDocument();
    });
  });
});
