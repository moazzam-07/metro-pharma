"use client";

import { Factory, MapPin, CheckCircle2, ShieldCheck, Ruler, Wrench } from "lucide-react";

export function Heritage() {
  return (
    <section className="py-20 sm:py-24 relative scroll-mt-28" id="heritage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 20-Year Factory Track Record */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-50 border border-fuchsia-200/90 text-xs font-bold text-[#990099] mb-4">
              <Factory className="w-3.5 h-3.5" />
              <span>MANUFACTURING FACILITY · VASAI EAST</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] leading-tight mb-5">
              20 Years of Pharmaceutical Machine Fabrication
            </h2>
            
            <p className="text-base text-slate-700 leading-relaxed mb-8 font-normal">
              Established in 2005 at Vasai East, Maharashtra, Metro Pharma specializes in the design, fabrication, and commissioning of solid dosage, liquid, and ointment processing equipment. We serve pharmaceutical formulation plants, chemical manufacturers, and contract packagers across India.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <span className="w-9 h-9 rounded-lg bg-fuchsia-50 text-[#990099] font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-fuchsia-200">
                  01
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#090d16] mb-1">
                    Certified Contact Metallurgy
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    All product contact surfaces are fabricated in certified SS 316 or SS 316L with electropolished mirror finishes (Ra &lt; 0.38 µm) to prevent batch cross-contamination.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-9 h-9 rounded-lg bg-fuchsia-50 text-[#990099] font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-fuchsia-200">
                  02
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#090d16] mb-1">
                    cGMP &amp; Schedule M Documentation
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Every unit is delivered with a complete validation dossier—including Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) support.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-9 h-9 rounded-lg bg-fuchsia-50 text-[#990099] font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-fuchsia-200">
                  03
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#090d16] mb-1">
                    Complete Factory Acceptance Testing (FAT)
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Machines undergo mechanical dry runs, water trials for liquid plants, dynamic motor balancing, and sound-level checks (under 75 dB) before packaging and dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factory Capabilities & Inspection Standards */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 shadow-sm relative">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#990099]">
                <ShieldCheck className="w-4 h-4" />
                <span>Shop Floor &amp; Testing Specifications</span>
              </div>

              <h3 className="text-xl font-heading font-bold text-[#090d16] mb-4">
                Quality Verification on Every Machine
              </h3>

              <div className="space-y-3.5 mb-6 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#990099] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Positive Material Identification (PMI)</strong>
                    Mill test certificates provided for every stainless steel heat lot.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Ruler className="w-4 h-4 text-[#990099] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Surface Roughness Verification</strong>
                    Mitutoyo calibrated surface profilometer measurement (Ra &lt; 0.38 µm).
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Wrench className="w-4 h-4 text-[#990099] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">In-House Machining &amp; TIG Welding</strong>
                    Orbital welding and dynamic balancing of eccentric weights on sifter motors.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center text-xs text-slate-600 gap-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-[#990099]" />
                  Shivam Industrial Estate
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#990099]" />
                  Vasai East, Palghar - 401208
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
