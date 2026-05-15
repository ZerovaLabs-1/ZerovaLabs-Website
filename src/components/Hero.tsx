import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Globe from './Globe';
import Earth from './Earth';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const globeY  = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">

      {/* Parallax background blobs */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0,1], ['0%','40%']) }}
        className="absolute top-1/4 right-0 w-[50vh] h-[50vh] bg-brand-accent/8 rounded-full blur-[130px] pointer-events-none z-0" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0,1], ['0%','20%']) }}
        className="absolute bottom-0 left-1/4 w-[40vh] h-[40vh] bg-teal-500/8 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Background Globe — hidden on mobile to avoid clutter */}
      <motion.div
        style={{ y: globeY, opacity }}
        className="absolute inset-0 pointer-events-none z-0 hidden sm:flex items-center justify-end sm:-right-64"
      >
        <div className="w-[900px] max-w-none opacity-30 mix-blend-screen">
          <Globe />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — Text */}
          <motion.div
            style={{ y: textY, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-start pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              ZEROVA LABS
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.08]">
              Building Solutions.<br />
              Empowering Minds.<br />
              Creating The{' '}
              <span className="bg-gradient-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">
                Future.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              The premium IT Solutions and Education Institute bridging the gap between innovation and reality. We build enterprise software and train the next generation of engineers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-8 py-4 bg-white text-brand-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-white hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300 group">
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                Join Academy
              </button>
            </div>
          </motion.div>

          {/* Right — Earth Globe */}
          {/* Mobile/tablet: centered below text, capped size */}
          {/* Desktop: right column, larger */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0,1], ['0%','-10%']) }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center w-full"
          >
            {/* Mobile: show smaller, centered */}
            <div className="w-[280px] sm:w-[360px] md:w-[420px] lg:hidden">
              <Earth />
            </div>
            {/* Desktop: full column width */}
            <div className="hidden lg:block w-full max-w-[520px]">
              <Earth />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
