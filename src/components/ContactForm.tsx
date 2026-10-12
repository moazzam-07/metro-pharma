"use client";

import { useState } from "react";
import { MACHINES, COMPANY_INFO } from "@/data/machinery";
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from "lucide-react";

interface ContactFormProps {
  preselectedMachine?: string;
}

export function ContactForm({ preselectedMachine }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    machine: preselectedMachine || "",
    batchSize: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Engineering Contact Desk */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200/80 dark:border-teal-800 text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] mb-4">
                  <Send className="w-3.5 h-3.5" />
                  TECHNICAL RFQ &amp; PROPOSALS
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-[#090d16] dark:text-white leading-tight mb-4">
                  Request Detailed Engineering Specs &amp; Quotation
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-normal">
                  Our machine design specialists evaluate your formulation bulk density, sieve mesh parameters, flameproof ATEX zones, and batch throughput to recommend the exact equipment configuration.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#14b8a6] flex items-center justify-center shrink-0 border border-teal-200/80 dark:border-teal-800 group-hover:bg-[#0f766e] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                        Direct Desk &amp; WhatsApp
                      </span>
                      <a
                        href={COMPANY_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-[#090d16] dark:text-white hover:text-[#0f766e] dark:hover:text-[#14b8a6] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#14b8a6] flex items-center justify-center shrink-0 border border-teal-200/80 dark:border-teal-800 group-hover:bg-[#0f766e] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                        Technical Sales Division
                      </span>
                      <a
                        href={`mailto:${COMPANY_INFO.salesEmail}`}
                        className="text-base font-bold text-[#090d16] dark:text-white hover:text-[#0f766e] dark:hover:text-[#14b8a6] transition-colors"
                      >
                        {COMPANY_INFO.salesEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#14b8a6] flex items-center justify-center shrink-0 border border-teal-200/80 dark:border-teal-800 group-hover:bg-[#0f766e] group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                        Factory Facility
                      </span>
                      <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed block font-medium">
                        {COMPANY_INFO.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800 mt-8 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA &amp; Confidentiality Protected Specification Inquiries</span>
              </div>
            </div>

            {/* Right Column: High-Tech RFQ Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="text-center py-16 px-6 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-600/25">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-[#090d16] dark:text-white mb-2">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for contacting Metro Pharma. Our machine engineering division will prepare a comprehensive technical parameter sheet and quote within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    type="button"
                    className="bg-[#090d16] hover:bg-[#0f766e] text-white text-xs font-semibold px-6 py-3 rounded-full transition-all cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5" htmlFor="name">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#0f766e] focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5" htmlFor="company">
                        Company / Formulation Plant *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Pharma Laboratories"
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#0f766e] focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5" htmlFor="email">
                        Official Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@apexpharma.com"
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#0f766e] focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5" htmlFor="phone">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#0f766e] focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5" htmlFor="machine">
                      Equipment Line of Interest *
                    </label>
                    <select
                      id="machine"
                      required
                      value={formData.machine}
                      onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#0f766e] focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition-all shadow-xs"
                    >
                      <option value="">Select equipment model...</option>
                      {MACHINES.map((m) => (
                        <option key={m.id} value={m.name}>
                          {m.name} ({m.categoryLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5" htmlFor="batch">
                      Required Batch Size / Throughput Capacity
                    </label>
                    <input
                      id="batch"
                      type="text"
                      value={formData.batchSize}
                      onChange={(e) => setFormData({ ...formData, batchSize: e.target.value })}
                      placeholder="e.g. 500 kg/hr or 150 kg per batch"
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#0f766e] focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5" htmlFor="notes">
                      Specific Process Parameters or Customizations
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Describe target particle mesh size, flameproof ATEX requirements, CIP washdown, or containment level..."
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-[#0f766e] focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all resize-y shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-sm font-bold bg-[#090d16] hover:bg-[#0f766e] text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-98"
                  >
                    {loading ? "Transmitting Specification Request..." : "Submit Technical RFQ & Proposal Request →"}
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
