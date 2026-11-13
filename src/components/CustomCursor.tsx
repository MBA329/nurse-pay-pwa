import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      }
    }
    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      cursor.current?.classList.toggle('cursor-active', Boolean(target.closest('a, button')))
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])
  return <div ref={cursor} className="custom-cursor" aria-hidden="true" />
}
