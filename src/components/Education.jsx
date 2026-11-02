import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2,
  MapPin,
  Sparkles
} from 'lucide-react';
import { educationData } from '../data/experiences';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 cyber-grid relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Formal Academic Background</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1120] tracking-tight">
            My Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Master Education Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
          
          {/* Card Top Banner */}
          <div className="p-8 sm:p-10 bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 text-white relative">
            <div className="cyber-grid-dark absolute inset-0 opacity-15 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-9 h-9 text-cyan-300" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-500/30 text-cyan-200 text-xs font-mono mb-2">
                    <span>UNDERGRADUATE DEGREE</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                    {educationData.degree}
                  </h3>
                  <p className="text-base sm:text-lg text-cyan-200 font-medium mt-1">
                    {educationData.field}
                  </p>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="flex flex-col items-start md:items-end bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shrink-0">
                <span className="text-xs uppercase font-mono tracking-wider text-cyan-200 font-semibold">
                  Academic Performance
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-heading font-extrabold text-3xl text-white">
                    8.11
                  </span>
                  <span className="text-sm font-mono text-cyan-200">
                    / 10 CGPA
                  </span>
                </div>
                <span className="text-[11px] text-white/80 mt-0.5">
                  Previous Academic Year
                </span>
              </div>
            </div>
          </div>

          {/* Card Details Body */}
          <div className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 Cols: Institutional Details */}
            <div className="md:col-span-5 space-y-5 border-b md:border-b-0 md:border-r border-slate-200/80 pb-6 md:pb-0 md:pr-8">
              
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 font-semibold">Institution</span>
                  <h4 className="font-heading font-bold text-base text-[#0B1120]">
                    {educationData.institution}
                  </h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {educationData.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 font-semibold">Duration</span>
                  <h4 className="font-heading font-bold text-base text-[#0B1120]">
                    {educationData.duration}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Expected Graduation: 2029
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 font-semibold">Specialization Focus</span>
                  <h4 className="font-heading font-bold text-base text-[#0B1120]">
                    Cyber Security & Defense
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Networks, Cryptography, Linux & SOC
                  </p>
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Academic Highlights */}
            <div className="md:col-span-7">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-500 font-mono mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Academic & Technical Highlights</span>
              </h4>

              <div className="space-y-3">
                {educationData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50/40 hover:border-blue-200 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Coursework Modules Tags */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                  Core Subject Areas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Cyber Security Fundamentals",
                    "Network Security & Protocols",
                    "Ethical Hacking",
                    "Data Structures & Algorithms",
                    "Linux System Administration",
                    "Digital Forensics & Incident Response",
                    "Object-Oriented Programming (Java/C++)"
                  ].map((sub, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

