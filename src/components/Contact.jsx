import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Instagram, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Download, 
  ExternalLink,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      // Connect to genuine email dispatch endpoint using formspree / web3forms
      // We send to https://api.web3forms.com/submit with access key or formspree
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5665f80e-436f-4318-86d1-42cbbaeb6f35', // Public Web3Forms contact routing key
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Inquiry: ${formData.subject}`,
          message: formData.message,
          to_email: personalInfo.email,
          from_name: 'Nivash Portfolio Visitor'
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. Nivash will review and respond shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger celebration confetti!
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (_) {}
      } else {
        // Fallback gracefully to email client with pre-filled content
        triggerMailtoFallback();
      }
    } catch (err) {
      console.warn('Direct transmission failed, redirecting to local mail client:', err);
      triggerMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoUri = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUri;
    setSubmitStatus('success');
    setStatusMessage('Opening your default mail client with your inquiry pre-filled to nivashnivash868@gmail.com.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 cyber-grid relative overflow-hidden">
      
      {/* Background Blurs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Communication & Opportunities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1120] tracking-tight">
            Let's Connect & Build Something Great.
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
            {personalInfo.contactIntro}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Details & Resume CTA */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-card">
              <h3 className="font-heading font-bold text-xl text-[#0B1120] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">Email Address</span>
                    <p className="text-sm font-semibold text-[#0B1120] group-hover:text-blue-600 transition-colors truncate">
                      {personalInfo.email}
                    </p>
                    <span className="text-[11px] text-blue-600 font-medium">Click to compose mail &rarr;</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">Phone Number</span>
                    <p className="text-sm font-semibold text-[#0B1120] group-hover:text-emerald-600 transition-colors">
                      {personalInfo.phoneFormatted}
                    </p>
                    <span className="text-[11px] text-emerald-600 font-medium">Click to call &rarr;</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={personalInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-100 hover:border-emerald-200 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">WhatsApp Chat</span>
                    <p className="text-sm font-semibold text-[#0B1120] group-hover:text-emerald-600 transition-colors">
                      +91 75503 19164
                    </p>
                    <span className="text-[11px] text-emerald-600 font-medium">Instant messaging &rarr;</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">Location</span>
                    <p className="text-sm font-semibold text-[#0B1120]">
                      {personalInfo.location}
                    </p>
                    <span className="text-[11px] text-slate-500">Tamil Nadu, India</span>
                  </div>
                </div>

              </div>

              {/* Social Profiles Grid */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-3">
                  Verified Social Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 transition-all text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-all text-xs font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200 transition-all text-xs font-semibold"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Official Resume Section Card */}
            <div className="bg-gradient-to-br from-[#0B1120] to-slate-900 rounded-3xl p-6 sm:p-7 text-white border border-blue-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Official Document
                </span>
                <span className="text-[11px] font-mono text-slate-400">PDF FORMAT</span>
              </div>

              <h4 className="font-heading font-bold text-lg text-white mb-1">
                Official Resume with Photo
              </h4>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Download or view my authentic resume including comprehensive academic records, hackathons, and technical projects.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.resume.downloadUrl}
                  download={personalInfo.resume.filename}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation & Genuine Submission */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-card">
              
              <div className="mb-8">
                <h3 className="font-heading font-extrabold text-2xl text-[#0B1120]">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Fill in the details below to initiate discussions for technical projects, hackathons, or internships.
                </p>
              </div>

              {/* Status Alert Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>{statusMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p>{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Full Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase font-mono">
                      Full Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name 
                          ? 'border-red-300 bg-red-50/30 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase font-mono">
                      Email Address <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@domain.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email 
                          ? 'border-red-300 bg-red-50/30 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase font-mono">
                    Subject / Topic <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Hackathon Collaboration / Project Discussion"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.subject 
                        ? 'border-red-300 bg-red-50/30 focus:ring-red-200' 
                        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100 bg-slate-50/50 focus:bg-white'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase font-mono">
                    Message Content <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 resize-none ${
                      errors.message 
                        ? 'border-red-300 bg-red-50/30 focus:ring-red-200' 
                        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100 bg-slate-50/50 focus:bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-glow-sm hover:shadow-glow-md transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 font-mono mt-3">
                  Responses are sent directly to your registered email address.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

