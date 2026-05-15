import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Users, Briefcase, Code2, Headphones } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Students Trained',   icon: <Users size={22} />,     color: 'from-teal-500/20 to-teal-500/5' },
  { value: '20+',  label: 'Projects Shipped',   icon: <Briefcase size={22} />, color: 'from-brand-accent/20 to-brand-accent/5' },
  { value: '10+',  label: 'Technologies',        icon: <Code2 size={22} />,     color: 'from-orange-500/20 to-orange-500/5' },
  { value: '24/7', label: 'Support Available',   icon: <Headphones size={22} />,color: 'from-purple-500/20 to-purple-500/5' },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineW = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '100%']);

  return (
    <section ref={ref} className="py-16 relative overflow-hidden border-y border-white/5">
      {/* Animated line */}
      <motion.div style={{ width: lineW }}
        className="absolute top-0 left-0 h-px bg-linear-to-r from-transparent via-brand-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [`${i % 2 === 0 ? -10 : 10}px`, `${i % 2 === 0 ? 10 : -10}px`]) }}
              className="relative group p-6 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent mb-4 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                  {stat.icon}
                </div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-slate-500 text-xs font-mono tracking-widest uppercase">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div style={{ width: lineW }}
        className="absolute bottom-0 right-0 h-px bg-linear-to-l from-transparent via-brand-accent to-transparent" />
    </section>
  );
}
