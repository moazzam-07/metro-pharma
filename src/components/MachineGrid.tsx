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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/90 text-xs font-bold text-[#0f766e] mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>MACHINERY CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] leading-tight">
              Solid Dosage &amp; Liquid Equipment
            </h2>
          </div>
          <p className="text-slate-700 text-sm sm:text-base max-w-md leading-relaxed font-normal">
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
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#090d16] text-white border-[#090d16] shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
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
              className="group relative bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden shadow-2xs"
            >
              <div>
                {/* Machine Image Stage */}
                <div className="relative w-full h-[220px] bg-slate-50/80 rounded-2xl p-4 flex items-center justify-center overflow-hidden mb-5 border border-slate-100">
                  <span className="absolute top-3 left-3 z-10 bg-white border border-slate-200 px-3 py-1 rounded-md text-[11px] font-bold text-slate-900 shadow-2xs flex items-center gap-1.5">
                    <Shield className="w-3 h-3 text-[#0f766e]" />
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
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#0f766e] mb-1.5">
                    {machine.categoryLabel}
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-[#090d16] group-hover:text-[#0f766e] transition-colors mb-2 leading-snug">
                    {machine.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {machine.description}
                  </p>
                </div>
              </div>

              {/* Bottom Specs Summary */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs">
                  <span className="block text-[10px] uppercase font-bold text-slate-400">
                    Capacity Range
                  </span>
                  <span className="font-bold text-slate-900">
                    {machine.capacity}
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0f766e] group-hover:translate-x-0.5 transition-transform">
                  <span>View Specifications</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
