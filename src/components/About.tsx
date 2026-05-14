import { motion } from 'motion/react';
import { CheckCircle2, Zap, Monitor, Sparkles } from 'lucide-react';

export default function About() {
  const points = [
    { text: "Continuous Innovation", icon: <Zap size={18} /> },
    { text: "Modern Education Protocols", icon: <Monitor size={18} /> },
    { text: "Real-World Projects", icon: <Sparkles size={18} /> },
    { text: "Expert Guidance", icon: <CheckCircle2 size={18} /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent/20 to-teal-500/20 blur-xl rounded-full opacity-50 animate-pulse-slow" />
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" 
                alt="Cyber tech environment" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-8 glass px-6 py-4 rounded-xl border border-brand-accent/30 text-white">
                <div className="font-bold text-2xl mb-1">5+</div>
                <div className="text-xs text-slate-400">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-accent font-mono text-sm tracking-uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-accent" /> ABOUT US
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering the <span className="text-glow text-brand-accent">Future</span> of Tech & Education
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              At Zerova Labs, we merge enterprise IT solutions with an advanced educational ecosystem. We don’t just build powerful applications for companies, we shape the next generation of top-tier developers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="flex items-center gap-3 p-4 glass-card rounded-xl"
                >
                  <div className="text-brand-accent">
                    {point.icon}
                  </div>
                  <span className="text-slate-200 font-medium text-sm">{point.text}</span>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-3 bg-brand-surface border border-white/10 hover:border-brand-accent/50 text-white font-bold rounded-xl transition-all duration-300">
              Read Our Story
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
