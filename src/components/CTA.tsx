import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const leftX  = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const rightX = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  const blobY  = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Parallax blobs */}
      <motion.div style={{ y: blobY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-accent/6 rounded-full blur-[150px] pointer-events-none" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0,1], ['10%','-10%']) }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Big text */}
          <motion.div style={{ x: leftX }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold tracking-widest mb-8">
              <Zap size={12} /> LET'S WORK TOGETHER
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Ready To<br />
              Build The{' '}
              <span className="bg-linear-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">
                Future
              </span>
              <br />With Us?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Whether you need enterprise-grade software or want to join our academy — we're ready when you are.
            </p>
          </motion.div>

          {/* Right — Action panel */}
          <motion.div style={{ x: rightX }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-3xl border border-white/8 bg-brand-surface/40 backdrop-blur-xl"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 40px 80px -20px rgba(0,0,0,0.6)' }}>

              {/* Ping dot */}
              <div className="flex items-center gap-3 mb-8">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-60" />
                  <div className="relative w-3 h-3 rounded-full bg-brand-accent" />
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-widest">ACCEPTING NEW PROJECTS</span>
              </div>

              <div className="space-y-4 mb-8">
                <button className="w-full px-8 py-4 bg-brand-accent text-white font-bold rounded-xl flex items-center justify-between group hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                  <span>Start a Project</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center justify-between group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <span>Join Our Academy</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="flex -space-x-2">
                  {['JC', 'SM', 'DK', 'AV'].map((init, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-brand-accent/60 to-orange-500/60 border-2 border-brand-surface flex items-center justify-center text-[10px] font-bold text-white">
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  Joined by <span className="text-white font-semibold">100+ students</span> & clients
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
