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
    <section className="relative min-h-[88vh] flex items-center pt-32 sm:pt-40 pb-20 sm:pb-24 w-full overflow-hidden bg-[#f9f9fa]">
      {/* Neo-brutalist Engineering Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authoritative Engineering Copy */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl text-left">
            
            {/* Manufacturing Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#fef08a] border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#990099] border border-black"></span>
              <span>cGMP &amp; Schedule M Compliant</span>
              <span className="text-black/40">|</span>
              <span className="text-black font-extrabold">Est. 2005 · Vasai, Mumbai</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-heading font-black text-black tracking-tight leading-[1.08] mb-6">
              Pharmaceutical &amp; Chemical Process Machinery
            </h1>

            {/* Factual Subtitle */}
            <p className="text-base sm:text-lg text-zinc-800 leading-relaxed max-w-xl mb-8 font-medium">
              Metro Pharma manufactures Vibro Sifters, Fluid Bed Dryers, Auto Coaters, and Rapid Mixer Granulators in certified SS 316L (Ra &lt; 0.38 µm). Built at our Vasai East facility with complete DQ, IQ, OQ, and PQ validation dossiers for regulatory cleanrooms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("machinery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#990099] hover:bg-[#800080] text-white text-sm font-bold px-6 py-3.5 rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <span>View Machinery Catalog</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-black border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#000] text-sm font-bold px-6 py-3.5 rounded-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#990099]" />
                <span>Request Technical RFQ</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("granulation")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-black border-2 border-black bg-white shadow-[2px_2px_0px_#000] hover:bg-[#fef08a] px-3.5 py-2.5 rounded-lg active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
              >
                <span>Granulation Flow</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Validation Metrics Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t-2 border-black w-full text-xs text-black font-bold">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border-2 border-black shadow-[2px_2px_0px_#000]">
                <CheckCircle2 className="w-4 h-4 text-[#990099] shrink-0" />
                <span>SS 316L (Ra &lt; 0.38 µm) Contact</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border-2 border-black shadow-[2px_2px_0px_#000]">
                <ShieldCheck className="w-4 h-4 text-[#990099] shrink-0" />
                <span>100% FAT Witness Testing</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border-2 border-black shadow-[2px_2px_0px_#000]">
                <CheckCircle2 className="w-4 h-4 text-[#990099] shrink-0" />
                <span>DQ / IQ / OQ / PQ Documented</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Equipment Showcase Triad */}
          <div className="lg:col-span-5 relative h-[450px] sm:h-[500px] w-full">
            
            {/* Primary Featured Machine: Vibro Sifter (Flagship) */}
            <div
              onClick={() => onSelectMachine("vibro-sifter")}
              className="absolute left-1/2 top-2 -translate-x-1/2 w-[250px] sm:w-[290px] h-[240px] sm:h-[260px] bg-white border-2 border-black rounded-xl p-3 shadow-[6px_6px_0px_#000] hover:translate-x-[calc(-50%-2px)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000] transition-all duration-150 cursor-pointer group z-20"
              title="Click to view Vibro Sifter specifications"
            >
              <div className="w-full h-full bg-[#f4f4f5] rounded-lg p-3 flex flex-col justify-between border-2 border-black">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-[#fef08a] border border-black px-2 py-0.5 rounded text-black">
                    Flagship Sifter
                  </span>
                  <span className="text-xs text-black font-mono font-bold">
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
                    <p className="text-sm font-bold text-black leading-tight">
                      Vibro Sifter / Classifier
                    </p>
                    <p className="text-[11px] text-zinc-600 font-medium">
                      Screening up to 500 Mesh
                    </p>
                  </div>
                  <span className="w-6 h-6 rounded bg-white border-2 border-black flex items-center justify-center text-xs font-bold text-black group-hover:bg-[#990099] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Machine: Metro Auto-Coater */}
            <div
              onClick={() => onSelectMachine("auto-coater")}
              className="absolute right-0 top-[44%] w-[210px] sm:w-[240px] h-[200px] sm:h-[220px] bg-white border-2 border-black rounded-xl p-3 shadow-[5px_5px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] transition-all duration-150 cursor-pointer group z-25"
              title="Click to view Metro Coater specifications"
            >
              <div className="w-full h-full bg-[#f4f4f5] rounded-lg p-2.5 flex flex-col justify-between border-2 border-black">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white border border-black px-1.5 py-0.5 rounded text-black">
                    Auto Coater
                  </span>
                  <span className="text-[10px] text-black font-mono font-bold">
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
                    <p className="text-xs font-bold text-black leading-tight">
                      Metro Auto-Coater
                    </p>
                    <p className="text-[10px] text-zinc-600">
                      Perforated Pan
                    </p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-[#990099]" />
                </div>
              </div>
            </div>

            {/* Tertiary Machine: Fluid Bed Dryer */}
            <div
              onClick={() => onSelectMachine("fluid-bed-dryer")}
              className="absolute left-0 bottom-2 w-[200px] sm:w-[230px] h-[190px] sm:h-[210px] bg-white border-2 border-black rounded-xl p-3 shadow-[5px_5px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] transition-all duration-150 cursor-pointer group z-15"
              title="Click to view Fluid Bed Dryer specifications"
            >
              <div className="w-full h-full bg-[#f4f4f5] rounded-lg p-2.5 flex flex-col justify-between border-2 border-black">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white border border-black px-1.5 py-0.5 rounded text-black">
                    Drying Line
                  </span>
                  <span className="text-[10px] text-black font-mono font-bold">
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
                    <p className="text-xs font-bold text-black leading-tight">
                      Fluid Bed Dryer (FBD)
                    </p>
                    <p className="text-[10px] text-zinc-600">
                      HEPA Fluidization
                    </p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-[#990099]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
