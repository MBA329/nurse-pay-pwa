export function SectionLabel({ number, children }: { number: string; children: string }) {
  return <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted"><span className="text-acid">{number}</span><span className="h-px w-8 bg-white/20" />{children}</div>
}
