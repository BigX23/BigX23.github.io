export interface Project {
  title: string;
  year: string;
  story: string;
  stack: string[];
}

export const profile = {
  name: 'Matthew White',
  role: 'Sr. Systems Development Engineer @ Google Cloud',
  email: 'whitemat@gmail.com',
  salutation: 'Hi, I’m Matt.',
} as const;

export const github = {
  label: 'github.com/BigX23',
  url: 'https://github.com/BigX23',
} as const;

export const linkedin = {
  label: 'LinkedIn',
  url: 'https://www.linkedin.com/in/matt-white-2376636/',
} as const;

export const chess = {
  label: 'Chess.com',
  url: 'https://www.chess.com/member/BigX23',
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#family', label: 'Family' },
];

export interface AiProject {
  name: string;
  url: string | null;
  blurb: string;
}

export const aiProjectsIntro =
  'Side projects, all built with AI. Some are live, some are experiments — every one of them exists to solve a real problem:';

export const aiProjects: AiProject[] = [
  {
    name: 'Pleasanton PlayMatch',
    url: 'https://aiplaymatch.com',
    blurb:
      'A tennis and pickleball partner-matching app for the Pleasanton community — player profiles, weighted matchmaking, and a real-time AI coach named Rally. Live at aiplaymatch.com, entirely self-hosted, and in real use.',
  },
  {
    name: 'Kalshi Bot',
    url: null,
    blurb:
      'An automated trading bot for Kalshi prediction markets — an event-driven trading coordinator with paper and live modes, running on its own VPS.',
  },
  {
    name: 'Home Crowd',
    url: null,
    blurb:
      'A watch-party app for sports fans: pick a live NBA, NFL, MLB, or NHL game and join a virtual room with other fans, so watching from your couch still feels like company. In progress.',
  },
  {
    name: 'Whisper',
    url: null,
    blurb:
      'A privacy-first messaging app with end-to-end encryption — messages are encrypted on the client and readable only by sender and recipient, with a time-to-live that makes read messages disappear.',
  },
  {
    name: 'SWE Team',
    url: null,
    blurb:
      'A browser-based console where a squad of AI agents — a project-manager agent orchestrating specialists — builds, documents, and deploys software. An experiment in what a dev team looks like when the developers are agents.',
  },
  {
    name: 'My AI Employee',
    url: null,
    blurb:
      'An always-on OpenClaw assistant running on a small cloud VM — my experiment in giving an AI a desk of its own.',
  },
  {
    name: 'This website',
    url: 'https://github.com/BigX23/BigX23.github.io',
    blurb:
      'The page you’re reading — a single page, built with AI, tested to full coverage, and deployed on GitHub Pages.',
  },
];

export const letterOpening: string[] = [
  'I’m a Sr. Systems Development Engineer at Google Cloud, where I work on the health of Google’s TPU fleets — the machines behind AI training and serving. I build the observability and automated-repair systems that keep them running.',
  'I’ve been building infrastructure for more than fifteen years: over a decade deep in the VMware world, including architecting one of the largest private VMware clouds in the US, and years of consulting before that. These days I’m also a tech lead — mentoring engineers and running projects on systems worth billions of dollars.',
  'What ties all of it together: I love solving real problems by building software. That goes for the day job and for the steady stream of side projects further down this page.',
];

export const craft: string[] = [
  'At Google I own fleet health for TPUs: monitoring the machines, and repairing them with automated repair systems I built. I also run our repro lab — where failed systems are sent back to us, put through a battery of diagnostics, and root-caused with cross-functional partners across hardware, firmware, manufacturing, storage, and environmental factors. The learnings from those investigations get engineered back into the fleet, so the same failure doesn’t happen twice. Along the way I built a log-collection tool that gathers diagnostics from servers and switches across the fleet.',
  'Before Google, I architected, built, deployed, and ran one of the largest private VMware clouds in the US at SS&C (2017 – 2022) — along with the zero-touch provisioning that grew it. Before and alongside that, I spent years as an IT consultant (2013 – 2019) integrating NetApp, VMware, Microsoft, and Juniper gear into customer datacenters.',
  'The tools I reach for most: Kubernetes, Terraform, observability and SRE practice, and Go or Python when it’s time to write things down. And lately, AI is everywhere in my workflow — Claude Code, Gemini, Antigravity, Cursor, and Codex.',
];

export const projects: Project[] = [
  {
    title: 'TPU Fleet Health & Automated Repair',
    year: '2023 – present',
    story:
      'Observability and automated repair for Google’s TPU fleets, plus the repro lab where failed machines are diagnosed, root-caused with hardware, firmware, and manufacturing teams, and turned into fixes that ship back to the fleet.',
    stack: ['Go', 'Python', 'Observability', 'Automation'],
  },
  {
    title: 'Private VMware Cloud at SS&C',
    year: '2017 – 2022',
    story:
      'Architected, built, deployed, and maintained one of the largest private VMware clouds in the United States — from initial design through daily operations.',
    stack: ['VMware vSphere', 'ESXi', 'vCenter', 'NetApp'],
  },
  {
    title: 'Zero-Touch Server Provisioning',
    year: '2017 – 2022',
    story:
      'An automated pipeline that took new hosts from racked-and-stacked to production — software and firmware updates, ESXi install, and vCenter cluster join — without a human touching a console.',
    stack: ['VMware ESXi', 'vCenter', 'Automation'],
  },
];

export const tinkering: string[] = [
  'Most of my spare cycles go to AI. Building apps with AI has become my hobby of choice — small tools, experiments, and the occasional idea that refuses to stay small. Some of it works, all of it teaches me something, and the best of it ships.',
];

export const familyProse: string[] = [
  'Home is a busy house with three kids, which means our weekends run on their schedule: basketball games, soccer matches, flag football, and dance competitions — often more than one in a day.',
  'When the calendar lets up, I play tennis and chess, and there’s usually a game on — I follow the NBA (go Spurs) and enjoy soccer too. Mostly we like staying active and making the most of the Bay Area weather.',
];

export const signoff = {
  closing: 'Thanks for reading,',
  name: 'Matt',
  postscript: 'p.s. — the inbox is always open:',
} as const;
