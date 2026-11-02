import React from 'react';
import { 
  Trophy, 
  Bot, 
  Clock, 
  Cloud, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { hackathonsAndExperiences } from '../data/experiences';

export default function Experience() {
  const iconMap = {
    Bot: Bot,
    Clock: Clock,
    Trophy: Trophy,
    Cloud: Cloud
  };

  return (
    <section id="experience" className="py-24 bg-slate-50 cyber-grid relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5 text-blue-600" />
            <span>Competitive Hackathons & Industry Exposure</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1120] tracking-tight">
            Hackathons & Experiences
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
            Intensive problem-solving, real-time prototyping under time constraints, and collaborative team engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          
          {/* Central Vertical Connector Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-400 -translate-x-1/2 rounded-full" />
          
          {/* Mobile Vertical Connector Line */}
          <div className="md:hidden absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-400 rounded-full" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {hackathonsAndExperiences.map((exp, idx) => {
              const IconComponent = iconMap[exp.icon] || Trophy;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Badge Center Anchor */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-blue-600 shadow-glow-sm flex items-center justify-center group">
                      <IconComponent className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card Column */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 group">
                      
                      {/* Card Header Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          <span>{exp.year}</span>
                        </div>
                      </div>

                      {/* Title & Organizer */}
                      <h3 className="font-heading font-extrabold text-xl text-[#0B1120] group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mt-1 mb-4">
                        <span className="text-blue-600">{exp.organizer}</span>
                        <span>•</span>
                        <span className="text-slate-700">{exp.role}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Achievements Bullet points */}
                      <ul className="space-y-2 mb-5">
                        {exp.keyPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                        {exp.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-[10px] font-mono font-medium border border-slate-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

