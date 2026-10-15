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
        <div className="bg-white border-2 border-black rounded-xl p-8 sm:p-12 lg:p-14 shadow-[8px_8px_0px_#000] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Engineering Contact Desk */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#fef08a] border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black mb-4">
                  <Send className="w-3.5 h-3.5 text-black" />
                  <span>DIRECT FACTORY INQUIRY</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-black leading-tight mb-4">
                  Request Equipment Specifications &amp; Quotation
                </h2>
                
                <p className="text-sm sm:text-base text-zinc-800 leading-relaxed mb-8 font-medium">
                  Share your required batch capacity, material bulk density, and cleanroom requirements. Our technical team in Vasai East will respond with GA drawings, motor ratings, and pricing within 24 hours.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-lg bg-[#fef08a] text-black flex items-center justify-center shrink-0 border-2 border-black shadow-[1.5px_1.5px_0px_#000]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 font-bold mb-0.5">
                        Direct Desk &amp; WhatsApp
                      </span>
                      <a
                        href={COMPANY_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-mono font-bold text-black hover:text-[#990099] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-lg bg-[#fef08a] text-black flex items-center justify-center shrink-0 border-2 border-black shadow-[1.5px_1.5px_0px_#000]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 font-bold mb-0.5">
                        Technical Sales Division
                      </span>
                      <a
                        href={`mailto:${COMPANY_INFO.salesEmail}`}
                        className="text-base font-mono font-bold text-black hover:text-[#990099] transition-colors"
                      >
                        {COMPANY_INFO.salesEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-lg bg-[#fef08a] text-black flex items-center justify-center shrink-0 border-2 border-black shadow-[1.5px_1.5px_0px_#000]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 font-bold mb-0.5">
                        Factory Facility
                      </span>
                      <span className="text-xs text-zinc-700 leading-relaxed block font-medium">
                        {COMPANY_INFO.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t-2 border-black mt-8 flex items-center gap-2 text-xs font-mono text-black font-bold">
                <ShieldCheck className="w-4 h-4 text-[#990099] shrink-0" />
                <span>NDA &amp; Confidentiality Protected Inquiries</span>
              </div>
            </div>

            {/* Right Column: High-Tech RFQ Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="text-center py-16 px-6 bg-[#f4f4f5] rounded-xl border-2 border-black shadow-[4px_4px_0px_#000]">
                  <div className="w-14 h-14 rounded-lg bg-[#fef08a] text-black border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-[#990099]" />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-black mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-zinc-700 max-w-md mx-auto mb-6 leading-relaxed font-medium">
                    Thank you for contacting Metro Pharma. Our engineering team in Vasai East will review your specifications and send general arrangement drawings and a formal quotation within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    type="button"
                    className="bg-[#990099] hover:bg-[#800080] text-white text-xs font-bold px-6 py-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] transition-all cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5" htmlFor="name">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full bg-[#f4f4f5] border-2 border-black rounded-lg px-4 py-3 text-sm text-black placeholder:text-zinc-500 font-medium outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5" htmlFor="company">
                        Company / Formulation Plant *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Pharma Laboratories"
                        className="w-full bg-[#f4f4f5] border-2 border-black rounded-lg px-4 py-3 text-sm text-black placeholder:text-zinc-500 font-medium outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5" htmlFor="email">
                        Official Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@apexpharma.com"
                        className="w-full bg-[#f4f4f5] border-2 border-black rounded-lg px-4 py-3 text-sm text-black placeholder:text-zinc-500 font-medium outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5" htmlFor="phone">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#f4f4f5] border-2 border-black rounded-lg px-4 py-3 text-sm text-black placeholder:text-zinc-500 font-medium outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5" htmlFor="machine">
                      Equipment Line of Interest *
                    </label>
                    <select
                      id="machine"
                      required
                      value={formData.machine}
                      onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                      className="w-full bg-[#f4f4f5] border-2 border-black rounded-lg px-4 py-3 text-sm text-black font-medium outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000] transition-all"
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
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5" htmlFor="batch">
                      Required Batch Size / Throughput Capacity
                    </label>
                    <input
                      id="batch"
                      type="text"
                      value={formData.batchSize}
                      onChange={(e) => setFormData({ ...formData, batchSize: e.target.value })}
                      placeholder="e.g. 500 kg/hr or 150 kg per batch"
                      className="w-full bg-[#f4f4f5] border-2 border-black rounded-lg px-4 py-3 text-sm text-black placeholder:text-zinc-500 font-medium outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5" htmlFor="notes">
                      Specific Process Parameters or Customizations
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Describe target particle mesh size, flameproof ATEX requirements, CIP washdown, or containment level..."
                      className="w-full bg-[#f4f4f5] border-2 border-black rounded-lg px-4 py-3 text-sm text-black placeholder:text-zinc-500 font-medium outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000] transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-sm font-black bg-[#990099] hover:bg-[#800080] text-white rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
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
