"use client";

import { Factory, MapPin, CheckCircle2, ShieldCheck, Ruler, Wrench } from "lucide-react";

export function Heritage() {
  return (
    <section className="py-20 sm:py-24 relative scroll-mt-28" id="heritage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 20-Year Factory Track Record */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#fef08a] border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black mb-4">
              <Factory className="w-3.5 h-3.5 text-black" />
              <span>MANUFACTURING FACILITY · VASAI EAST</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-black leading-tight mb-5">
              20 Years of Pharmaceutical Machine Fabrication
            </h2>
            
            <p className="text-base text-zinc-800 leading-relaxed mb-8 font-medium">
              Established in 2005 at Vasai East, Maharashtra, Metro Pharma specializes in the design, fabrication, and commissioning of solid dosage, liquid, and ointment processing equipment. We serve pharmaceutical formulation plants, chemical manufacturers, and contract packagers across India.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <span className="w-9 h-9 rounded-lg bg-[#fef08a] text-black font-mono font-black text-sm flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0px_#000]">
                  01
                </span>
                <div>
                  <h4 className="font-heading font-black text-base text-black mb-1">
                    Certified Contact Metallurgy
                  </h4>
                  <p className="text-sm text-zinc-700 leading-relaxed font-medium">
                    All product contact surfaces are fabricated in certified SS 316 or SS 316L with electropolished mirror finishes (Ra &lt; 0.38 µm) to prevent batch cross-contamination.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-9 h-9 rounded-lg bg-[#fef08a] text-black font-mono font-black text-sm flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0px_#000]">
                  02
                </span>
                <div>
                  <h4 className="font-heading font-black text-base text-black mb-1">
                    cGMP &amp; Schedule M Documentation
                  </h4>
                  <p className="text-sm text-zinc-700 leading-relaxed font-medium">
                    Every unit is delivered with a complete validation dossier—including Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) support.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-9 h-9 rounded-lg bg-[#fef08a] text-black font-mono font-black text-sm flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0px_#000]">
                  03
                </span>
                <div>
                  <h4 className="font-heading font-black text-base text-black mb-1">
                    Complete Factory Acceptance Testing (FAT)
                  </h4>
                  <p className="text-sm text-zinc-700 leading-relaxed font-medium">
                    Machines undergo mechanical dry runs, water trials for liquid plants, dynamic motor balancing, and sound-level checks (under 75 dB) before packaging and dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factory Capabilities & Inspection Standards */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-black rounded-xl p-7 sm:p-9 shadow-[6px_6px_0px_#000] relative">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-black">
                <ShieldCheck className="w-4 h-4 text-[#990099]" />
                <span>Shop Floor &amp; Testing Specifications</span>
              </div>

              <h3 className="text-xl font-heading font-black text-black mb-4">
                Quality Verification on Every Machine
              </h3>

              <div className="space-y-3.5 mb-6 text-xs sm:text-sm text-zinc-800">
                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#f4f4f5] border-2 border-black shadow-[2px_2px_0px_#000]">
                  <CheckCircle2 className="w-4 h-4 text-[#990099] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-black block font-black">Positive Material Identification (PMI)</strong>
                    Mill test certificates provided for every stainless steel heat lot.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#f4f4f5] border-2 border-black shadow-[2px_2px_0px_#000]">
                  <Ruler className="w-4 h-4 text-[#990099] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-black block font-black">Surface Roughness Verification</strong>
                    Mitutoyo calibrated surface profilometer measurement (Ra &lt; 0.38 µm).
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#f4f4f5] border-2 border-black shadow-[2px_2px_0px_#000]">
                  <Wrench className="w-4 h-4 text-[#990099] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-black block font-black">In-House Machining &amp; TIG Welding</strong>
                    Orbital welding and dynamic balancing of eccentric weights on sifter motors.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black flex flex-wrap justify-between items-center text-xs text-black gap-2 font-mono font-bold">
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
