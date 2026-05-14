import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-brand-darkler border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build <span className="text-gradient">together.</span></h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
              Whether you need strategic consulting, an AI integration, or want to upskill your team, we're here to help.
            </p>

            <div className="space-y-6 text-slate-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass border-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500 mb-1">EMAIL</p>
                  <a href="mailto:hello@zerovalabs.com" className="font-medium hover:text-white transition-colors">hello@zerovalabs.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass border-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500 mb-1">WHATSAPP / PHONE</p>
                  <a href="#" className="font-medium hover:text-white transition-colors">+1 (555) 000-0000</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass border-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500 mb-1">LOCATION</p>
                  <p className="font-medium">San Francisco, Remote Worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-slate-900 rounded-full font-bold hover:bg-[#20bd5a] hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:bg-black/50 transition-all font-light text-white"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:bg-black/50 transition-all font-light text-white"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:bg-black/50 transition-all font-light resize-none text-white"
                ></textarea>
              </div>
              <button className="w-full bg-white text-slate-950 font-bold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                <span>Send Request</span>
                <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
