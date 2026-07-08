/**
 * Format an ISO date string (YYYY-MM-DD) as a human-readable date,
 * e.g. "2026-05-18" -> "May 18, 2026".
 */
export function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return 'Unknown date';
  }
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Human-friendly reading time label.
 */
export function readingTime(minutes: number): string {
  if (minutes <= 0) {
    return 'Quick read';
  }
  return `${minutes} min read`;
}
