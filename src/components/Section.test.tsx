import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Section } from './Section';

describe('Section', () => {
  it('renders the eyebrow, title, id and children', () => {
    const { container } = render(
      <Section id="demo" eyebrow="Eyebrow" title="The Title">
        <p>Body content</p>
      </Section>,
    );

    expect(screen.getByText('Eyebrow')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'The Title' })).toBeInTheDocument();
    expect(screen.getByText('Body content')).toBeInTheDocument();
    expect(container.querySelector('#demo')).not.toBeNull();
  });
});
