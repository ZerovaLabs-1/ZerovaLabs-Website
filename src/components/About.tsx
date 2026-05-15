import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, Zap, Monitor, Sparkles } from 'lucide-react';

const points = [
  { text: 'Continuous Innovation', icon: <Zap size={18} /> },
  { text: 'Modern Education Protocols', icon: <Monitor size={18} /> },
  { text: 'Real-World Projects', icon: <Sparkles size={18} /> },
  { text: 'Expert Guidance', icon: <CheckCircle2 size={18} /> },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Parallax image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent/15 to-teal-500/15 blur-2xl rounded-full opacity-60 animate-pulse-slow" />
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 40px 80px -20px rgba(0,0,0,0.8)' }}>
              <motion.img
                style={{ y: imgY }}
                src="/logo.jpeg"
                alt="Zerova Labs"
                loading="lazy"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700 scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 glass px-6 py-4 rounded-xl border border-brand-accent/30 text-white"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>
                <div className="font-bold text-2xl mb-1">5+</div>
                <div className="text-xs text-slate-400">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-accent font-mono text-sm tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-accent" /> ABOUT US
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering the{' '}
              <span className="bg-gradient-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">Future</span>{' '}
              of Tech & Education
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              At Zerova Labs, we merge enterprise IT solutions with an advanced educational ecosystem. We don't just build powerful applications for companies, we shape the next generation of top-tier developers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 glass-card rounded-xl"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
                >
                  <div className="text-brand-accent">{point.icon}</div>
                  <span className="text-slate-200 font-medium text-sm">{point.text}</span>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-3 bg-brand-surface border border-white/10 hover:border-brand-accent/50 text-white font-bold rounded-xl transition-all duration-300"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}>
              Read Our Story
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
