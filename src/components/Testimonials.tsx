import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Carter',
    role: 'CEO, TechFlow',
    text: "Zerova Labs didn't just build our app; they engineered a scalable infrastructure that allowed us to handle 10x our normal traffic. Premium service at its best.",
    type: 'Client',
    offset: '0px',
  },
  {
    name: 'Sophia Martinez',
    role: 'Frontend Developer',
    text: "The Full Stack Mastery course completely transformed my career. The project-based approach using modern stacks gave me the confidence to ace my interviews.",
    type: 'Student',
    offset: '40px',
  },
  {
    name: 'Daniel Kwon',
    role: 'Product Manager',
    text: "Working with the UI/UX team at Zerova was seamless. They understood our brand identity perfectly and delivered a futuristic design that converts.",
    type: 'Client',
    offset: '20px',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const titleX = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <motion.div style={{ x: useTransform(scrollYProgress, [0,1], ['-5%','5%']) }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-accent/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16 overflow-hidden">
          <motion.div style={{ x: titleX }} className="text-center">
            <div className="text-brand-accent font-mono text-sm tracking-widest mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-brand-accent" /> TESTIMONIALS <span className="w-8 h-px bg-brand-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Words From Our{' '}
              <span className="bg-linear-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">Network</span>
            </h2>
          </motion.div>
        </div>

        {/* Cards with staggered vertical offsets */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              style={{
                marginTop: t.offset,
                y: useTransform(scrollYProgress, [0, 1], [`${-i * 8}px`, `${i * 8}px`]),
              }}
              className="group relative p-7 rounded-2xl border border-white/5 hover:border-brand-accent/25 bg-brand-surface/30 hover:bg-brand-surface/60 transition-all duration-400"
            >
              {/* Large decorative quote */}
              <div className="text-[80px] leading-none font-display text-brand-accent/8 group-hover:text-brand-accent/15 transition-colors absolute top-4 right-6 select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-brand-accent">
                {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
              </div>

              <p className="text-slate-300 leading-relaxed mb-7 text-sm relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-linear-to-br from-brand-accent/40 to-orange-500/40 flex items-center justify-center text-white font-bold text-sm border border-brand-accent/30">
                    {t.name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-brand-surface bg-brand-accent/80" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {t.role} ·{' '}
                    <span className={t.type === 'Client' ? 'text-teal-400' : 'text-brand-accent'}>
                      {t.type}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
