"use client";

import Image from "next/image";
import { 
  ArrowRight, 
  FileText, 
  ArrowUpRight
} from "lucide-react";

interface HeroProps {
  onSelectMachine: (id: string) => void;
}

export function Hero({ onSelectMachine }: HeroProps) {
  return (
    <section className="relative min-h-[82vh] flex items-center pt-28 sm:pt-36 pb-16 sm:pb-20 w-full overflow-hidden bg-gradient-to-b from-zinc-50/70 via-white to-white">
      {/* Subtle precision technical grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authoritative Engineering Copy */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl text-left">
            
            {/* Clean Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#701a75]"></span>
              <span className="text-xs font-semibold tracking-wider text-zinc-600 uppercase">
                Vasai East, Mumbai · Established 2005
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-zinc-950 tracking-tight leading-[1.12] mb-6">
              Precision Pharmaceutical &amp; Process Machinery
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl mb-8 font-normal">
              Metro Pharma manufactures Vibro Sifters, Fluid Bed Dryers, Auto Coaters, and Granulation trains in certified SS 316L (Ra &lt; 0.38 µm). Delivered with complete DQ, IQ, OQ, and PQ validation dossiers for regulatory cleanrooms.
            </p>

            {/* CTA Buttons - Clean & Responsive */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("machinery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#701a75] hover:bg-[#58135c] text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-all cursor-pointer shadow-xs hover:shadow-sm active:scale-[0.98] min-h-[46px]"
              >
                <span>Explore Machinery</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 text-sm font-semibold px-6 py-3.5 rounded-lg transition-all cursor-pointer shadow-xs active:scale-[0.98] min-h-[46px]"
              >
                <FileText className="w-4 h-4 text-[#701a75]" />
                <span>Request Quotation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean, High-Precision Equipment Showcase */}
          <div className="lg:col-span-5 relative w-full">
            <div
              onClick={() => onSelectMachine("vibro-sifter")}
              className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-200 cursor-pointer group"
              title="Click to view Vibro Sifter specifications"
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-5">
                <div>
                  <span className="text-[11px] font-semibold text-[#701a75] uppercase tracking-wider block">
                    Flagship Sifting Line
                  </span>
                  <h3 className="text-lg font-heading font-bold text-zinc-900 group-hover:text-[#701a75] transition-colors">
                    Vibro Sifter / Classifier
                  </h3>
                </div>
                <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md">
                  12″ to 72″
                </span>
              </div>

              {/* Machine Image */}
              <div className="relative w-full h-[220px] sm:h-[250px] my-4 flex items-center justify-center bg-zinc-50/60 rounded-xl p-4">
                <Image
                  src="/assets/machines/vibro-sifter.png"
                  alt="Vibro Sifter"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-contain group-hover:scale-102 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Engineering Specs Strip */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-zinc-400">
                    Screen Precision
                  </span>
                  <span className="font-semibold text-zinc-800">
                    Up to 500 Mesh
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-zinc-400">
                    Contact Parts
                  </span>
                  <span className="font-semibold text-zinc-800">
                    SS 316 / 316L
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 font-semibold text-[#701a75] group-hover:translate-x-0.5 transition-transform">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Subtle secondary selector */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <button
                type="button"
                onClick={() => onSelectMachine("auto-coater")}
                className="p-3 bg-white border border-zinc-200/80 rounded-xl text-left hover:border-zinc-300 hover:bg-zinc-50/50 transition-all cursor-pointer"
              >
                <span className="text-[10px] uppercase font-semibold text-zinc-400 block">Coating</span>
                <span className="text-xs font-bold text-zinc-900 block truncate">Metro Auto-Coater</span>
                <span className="text-[11px] text-zinc-500">24″ to 66″ Pan</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectMachine("fluid-bed-dryer")}
                className="p-3 bg-white border border-zinc-200/80 rounded-xl text-left hover:border-zinc-300 hover:bg-zinc-50/50 transition-all cursor-pointer"
              >
                <span className="text-[10px] uppercase font-semibold text-zinc-400 block">Drying</span>
                <span className="text-xs font-bold text-zinc-900 block truncate">Fluid Bed Dryer</span>
                <span className="text-[11px] text-zinc-500">30 to 500 Kg</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
