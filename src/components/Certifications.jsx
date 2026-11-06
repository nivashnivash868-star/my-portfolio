import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  FileCheck, 
  ShieldAlert, 
  Lock, 
  Activity, 
  Search, 
  Cpu, 
  Code, 
  Terminal,
  X,
  Download,
  CheckCircle2,
  Bot,
  Sparkles,
  BarChart3,
  Linkedin
} from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);
  const [filter, setFilter] = useState('all');

  const iconMap = {
    ShieldAlert: ShieldAlert,
    Lock: Lock,
    Activity: Activity,
    Search: Search,
    FileCheck: FileCheck,
    Cpu: Cpu,
    Code: Code,
    Award: Award,
    Terminal: Terminal,
    Bot: Bot,
    Sparkles: Sparkles,
    BarChart3: BarChart3
  };

  const categories = ['all', 'Artificial Intelligence', 'Data & Analytics', 'Cybersecurity', 'Ethical Hacking', 'SOC & SIEM', 'Programming'];

  const filteredCerts = filter === 'all' 
    ? certifications 
    : certifications.filter(c => c.category === filter || (filter === 'Cybersecurity' && (c.category === 'Cybersecurity' || c.category === 'Digital Forensics')));

  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Continuous Upskilling & Certifications</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1120] tracking-tight">
            Certifications & Learning
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
            Verified credentials in cybersecurity defense, ethical hacking, SIEM monitoring, incident response, and cloud AI architecture.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-glow-sm'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat === 'all' ? 'All Credentials' : cat}
            </button>
          ))}
        </div>

        {/* Certifications Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCerts.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="group flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-blue-400 transition-all duration-300 overflow-hidden"
              >
                
                {/* Visual Header / Thumbnail Area */}
                <div className="relative h-44 bg-gradient-to-br from-slate-900 to-[#0B1120] p-6 flex flex-col justify-between overflow-hidden">
                  <div className="cyber-grid-dark absolute inset-0 opacity-20 pointer-events-none"></div>
                  
                  {cert.image ? (
                    <div className="absolute inset-0">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-black/40 to-transparent" />
                    </div>
                  ) : null}

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-[11px] font-mono font-semibold text-cyan-200">
                      {cert.credentialBadge}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      {cert.issueDate}
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 backdrop-blur-md border border-blue-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 truncate max-w-[200px]">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#0B1120] group-hover:text-blue-600 transition-colors leading-snug mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold mb-4">
                      Issued by {cert.issuer}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 py-2 hover:underline truncate"
                    >
                      <span className="truncate">Open Credential</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>

                    <div className="flex items-center gap-2 shrink-0">
                      {cert.linkedInUrl && (
                        <a
                          href={cert.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-[#0A66C2] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                          title="View on LinkedIn"
                          aria-label="View on LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <button
                        onClick={() => setActiveCert(cert)}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Certificate Preview Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-600 uppercase">
                  {activeCert.credentialBadge} • {activeCert.issuer}
                </span>
                <h3 className="font-heading font-extrabold text-xl text-[#0B1120]">
                  {activeCert.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveCert(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Embedded PDF or Image Viewer */}
            <div className="flex-1 p-4 bg-slate-100 overflow-hidden flex items-center justify-center min-h-[500px]">
              {activeCert.fileUrl.endsWith('.png') || activeCert.fileUrl.endsWith('.jpg') || activeCert.fileUrl.endsWith('.jpeg') ? (
                <img
                  src={activeCert.fileUrl}
                  alt={activeCert.title}
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg border border-slate-300"
                />
              ) : (
                <iframe
                  src={`${activeCert.fileUrl}#view=FitH`}
                  title={activeCert.title}
                  className="w-full h-[70vh] rounded-xl border border-slate-300 bg-white"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-500 truncate max-w-xs">
                {activeCert.fileUrl}
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                {activeCert.linkedInUrl && (
                  <a
                    href={activeCert.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#0A66C2] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Post</span>
                  </a>
                )}
                <a
                  href={activeCert.fileUrl}
                  download
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>Download</span>
                </a>
                <a
                  href={activeCert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Full</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

