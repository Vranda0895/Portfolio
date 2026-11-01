/**
 * All portfolio content lives here so it can be edited in one place.
 *
 * Rule for this file: only verified information goes in.
 * Anything marked `placeholder` is intentionally incomplete — fill it in
 * when you have the real detail, and the UI updates automatically.
 */

export const PERSON = {
  name: 'Vranda Agarwal',
  initials: 'VA',
  /** Stored in public/assets/ */
  photo: 'assets/profile-vranda-agarwal.png',
  photoAlt: 'Vranda Agarwal – Profile Photograph',
};

/* ─── Resume ───────────────────────────────────────────────
 * To enable the Resume button:
 *   1. Put your PDF in the /public folder, e.g. public/Vranda-Agarwal-Resume.pdf
 *   2. Set RESUME_URL below to '/Vranda-Agarwal-Resume.pdf'
 * While RESUME_URL is empty, a clearly marked placeholder is shown.
 */
export const RESUME_URL = '';

/* ─── Contact ──────────────────────────────────────────────
 * Verified details only. No LinkedIn profile has been provided,
 * so none is shown. Add one here when you have it:
 *   { label: 'LinkedIn', value: 'linkedin.com/in/…', href: 'https://…' }
 */
export interface ContactLink {
  label: string;
  value?: string;
  href?: string;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Email',
    value: 'vrandaagarwal92@gmail.com',
    href: 'mailto:vrandaagarwal92@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Vranda0895',
    href: 'https://github.com/Vranda0895',
  },
];

/* ─── Skills ───────────────────────────────────────────────
 * Limited to technologies visible in this project or in the
 * four listed projects. No proficiency levels.
 */
export interface SkillGroup {
  title: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { title: 'Programming Languages', items: ['JavaScript', 'TypeScript'] },
  { title: 'Web Development', items: ['HTML', 'CSS', 'React', 'REST APIs'] },
  { title: 'Frameworks & Tools', items: ['Node.js', 'Vite', 'Git', 'Vercel'] },
  { title: 'Other Technical Skills', items: ['Graphic Design', 'Canva'] },
];

/* ─── Projects ─────────────────────────────────────────── */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** Live demo / live API link, if one exists */
  liveUrl?: string;
  liveLabel?: string;
  /** Only set when a real repository URL is available */
  githubUrl?: string;
  /** Shown when there is no live link */
  statusNote?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'CollegeClubEvent',
    description:
      'A web application for college club events. The detailed feature list will be added once it is documented.',
    tags: ['Web Development'],
    statusNote: 'Live demo coming soon',
  },
  {
    title: 'Daily Quote API',
    description:
      'A serverless API built using JavaScript and Node.js that returns a random inspirational quote and its author in JSON format.',
    tags: ['JavaScript', 'Node.js', 'Vercel', 'JSON'],
    liveUrl: 'https://daily-quote-api-three.vercel.app/api/quote',
    liveLabel: 'Open live API',
  },
  {
    title: 'HobbyPulse',
    description:
      'A web app that helps you discover hands-on, analog hobbies matched to your energy — a screen-free alternative to endless scrolling.',
    tags: ['Web App', 'Lovable'],
    liveUrl: 'https://calm-hobby-quest.lovable.app',
    liveLabel: 'View live demo',
  },
  {
    title: 'SkillBridge',
    // TODO: replace with a one-line description once confirmed.
    description:
      'A web application available as a live demo. A fuller description will be added soon.',
    tags: ['Web App', 'Render'],
    liveUrl: 'https://skillbridge-ai-0tfx.onrender.com',
    liveLabel: 'View live demo',
  },
];

/* ─── Experience & Activities ──────────────────────────────
 * Built only from the verified certificates below. No dates, roles
 * or outcomes are claimed beyond what each certificate states.
 */
export interface Activity {
  title: string;
  context: string;
  description: string;
}

