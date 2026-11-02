import React from 'react';
import { 
  Users, 
  Code, 
  MessageSquareCode, 
  Target, 
  ShieldCheck, 
  Sparkles,
  GitPullRequest,
  CheckCircle2
} from 'lucide-react';
import { leadershipHighlights } from '../data/experiences';
import { personalInfo } from '../data/personalInfo';

export default function Leadership() {
  const iconMap = {
    Users: Users,
    Code: Code,
    MessageSquareCode: MessageSquareCode,
    Target: Target
  };

  return (
    <section id="leadership" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Team Dynamics & Project Execution</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1120] tracking-tight">
            Leadership & Collaboration
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Feature Banner: Exact statement from resume */}
        <div className="max-w-4xl mx-auto mb-14 bg-gradient-to-br from-slate-900 to-[#0B1120] rounded-3xl p-8 sm:p-10 text-white border border-blue-500/20 shadow-xl relative overflow-hidden">
          <div className="cyber-grid-dark absolute inset-0 opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>TEAM TECH FORGE LEADER & COLLABORATOR</span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-sans leading-relaxed max-w-3xl">
              "{personalInfo.leadershipSummary}"
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-blue-600/30 border border-blue-400/20 text-xs font-mono text-cyan-200">
                Team TECH FORGE
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-600/30 border border-blue-400/20 text-xs font-mono text-cyan-200">
                Team Coordination
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-600/30 border border-blue-400/20 text-xs font-mono text-cyan-200">
                Collaborative Development
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-600/30 border border-blue-400/20 text-xs font-mono text-cyan-200">
                Technical Discussions
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-600/30 border border-blue-400/20 text-xs font-mono text-cyan-200">
                Project Planning
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipHighlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl border border-slate-200/80 p-6 flex flex-col justify-between hover:bg-white hover:border-blue-300 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 mb-5 group-hover:scale-110 group-hover:border-blue-400 group-hover:text-blue-700 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0B1120] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-mono text-blue-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Demonstrated in Hackathons</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

