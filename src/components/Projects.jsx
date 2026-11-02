import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Shield, 
  Activity, 
  LineChart, 
  MapPin, 
  Network, 
  CheckCircle2, 
  Layers,
  ArrowUpRight,
  Info,
  X
} from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Custom high-tech visual renderers for project thumbnails
  const renderThumbnail = (project) => {
    if (project.id === 'cybershield' && project.image) {
      return (
        <div className="relative w-full h-48 bg-[#0B1120] overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-70" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-cyan-400">
            <span className="flex items-center gap-1.5 bg-[#0B1120]/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              SOC Level 1/2 Automated
            </span>
            <span className="bg-[#0B1120]/80 px-2 py-1 rounded-md border border-blue-500/30 text-[10px] text-white">
              FastAPI + React
            </span>
          </div>
        </div>
      );
    }

    if (project.id === 'dr-sos') {
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0B1120] via-[#1F1315] to-[#0A0A0C] overflow-hidden flex flex-col justify-between p-4 group-hover:scale-105 transition-transform duration-500">
          {/* Cyber Radar / Emergency Beacon visual */}
          <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full border border-red-500/20 flex items-center justify-center animate-pulse">
            <div className="w-24 h-24 rounded-full border border-red-500/30 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md bg-red-950/80 border border-red-600/40 text-[11px] font-mono text-red-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              EMERGENCY SOS BEACON
            </span>
            <span className="text-[10px] font-mono text-slate-400">GPS TELEMETRY</span>
          </div>

          <div className="z-10 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-red-900/40">
            <p className="text-xs font-mono text-red-200">Rapid Medical Rescue & Ambulance Dispatch</p>
            <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400 font-mono">
              <span>LAT: 11.0168° N</span>
              <span>•</span>
              <span>LON: 76.9558° E</span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'expense-tracker') {
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0B1120] via-[#0D1F1A] to-[#061A14] overflow-hidden flex flex-col justify-between p-4 group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-600/40 text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
              <LineChart className="w-3.5 h-3.5" />
              FINANCIAL ANALYTICS
            </span>
            <span className="text-[10px] font-mono text-slate-400">POSTGRESQL // FLASK</span>
          </div>

          {/* Bar Chart Mockup */}
          <div className="flex items-end justify-around h-20 px-4 py-2 bg-emerald-950/30 rounded-lg border border-emerald-500/20">
            <div className="w-4 bg-emerald-600/60 rounded-t h-8"></div>
            <div className="w-4 bg-emerald-500/70 rounded-t h-14"></div>
            <div className="w-4 bg-emerald-400 rounded-t h-16"></div>
            <div className="w-4 bg-emerald-500/80 rounded-t h-12"></div>
            <div className="w-4 bg-emerald-300 rounded-t h-18 shadow-glow-sm"></div>
          </div>

          <div className="z-10 flex items-center justify-between text-[11px] font-mono text-emerald-300">
            <span>Budget Control Engine</span>
            <span>Psycopg2 Relational DB</span>
          </div>
        </div>
      );
    }

    if (project.id === 'zero-plus') {
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0B1120] via-[#091E2A] to-[#051520] overflow-hidden flex flex-col justify-between p-4 group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-600/40 text-[11px] font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              CIVIC INTELLIGENCE ENGINE
            </span>
            <span className="text-[10px] font-mono text-cyan-400">REACT 19 + VITE</span>
          </div>

          {/* Geospatial Map Visual Grid */}
          <div className="relative h-20 w-full rounded-lg border border-cyan-500/20 bg-cyan-950/20 overflow-hidden flex items-center justify-center">
            <div className="cyber-grid-dark absolute inset-0 opacity-40"></div>
            <div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] top-4 left-1/4 animate-ping"></div>
            <div className="absolute w-2 h-2 rounded-full bg-cyan-400 top-4 left-1/4"></div>
            <div className="absolute w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6] bottom-4 right-1/3"></div>
            <div className="text-[11px] font-mono text-cyan-200 bg-black/60 px-3 py-1 rounded-md border border-cyan-500/30 z-10">
              Leaflet Geospatial Telemetry
            </div>
          </div>

          <div className="z-10 flex items-center justify-between text-[11px] font-mono text-cyan-300">
            <span>Decision Dashboard</span>
            <span>FastAPI + SQLAlchemy</span>
          </div>
        </div>
      );
    }

    // TECH FORGE
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-[#0B1120] via-[#1E112A] to-[#120B1F] overflow-hidden flex flex-col justify-between p-4 group-hover:scale-105 transition-transform duration-500">
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-md bg-purple-950/80 border border-purple-600/40 text-[11px] font-mono text-purple-300 font-semibold flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5" />
            TEAM TECH FORGE
          </span>
          <span className="text-[10px] font-mono text-purple-300">OPEN AGENT HACKATHON</span>
        </div>

        {/* Kafka to Neo4j pipeline stream */}
        <div className="flex items-center justify-between px-3 py-2 bg-purple-950/40 rounded-lg border border-purple-500/20 text-[10px] font-mono text-purple-200">
          <span className="bg-purple-900/80 px-2 py-1 rounded border border-purple-400/30">CSV Input</span>
          <span className="text-purple-400">&rarr; Kafka Topic &rarr;</span>
          <span className="bg-purple-900/80 px-2 py-1 rounded border border-purple-400/30">Neo4j Graph</span>
        </div>

        <div className="z-10 flex items-center justify-between text-[11px] font-mono text-purple-300">
          <span>CSV Graph Assistant</span>
          <span>Cypher NLP Engine</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Verified GitHub Repositories</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1120] tracking-tight">
            My Projects
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
            Five featured projects engineered across cybersecurity, emergency systems, relational analytics, civic dashboards, and knowledge graphs.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* 
          Project Grid:
          Desktop: 3 in first row (cols 1, 2, 3) and 2 in second row (centered or spanned)!
          Tablet: 2 per row.
          Mobile: 1 per row.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Row 1: Projects 1, 2, 3 */}
          {projects.slice(0, 3).map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              renderThumbnail={renderThumbnail} 
              onSelect={() => setSelectedProject(project)}
            />
          ))}

        </div>

        {/* Row 2: Projects 4 & 5 (Desktop 2-card centered layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          {projects.slice(3, 5).map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              renderThumbnail={renderThumbnail} 
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>

      </div>

      {/* Detail / Architecture Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </section>
  );
}

function ProjectCard({ project, renderThumbnail, onSelect }) {
  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-blue-400 transition-all duration-300 overflow-hidden">
      
      {/* Thumbnail Frame */}
      <div className="cursor-pointer" onClick={onSelect}>
        {renderThumbnail(project)}
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Badge & Live Indicator */}
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${project.colorScheme.badgeBg}`}>
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              GITHUB REPO
            </span>
          </div>

          {/* Project Name */}
          <h3 
            onClick={onSelect}
            className="font-heading font-extrabold text-xl text-[#0B1120] group-hover:text-blue-600 transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>{project.name}</span>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          <p className="text-xs font-medium text-slate-500 mt-1 mb-3 line-clamp-1">
            {project.title}
          </p>

          {/* Short Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-mono font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#0B1120] hover:bg-blue-600 shadow-sm transition-all active:scale-95"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
            </a>

            <button
              onClick={onSelect}
              className="px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="View Architecture & Features"
            >
              Details
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${project.colorScheme.badgeBg}`}>
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                VERIFIED ARCHITECTURE
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[#0B1120]">
              {project.name}
            </h3>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              {project.title}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Implemented Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3">
              Implemented Technical Capabilities
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-mono font-medium border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 truncate max-w-xs">
            {project.repoUrl}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Open on GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

