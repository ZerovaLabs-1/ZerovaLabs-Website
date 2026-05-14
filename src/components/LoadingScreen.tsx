import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return p + 4;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-brand-bg flex items-center justify-center p-6 bg-grid-pattern"
    >
      <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm" />
      
      <div className="flex flex-col items-center w-full max-w-sm relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-5xl tracking-tighter flex items-end text-white mb-10"
        >
          <span>ZEROVA</span>
          <div className="w-3 h-3 rounded-full bg-brand-accent ml-1 mb-1.5 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
        </motion.div>
        
        <div className="w-full h-1 bg-brand-surface overflow-hidden rounded-full relative mb-4">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-brand-accent shadow-[0_0_15px_rgba(239,68,68,0.8)]"
          />
        </div>
        
        <div className="flex justify-between w-full text-slate-500 font-mono text-sm tracking-widest">
          <span>SYSTEM_INIT</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
