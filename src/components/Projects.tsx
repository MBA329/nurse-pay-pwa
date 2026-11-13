import { ArrowUpRight, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { projects, type Project } from '../data'
import { ProjectModal } from './ProjectModal'
import { SectionLabel } from './SectionLabel'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  return (
    <section id="work" className="section-shell">
      <SectionLabel number="02" children="Selected work" />
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} data-reveal className={`project-card ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
            <div className="project-art" data-parallax><span className={`project-orb ${project.accent}`} /><span className="project-index">0{index + 1}</span><span className="project-mark">{project.title === 'Grade Vision' ? 'GV' : project.title === 'Habify' ? 'H' : 'UB'}</span></div>
            <div className="flex items-start justify-between gap-4 p-6"><div><p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-acid">{project.type}</p><h3 className="text-2xl font-semibold text-paper">{project.title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-muted">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-muted">{item}</span>)}</div></div><button onClick={() => setSelected(project)} className="shrink-0 rounded-full border border-white/15 p-3 text-muted transition hover:border-acid hover:text-acid" aria-label={`Open ${project.title} architecture`}><Maximize2 size={16} /></button></div>
            <a href={project.live ?? project.github} target="_blank" rel="noreferrer" className="mx-6 mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-paper hover:text-acid">Explore <ArrowUpRight size={14} /></a>
          </article>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
