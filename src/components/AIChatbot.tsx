import { motion } from 'motion/react';
import { Send, Sparkles, User, CheckCircle2 } from 'lucide-react';
import { ReactNode } from 'react';

export default function AIChatbot() {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1506h-150brand-secondary/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 text-brand-secondary text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>AI-Powered Learning</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Master Communication with <span className="text-glow text-transparent bg-clip-text bg-linear-to-rrom-brand-secondary to-brand-accent">ZeroAI</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
              Practice spoken English, get instant grammar corrections, and prepare for professional interviews with our advanced AI avatar.
            </p>

            <ul className="space-y-4 mb-10">
              {['Real-time spoken English practice', 'Context-aware grammar correction', 'Professional email & pitch drafting', 'Available 24/7 for instant feedback'].map((item, i) => (
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  key={i} 
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2 className="text-brand-accent" size={20} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-primary rounded-full font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all flex items-center gap-2"
            >
              <span>Try AI Chatbot</span>
              <Sparkles size={18} />
            </motion.button>
          </motion.div>

          {/* Mock Chat UI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Outer Glow frame */}
            <div className="absolute inset-0 bg-gradient-primary rounded-[2.5rem] blur-xl opacity-30 animate-pulse-slow" />
            
            <div className="relative glass border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col h-125 shadow-2xl bg-brand-darker/80 backdrop-blur-2xl">
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center pt-1">
                    <BotAvatar />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">ZeroAI Tutor</h4>
                    <p className="text-xs text-brand-accent flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block animate-pulse" /> Online
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
                
                <ChatBubble from="ai" delay={0.5}>
                  Hi there! 👋 How can I help you improve your professional communication today?
                </ChatBubble>
                <ChatBubble from="user" delay={1.5}>
                  Can you review my opening pitch for a startup investor meeting?
                </ChatBubble>
                <ChatBubble from="ai" delay={2.5}>
                  I'd love to! Please share it with me. I'll focus on clarity, tone, and persuasive impact. 🚀
                </ChatBubble>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white/5 border-t border-white/10">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="w-full bg-black/40 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center cursor-pointer hover:bg-brand-secondary transition-colors">
                    <Send size={14} className="text-white -translate-x-px translate-y-px" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BotAvatar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73A2 2 0 1 1 12 2zm0 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="white"/>
    </svg>
  );
}

function ChatBubble({ children, from, delay }: { children: ReactNode, from: 'ai' | 'user', delay: number }) {
  const isAI = from === 'ai';
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={`flex max-w-[85%] ${isAI ? 'self-start' : 'self-end'} ${isAI ? 'items-end' : 'items-end flex-row-reverse'} gap-2`}
    >
      <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center ${isAI ? 'bg-brand-primary' : 'bg-slate-700'}`}>
        {isAI ? <Sparkles size={12} className="text-white" /> : <User size={12} className="text-white" />}
      </div>
      <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
        isAI ? 'bg-white/10 text-slate-200 rounded-bl-sm border border-white/5' : 'bg-brand-primary text-white rounded-br-sm'
      }`}>
        {children}
      </div>
    </motion.div>
  );
}
