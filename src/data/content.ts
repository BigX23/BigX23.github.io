export interface Project {
  title: string;
  year: string;
  story: string;
  stack: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO 8601
  readingMinutes: number;
  excerpt: string;
  tags: string[];
}

export const profile = {
  name: 'Matthew White',
  role: 'Systems Engineer',
  location: 'Silicon Valley, California',
  email: 'whitemat@gmail.com',
  salutation: 'Hello —',
} as const;

export const github = {
  label: 'github.com/BigX23',
  url: 'https://github.com/BigX23',
} as const;

export const letterOpening: string[] = [
  'I’m Matt. I’m a systems engineer in Silicon Valley, and I build the kind of infrastructure nobody notices until it stops working. That invisibility is the point — the best week my systems can have is one where no one has to think about them at all.',
  'By day that means distributed systems, automation, and observability: the quiet disciplines that let a team ship quickly and still sleep through the night. By evening it means a house with three kids in it, a kitchen that smells like Sunday pancakes, and a driveway hoop that sees daily use.',
  'This page is a letter, not a billboard. No dashboards, no sign-up buttons — just the work I care about, the people I love, and a few things I’ve written down along the way.',
];

export const craft: string[] = [
  'I gravitate toward the unglamorous middle of the stack — the part between “the code compiled” and “the customer noticed nothing.” Good infrastructure, to me, is less about clever architecture and more about honest failure modes: systems that degrade politely, tell you what’s wrong in plain language, and recover without ceremony.',
  'The tools I reach for most, in roughly the order I trust them: distributed systems design, Kubernetes and containers, infrastructure as code, observability and SRE practice, and Go or Python when it’s time to write things down.',
];

export const skills: string[] = [
  'Distributed systems',
  'Kubernetes & containers',
  'Infrastructure as code',
  'Observability & SRE',
  'Go & Python',
];

export const projects: Project[] = [
  {
    title: 'Zero-Downtime Migration Platform',
    year: '2025',
    story:
      'We moved a long-lived monolith onto a service mesh without ever turning the lights off — phased cutovers, blue-green rollouts, and a great deal of patient rehearsal before each step.',
    stack: ['Kubernetes', 'Istio', 'Terraform', 'Go'],
  },
  {
    title: 'Fleet Observability Pipeline',
    year: '2024',
    story:
      'A metrics-and-tracing pipeline that turned “something feels slow” into an answerable question, and detection from a war-room ritual into a routine glance.',
    stack: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Python'],
  },
  {
    title: 'Self-Healing Autoscaler',
    year: '2023',
    story:
      'An autoscaler that learns the shape of seasonal load and gets ahead of it, so capacity arrives before the traffic does — kinder to the pager and to the cloud bill alike.',
    stack: ['Go', 'KEDA', 'AWS'],
  },
];

export const tinkering: string[] = [
  'Lately, most of my spare cycles go to AI. Building apps with AI has become my hobby of choice — small tools, experiments, and the occasional idea that refuses to stay small. Some of it works, all of it teaches me something, and the tinkering lives in the open on GitHub.',
  'I try to stay current the honest way: tech conferences when I can get to one, and a steady diet of blogs, YouTube deep-dives, and Twitter threads in between. And when the laptop closes, there’s a good chance the NBA is on — basketball is the one system I follow purely for the joy of it.',
];

export const familyProse: string[] = [
  'The systems I care about most run on love, not uptime. Most Saturdays you’ll find the five of us on a foothill trail, our three kids setting the pace and choosing the snack breaks. Sunday mornings are for pancakes with whatever the crew decides belongs in the batter that week — results vary, enthusiasm doesn’t.',
  'On clear nights we haul a small telescope into the backyard and practice patience together, chasing planets and the occasional meteor shower. It’s the slowest feedback loop I run, and my favorite one.',
];

export const blogIntro =
  'Some things I’ve written lately, if you’d like to read further:';

export const blogPosts: BlogPost[] = [
  {
    slug: 'observability-that-earns-its-keep',
    title: 'Observability That Earns Its Keep',
    date: '2026-05-18',
    readingMinutes: 7,
    excerpt:
      'Dashboards are cheap; insight is not. How to instrument systems so the signal you need is there before the incident starts.',
    tags: ['SRE', 'Observability'],
  },
  {
    slug: 'the-quiet-art-of-graceful-degradation',
    title: 'The Quiet Art of Graceful Degradation',
    date: '2026-03-02',
    readingMinutes: 6,
    excerpt:
      'Resilience is less about never failing and more about failing in ways your users barely notice. A field guide.',
    tags: ['Reliability', 'Architecture'],
  },
  {
    slug: 'infrastructure-as-code-without-the-sprawl',
    title: 'Infrastructure as Code Without the Sprawl',
    date: '2026-01-11',
    readingMinutes: 8,
    excerpt:
      'Terraform modules multiply fast. Patterns I use to keep a large codebase legible, testable, and safe to change.',
    tags: ['IaC', 'Terraform'],
  },
];

export const signoff = {
  closing: 'Yours, from the trailhead,',
  name: 'Matt',
  postscript: 'p.s. — the inbox is always open:',
} as const;
