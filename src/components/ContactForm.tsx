"use client";

import { useState } from "react";
import { MACHINES, COMPANY_INFO } from "@/data/machinery";
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";

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
    }, 600);
  };

  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="border border-zinc-200/90 rounded-2xl p-5 sm:p-10 lg:p-14 bg-white shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left Column: Direct Engineering Contact Desk */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-medium text-[#701a75] uppercase tracking-wider mb-2">
                  Direct Factory Engineering Desk
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-heading font-semibold tracking-tight text-zinc-900 leading-tight mb-4">
                  Request Equipment Specs &amp; Quotation
                </h2>
                
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-8">
                  Share your batch capacity, material density, and cleanroom requirements. Our technical sales engineers in Vasai East will respond with GA drawings, motor ratings, and pricing within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 text-[#701a75] flex items-center justify-center shrink-0 border border-zinc-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-medium mb-0.5">
                        Direct Desk &amp; WhatsApp
                      </span>
                      <a
                        href={COMPANY_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-mono font-semibold text-zinc-900 hover:text-[#701a75] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 text-[#701a75] flex items-center justify-center shrink-0 border border-zinc-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-medium mb-0.5">
                        Technical Sales Division
                      </span>
                      <a
                        href={`mailto:${COMPANY_INFO.salesEmail}`}
                        className="text-base font-mono font-semibold text-zinc-900 hover:text-[#701a75] transition-colors"
                      >
                        {COMPANY_INFO.salesEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 text-[#701a75] flex items-center justify-center shrink-0 border border-zinc-200">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-medium mb-0.5">
                        Factory Facility
                      </span>
                      <span className="text-xs text-zinc-600 leading-relaxed block">
                        {COMPANY_INFO.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-100 mt-8 flex items-center gap-2 text-xs font-mono text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-[#701a75] shrink-0" />
                <span>Confidentiality &amp; NDA Protected Inquiries</span>
              </div>
            </div>

            {/* Right Column: High-Tech RFQ Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="text-center py-16 px-6 bg-zinc-50 rounded-xl border border-zinc-200">
                  <div className="w-12 h-12 rounded-full bg-fuchsia-50 text-[#701a75] border border-fuchsia-200 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-zinc-900 mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for contacting Metro Pharma. Our engineering team in Vasai East will review your specifications and provide general arrangement drawings and a formal quotation within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    type="button"
                    className="bg-[#701a75] hover:bg-[#86198f] text-white text-xs font-semibold px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer min-h-[44px] active:scale-[0.98]"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="name">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        enterKeyHint="next"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Rajesh Sharma"
                        className="w-full min-h-[46px] bg-white border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#701a75] focus:ring-1 focus:ring-[#701a75] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="company">
                        Company / Formulation Plant *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        autoComplete="organization"
                        enterKeyHint="next"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Pharma Laboratories"
                        className="w-full min-h-[46px] bg-white border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#701a75] focus:ring-1 focus:ring-[#701a75] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="email">
                        Official Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        enterKeyHint="next"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@apexpharma.com"
                        className="w-full min-h-[46px] bg-white border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#701a75] focus:ring-1 focus:ring-[#701a75] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="phone">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        enterKeyHint="next"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full min-h-[46px] bg-white border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#701a75] focus:ring-1 focus:ring-[#701a75] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="machine">
                      Equipment Model of Interest *
                    </label>
                    <select
                      id="machine"
                      required
                      value={formData.machine}
                      onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-sm text-zinc-900 outline-none focus:border-[#701a75] focus:ring-1 focus:ring-[#701a75] transition-all"
                    >
                      <option value="">Select equipment...</option>
                      {MACHINES.map((m) => (
                        <option key={m.id} value={m.name}>
                          {m.name} ({m.categoryLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="batch">
                      Required Batch Size / Throughput Capacity
                    </label>
                    <input
                      id="batch"
                      type="text"
                      enterKeyHint="next"
                      value={formData.batchSize}
                      onChange={(e) => setFormData({ ...formData, batchSize: e.target.value })}
                      placeholder="e.g. 500 kg/hr or 150 kg per batch"
                      className="w-full min-h-[46px] bg-white border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#701a75] focus:ring-1 focus:ring-[#701a75] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="notes">
                      Specific Process Parameters or Customizations
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      enterKeyHint="done"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Mesh size, flameproof ATEX motor, CIP washdown, containment requirements..."
                      className="w-full bg-white border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#701a75] focus:ring-1 focus:ring-[#701a75] transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full min-h-[48px] py-3.5 text-sm font-semibold bg-[#701a75] hover:bg-[#86198f] text-white rounded-lg shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-50 active:scale-[0.98]"
                  >
                    {loading ? "Transmitting Specification Request..." : "Submit Technical RFQ & Proposal Request"}
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
