import { motion } from 'motion/react';
import { Users, Briefcase, Code2, Headphones } from 'lucide-react';

const stats = [
  { value: "100+", label: "Students", icon: <Users size={24} /> },
  { value: "20+", label: "Projects", icon: <Briefcase size={24} /> },
  { value: "10+", label: "Technologies", icon: <Code2 size={24} /> },
  { value: "24/7", label: "Support", icon: <Headphones size={24} /> },
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-brand-surface/20 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-6 glass-card rounded-2xl group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                {stat.icon}
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
