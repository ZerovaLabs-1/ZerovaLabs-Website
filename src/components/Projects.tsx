import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Aura Fintech Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind"]
  },
  {
    title: "Nexus AI Chatbot",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "OpenAI API"]
  },
  {
    title: "Elevate E-Commerce App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
    tags: ["React Native", "Node.js"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-brand-surface/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="text-brand-accent font-mono text-sm tracking-uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-brand-accent" /> OUR PORTFOLIO <span className="w-8 h-[1px] bg-brand-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Recent <span className="text-glow text-brand-accent">Deployments</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass border-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                
                {/* Hover UI */}
                <div className="absolute inset-0 bg-brand-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <button className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                    <ExternalLink size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all">
                    <Github size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 relative z-30 bg-brand-surface border-t border-white/5">
                <p className="text-xs font-mono text-brand-accent mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex gap-2">
                  {project.tags.map((tag, j) => (
                     <span key={j} className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-black/30 px-2 py-1 rounded">
                       {tag}
                     </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-transparent border border-white/20 hover:border-brand-accent text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
