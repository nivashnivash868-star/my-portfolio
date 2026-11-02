import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Award, 
  Calendar, 
  ShieldCheck, 
  Download, 
  ExternalLink,
  Code,
  MapPin,
  Lock,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About({ onOpenResume }) {
  const cards = [
    {
      title: "Education",
      value: personalInfo.degree,
      subtitle: "Undergraduate Degree",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Institution",
      value: personalInfo.college,
      subtitle: personalInfo.location,
      icon: Building2,
      color: "from-cyan-500 to-cyan-600",
      textColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    },
    {
      title: "CGPA",
      value: personalInfo.cgpa,
      subtitle: "Previous Academic Year",
      icon: Award,
      color: "from-emerald-500 to-emerald-600",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Graduation",
      value: personalInfo.graduationYear,
      subtitle: `Academic Duration: ${personalInfo.academicDuration}`,
      icon: Calendar,
      color: "from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Cyber Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Identity & Academic Background</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1120] tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Photograph Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              
              {/* Outer Decorative Glow & Borders */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-md opacity-25" />
              
              <div className="relative bg-[#0B1120] p-3 rounded-3xl border border-blue-500/30 shadow-2xl">
                <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-slate-900 relative">
                  <img
                    src={personalInfo.profilePhoto}
                    alt="Nivash - Profile"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-40 pointer-events-none" />
                  
                  {/* Location badge on photo */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200/80 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800 truncate">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Cyber Terminal Footer on Card */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                  <span>SEC_VERIFY // OK</span>
                  <span className="text-slate-400">ID: NIVASH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Information Cards */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className="flex items-start gap-2.5">
                  <span className="inline-block mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span>{paragraph}</span>
                </p>
              ))}
            </div>

            {/* Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {cards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl bg-white border ${card.borderColor} shadow-card hover:shadow-card-hover transition-all duration-300 group`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-xl ${card.bgColor} ${card.textColor} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
                          {card.title}
                        </span>
                        <h4 className="text-sm sm:text-base font-heading font-bold text-[#0B1120] mt-0.5 leading-snug">
                          {card.value}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={personalInfo.resume.downloadUrl}
                download={personalInfo.resume.filename}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-glow-sm hover:shadow-glow-md transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all active:scale-95"
              >
                <span>View Full Resume</span>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </button>

              <a
                href="#education"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
              >
                <span>View Academic Timeline</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

