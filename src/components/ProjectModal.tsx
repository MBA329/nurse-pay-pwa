import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../data'

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-5 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#15171b] p-7 shadow-2xl md:p-10">
        <button className="absolute right-6 top-6 rounded-full border border-white/10 p-2 text-muted hover:text-paper" onClick={onClose} aria-label="Close project details"><X size={18} /></button>
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-acid">Architecture / {project.title}</p>
        <h3 className="mb-8 max-w-sm text-3xl font-semibold text-paper">{project.description}</h3>
        <div className="space-y-3">{project.architecture.map((item, index) => <div key={item} className="flex items-center gap-4 border-t border-white/10 py-4 text-sm text-muted"><span className="font-mono text-acid">0{index + 1}</span>{item}</div>)}</div>
        <a href={project.github} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-paper hover:text-acid">View source <ArrowUpRight size={16} /></a>
      </div>
    </div>
  )
}
