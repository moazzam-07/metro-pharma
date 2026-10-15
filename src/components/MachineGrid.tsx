"use client";

import { useState } from "react";
import Image from "next/image";
import { MACHINES, CATEGORIES } from "@/data/machinery";
import { ArrowUpRight, Shield, Cpu } from "lucide-react";

interface MachineGridProps {
  onSelectMachine: (id: string) => void;
}

export function MachineGrid({ onSelectMachine }: MachineGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMachines =
    activeCategory === "all"
      ? MACHINES
      : MACHINES.filter((m) => m.categoryKey === activeCategory);

  return (
    <section className="py-16 sm:py-24 relative scroll-mt-24" id="machinery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold text-[#701a75] uppercase tracking-wider block mb-2">
              Machinery Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-zinc-950">
              Solid Dosage &amp; Liquid Equipment
            </h2>
          </div>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md leading-relaxed font-normal">
            Fabricated at our Vasai East facility in certified SS 316/316L with FDA-compliant elastomers and mirror internal electropolish (Ra &lt; 0.38 µm).
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = cat.key === activeCategory;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                type="button"
                className={`text-xs font-medium px-3.5 py-2 rounded-lg border transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#701a75] text-white border-[#701a75] shadow-xs"
                    : "bg-white text-zinc-600 border-zinc-200/90 hover:bg-zinc-50 hover:text-zinc-950"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* 3-Column Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMachines.map((machine) => (
            <div
              key={machine.id}
              onClick={() => onSelectMachine(machine.id)}
              className="group bg-white border border-zinc-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden shadow-xs"
            >
              <div>
                {/* Machine Image Stage */}
                <div className="relative w-full h-[200px] bg-zinc-50/70 rounded-xl p-4 flex items-center justify-center overflow-hidden mb-5 border border-zinc-100">
                  <span className="absolute top-3 left-3 z-10 bg-white/95 border border-zinc-200/90 px-2.5 py-0.5 rounded text-[11px] font-mono text-zinc-600 shadow-2xs">
                    {machine.badge}
                  </span>
                  
                  <div className="relative w-full h-full">
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="mb-4">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#701a75] mb-1">
                    {machine.categoryLabel}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-zinc-950 group-hover:text-[#701a75] transition-colors mb-2 leading-snug">
                    {machine.name}
                  </h3>
                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed font-normal">
                    {machine.description}
                  </p>
                </div>
              </div>

              {/* Bottom Specs Summary */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                    Capacity
                  </span>
                  <span className="font-semibold text-zinc-800">
                    {machine.capacity}
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-1 font-semibold text-[#701a75] group-hover:translate-x-0.5 transition-transform">
                  <span>Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
