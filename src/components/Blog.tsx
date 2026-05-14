import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    title: "The Future of React: Server Components Explained",
    category: "Development",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    excerpt: "Demystifying RSCs and how they change our mental model for building applications."
  },
  {
    title: "Why AI Avatars Will Replace Standard Chatbots",
    category: "AI & Innovation",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    excerpt: "The shift from text-based LLMs to voice-activated, emotional AI interfaces."
  },
  {
    title: "Securing Seed Funding in 2024",
    category: "Startups",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop",
    excerpt: "What investors are looking for now that the zero-interest rate environment is over."
  }
];

export default function Blog() {
  return (
    <section className="py-24 relative bg-brand-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest <span className="text-gradient">Insights</span></h2>
            <p className="text-slate-400">Thoughts, updates, and tutorials from the team.</p>
          </div>
          <a href="#" className="hidden md:flex flex-row items-center gap-2 text-white hover:text-brand-accent transition-colors">
            <span>View all articles</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-4 rounded-3xl group cursor-pointer"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white">
                  {post.category}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono mb-3">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="text-sm font-semibold text-brand-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Read more</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
