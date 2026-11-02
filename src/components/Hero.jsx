import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  Lock, 
  Download, 
  ExternalLink, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Hero({ onOpenResume }) {
  // Animated typing rotating titles
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = personalInfo.rotatingTitles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText.length + 1 === fullText.length) {
          // Pause at full word
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.rotatingTitles.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:py-32 flex items-center cyber-grid overflow-hidden"
    >
      {/* Background Decorative Cyber Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 via-cyan-400/10 to-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl -z-10" />

      {/* Floating Network Node Graphics */}


      <div className="hidden lg:block absolute bottom-24 left-1/3 p-3 bg-white/80 backdrop-blur-md rounded-2xl border border-cyan-100 shadow-card animate-float [animation-delay:2s] pointer-events-none">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-800">
          <Terminal className="w-4 h-4 text-cyan-600" />
          <span>B.E. CSE (Cyber Security)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Headline, Rotating Titles, Description, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Available for Cyber Security & Developer Opportunities</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B1120] tracking-tight leading-[1.1] mb-3">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">Nivash</span>.
            </h1>

            {/* Sub-headline: Exact Static Title */}
            <p className="text-lg sm:text-xl font-semibold text-slate-700 mb-2 font-heading tracking-wide">
              {personalInfo.title}
            </p>

            {/* Animated Typing Role */}
            <div className="flex items-center gap-2 font-mono text-base sm:text-lg text-blue-600 font-medium mb-6 bg-blue-50/60 px-3.5 py-2 rounded-lg border border-blue-100/80">
              <span className="text-slate-400 select-none">&gt;</span>
              <span className="text-slate-700 font-semibold">Specialization:</span>
              <span className="text-blue-700 font-bold">{displayText}</span>
              <span className="w-2 h-5 bg-blue-600 animate-pulse ml-0.5" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {personalInfo.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-glow-sm hover:shadow-glow-md transition-all active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resume.downloadUrl}
                download={personalInfo.resume.filename}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white border border-slate-300 hover:border-blue-400 hover:bg-blue-50/40 shadow-sm transition-all active:scale-95"
                title="Download Official PDF Resume"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-600 hover:text-blue-600 hover:bg-white transition-colors"
                title="Preview Resume in Modal"
              >
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-blue-700 bg-blue-50 hover:bg-blue-100/80 border border-blue-200 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons with Exact Verified URLs */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 w-full">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold mr-2">
                Connect:
              </span>
              
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm transition-all"
                aria-label="Nivash GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm transition-all"
                aria-label="Nivash LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm transition-all"
                aria-label="Nivash Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm transition-all"
                aria-label="Email Nivash"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-300 hover:shadow-sm transition-all"
                aria-label="Message Nivash on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Actual Uploaded Profile Photo with Futuristic Blue Border & Shadow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer Decorative Gradient Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl border-2 border-blue-500/40 shadow-card-hover">
                
                {/* Photo Frame */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50 to-slate-100 aspect-[3/4] max-h-[460px]">
                  <img
                    src={personalInfo.profilePhoto}
                    alt="Nivash - Cybersecurity Enthusiast & Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay at bottom of photo for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent opacity-60 pointer-events-none" />



                  {/* Bottom Info Ribbon on Photograph */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/80 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading font-bold text-sm text-[#0B1120]">Nivash K</p>
                        <p className="text-[11px] text-blue-600 font-medium">Rathinam Technical Campus</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-[11px] font-bold">
                          CGPA 8.11
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cyber Security Accents */}
                <div className="mt-3.5 flex items-center justify-between px-1 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    Verified Identity
                  </span>
                  <span className="text-slate-400">BATCH 2025–2029</span>
                </div>
              </div>

              {/* SOC Badge below photo */}
              <div className="mt-4 p-3 bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-card animate-float w-fit mx-auto">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-700">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>SOC Level 1/2 Active</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

