import { motion } from 'motion/react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

const courses = [
  {
    title: "Frontend Engineering",
    category: "Development",
    desc: "Master React, modern architecture, and advanced UI/UX implementation.",
    tags: ["React.js", "TailwindCSS"],
    hasLiveClass: true
  },
  {
    title: "Backend Architecture",
    category: "Development",
    desc: "Build scalable server logic, databases, and microservices.",
    tags: ["Node.js", "PostgreSQL"],
    hasLiveClass: false
  },
  {
    title: "Full Stack Mastery",
    category: "Engineering",
    desc: "Zero to hero in building complete, production-ready applications.",
    tags: ["Next.js", "AWS"],
    hasLiveClass: true
  },
  {
    title: "UI/UX & Product Design",
    category: "Design",
    desc: "Designing high-converting, aesthetically premium interfaces.",
    tags: ["Figma", "Design Systems"],
    hasLiveClass: true
  },
  {
    title: "AI Integrations",
    category: "Modern Tech",
    desc: "Learn to build with LLMs and next-gen AI tools.",
    tags: ["Python", "OpenAI API"],
    hasLiveClass: false
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-accent font-mono text-sm tracking-uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-brand-accent" /> THE ACADEMY <span className="w-8 h-[1px] bg-brand-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Future-Proof Your <span className="text-glow text-brand-accent">Career</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Industry-aligned curriculum. Build real startup projects. Learn from senior engineers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 group relative overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-brand-surface-light border border-white/10 rounded-full text-xs font-mono text-slate-300">
                  {course.category}
                </span>
                {course.hasLiveClass && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-xs font-bold text-brand-accent animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    Live Classes
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{course.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">{course.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {course.tags.map((tag, j) => (
                  <span key={j} className="text-xs text-slate-500 bg-black/20 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                 <div className="flex items-center gap-2 text-sm text-slate-300">
                    <BookOpen size={16} className="text-teal-500" /> Real Project Based
                 </div>
                 <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Award size={16} className="text-yellow-500" /> Certificate Included
                 </div>
              </div>

              <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl font-bold text-white group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
                View Curriculum
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
