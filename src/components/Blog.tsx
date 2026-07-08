import { blogPosts } from '../data/content';
import { formatDate, readingTime } from '../lib/format';
import { Section } from './Section';

export function Blog() {
  return (
    <Section id="blog" eyebrow="Writing" title="From the blog">
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingTime(post.readingMinutes)}</span>
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold text-white">
              <a href={`#${post.slug}`} className="transition hover:text-accent-soft">
                {post.title}
              </a>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{post.excerpt}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
