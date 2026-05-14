import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-brand-bg pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="font-display font-bold text-2xl tracking-tighter flex items-end mb-4 text-white">
              <span>ZEROVA</span>
              <div className="w-2 h-2 rounded-full bg-brand-accent ml-1 mb-1 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Premium IT solutions and advanced engineering education. Empowering the next generation of tech.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-mono tracking-wider text-sm">QUICK LINKS</h4>
            <ul className="space-y-3">
              <FooterLink text="Home" />
              <FooterLink text="About Us" />
              <FooterLink text="Portfolio" />
              <FooterLink text="Careers" />
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-mono tracking-wider text-sm">SERVICES</h4>
            <ul className="space-y-3">
              <FooterLink text="Web Development" />
              <FooterLink text="AI Integrations" />
              <FooterLink text="UI/UX Design" />
              <FooterLink text="The Academy" />
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-mono tracking-wider text-sm">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-brand-accent" /> hello@zerovalabs.com
              </li>
              <li className="text-slate-400 text-sm leading-relaxed mt-2">
                Silicon Valley, CA<br/>
                Remote Worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Zerova Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 shadow-lg">
      {icon}
    </a>
  );
}

function FooterLink({ text }) {
  return (
    <li>
      <a href="#" className="text-slate-400 text-sm hover:text-brand-accent transition-colors flex items-center gap-2 group">
        <span className="w-1.5 h-1.5 bg-brand-surface-light rounded-full group-hover:bg-brand-accent transition-colors" />
        {text}
      </a>
    </li>
  );
}
