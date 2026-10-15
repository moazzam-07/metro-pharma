"use client";

import Image from "next/image";
import { 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight
} from "lucide-react";

interface HeroProps {
  onSelectMachine: (id: string) => void;
}

export function Hero({ onSelectMachine }: HeroProps) {
  return (
    <section className="relative min-h-[88vh] flex items-center pt-32 sm:pt-40 pb-20 sm:pb-24 w-full overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40">
      {/* Subtle Cleanroom Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authoritative Engineering Copy */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl text-left">
            
            {/* Manufacturing Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0f766e]"></span>
              <span>cGMP &amp; Schedule M Compliant</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#0f766e] font-bold">Est. 2005 · Vasai, Mumbai</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-heading font-extrabold text-[#090d16] tracking-tight leading-[1.08] mb-6">
              Pharmaceutical &amp; Chemical Process Machinery
            </h1>

            {/* Factual Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-8 font-normal">
              Metro Pharma manufactures Vibro Sifters, Fluid Bed Dryers, Auto Coaters, and Rapid Mixer Granulators in certified SS 316L (Ra &lt; 0.38 µm). Built at our Vasai East facility with complete DQ, IQ, OQ, and PQ validation dossiers for regulatory cleanrooms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("machinery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#090d16] hover:bg-[#0f766e] text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95"
              >
                <span>View Machinery Catalog</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 shadow-2xs hover:shadow-xs text-sm font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#0f766e]" />
                <span>Request Technical RFQ</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("granulation")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#0f766e] transition-colors px-3 py-2 cursor-pointer"
              >
                <span>Granulation Flow</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Validation Metrics Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/90 w-full text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0f766e] shrink-0" />
                <span>SS 316L (Ra &lt; 0.38 µm) Contact</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0f766e] shrink-0" />
                <span>100% Factory Acceptance Testing (FAT)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0f766e] shrink-0" />
                <span>DQ / IQ / OQ / PQ Documented</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Equipment Showcase Triad */}
          <div className="lg:col-span-5 relative h-[450px] sm:h-[500px] w-full">
            
            {/* Primary Featured Machine: Vibro Sifter (Flagship) */}
            <div
              onClick={() => onSelectMachine("vibro-sifter")}
              className="absolute left-1/2 top-2 -translate-x-1/2 w-[250px] sm:w-[290px] h-[240px] sm:h-[260px] bg-white border border-slate-200 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-teal-400/80 transition-all duration-200 cursor-pointer group z-20"
              title="Click to view Vibro Sifter specifications"
            >
              <div className="w-full h-full bg-slate-50/90 rounded-xl p-3 flex flex-col justify-between border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md text-[#0f766e]">
                    Flagship Sifter
                  </span>
                  <span className="text-xs text-slate-600 font-bold">
                    12″ to 72″
                  </span>
                </div>

                <div className="relative w-full h-[140px] my-auto">
                  <Image
                    src="/assets/machines/vibro-sifter.png"
                    alt="Vibro Sifter"
                    fill
                    sizes="290px"
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">
                      Vibro Sifter / Classifier
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Screening up to 500 Mesh
                    </p>
                  </div>
                  <span className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-800 group-hover:bg-[#0f766e] group-hover:text-white group-hover:border-[#0f766e] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Machine: Metro Auto-Coater */}
            <div
              onClick={() => onSelectMachine("auto-coater")}
              className="absolute right-0 top-[44%] w-[210px] sm:w-[240px] h-[200px] sm:h-[220px] bg-white border border-slate-200 rounded-2xl p-3.5 shadow-lg hover:shadow-xl hover:border-teal-400/80 transition-all duration-200 cursor-pointer group z-25"
              title="Click to view Metro Coater specifications"
            >
              <div className="w-full h-full bg-slate-50/90 rounded-xl p-3 flex flex-col justify-between border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200/80 px-2 py-0.5 rounded-md text-slate-800">
                    Auto Coater
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold">
                    24″ to 66″
                  </span>
                </div>

                <div className="relative w-full h-[110px] my-auto">
                  <Image
                    src="/assets/machines/auto-coater.png"
                    alt="Auto Coater"
                    fill
                    sizes="240px"
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">
                      Metro Auto-Coater
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Perforated Pan
                    </p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0f766e]" />
                </div>
              </div>
            </div>

            {/* Tertiary Machine: Fluid Bed Dryer */}
            <div
              onClick={() => onSelectMachine("fluid-bed-dryer")}
              className="absolute left-0 bottom-2 w-[200px] sm:w-[230px] h-[190px] sm:h-[210px] bg-white border border-slate-200 rounded-2xl p-3.5 shadow-lg hover:shadow-xl hover:border-teal-400/80 transition-all duration-200 cursor-pointer group z-15"
              title="Click to view Fluid Bed Dryer specifications"
            >
              <div className="w-full h-full bg-slate-50/90 rounded-xl p-3 flex flex-col justify-between border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200/80 px-2 py-0.5 rounded-md text-slate-800">
                    Drying Line
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold">
                    30 to 500 Kg
                  </span>
                </div>

                <div className="relative w-full h-[100px] my-auto">
                  <Image
                    src="/assets/machines/fluid-bed-dryer.png"
                    alt="Fluid Bed Dryer"
                    fill
                    sizes="230px"
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">
                      Fluid Bed Dryer (FBD)
                    </p>
                    <p className="text-[10px] text-slate-500">
                      HEPA Fluidization
                    </p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0f766e]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