export const ACTIVITIES: Activity[] = [
  {
    title: 'HackTheVibe',
    context: 'Hackathon · GitHub Education',
    description:
      'Actively participated in the HackTheVibe hackathon, supported by GitHub Education.',
  },
  {
    title: 'HackIndia 2026',
    context: 'Hackathon · C# Corner',
    description:
      "Participated in HackIndia 2026, billed as India's Biggest Web3 & AI Hackathon and organised by C# Corner.",
  },
  {
    title: 'EXORA — The Project Showcase Event',
    context: 'Showcase · ABES Engineering College & GDG on Campus',
    description:
      'Took part in a project showcase event focused on creativity and innovation.',
  },
  {
    title: 'DECODE SIH 2026',
    context: 'Event · OSCode',
    description: 'Participated in DECODE SIH 2026, organised by OSCode.',
  },
];

/* ─── Achievements & Certifications ────────────────────────
 * One entry per original certificate file in
 * public/assets/certificates/. `thumbnail` is a lightweight preview;
 * `file` is the original that opens in a new tab.
 * Only HackTheVibe is an "Excellence" certificate; the rest are
 * participation certificates and are labelled as such.
 */
export interface Achievement {
  title: string;
  /** Exact certificate type, e.g. "Certificate of Participation" */
  type: string;
  issuer: string;
  description: string;
  /** Path inside /public */
  thumbnail: string;
  file: string;
  fileKind: 'image' | 'pdf';
  alt: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'HackTheVibe',
    type: 'Certificate of Excellence',
    issuer: 'Supported by GitHub Education',
    description:
      'Awarded for active participation in the HackTheVibe hackathon supported by GitHub Education.',
    thumbnail: 'assets/certificates/thumbs/hackthevibe.jpg',
    file: 'assets/certificates/hackthevibe-certificate-of-excellence.png',
    fileKind: 'image',
    alt: 'HackTheVibe Certificate of Excellence presented to Vranda Agarwal',
  },
  {
    title: 'HackIndia 2026',
    type: 'Certificate of Participation',
    issuer: 'C# Corner',
    description:
      "Participation in HackIndia 2026, India's Biggest Web3 & AI Hackathon.",
    thumbnail: 'assets/certificates/thumbs/hackindia.jpg',
    file: 'assets/certificates/hackindia-2026-participation.jpeg',
    fileKind: 'image',
    alt: 'HackIndia 2026 Certificate of Participation for Vranda Agarwal',
  },
  {
    title: 'EXORA — The Project Showcase Event',
    type: 'Certificate of Participation',
    issuer: 'ABES Engineering College · Google Developer Groups on Campus',
    description:
      'Participation in the EXORA project showcase, recognising creativity and innovation.',
    thumbnail: 'assets/certificates/thumbs/exora.jpg',
    file: 'assets/certificates/exora-project-showcase-participation.jpg',
    fileKind: 'image',
    alt: 'EXORA Project Showcase Event Certificate of Participation for Vranda Agarwal',
  },
  {
    title: 'DECODE SIH 2026',
    type: 'Certificate of Participation',
    issuer: 'OSCode',
    description: 'Participation in DECODE SIH 2026, organised by OSCode.',
    thumbnail: 'assets/certificates/thumbs/decode.jpg',
    file: 'assets/certificates/decode-sih-2026-participation.pdf',
    fileKind: 'pdf',
    alt: 'DECODE SIH 2026 Participation Certificate for Vranda Agarwal',
  },
];

/* ─── Design Work (Canva) ──────────────────────────────── */
export interface DesignWork {
  title: string;
  url: string;
  label: string;
}

export const DESIGN_WORKS: DesignWork[] = [
  {
    title: 'Bros Before Bugs 2',
    url: 'https://www.canva.com/design/DAG8f0BmP74/VS-A59SILruUsbv1e6zb9A/edit',
    label: 'Canva design',
  },
  {
    title: 'Graphic Design Sample 2',
    url: 'https://canva.link/cw97axmlo38pi7t',
    label: 'Canva design',
  },
  {
    title: 'Graphic Design Sample 3',
    url: 'https://canva.link/10x1wvpcp46fdwn',
    label: 'Canva design',
  },
];
