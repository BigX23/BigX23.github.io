/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--color-paper)',
        'paper-2': 'var(--color-paper-2)',
        rule: 'var(--color-rule)',
        neutral: 'var(--color-neutral)',
        muted: 'var(--color-muted)',
        ink: 'var(--color-ink)',
        accent: 'var(--color-accent)',
        focus: 'var(--color-focus)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};
