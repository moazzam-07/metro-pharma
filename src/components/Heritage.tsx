"use client";

import { Factory, MapPin, CheckCircle2, ShieldCheck, Ruler, Wrench } from "lucide-react";

export function Heritage() {
  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28 bg-zinc-50/60" id="heritage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 20-Year Factory Track Record */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono font-medium text-[#701a75] uppercase tracking-wider mb-2">
              Manufacturing Infrastructure · Vasai East
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-zinc-900 leading-tight mb-5">
              Two Decades of Precision Equipment Fabrication
            </h2>
            
            <p className="text-base text-zinc-600 leading-relaxed mb-8">
              Established in 2005 at Vasai East, Maharashtra, Metro Pharma designs, fabricates, and commissions solid dosage, liquid, and ointment processing machinery. We partner with pharmaceutical formulation plants, API developers, and contract packagers across India.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="w-7 h-7 rounded-md bg-zinc-100 text-zinc-800 font-mono font-medium text-xs flex items-center justify-center shrink-0 border border-zinc-200">
                  01
                </span>
                <div>
                  <h4 className="font-heading font-semibold text-base text-zinc-900 mb-1">
                    Certified Contact Metallurgy
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    All product contact surfaces are fabricated in certified SS 316 or SS 316L with electropolished mirror finishes (Ra &lt; 0.38 µm) to prevent cross-contamination and ensure effortless CIP validation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-7 h-7 rounded-md bg-zinc-100 text-zinc-800 font-mono font-medium text-xs flex items-center justify-center shrink-0 border border-zinc-200">
                  02
                </span>
                <div>
                  <h4 className="font-heading font-semibold text-base text-zinc-900 mb-1">
                    cGMP &amp; Schedule M Documentation
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Every unit is delivered with a complete validation dossier—including Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), and factory test protocols.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-7 h-7 rounded-md bg-zinc-100 text-zinc-800 font-mono font-medium text-xs flex items-center justify-center shrink-0 border border-zinc-200">
                  03
                </span>
                <div>
                  <h4 className="font-heading font-semibold text-base text-zinc-900 mb-1">
                    Rigorous Factory Acceptance Testing (FAT)
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Equipment undergoes dry runs, hydraulic trials for liquid vessels, dynamic motor balancing, and sound-level checks (under 75 dB) before protective packaging and dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factory Capabilities & Inspection Standards */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-zinc-200/90 rounded-2xl p-7 sm:p-8 shadow-xs relative">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-medium uppercase tracking-wider text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-[#701a75]" />
                <span>Shop Floor Inspection Standards</span>
              </div>

              <h3 className="text-xl font-heading font-semibold text-zinc-900 mb-5">
                Quality Verification on Every Machine
              </h3>

              <div className="space-y-3 mb-6 text-xs sm:text-sm text-zinc-600">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#701a75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-900 block font-semibold text-sm">Positive Material Identification (PMI)</strong>
                    Mill test certificates provided for every stainless steel heat lot.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/60">
                  <Ruler className="w-4 h-4 text-[#701a75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-900 block font-semibold text-sm">Surface Roughness Verification</strong>
                    Calibrated surface profilometer measurement documenting Ra &lt; 0.38 µm.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/60">
                  <Wrench className="w-4 h-4 text-[#701a75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-900 block font-semibold text-sm">TIG Welding &amp; Dynamic Balancing</strong>
                    Purged sanitary orbital welding and vibration-tested motor drives.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex flex-wrap justify-between items-center text-xs text-zinc-500 gap-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-[#701a75]" />
                  Shivam Industrial Estate
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#701a75]" />
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
