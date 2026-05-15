import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home',      href: '#home' },
  { name: 'About',     href: '#about' },
  { name: 'Services',  href: '#services' },
  { name: 'Education', href: '#education' },
  { name: 'Projects',  href: '#projects' },
  { name: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setOpen]       = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent z-[60] origin-left shadow-[0_0_10px_rgba(239,68,68,0.6)]"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 border-b border-white/5 shadow-lg shadow-black/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <a href="#home" onClick={close} className="flex items-center group z-50 relative">
            <div className="font-display font-bold text-2xl tracking-tighter flex items-end">
              <span>ZEROVA</span>
              <div className="w-2 h-2 rounded-full bg-brand-accent ml-1 mb-1 group-hover:shadow-[0_0_12px_rgba(239,68,68,0.9)] transition-shadow" />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 bg-brand-surface-light/30 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex">
            <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-brand-bg hover:bg-brand-accent hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Hamburger — animated bars */}
          <button
            onClick={() => setOpen(o => !o)}
            className="lg:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[6px] group"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — bottom sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={close}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Sheet */}
            <motion.div
              key="sheet"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed bottom-0 left-0 right-0 z-[56] lg:hidden rounded-t-[2rem] overflow-hidden"
              style={{ boxShadow: '0 -20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)' }}
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-brand-surface/80 backdrop-blur-2xl" />

              {/* Drag handle */}
              <div className="relative z-10 flex justify-center pt-4 pb-2">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              <div className="relative z-10 px-8 pt-4 pb-10">

                {/* Nav links */}
                <nav className="mb-8">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={close}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.35 }}
                      className="flex items-center justify-between py-4 border-b border-white/5 group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-brand-accent/60 w-5 tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-2xl font-display font-bold text-white group-hover:text-brand-accent transition-colors duration-200">
                          {link.name}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-slate-600 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                      />
                    </motion.a>
                  ))}
                </nav>

                {/* Bottom row — CTA + socials */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.35 }}
                  className="flex items-center justify-between"
                >
                  <button
                    onClick={close}
                    className="px-7 py-3 rounded-full font-bold text-sm bg-brand-accent text-white shadow-[0_0_24px_rgba(239,68,68,0.45)] hover:shadow-[0_0_36px_rgba(239,68,68,0.65)] transition-shadow"
                  >
                    Get Started
                  </button>

                  <div className="flex items-center gap-3">
                    {[
                      { icon: <Twitter size={16} />, href: '#' },
                      { icon: <Linkedin size={16} />, href: '#' },
                      { icon: <Github size={16} />, href: '#' },
                    ].map((s, i) => (
                      <a key={i} href={s.href}
                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent/50 hover:bg-brand-accent/10 transition-all duration-200">
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
