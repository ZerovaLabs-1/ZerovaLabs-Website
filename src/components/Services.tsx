import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MonitorSmartphone, Code, Paintbrush, Cpu, Database, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  { title: 'Web Development', icon: <Code size={28} />, desc: 'Scalable, high-performance web applications using modern stacks.' },
  { title: 'Mobile App Development', icon: <MonitorSmartphone size={28} />, desc: 'Native and cross-platform mobile experiences for iOS and Android.' },
  { title: 'UI/UX Design', icon: <Paintbrush size={28} />, desc: 'Intuitive, premium user interfaces designed for conversion and engagement.' },
  { title: 'AI Solutions', icon: <Cpu size={28} />, desc: 'Integrating machine learning and LLMs into enterprise workflows.' },
  { title: 'Software Development', icon: <Database size={28} />, desc: 'Custom backend architecture, API development, and data infrastructure.' },
  { title: 'Branding', icon: <Megaphone size={28} />, desc: 'Crafting digital brand identities that stand out in the tech space.' },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} id="services" className="py-24 relative bg-brand-surface/20 overflow-hidden">
      <motion.div style={{ y: blobY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-brand-accent font-mono text-sm tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-accent" /> CAPABILITIES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Premium IT{' '}
              <span className="bg-gradient-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden relative border-white/5 hover:border-brand-accent/30 hover:shadow-[0_10px_40px_-10px_rgba(239,68,68,0.25)]"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-14 h-14 rounded-xl bg-brand-surface-light border border-white/5 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
                {svc.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{svc.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">{svc.desc}</p>

              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-brand-accent opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 relative z-10">
                Explore <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
