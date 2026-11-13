import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { skills } from '../data'
import { CustomCursor } from './CustomCursor'
import { Nav } from './Nav'
import { Projects } from './Projects'
import { SectionLabel } from './SectionLabel'
import { useGsapReveal } from '../hooks/useGsapReveal'

function App() {
  const [sent, setSent] = useState(false)
  useGsapReveal()
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => { document.documentElement.style.scrollBehavior = 'auto' }
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-paper">
      <CustomCursor /><Nav />
      <main>
        <section className="hero-shell">
          <div className="hero-grid" />
          <div className="relative z-10 mx-auto max-w-7xl px-5 pt-40 md:px-10 md:pt-52">
            <p data-reveal className="mb-8 font-mono text-xs uppercase tracking-[0.28em] text-acid">Frontend developer / Lagos, Nigeria</p>
            <h1 data-reveal className="max-w-6xl text-[clamp(3.6rem,11vw,10.5rem)] font-semibold leading-[0.86] tracking-[-0.08em]">Digital craft<br /><span className="text-outline">with intent.</span></h1>
            <div className="mt-12 flex max-w-2xl flex-col justify-between gap-8 md:flex-row md:items-end"><p data-reveal className="max-w-sm text-base leading-7 text-muted">I’m Emmanuel MBA — I design and build thoughtful interfaces where sharp systems meet a little bit of soul.</p><a data-reveal href="#work" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-paper">Scroll to explore <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition group-hover:border-acid group-hover:text-acid"><ArrowDown size={15} /></span></a></div>
          </div>
          <div className="hero-stamp" data-parallax>EM<br />MBA</div>
        </section>

        <section id="about" className="section-shell grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div><SectionLabel number="01" children="The approach" /><p data-reveal className="font-mono text-xs uppercase leading-6 text-acid">Curiosity is a feature.</p></div>
          <div data-reveal><p className="text-3xl leading-tight tracking-tight text-paper md:text-5xl">I care about the small decisions that make a product feel <em className="font-serif text-acid">obvious</em> — the rhythm, the feedback, the moment someone knows they are in the right place.</p><p className="mt-8 max-w-lg text-base leading-7 text-muted">Currently studying Computer Science at Covenant University, I’m building a practice around accessible frontend engineering, expressive motion, and work that earns attention.</p></div>
        </section>

        <section className="section-shell border-y border-white/10 bg-[#0d0f12]">
          <SectionLabel number="—" children="Tools I reach for" /><div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-6">{skills.map((skill) => <div key={skill.name} data-reveal className="group bg-[#0d0f12] p-5 transition hover:bg-acid hover:text-ink"><span className="text-2xl font-semibold text-acid group-hover:text-ink">{skill.icon}</span><p className="mt-8 font-semibold">{skill.name}</p><p className="mt-1 font-mono text-[10px] uppercase text-muted group-hover:text-ink/60">{skill.detail}</p></div>)}</div></section>
        <Projects />

        <section className="section-shell">
          <SectionLabel number="03" children="Experience" />
          <div className="timeline">
            <div data-reveal className="timeline-row"><div className="timeline-date">03.25 — 08.25</div><div><h3 className="text-2xl font-semibold">Frontend Developer Intern</h3><p className="mt-1 text-acid">Clyp Technologies</p><p className="mt-4 max-w-lg leading-7 text-muted">Shipped responsive product experiences and translated product thinking into maintainable UI systems.</p></div></div>
            <div data-reveal className="timeline-row"><div className="timeline-date">06.26 — now</div><div><h3 className="text-2xl font-semibold">Volunteer</h3><p className="mt-1 text-acid">Google Developer Group</p><p className="mt-4 max-w-lg leading-7 text-muted">Showing up for the community, sharing what I learn, and helping more people find their way into technology.</p></div></div>
            <div data-reveal className="timeline-row"><div className="timeline-date">10.26</div><div><h3 className="text-2xl font-semibold">B.Sc. Computer Science</h3><p className="mt-1 text-acid">Covenant University · First Class expected</p><p className="mt-4 max-w-lg leading-7 text-muted">Grounded in systems thinking, with a Cisco cybersecurity certification and a bias toward learning by building.</p></div></div>
          </div>
        </section>

        <section className="section-shell cv-section">
          <div data-reveal className="cv-card">
            <div>
              <SectionLabel number="—" children="Keep a copy" />
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-paper md:text-6xl">A little more detail, <span className="text-acid">one click away.</span></h2>
              <p className="mt-5 max-w-lg leading-7 text-muted">Download my CV for a concise look at my experience, education, projects, and the tools I use to build thoughtful digital products.</p>
            </div>
            <a href="/portfolio/emmanuel-mba-cv.pdf" download className="cv-download"><Download size={18} /> Download CV <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section id="contact" className="contact-shell">
          <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:px-10">
            <div><SectionLabel number="04" children="Start a conversation" /><h2 className="max-w-xl text-6xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl">Have a good<br /><span className="text-acid">idea?</span></h2><div className="mt-12 space-y-3 text-sm text-muted"><a className="flex items-center gap-3 hover:text-paper" href="mailto:emmanuelmba329@gmail.com"><Mail size={16} />emmanuelmba329@gmail.com</a><span className="flex items-center gap-3"><MapPin size={16} />Lagos, Nigeria</span></div></div>
            <form data-reveal onSubmit={(event) => { event.preventDefault(); setSent(true) }} className="self-end rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8"><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Message<textarea required rows={4} placeholder="Tell me a little about it..." /></label><button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-acid py-4 text-sm font-bold text-ink transition hover:bg-paper">{sent ? 'Message noted — thank you' : 'Send message'} <ArrowUpRight size={17} /></button></form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col justify-between gap-5 border-t border-white/10 px-5 py-8 text-xs text-muted md:flex-row md:px-10"><span>© 2026 Emmanuel MBA</span><div className="flex gap-5"><a href="https://github.com/MBA329" target="_blank" rel="noreferrer" className="hover:text-acid"><Github size={16} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-acid"><Linkedin size={16} /></a><a href="mailto:emmanuelmba329@gmail.com" className="hover:text-acid"><Mail size={16} /></a></div><span className="font-mono">Built with intent.</span></footer>
    </div>
  )
}

export default App
