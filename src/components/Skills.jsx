import React, { useState } from 'react';
import { 
  Code2, 
  ShieldCheck, 
  Globe, 
  Wrench, 
  Sparkles,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons = {
    programming: Code2,
    cybersecurity: ShieldCheck,
    'web-development': Globe,
    'tools-platforms': Wrench
  };

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-slate-50 cyber-grid relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Technical Capabilities & Tools</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1120] tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of programming languages, cybersecurity competencies, web frameworks, and engineering tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-glow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>

          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-glow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            return (
              <div 
                key={cat.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#0B1120]">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skill Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex flex-col items-center text-center p-3.5 rounded-2xl bg-slate-50/70 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 transition-all duration-200 hover:-translate-y-1"
                    >
                      {/* Skill Icon */}
                      <div className="w-12 h-12 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-200">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 object-contain drop-shadow-sm"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to stylized letter icon if skillicon fails
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm">${skill.name.charAt(0)}</div>`;
                          }}
                        />
                      </div>

                      {/* Skill Name */}
                      <span className="font-heading font-semibold text-xs text-[#0B1120] leading-tight group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </span>

                      {/* Sub-tag */}
                      <span className="text-[10px] text-slate-400 font-mono mt-1">
                        {skill.category}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

