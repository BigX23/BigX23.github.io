import { describe, it, expect } from 'vitest';
import { formatDate, readingTime } from './format';

describe('formatDate', () => {
  it('formats a valid ISO date as a long human-readable date', () => {
    expect(formatDate('2026-05-18')).toBe('May 18, 2026');
  });

  it('handles a different month correctly', () => {
    expect(formatDate('2026-01-11')).toBe('January 11, 2026');
  });

  it('returns a fallback for an invalid date string', () => {
    expect(formatDate('not-a-date')).toBe('Unknown date');
  });
});

describe('readingTime', () => {
  it('labels a positive duration', () => {
    expect(readingTime(7)).toBe('7 min read');
  });

  it('labels a single minute', () => {
    expect(readingTime(1)).toBe('1 min read');
  });

  it('returns a fallback for zero minutes', () => {
    expect(readingTime(0)).toBe('Quick read');
  });

  it('returns a fallback for negative minutes', () => {
    expect(readingTime(-4)).toBe('Quick read');
  });
});
