import { motion } from 'motion/react';
import { Code, TrendingUp, MessageCircle, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: "Frontend Development",
    icon: <Code size={24} />,
    description: "Master React, modern CSS, and component-driven UI architecture.",
    color: "from-blue-500 to-cyan-400",
    tags: ["React", "Tailwind", "JS/TS"]
  },
  {
    title: "Business & Startups",
    icon: <TrendingUp size={24} />,
    description: "Learn zero-to-one strategies, product-market fit, and scaling.",
    color: "from-purple-500 to-pink-500",
    tags: ["Strategy", "Growth", "MVP"]
  },
  {
    title: "English Communication",
    icon: <MessageCircle size={24} />,
    description: "Professional spoken English and communication tactics for tech.",
    color: "from-emerald-500 to-teal-400",
    tags: ["Speaking", "Interviews", "Pitching"]
  }
];

export default function EduHub() {
  return (
    <section id="eduhub" className="py-24 relative overflow-hidden">
      <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-mono text-sm tracking-uppercase mb-3 block"
            >
              // Knowledge Base
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Learn. Build. <span className="text-gradient">Scale.</span>
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="flex flex-row items-center gap-2 text-brand-primary hover:text-white transition-colors"
          >
            <span>View All Courses</span>
            <ArrowRight size={16} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-1 rounded-3xl relative group cursor-pointer"
            >
              {/* Gradient Border setup */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl -z-10`} />
              
              <div className="bg-slate-900/90 h-full w-full rounded-[20px] p-8 backdrop-blur-xl">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${course.color} text-white`}>
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
                <p className="text-slate-400 mb-6 font-light">{course.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${course.color}`}>Start Learning</span>
                  <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
