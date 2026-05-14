import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Carter",
    role: "CEO, TechFlow",
    text: "Zerova Labs didn't just build our app; they engineered a scalable infrastructure that allowed us to handle 10x our normal traffic. Premium service at its best.",
    type: "Client"
  },
  {
    name: "Sophia Martinez",
    role: "Frontend Developer",
    text: "The Full Stack Mastery course completely transformed my career. The project-based approach using modern stacks gave me the confidence to ace my interviews.",
    type: "Student"
  },
  {
    name: "Daniel Kwon",
    role: "Product Manager",
    text: "Working with the UI/UX team at Zerova was seamless. They understood our brand identity perfectly and delivered a futuristic design that converts.",
    type: "Client"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Words From Our <span className="text-glow text-brand-accent">Network</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl relative"
            >
              <Quote className="text-brand-surface-light absolute top-6 right-6 opacity-30" size={60} />
              <div className="flex items-center gap-1 mb-6 text-brand-accent">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-surface-light border border-white/10 flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-mono">{t.role} • <span className={t.type === 'Client' ? 'text-teal-400' : 'text-brand-accent'}>{t.type}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
