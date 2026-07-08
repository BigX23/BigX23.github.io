export interface NavLink {
  href: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Project {
  title: string;
  summary: string;
  stack: string[];
  year: string;
}

export interface FamilyMoment {
  title: string;
  description: string;
  emoji: string;
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
  tagline: 'I design resilient, observable infrastructure that scales quietly.',
  location: 'Seattle, WA',
  email: 'whitemat@gmail.com',
  intro:
    "I'm a systems engineer who loves the unglamorous work that keeps platforms fast and dependable — distributed systems, automation, and the kind of observability that lets a team sleep at night. Away from the terminal, I'm a husband and dad who's happiest outdoors with my family.",
} as const;

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#family', label: 'Family' },
  { href: '#blog', label: 'Blog' },
];

export const skills: Skill[] = [
  { name: 'Distributed Systems', level: 92 },
  { name: 'Kubernetes & Containers', level: 88 },
  { name: 'Infrastructure as Code', level: 85 },
  { name: 'Observability & SRE', level: 90 },
  { name: 'Go & Python', level: 82 },
];

export const projects: Project[] = [
  {
    title: 'Zero-Downtime Migration Platform',
    summary:
      'Led a phased migration of a monolith to a service mesh, cutting deploy risk and enabling blue-green rollouts across 40+ services.',
    stack: ['Kubernetes', 'Istio', 'Terraform', 'Go'],
    year: '2025',
  },
  {
    title: 'Fleet Observability Pipeline',
    summary:
      'Built a metrics and tracing pipeline ingesting billions of spans daily, reducing mean-time-to-detect from hours to minutes.',
    stack: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Python'],
    year: '2024',
  },
  {
    title: 'Self-Healing Autoscaler',
    summary:
      'Designed a predictive autoscaler that anticipates load from seasonal signals, trimming cloud spend by 28% without SLO regressions.',
    stack: ['Go', 'KEDA', 'AWS', 'Machine Learning'],
    year: '2023',
  },
];

export const familyMoments: FamilyMoment[] = [
  {
    title: 'Weekend Trail Crew',
    description:
      'Most Saturdays you will find us on a Cascades trail, kids setting the pace and picking the snack breaks.',
    emoji: '🥾',
  },
  {
    title: 'Kitchen Experiments',
    description:
      'Sunday mornings are for pancakes with whatever the kids decide belongs in the batter that week.',
    emoji: '🥞',
  },
  {
    title: 'Backyard Astronomers',
    description:
      'A small telescope and a lot of patience — we chase clear nights to spot planets and the occasional meteor shower.',
    emoji: '🔭',
  },
];

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
