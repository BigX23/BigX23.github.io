import { blogIntro, blogPosts } from '../data/content';
import { formatDate, readingTime } from '../lib/format';
import { Section } from './Section';

export function Blog() {
  return (
    <Section id="blog" title="Things I’ve written" divider space="roomy">
      <p>{blogIntro}</p>
      <div className="mt-8 space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug}>
            <h3 className="font-display text-xl font-semibold text-ink">
              <a href={`#${post.slug}`} className="letter-link no-underline hover:underline">
                {post.title} →
              </a>
            </h3>
            <p className="mt-1 text-sm text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {' · '}
              {readingTime(post.readingMinutes)}
              {' · '}
              {post.tags.join(' · ')}
            </p>
            <p className="mt-2 text-base">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
