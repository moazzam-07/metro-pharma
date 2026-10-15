"use client";

import { useState } from "react";
import Image from "next/image";
import { MACHINES } from "@/data/machinery";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";

interface CategoryExplorerProps {
  onSelectMachine: (id: string) => void;
}

export function CategoryExplorer({ onSelectMachine }: CategoryExplorerProps) {
  const explorerLines = [
    { id: "vibro-sifter", title: "Vibro Sifters & Classifiers", badge: "Screening & Sieving" },
    { id: "vacuum-vibro-sifter", title: "Vacumet Closed Loop Sifters", badge: "Dust-Free Containment" },
    { id: "multi-mill", title: "Multi Mills & Granulators", badge: "Reversible Milling" },
    { id: "auto-coater", title: "Metro Coaters & Auto Coaters", badge: "Perforated Pan Coating" },
    { id: "fluid-bed-dryer", title: "Fluid Bed Dryers (FBD)", badge: "HEPA Fluidized Drying" },
    { id: "rapid-mixer-granulator", title: "Rapid Mixer Granulators (RMG)", badge: "High-Shear Mixing" },
    { id: "colloid-mill", title: "Colloid Mills & Emulsifiers", badge: "Liquid Homogenization" },
    { id: "octagonal-blender", title: "Gentle Powder Blenders", badge: "Zero-Attrition Tumbling" }
  ];

  const [activeId, setActiveId] = useState(explorerLines[0].id);

  const activeMachine = MACHINES.find((m) => m.id === activeId) || MACHINES[0];
  const activeLine = explorerLines.find((l) => l.id === activeId) || explorerLines[0];

  return (
    <section className="py-20 sm:py-24 relative scroll-mt-28" id="explorer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-50 border border-fuchsia-200/90 text-xs font-bold text-[#990099] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>EQUIPMENT CATEGORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] leading-tight mb-4">
            Machinery for Solid Dosage &amp; Liquid Lines
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Select an equipment line to view standard capacities, contact metallurgy, and technical parameters.
          </p>
        </div>

        {/* Clinical Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Nav List */}
            <div className="lg:col-span-6 flex flex-col gap-1.5">
              {explorerLines.map((line) => {
                const isActive = line.id === activeId;
                return (
                  <button
                    key={line.id}
                    onMouseEnter={() => setActiveId(line.id)}
                    onClick={() => onSelectMachine(line.id)}
                    type="button"
                    className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl transition-all text-left w-full border cursor-pointer ${
                      isActive
                        ? "bg-fuchsia-50/80 border-fuchsia-200 text-[#990099] shadow-2xs"
                        : "bg-transparent border-transparent text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`text-sm sm:text-base font-heading tracking-tight transition-all ${
                        isActive ? "font-bold text-[#990099]" : "font-medium text-slate-700"
                      }`}
                    >
                      {line.title}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border transition-all ${
                        isActive
                          ? "bg-white text-[#990099] border-fuchsia-200 font-bold"
                          : "bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                    >
                      {line.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Machine Preview Stage */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[460px] relative transition-all">
                <div className="flex items-center justify-between">
                  <span className="bg-white border border-slate-200 px-3 py-1 rounded-md text-xs font-bold text-slate-800 shadow-2xs">
                    {activeLine.badge}
                  </span>
                  <span className="text-xs font-semibold text-[#990099] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#990099]" />
                    <span>cGMP Compliant</span>
                  </span>
                </div>

                {/* Machine Image */}
                <div className="relative w-full h-[240px] my-5 flex items-center justify-center">
                  <Image
                    src={activeMachine.image}
                    alt={activeMachine.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>

                {/* Machine Details & Action */}
                <div className="pt-4 border-t border-slate-200/80">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#090d16] mb-1.5">
                    {activeMachine.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mb-5 leading-relaxed">
                    {activeMachine.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-5 text-xs">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Capacity
                        </span>
                        <span className="font-bold text-slate-900">
                          {activeMachine.capacity}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Metallurgy
                        </span>
                        <span className="font-bold text-slate-900">
                          SS 316 / 316L
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 bg-[#990099] hover:bg-[#800080] text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors shadow-sm shadow-[#990099]/20"
                      onClick={() => onSelectMachine(activeMachine.id)}
                    >
                      <span>Inspect Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
