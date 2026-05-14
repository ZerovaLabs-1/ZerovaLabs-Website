import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Animated Glowing Background */}
      <div className="absolute inset-0 bg-brand-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-brand-accent/5 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="glass p-12 md:p-20 rounded-[3rem] border border-brand-accent/20 shadow-[0_0_50px_rgba(239,68,68,0.1)] backdrop-blur-2xl"
        >
          <div className="w-20 h-20 bg-brand-accent/10 flex items-center justify-center rounded-full mx-auto mb-8 border border-brand-accent/30 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
             <div className="w-10 h-10 bg-brand-accent rounded-full animate-ping opacity-75 absolute" />
             <div className="w-8 h-8 rounded-full bg-brand-accent relative z-10" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready To Build The <span className="text-brand-accent text-glow">Future</span> With Us?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Whether you need enterprise-grade software solutions or want to join our academy to level up your engineering skills.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-brand-accent text-white font-bold rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] hover:-translate-y-1 transition-all duration-300">
              Start a Project
            </button>
            <button className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 flex items-center justify-center gap-2 transition-all duration-300">
              Join Our Academy <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
