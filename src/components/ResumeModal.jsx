import React from 'react';
import { X, Download, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B1120]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-[#0B1120]">
                Official Resume — Nivash
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                {personalInfo.resume.filename} • B.E. CSE (Cyber Security)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resume.downloadUrl}
              download={personalInfo.resume.filename}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={personalInfo.resume.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <span>New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embedded View Container */}
        <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-hidden min-h-[500px]">
          <iframe
            src={`${personalInfo.resume.viewUrl}#view=FitH`}
            title="Nivash Resume PDF"
            className="w-full h-[76vh] rounded-2xl border border-slate-300 bg-white shadow-sm"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            Official Verified PDF Document
          </span>
          <div className="flex items-center gap-4">
            <span>Rathinam Technical Campus</span>
            <span>Batch 2025–2029</span>
          </div>
        </div>

      </div>
    </div>
  );
}

