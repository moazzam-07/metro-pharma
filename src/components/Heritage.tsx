"use client";

import { Factory, MapPin } from "lucide-react";

export function Heritage() {
  const qaMatrix = [
    {
      test: "Metallurgy Verification",
      criterion: "SS 316 / 316L (EN 1.4404)",
      method: "Positive Material Identification (PMI)",
      document: "Heat Lot Mill Certificate",
    },
    {
      test: "Surface Finish",
      criterion: "Ra < 0.38 µm (Contact)",
      method: "Mitutoyo Surface Profilometer",
      document: "Roughness Calibration Report",
    },
    {
      test: "Welding Integrity",
      criterion: "Sanitary cGMP / ASME BPE",
      method: "Argon Purged TIG Orbital",
      document: "Weld Log & Visual Boroscopy",
    },
    {
      test: "Dynamic Balancing",
      criterion: "ISO 1940 Grade G2.5",
      method: "Digital Vibrometer Analysis",
      document: "Vibration & Acoustic Test Sheet",
    },
    {
      test: "Validation Dossier",
      criterion: "Schedule M & cGMP Guidelines",
      method: "FAT Dry & Water Run Protocols",
      document: "DQ / IQ / OQ Documentation",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28 bg-zinc-50/60" id="heritage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: 20-Year Factory Track Record */}
          <div className="lg:col-span-6">
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
              <div className="border-l-2 border-zinc-300 pl-4">
                <h4 className="font-heading font-semibold text-base text-zinc-900 mb-1">
                  Certified Contact Metallurgy
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  All product contact surfaces are fabricated in certified SS 316 or SS 316L with electropolished mirror finishes (Ra &lt; 0.38 µm) to prevent cross-contamination and ensure effortless CIP validation.
                </p>
              </div>

              <div className="border-l-2 border-zinc-300 pl-4">
                <h4 className="font-heading font-semibold text-base text-zinc-900 mb-1">
                  cGMP &amp; Schedule M Documentation
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Every unit is delivered with a complete validation dossier—including Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), and factory test protocols.
                </p>
              </div>

              <div className="border-l-2 border-zinc-300 pl-4">
                <h4 className="font-heading font-semibold text-base text-zinc-900 mb-1">
                  Rigorous Factory Acceptance Testing (FAT)
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Equipment undergoes dry runs, hydraulic trials for liquid vessels, dynamic motor balancing, and sound-level checks (under 75 dB) before protective packaging and dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Factory QA Matrix Table */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-zinc-200/90 rounded-xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-4">
                <div>
                  <h3 className="text-base font-heading font-semibold text-zinc-900">
                    Shop Floor Quality Verification Matrix
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    Standard testing protocol executed for every fabricated unit
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded">
                  ISO 9001
                </span>
              </div>

              {/* Technical Inspection Table - Touch scrollable on mobile */}
              <div className="overflow-x-auto touch-scroll no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[500px] text-left text-xs border-collapse font-mono">
                  <thead>
                    <tr className="border-b border-zinc-200 text-zinc-400 font-medium">
                      <th className="py-2.5 pr-3">Inspection Parameter</th>
                      <th className="py-2.5 px-3">Standard Criterion</th>
                      <th className="py-2.5 pl-3">Verification Document</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-700">
                    {qaMatrix.map((item, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50/70 transition-colors">
                        <td className="py-3 pr-3 font-medium text-zinc-900 font-sans">
                          {item.test}
                          <span className="block text-[11px] text-zinc-500 font-mono mt-0.5">
                            {item.method}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-zinc-600">
                          {item.criterion}
                        </td>
                        <td className="py-3 pl-3 text-zinc-500 text-[11px]">
                          {item.document}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-4 border-t border-zinc-100 mt-5 flex flex-wrap justify-between items-center text-xs text-zinc-500 gap-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-[#701a75]" />
                  Works: Shivam Industrial Estate
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
