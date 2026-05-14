import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Globe from './Globe';
import Earth from './Earth';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[50vh] h-[50vh] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[40vh] h-[40vh] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Global Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center sm:justify-end opacity-40 mix-blend-screen sm:-right-64">
        <div className="w-[150vw] sm:w-[900px] max-w-none">
          <Globe />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start pt-10 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            ZEROVA LABS
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Building Solutions.<br/>
            Empowering Minds.<br/>
            Creating The <span className="text-brand-accent text-glow">Future.</span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            The premium IT Solutions and Education Institute bridging the gap between innovation and reality. We build enterprise software and train the next generation of engineers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-white text-brand-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300 group">
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
              Join Academy
            </button>
          </div>
        </motion.div>

        {/* Right - Earth Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center w-full"
        >
          <Earth className="w-full max-w-[500px]" />
        </motion.div>
      </div>

    </section>
  );
}
