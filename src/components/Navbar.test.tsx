import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from './Navbar';
import { navLinks, profile } from '../data/content';

describe('Navbar', () => {
  it('renders the brand and every desktop nav link', () => {
    render(<Navbar />);
    expect(screen.getByText(profile.name)).toBeInTheDocument();
    navLinks.forEach((link) => {
      expect(screen.getAllByText(link.label).length).toBeGreaterThan(0);
    });
  });

  it('starts with the mobile menu closed', () => {
    render(<Navbar />);
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle navigation/i })).toHaveTextContent('☰');
  });

  it('opens the mobile menu when the toggle is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: /toggle navigation/i });

    await user.click(toggle);

    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    expect(toggle).toHaveTextContent('✕');
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes the mobile menu when a link inside it is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: /toggle navigation/i });

    await user.click(toggle);
    const menu = screen.getByTestId('mobile-menu');
    const firstLink = within(menu).getByText(navLinks[0].label);
    await user.click(firstLink);

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('toggles the menu closed again when clicked twice', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: /toggle navigation/i });

    await user.click(toggle);
    await user.click(toggle);

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });
});
