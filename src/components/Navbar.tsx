import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-50 origin-left shadow-[0_0_10px_rgba(239,68,68,0.5)]"
        style={{ scaleX }}
      />
      <nav className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass py-3 border-b border-brand-accent/20 shadow-lg shadow-black/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <a href="#home" className="flex items-center gap-2 group z-50">
            <div className="font-display font-bold text-2xl tracking-tighter flex items-end">
              <span>ZEROVA</span>
              <div className="w-2 h-2 rounded-full bg-brand-accent ml-1 mb-1 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-shadow" />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 bg-brand-surface-light/30 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors group"
              >
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

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-200 hover:text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-brand-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-slate-300 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 px-8 py-4 rounded-full text-lg font-bold bg-brand-accent text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </nav>
    </>
  );
}
