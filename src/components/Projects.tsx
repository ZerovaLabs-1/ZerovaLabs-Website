import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Aura Fintech Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind'],
    featured: true,
  },
  {
    title: 'Nexus AI Chatbot',
    category: 'AI Integration',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'OpenAI API'],
  },
  {
    title: 'Elevate E-Commerce App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop',
    tags: ['React Native', 'Node.js'],
  },
];

function ProjectCard({ project, index, featured = false }: { project: typeof projects[0]; index: number; featured?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative rounded-2xl overflow-hidden border border-white/8 hover:border-brand-accent/40 transition-all duration-500 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
    >
      <div className={`overflow-hidden ${featured ? 'aspect-[16/9] md:h-full md:aspect-auto' : 'aspect-[4/3]'}`}>
        <motion.img
          style={{ y: imgY }}
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover scale-110 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent" />

      {/* Hover action buttons */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button whileHover={{ scale: 1.1 }} className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-[0_0_24px_rgba(239,68,68,0.6)]">
          <ExternalLink size={18} />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
          <Github size={18} />
        </motion.button>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <span className="text-[10px] font-mono text-brand-accent tracking-widest uppercase mb-2 block">{project.category}</span>
        <h3 className={`font-bold text-white group-hover:text-brand-accent transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tags.map((tag, j) => (
            <span key={j} className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const blobX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} id="projects" className="py-24 relative overflow-hidden">
      <motion.div style={{ x: blobX }}
        className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-brand-accent font-mono text-sm tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-accent" /> OUR PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Recent{' '}
              <span className="bg-linear-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">Deployments</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group shrink-0">
            View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid: featured left (2×2) + 2 stacked right */}
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[580px]">
          <ProjectCard project={projects[0]} index={0} featured />
          <ProjectCard project={projects[1]} index={1} />
          <ProjectCard project={projects[2]} index={2} />
        </div>
      </div>
    </section>
  );
}
