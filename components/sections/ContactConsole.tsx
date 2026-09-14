"use client";

import { useState } from "react";
import { Building2, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck, Loader2 } from "lucide-react";

export default function ContactConsole() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    category: "SACCO Core Banking Engine",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err?.message || "An error occurred while submitting. Please try again.");
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-24 border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Executive Credentials & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-corporate-primary">
                <Building2 className="w-3.5 h-3.5 text-corporate-primary" />
                Executive Advisory &amp; Architecture Inquiries
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Architecting Your Next Enterprise Cloud Platform
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Available for high-stakes technical advisory, core banking system architecture, telecom messaging infrastructure, and bespoke enterprise cloud platforms across East Africa.
              </p>
            </div>

            {/* Corporate Profile Cards (No Personal Contacts Displayed) */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px] text-corporate-primary block">
                  Operating Corporate Entity
                </span>
                <p className="text-sm font-bold text-slate-900">
                  Corban Technologies LTD
                </p>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Enterprise Software, Cloud Infrastructure &amp; Telecom Solutions
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.corbantechnologies.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-corporate-primary hover:text-orange-600 transition-colors"
                  >
                    www.corbantechnologies.org <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700">
                <MapPin className="w-5 h-5 text-corporate-primary shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 block">Regional Headquarters:</span>
                  Mombasa &amp; Nairobi, Kenya (Available for Regional &amp; International Projects)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 block">Governance &amp; SLA:</span>
                  100% Dedicated Cloud Infrastructure, Non-Disclosure &amp; Enterprise SLAs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Resend-Powered Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Schedule an Executive Consultation
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Submissions are routed directly to my personal executive inbox via verified domain dispatch (dalienst.co.ke).
                </p>
              </div>

              {status === "success" ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-950">Inquiry Transmitted Successfully</h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Your consultation scope regarding <span className="font-semibold">{formData.category}</span> has been dispatched to Dalienst Owino Oduor. You will receive a response within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        category: "SACCO Core Banking Engine",
                        message: "",
                      });
                    }}
                    className="text-xs font-bold text-emerald-800 underline mt-3 inline-block cursor-pointer hover:text-emerald-950"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-red-700 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-slate-700 block">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mutua"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-slate-700 block">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@enterprise.co.ke"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-slate-700 block">Company / Financial Institution</label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Holdings or Cooperative Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-slate-700 block">Area of Architecture &amp; Engagement</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs cursor-pointer"
                      >
                        <option>SACCO Core Banking Engine</option>
                        <option>Meta WhatsApp Telecom Gateway</option>
                        <option>Finance ERP &amp; KRA eTIMS</option>
                        <option>Applied AI &amp; Operational BI</option>
                        <option>High-Throughput Mobile Commerce</option>
                        <option>Enterprise Systems Architecture Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-700 block">Project Scope &amp; Requirements *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Detail the technical or business challenges your organization is looking to solve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary transition-all text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry via Resend...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Executive Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
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
