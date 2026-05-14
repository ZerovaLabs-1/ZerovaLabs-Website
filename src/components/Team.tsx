import { motion } from 'motion/react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Alex Vance",
    role: "Founder & Lead Engineer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "AI Product Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "Marcus Reid",
    role: "Business Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "Full-Stack Dev",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
  }
];

export default function Team() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-gradient">Core Team</span></h2>
          <p className="text-slate-400">The minds building the future at Zerovalabs.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 border border-white/10 group-hover:border-brand-primary/50 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <div className="flex justify-center gap-3 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-primary transition-colors"><Linkedin size={14} /></a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-primary transition-colors"><Twitter size={14} /></a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-primary transition-colors"><Github size={14} /></a>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">{member.name}</h3>
              <p className="text-sm font-mono text-slate-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
