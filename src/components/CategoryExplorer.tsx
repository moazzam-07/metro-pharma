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
    <section className="py-16 sm:py-24 relative scroll-mt-24" id="explorer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold text-[#701a75] uppercase tracking-wider block mb-2">
            Formulation &amp; Processing Lines
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-zinc-950 mb-3">
            Equipment for Solid Dosage &amp; Liquid Lines
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
            Select an equipment line to review standard batch capacities, contact metallurgy, and technical specifications.
          </p>
        </div>

        {/* Clean Container */}
        <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
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
                    className={`flex items-center justify-between p-3.5 rounded-xl transition-all text-left w-full border cursor-pointer ${
                      isActive
                        ? "bg-zinc-100/90 border-zinc-200/90 text-zinc-950 font-semibold shadow-xs"
                        : "bg-transparent border-transparent text-zinc-700 hover:bg-zinc-50/80"
                    }`}
                  >
                    <span className="text-sm font-medium tracking-tight">
                      {line.title}
                    </span>
                    <span
                      className={`text-[11px] px-2.5 py-0.5 rounded-md border transition-all ${
                        isActive
                          ? "bg-white text-zinc-900 border-zinc-200 font-semibold"
                          : "bg-zinc-100/60 text-zinc-500 border-zinc-200/60 font-normal"
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
              <div className="bg-zinc-50/60 border border-zinc-200/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[440px] relative transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200/60">
                  <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider">
                    {activeLine.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    SS 316L Contact · cGMP
                  </span>
                </div>

                {/* Machine Image */}
                <div className="relative w-full h-[220px] my-4 flex items-center justify-center">
                  <Image
                    src={activeMachine.image}
                    alt={activeMachine.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>

                {/* Machine Details & Action */}
                <div className="pt-4 border-t border-zinc-200/80">
                  <h3 className="text-xl font-heading font-bold text-zinc-950 mb-1.5">
                    {activeMachine.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mb-5 leading-relaxed font-normal">
                    {activeMachine.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-6 text-xs">
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                          Capacity
                        </span>
                        <span className="font-semibold text-zinc-900">
                          {activeMachine.capacity}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                          Metallurgy
                        </span>
                        <span className="font-semibold text-zinc-900">
                          SS 316 / 316L
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 bg-[#701a75] hover:bg-[#58135c] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
                      onClick={() => onSelectMachine(activeMachine.id)}
                    >
                      <span>Inspect Specifications</span>
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
