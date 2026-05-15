import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  { name: 'Alex Vance',    role: 'Founder & Lead Engineer', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop' },
  { name: 'Sarah Chen',    role: 'AI Product Design',       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
  { name: 'Marcus Reid',   role: 'Business Strategist',     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Elena Rostova', role: 'Full-Stack Dev',          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop' },
  { name: 'James Okafor',  role: 'DevOps Engineer',         image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Priya Nair',    role: 'UI/UX Lead',              image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop' },
  { name: 'Daniel Wu',     role: 'Mobile Engineer',         image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop' },
];

const socials = [
  { icon: <Linkedin size={13} />, href: '#' },
  { icon: <Twitter size={13} />,  href: '#' },
  { icon: <Github size={13} />,   href: '#' },
];

function MemberCard({ member, index, tall = false }: { member: typeof team[0]; index: number; tall?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-brand-accent/40 transition-all duration-300 ${tall ? 'row-span-2' : ''}`}
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
    >
      <div className={`w-full ${tall ? 'h-full min-h-105' : 'aspect-4/5'}`}>
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600"
        />
      </div>

      {/* Gradient overlay — always present, deepens on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

      {/* Index number top-right */}
      <div className="absolute top-4 right-4 text-[10px] font-mono text-white/20 group-hover:text-brand-accent/60 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Social icons — slide up on hover */}
      <div className="absolute bottom-18 left-0 right-0 flex justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        {socials.map((s, i) => (
          <a key={i} href={s.href}
            className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-accent transition-colors">
            {s.icon}
          </a>
        ))}
      </div>

      {/* Name plate */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
        <h3 className="text-base font-bold text-white group-hover:text-brand-accent transition-colors duration-200 leading-tight">
          {member.name}
        </h3>
        <p className="text-[11px] font-mono text-slate-500 mt-0.5">{member.role}</p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0,1], ['-6%','6%']) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 border border-white/3 rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0,1], ['-3%','3%']) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-white/3 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-brand-accent font-mono text-sm tracking-widest mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-brand-accent" /> THE TEAM <span className="w-8 h-px bg-brand-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The{' '}
            <span className="bg-linear-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">Core Team</span>
          </h2>
          <p className="text-slate-400">The minds building the future at Zerova Labs.</p>
        </div>

        {/* Desktop: asymmetric 4-col grid */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 auto-rows-[260px]">
          {/* Row 1: tall | normal | normal | normal */}
          <MemberCard member={team[0]} index={0} tall />
          <MemberCard member={team[1]} index={1} />
          <MemberCard member={team[2]} index={2} />
          <MemberCard member={team[3]} index={3} />
          {/* Row 2: (col 1 occupied by tall) | normal | normal | normal */}
          <MemberCard member={team[4]} index={4} />
          <MemberCard member={team[5]} index={5} />
          <MemberCard member={team[6]} index={6} />
        </div>

        {/* Mobile: simple 2-col grid */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          {team.map((member, i) => (
            <MemberCard key={i} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
