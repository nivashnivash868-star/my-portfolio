import React from 'react';
import { 
  Shield, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  MessageSquare,
  Heart
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0B1120] text-slate-300 relative border-t border-slate-800 overflow-hidden">
      
      {/* Background Cyber Mesh */}
      <div className="cyber-grid-dark absolute inset-0 opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[2px]">
                <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                  {personalInfo.name}
                </span>
                <span className="block text-xs font-mono text-blue-400 -mt-0.5">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-cyan-300 font-bold">
              "{personalInfo.tagline}"
            </p>

            <p className="text-xs text-slate-400 max-w-sm">
              B.E. Computer Science and Engineering (Cyber Security) at Rathinam Technical Campus.
            </p>
          </div>

          {/* Quick Social Links */}
          <div className="flex flex-col md:items-end space-y-3">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
              Official Profiles
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-blue-500 hover:text-white flex items-center justify-center text-slate-400 transition-all hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-blue-500 hover:text-white flex items-center justify-center text-slate-400 transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-pink-500 hover:text-white flex items-center justify-center text-slate-400 transition-all hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-blue-500 hover:text-white flex items-center justify-center text-slate-400 transition-all hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-emerald-500 hover:text-white flex items-center justify-center text-slate-400 transition-all hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 Nivash. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Coimbatore, Tamil Nadu, India</span>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white transition-all"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}

