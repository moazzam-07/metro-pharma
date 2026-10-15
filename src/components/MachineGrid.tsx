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
    <section className="py-20 sm:py-24 relative scroll-mt-28" id="machinery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#fef08a] border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black mb-4">
              <Cpu className="w-3.5 h-3.5 text-black" />
              <span>MACHINERY CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-black leading-tight">
              Solid Dosage &amp; Liquid Equipment
            </h2>
          </div>
          <p className="text-zinc-800 text-sm sm:text-base max-w-md leading-relaxed font-medium">
            Fabricated at our Vasai East facility in certified SS 316/316L with FDA-compliant elastomers and mirror internal electropolish (Ra &lt; 0.38 µm).
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center gap-2.5 flex-wrap mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = cat.key === activeCategory;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                type="button"
                className={`text-xs sm:text-sm font-mono font-bold px-4 py-2 rounded-lg border-2 border-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#990099] text-white shadow-[3px_3px_0px_#000]"
                    : "bg-white text-black shadow-[2px_2px_0px_#000] hover:bg-[#fef08a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* 3-Column Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMachines.map((machine) => (
            <div
              key={machine.id}
              onClick={() => onSelectMachine(machine.id)}
              className="group relative bg-white border-2 border-black rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-[5px_5px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] transition-all duration-150 cursor-pointer overflow-hidden"
            >
              <div>
                {/* Machine Image Stage */}
                <div className="relative w-full h-[220px] bg-[#f4f4f5] border-2 border-black rounded-lg p-4 flex items-center justify-center overflow-hidden mb-5">
                  <span className="absolute top-3 left-3 z-10 bg-white border-2 border-black px-2.5 py-1 rounded text-[11px] font-mono font-bold text-black shadow-[1.5px_1.5px_0px_#000] flex items-center gap-1.5">
                    <Shield className="w-3 h-3 text-[#990099]" />
                    {machine.badge}
                  </span>
                  
                  <div className="relative w-full h-full">
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="mb-5">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-black bg-[#fef08a] px-2 py-0.5 rounded border border-black mb-2">
                    {machine.categoryLabel}
                  </span>
                  <h3 className="text-xl font-heading font-black text-black group-hover:text-[#990099] transition-colors mb-2 leading-snug">
                    {machine.name}
                  </h3>
                  <p className="text-xs text-zinc-700 line-clamp-2 leading-relaxed font-medium">
                    {machine.description}
                  </p>
                </div>
              </div>

              {/* Bottom Specs Summary */}
              <div className="pt-4 border-t-2 border-black flex items-center justify-between">
                <div className="text-xs">
                  <span className="block text-[10px] font-mono uppercase font-bold text-zinc-500">
                    Capacity Range
                  </span>
                  <span className="font-mono font-black text-black">
                    {machine.capacity}
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-black bg-white border-2 border-black px-2.5 py-1 rounded shadow-[1.5px_1.5px_0px_#000] group-hover:bg-[#990099] group-hover:text-white transition-colors">
                  <span>Specs</span>
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
