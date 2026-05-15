import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const onEnter = () => ring.current?.classList.add('scale-150', 'opacity-50');
    const onLeave = () => ring.current?.classList.remove('scale-150', 'opacity-50');
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 w-2 h-2 bg-brand-accent rounded-full pointer-events-none z-[9999] shadow-[0_0_8px_rgba(239,68,68,0.8)]" style={{ willChange: 'transform' }} />
      <div ref={ring} className="fixed top-0 left-0 w-10 h-10 border border-brand-accent/50 rounded-full pointer-events-none z-[9998] transition-[opacity,scale] duration-300" style={{ willChange: 'transform' }} />
    </>
  );
}
