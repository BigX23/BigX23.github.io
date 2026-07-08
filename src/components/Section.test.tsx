import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Section } from './Section';

describe('Section', () => {
  it('renders the title, id and children', () => {
    const { container } = render(
      <Section id="demo" title="The Title">
        <p>Body content</p>
      </Section>,
    );

    expect(screen.getByRole('heading', { name: /The Title/ })).toBeInTheDocument();
    expect(screen.getByText('Body content')).toBeInTheDocument();
    expect(container.querySelector('#demo')).not.toBeNull();
  });

  it('omits the letter divider by default', () => {
    render(
      <Section id="a" title="A">
        <p>x</p>
      </Section>,
    );
    expect(screen.queryByText('* * *')).not.toBeInTheDocument();
  });

  it('renders a * * * divider when requested', () => {
    render(
      <Section id="b" title="B" divider>
        <p>x</p>
      </Section>,
    );
    expect(screen.getByText('* * *')).toBeInTheDocument();
  });

  it('varies vertical rhythm via the space prop', () => {
    const { container } = render(
      <Section id="c" title="C" space="roomy">
        <p>x</p>
      </Section>,
    );
    expect(container.querySelector('section')?.className).toContain('pt-20');
  });
});
