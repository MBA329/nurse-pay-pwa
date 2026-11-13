export type Project = {
  title: string
  type: string
  description: string
  stack: string[]
  github: string
  live?: string
  accent: string
  architecture: string[]
}

export const projects: Project[] = [
  {
    title: 'Grade Vision',
    type: 'Academic intelligence',
    description: 'A focused performance dashboard that turns raw grades into a clear path forward.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Charts'],
    github: 'https://github.com/MBA329/Grade-Vision',
    live: 'https://grade-vision.vercel.app/',
    accent: 'acid',
    architecture: ['Input layer captures course data', 'Typed state normalizes score history', 'Insight layer turns trends into actions'],
  },
  {
    title: 'Habify',
    type: 'Habit system',
    description: 'A calm, tactile habit tracker designed to make consistency feel visible and achievable.',
    stack: ['React', 'Local storage', 'CSS motion'],
    github: 'https://github.com/MBA329/habify',
    accent: 'coral',
    architecture: ['Action-first daily check-in', 'Persisted streak model', 'Progress view reinforces momentum'],
  },
  {
    title: 'User Bookmark',
    type: 'Productivity tool',
    description: 'A practical bookmark workspace for collecting, organizing, and returning to the web.',
    stack: ['React', 'JavaScript', 'API patterns'],
    github: 'https://github.com/MBA329/user-bookmark-site',
    accent: 'blue',
    architecture: ['Capture flow keeps saving frictionless', 'Tag model supports quick retrieval', 'Responsive grid adapts to any viewport'],
  },
]

export const skills = [
  { name: 'React', detail: 'interfaces', icon: '◈' },
  { name: 'TypeScript', detail: 'systems', icon: 'TS' },
  { name: 'Tailwind', detail: 'rhythm', icon: '≋' },
  { name: 'GSAP', detail: 'motion', icon: '✳' },
  { name: 'Git', detail: 'shipping', icon: '⑂' },
  { name: 'Figma', detail: 'thinking', icon: '✦' },
]
