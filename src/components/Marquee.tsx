const items = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
  'AWS', 'Figma', 'TailwindCSS', 'Python', 'React Native',
  'OpenAI API', 'Docker', 'GraphQL', 'Prisma', 'Vercel',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="py-6 border-y border-white/5 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-8 text-slate-500 font-mono text-sm tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full bg-brand-accent/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
