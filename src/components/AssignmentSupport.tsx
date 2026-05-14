import { motion } from 'motion/react';
import { FileEdit, ArrowRight } from 'lucide-react';

export default function AssignmentSupport() {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] p-1 overflow-hidden"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-[2.5rem] opacity-50" />
          
          <div className="relative bg-slate-900 rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
            <div className="flex-1 text-center md:text-left text-white">
              <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-6 mx-auto md:mx-0">
                <FileEdit size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic & Assignment Support</h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Stuck with documentation, case studies, or tech assignments? Our experts provide guidance, proofreading, and conceptual breakdowns to help you ace your deliverables.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-brand-darker font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
              >
                <span>Get Help Now</span>
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
