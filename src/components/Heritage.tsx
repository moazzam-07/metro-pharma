"use client";

import { useState } from "react";
import { 
  Factory, 
  MapPin, 
  ShieldCheck, 
  FileCheck2, 
  Activity, 
  ArrowUpRight,
  Sliders,
  CheckCircle2
} from "lucide-react";

export function Heritage() {
  const [activeTab, setActiveTab] = useState<"qa" | "apparatus">("qa");

  const qaMatrix = [
    {
      test: "Metallurgy Verification",
      criterion: "SS 316 / 316L (EN 1.4404)",
      method: "Positive Material Identification (PMI)",
      document: "Heat Lot Mill Certificate",
      status: "100% Tested",
    },
    {
      test: "Surface Roughness",
      criterion: "Ra < 0.38 µm (Contact)",
      method: "Mitutoyo Surface Profilometer",
      document: "Roughness Calibration Report",
      status: "Mirror Finish",
    },
    {
      test: "Welding Integrity",
      criterion: "Sanitary cGMP / ASME BPE",
      method: "Argon Purged TIG Orbital",
      document: "Weld Log & Visual Boroscopy",
      status: "Zero Crevice",
    },
    {
      test: "Dynamic Balancing",
      criterion: "ISO 1940 Grade G2.5",
      method: "Digital Vibrometer Analysis",
      document: "Vibration & Acoustic Test Sheet",
      status: "< 75 dB Run",
    },
    {
      test: "Validation Dossier",
      criterion: "Schedule M & cGMP Guidelines",
      method: "FAT Dry & Water Run Protocols",
      document: "DQ / IQ / OQ Documentation",
      status: "Turnkey FAT",
    },
  ];

  const apparatusList = [
    {
      test: "Surface Profilometer",
      criterion: "Mitutoyo SJ-210 (0.01 µm)",
      method: "Diamond stylus contact tracing",
      document: "NIST Calibration Certificate",
      status: "Calibrated",
    },
    {
      test: "PMI Alloy Analyzer",
      criterion: "Thermo Scientific Niton XRF",
      method: "Non-destructive spectrometry",
      document: "Spectral Chemistry Log",
      status: "Certified",
    },
    {
      test: "Orbital Boroscope",
      criterion: "Olympus IPLEX G Lite (HD)",
      method: "Internal pipe weld root video",
      document: "Digital Boroscopy Archive",
      status: "Inspected",
    },
    {
      test: "Hydrostatic Pressure Rig",
      criterion: "Up to 10.0 Bar Static Hold",
      method: "2-Hour holding pressure trial",
      document: "Pressure Chart Recording",
      status: "Zero Leak",
    },
    {
      test: "Digital Vibrometer",
      criterion: "Fluke 805 Vibration Meter",
      method: "Bearing & rotational harmonic test",
      document: "ISO Peak Velocity Log",
      status: "Balanced",
    },
  ];

  const activeRows = activeTab === "qa" ? qaMatrix : apparatusList;

  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28 bg-[#ffffff]" id="heritage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Factory Track Record in Mobbin Language */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Stadium Pill Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f3f3f3] text-[#141414] text-xs font-medium mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
                <span>Manufacturing infrastructure · Vasai East</span>
              </div>
              
              {/* Headline with Terminal Period */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#141414] tracking-tight leading-[1.13] mb-4">
                Two decades of precision equipment fabrication.
              </h2>
              
              {/* Airy Subtitle */}
              <p className="text-base sm:text-lg text-[#707070] leading-[1.4] font-normal mb-8 max-w-xl">
                Established in 2005 at Vasai East, Maharashtra, Metro Pharma designs, fabricates, and commissions solid dosage, liquid, and ointment processing machinery for pharmaceutical formulation plants across India.
              </p>

              {/* 3 Pillars - Mobbin Feature Cards with 30% Squircle Icons */}
              <div className="space-y-3.5">
                
                {/* Pillar 01 */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#f3f3f3] border border-[#e0e0e0]/60 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-[14px] bg-[#ffffff] border border-[#e0e0e0] flex items-center justify-center shrink-0 text-[#141414]">
                      <ShieldCheck className="w-5 h-5 text-[#141414]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#141414] mb-1">
                        Certified contact metallurgy.
                      </h4>
                      <p className="text-xs text-[#707070] leading-[1.4] mb-3">
                        All product contact surfaces are fabricated in certified SS 316 or SS 316L with electropolished mirror finishes (Ra &lt; 0.38 µm) to guarantee clean CIP validation.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-[11px] font-medium text-[#141414]">
                          SS 316 / 316L
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-[11px] font-medium text-[#141414]">
                          Ra &lt; 0.38 µm
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-[11px] font-medium text-[#707070]">
                          CIP Cleanable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 02 */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#f3f3f3] border border-[#e0e0e0]/60 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-[14px] bg-[#ffffff] border border-[#e0e0e0] flex items-center justify-center shrink-0 text-[#141414]">
                      <FileCheck2 className="w-5 h-5 text-[#141414]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#141414] mb-1">
                        cGMP &amp; Schedule M documentation.
                      </h4>
                      <p className="text-xs text-[#707070] leading-[1.4] mb-3">
                        Every unit is delivered with a complete validation dossier—including Design Qualification (DQ), Installation (IQ), Operational (OQ), and mill test certificates.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-[11px] font-medium text-[#141414]">
                          DQ · IQ · OQ
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-[11px] font-medium text-[#141414]">
                          FAT Protocols
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-[11px] font-medium text-[#707070]">
                          21 CFR Part 11
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 03 */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#f3f3f3] border border-[#e0e0e0]/60 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-[14px] bg-[#ffffff] border border-[#e0e0e0] flex items-center justify-center shrink-0 text-[#141414]">
                      <Activity className="w-5 h-5 text-[#141414]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#141414] mb-1">
                        Rigorous factory acceptance testing.
                      </h4>
                      <p className="text-xs text-[#707070] leading-[1.4] mb-3">
                        Equipment undergoes dry runs, hydraulic pressure trials, dynamic rotor balancing, and sound-level checks under 75 dB before dispatch.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-[11px] font-medium text-[#141414]">
                          Hydraulic Trials
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-[11px] font-medium text-[#141414]">
                          Sound &lt; 75 dB
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#e0e0e0] text-[11px] font-medium text-[#707070]">
                          Full FAT Run
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Mobbin-Style Quality Verification Matrix */}
          <div className="lg:col-span-7">
            <div className="bg-[#ffffff] border border-[#e0e0e0] rounded-[24px] p-6 sm:p-8 shadow-none">
              
              {/* Header Bar */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#f0f0f0]">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#141414] tracking-tight">
                    Shop floor quality verification matrix.
                  </h3>
                  <p className="text-xs text-[#707070] mt-1">
                    Standard testing protocol executed for every fabricated unit.
                  </p>
                </div>
                
                {/* Mobbin Stadium Pill Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f3f3] border border-[#e0e0e0] text-[#141414] text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#141414]" />
                  <span>ISO 9001:2015</span>
                </span>
              </div>

              {/* Mobbin Segmented Control Pill Toggle */}
              <div className="my-5 flex items-center justify-between flex-wrap gap-3">
                <div className="p-1 rounded-full bg-[#f3f3f3] inline-flex gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("qa")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      activeTab === "qa"
                        ? "bg-[#ffffff] text-[#141414] shadow-xs"
                        : "text-[#707070] hover:text-[#141414]"
                    }`}
                  >
                    Inspection Matrix
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("apparatus")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      activeTab === "apparatus"
                        ? "bg-[#ffffff] text-[#141414] shadow-xs"
                        : "text-[#707070] hover:text-[#141414]"
                    }`}
                  >
                    Testing Apparatus
                  </button>
                </div>

                <div className="text-[11px] font-mono text-[#adadad] hidden sm:block">
                  Vasai Works · Shop Floor Protocol
                </div>
              </div>

              {/* Mobile-Friendly Cards View (sm:hidden) */}
              <div className="sm:hidden space-y-2.5">
                {activeRows.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#f8f8f9] border border-[#e4e4e7]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-[#141414] text-xs">
                        {item.test}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#141414] bg-white px-2 py-0.5 rounded-full border border-[#e0e0e0]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {item.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#707070] mb-2 leading-tight">
                      {item.method}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#e8e8ea] text-[10.5px]">
                      <span className="font-mono text-[#141414] font-medium bg-white px-2 py-0.5 rounded border border-[#e0e0e0]">
                        {item.criterion}
                      </span>
                      <span className="font-mono text-[#707070] text-[10px]">
                        {item.document}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Inspection Table for Tablet/Desktop (hidden sm:block) */}
              <div className="hidden sm:block overflow-x-auto touch-scroll no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[520px] text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#e0e0e0] text-[#707070] text-[11px] font-medium">
                      <th className="py-2.5 pr-4">
                        {activeTab === "qa" ? "Inspection parameter" : "Test instrument"}
                      </th>
                      <th className="py-2.5 px-3">Standard criterion</th>
                      <th className="py-2.5 px-3">Verification document</th>
                      <th className="py-2.5 pl-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f0f0f0]">
                    {activeRows.map((item, idx) => (
                      <tr 
                        key={idx} 
                        className="hover:bg-[#f3f3f3]/60 transition-colors"
                      >
                        <td className="py-3.5 pr-4">
                          <span className="block font-semibold text-[#141414] text-xs sm:text-[13px]">
                            {item.test}
                          </span>
                          <span className="block text-[11px] text-[#707070] mt-0.5">
                            {item.method}
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="inline-block px-2.5 py-1 rounded-full bg-[#f3f3f3] text-[#141414] text-xs font-mono font-medium">
                            {item.criterion}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-[#707070] text-[11px] font-mono">
                          {item.document}
                        </td>
                        <td className="py-3.5 pl-3 text-right">
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#141414]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bottom Metadata & Primary Action Pill */}
              <div className="pt-5 border-t border-[#f0f0f0] mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f3f3] text-[#141414] text-xs font-medium">
                    <Factory className="w-3.5 h-3.5 text-[#141414]" />
                    <span>Works: Shivam Industrial Estate</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f3f3] text-[#707070] text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#707070]" />
                    <span>Vasai East, Palghar · 401208</span>
                  </div>
                </div>

                {/* Mobbin button-primary stadium CTA pill */}
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#141414] hover:bg-[#262626] text-white text-xs font-medium transition-colors cursor-pointer active:scale-[0.98] shrink-0"
                >
                  <span>Request FAT Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

