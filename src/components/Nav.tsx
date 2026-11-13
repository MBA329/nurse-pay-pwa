import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [['Work', '#work'], ['About', '#about'], ['Contact', '#contact']]

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed left-0 top-0 z-40 w-full px-5 py-5 md:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-xl md:px-6">
        <a href="#" className="font-mono text-sm tracking-tighter text-paper">EM / <span className="text-acid">MBA</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-acid px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5 md:flex">Let's talk <ArrowUpRight size={14} /></a>
        <button onClick={() => setOpen(!open)} className="text-paper md:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-4 rounded-3xl border border-white/10 bg-ink/95 p-6 md:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="text-2xl text-paper">{label}</a>)}</div>}
    </header>
  )
}
