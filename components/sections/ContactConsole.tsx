"use client";

import { useState } from "react";
import { MessageSquare, Mail, MapPin, Send, ArrowRight, CheckCircle2, FileText, Globe } from "lucide-react";

export default function ContactConsole() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    category: "SACCO Core Banking",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/254740964423?text=${encodeURIComponent(
    "Hello Dalienst, I visited your portfolio and would like to discuss a systems architecture or software engineering project."
  )}`;

  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-24 border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-corporate-primary">
                <Mail className="w-3.5 h-3.5 text-corporate-primary" />
                Inquiry &amp; Advisory Console
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Let&apos;s Architect Your Next Mission-Critical Platform
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you need an enterprise core banking deployment, carrier-grade WhatsApp messaging, or custom operational workflow automation, I am available for advisory, architectural design, and full-stack execution.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Direct */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-all flex items-center justify-between group shadow-2xs block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Instant WhatsApp Chat
                    </span>
                    <span className="text-sm font-bold text-slate-900">+254 740 964 423</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Direct Email */}
              <a
                href="mailto:oduordalienst@gmail.com"
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-between group shadow-2xs block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Direct Email Inbox
                    </span>
                    <span className="text-sm font-bold text-slate-900">oduordalienst@gmail.com</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Location & Web */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700">
                <MapPin className="w-5 h-5 text-corporate-primary shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 block">Location Base:</span>
                  Mombasa &amp; Nairobi, Kenya (Available for Regional &amp; Remote Engagements)
                </div>
              </div>
            </div>

            {/* Resume Downloads */}
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Specialized Resume Downloads:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="/Documentation/internal-innovation-cv.md"
                  download
                  className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-corporate-primary" />
                  Solutions Architect CV
                </a>
                <a
                  href="/Documentation/executive-tech-cv.md"
                  download
                  className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-corporate-primary" />
                  Executive Technical CV
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Schedule a Systems Consultation
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the project scope below, and I will get back to you within 24 business hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-950">Inquiry Received</h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Thank you, {formData.name || "there"}. Your inquiry regarding {formData.category} has been logged. For immediate feedback, feel free to ping me on WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline mt-2 inline-block cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-slate-700 block">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Mwangi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-slate-700 block">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. david@organization.co.ke"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-slate-700 block">Company / Cooperative</label>
                      <input
                        type="text"
                        placeholder="e.g. Sprout Capital or Independent"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-slate-700 block">Project Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs cursor-pointer"
                      >
                        <option>SACCO Core Banking Engine</option>
                        <option>Meta WhatsApp Telecom Gateway</option>
                        <option>Finance ERP &amp; KRA eTIMS</option>
                        <option>Applied AI &amp; Business Intelligence</option>
                        <option>Custom Systems Architecture</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-700 block">Project Overview &amp; Goals</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe what challenges you're looking to solve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    Submit Systems Inquiry <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
