"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MACHINES } from "@/data/machinery";
import { ArrowRight, Layers, Sparkles } from "lucide-react";

interface CategoryExplorerProps {
  onSelectMachine: (id: string) => void;
}

export function CategoryExplorer({ onSelectMachine }: CategoryExplorerProps) {
  const explorerLines = [
    { id: "vibro-sifter", title: "Vibro Sifters & Classifiers", badge: "Screening & Sieving" },
    { id: "vacuum-vibro-sifter", title: "Vacumet Closed Loop Sifters", badge: "OEB 4/5 Containment" },
    { id: "multi-mill", title: "Multi Mills & Granulators", badge: "Reversible Milling" },
    { id: "auto-coater", title: "Metro Coaters & Auto Coaters", badge: "Automated cGMP" },
    { id: "fluid-bed-dryer", title: "Fluid Bed Dryers (FBD)", badge: "HEPA Fluidized Drying" },
    { id: "rapid-mixer-granulator", title: "Rapid Mixer Granulators (RMG)", badge: "High-Shear Mixing" },
    { id: "colloid-mill", title: "Colloid Mills & Emulsifiers", badge: "Micron Homogenization" },
    { id: "octagonal-blender", title: "Gentle Powder Blenders", badge: "Zero-Attrition Tumbling" }
  ];

  const [activeId, setActiveId] = useState(explorerLines[0].id);

  const activeMachine = MACHINES.find((m) => m.id === activeId) || MACHINES[0];
  const activeLine = explorerLines.find((l) => l.id === activeId) || explorerLines[0];

  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28" id="explorer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200/80 dark:border-teal-800 text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] mb-4">
            <Layers className="w-3.5 h-3.5" />
            INTERACTIVE SUITE EXPLORER
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] dark:text-white leading-tight mb-4">
            Explore Machinery by Core Process Discipline
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Hover over any engineering discipline below to dynamically preview contact metallurgy, continuous throughput capacities, and containment certifications.
          </p>
        </div>

        {/* Clean Clinical Container */}
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Interactive Nav List */}
            <div className="lg:col-span-6 flex flex-col gap-2">
              {explorerLines.map((line) => {
                const isActive = line.id === activeId;
                return (
                  <button
                    key={line.id}
                    onMouseEnter={() => setActiveId(line.id)}
                    onClick={() => onSelectMachine(line.id)}
                    type="button"
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all text-left w-full border cursor-pointer ${
                      isActive
                        ? "bg-teal-50/90 dark:bg-teal-950/60 border-teal-300 dark:border-teal-700 text-[#0f766e] dark:text-[#14b8a6] shadow-xs translate-x-1"
                        : "bg-transparent border-transparent text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span
                      className={`text-base sm:text-lg font-heading tracking-tight transition-all ${
                        isActive
                          ? "font-extrabold text-[#0f766e] dark:text-[#14b8a6]"
                          : "font-semibold text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      {line.title}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                      isActive 
                        ? "bg-[#0f766e] text-white" 
                        : "bg-slate-200/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}>
                      {line.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Dynamic Preview Card */}
            <div className="lg:col-span-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px] relative transition-all overflow-hidden shadow-lg">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-slate-100 shadow-xs">
                    {activeLine.badge}
                  </span>
                  <span className="text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    cGMP Verified
                  </span>
                </div>

                {/* Animated Machine Visual */}
                <div className="relative w-full h-[260px] my-6 flex items-center justify-center bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMachine.id}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.2 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={activeMachine.image}
                        alt={activeMachine.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Machine Details & Action */}
                <div className="z-10">
                  <h3 className="text-2xl font-heading font-extrabold text-[#090d16] dark:text-white mb-2">
                    {activeMachine.name}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {activeMachine.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 dark:border-slate-800">
                    <div className="flex gap-4 sm:gap-6 text-xs">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Capacity
                        </span>
                        <span className="font-bold text-slate-900 dark:text-slate-100">
                          {activeMachine.capacity}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Metallurgy
                        </span>
                        <span className="font-bold text-slate-900 dark:text-slate-100">
                          SS 316 / 316L
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 bg-[#090d16] hover:bg-[#0f766e] text-white text-xs font-semibold px-4.5 py-2.5 rounded-full cursor-pointer transition-colors"
                      onClick={() => onSelectMachine(activeMachine.id)}
                    >
                      Inspect Specs
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
