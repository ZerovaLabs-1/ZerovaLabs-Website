import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen, Award, ArrowRight } from 'lucide-react';

const courses = [
  { title: 'Frontend Engineering',    category: 'Development',  desc: 'Master React, modern architecture, and advanced UI/UX implementation.', tags: ['React.js', 'TailwindCSS'], hasLiveClass: true },
  { title: 'Backend Architecture',    category: 'Development',  desc: 'Build scalable server logic, databases, and microservices.',             tags: ['Node.js', 'PostgreSQL'],   hasLiveClass: false },
  { title: 'Full Stack Mastery',      category: 'Engineering',  desc: 'Zero to hero in building complete, production-ready applications.',      tags: ['Next.js', 'AWS'],          hasLiveClass: true },
  { title: 'UI/UX & Product Design',  category: 'Design',       desc: 'Designing high-converting, aesthetically premium interfaces.',           tags: ['Figma', 'Design Systems'], hasLiveClass: true },
  { title: 'AI Integrations',         category: 'Modern Tech',  desc: 'Learn to build with LLMs and next-gen AI tools.',                       tags: ['Python', 'OpenAI API'],    hasLiveClass: false },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const blobX = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const blobY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} id="education" className="py-24 relative overflow-hidden">
      <motion.div style={{ x: blobX, y: blobY }}
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-teal-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <div className="text-brand-accent font-mono text-sm tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-accent" /> THE ACADEMY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Future-Proof Your{' '}
              <span className="bg-linear-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">Career</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed lg:text-right">
            Industry-aligned curriculum. Build real startup projects.<br className="hidden lg:block" /> Learn from senior engineers.
          </p>
        </div>

        {/* Course list */}
        <div className="space-y-3">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [`${i * 4}px`, `${-i * 4}px`]) }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:p-6 rounded-2xl border border-white/5 hover:border-brand-accent/30 bg-brand-surface/30 hover:bg-brand-surface/60 transition-all duration-300 cursor-pointer"
            >
              {/* Left */}
              <div className="flex items-center gap-5">
                <span className="text-[11px] font-mono text-brand-accent/50 group-hover:text-brand-accent transition-colors w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">{course.title}</h3>
                    {course.hasLiveClass && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-brand-accent/15 border border-brand-accent/30 rounded-full text-[10px] font-bold text-brand-accent">
                        <span className="w-1 h-1 rounded-full bg-brand-accent animate-pulse" /> LIVE
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm">{course.desc}</p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4 sm:shrink-0 pl-11 sm:pl-0">
                <div className="flex gap-2 flex-wrap">
                  {course.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-mono text-slate-500 bg-white/5 border border-white/8 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600 shrink-0">
                  <span className="flex items-center gap-1"><BookOpen size={12} className="text-teal-500" /> Project</span>
                  <span className="flex items-center gap-1"><Award size={12} className="text-yellow-500" /> Cert</span>
                </div>
                <ArrowRight size={16} className="text-slate-600 group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-200 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
