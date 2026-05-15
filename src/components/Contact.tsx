import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-brand-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-accent font-mono text-sm tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-accent" /> GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's build{' '}
              <span className="bg-linear-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">together.</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
              Whether you need strategic consulting, an AI integration, or want to upskill your team, we're here to help.
            </p>

            <div className="space-y-6 text-slate-300">
              {[
                { icon: <Mail size={20} />, label: 'EMAIL', value: 'hello@zerovalabs.com', href: 'mailto:hello@zerovalabs.com' },
                { icon: <Phone size={20} />, label: 'WHATSAPP / PHONE', value: '+1 (555) 000-0000', href: '#' },
                { icon: <MapPin size={20} />, label: 'LOCATION', value: 'San Francisco, Remote Worldwide', href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass border border-brand-accent/20 flex items-center justify-center text-brand-accent"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-500 mb-1">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="font-medium hover:text-white transition-colors">{item.value}</a>
                      : <p className="font-medium">{item.value}</p>}
                  </div>
                </div>
              ))}
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
            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent/50 focus:bg-black/50 transition-all font-light text-white placeholder:text-slate-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent/50 focus:bg-black/50 transition-all font-light text-white placeholder:text-slate-600"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent/50 focus:bg-black/50 transition-all font-light resize-none text-white placeholder:text-slate-600"
              />
              <button className="w-full bg-white text-slate-950 font-bold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-white hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-300">
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
