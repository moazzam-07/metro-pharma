"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="py-20 sm:py-28 relative scroll-mt-28" id="machinery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200/80 dark:border-teal-800 text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] mb-4">
              <Cpu className="w-3.5 h-3.5" />
              COMPLETE EQUIPMENT CATALOG
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] dark:text-white leading-tight">
              Engineered for Absolute Process Integrity
            </h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base max-w-md leading-relaxed font-normal">
            Every unit is custom-engineered and precision-balanced in our dedicated facility using certified SS 316/316L, FDA-compliant elastomers, and mirror cleanroom finishes.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center gap-2.5 flex-wrap mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = cat.key === activeCategory;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                type="button"
                className={`text-xs sm:text-sm font-bold px-4.5 py-2 rounded-full border transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0f766e] text-white border-[#0f766e] shadow-md"
                    : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-[#0f766e] hover:text-[#0f766e]"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* 3-Column Equipment Repertoire Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredMachines.map((machine, index) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  key={machine.id}
                  onClick={() => onSelectMachine(machine.id)}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-teal-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm"
                >
                  <div>
                    {/* Machine Image Stage */}
                    <div className="relative w-full h-[220px] bg-slate-50/80 dark:bg-slate-800/40 rounded-2xl p-4 flex items-center justify-center overflow-hidden mb-5 border border-slate-100 dark:border-slate-800/60">
                      <span className="absolute top-3 left-3 z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 dark:text-slate-100 shadow-xs flex items-center gap-1.5">
                        <Shield className="w-3 h-3 text-[#0f766e] dark:text-[#14b8a6]" />
                        {machine.badge}
                      </span>
                      
                      <div className="relative w-full h-full">
                        <Image
                          src={machine.image}
                          alt={machine.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="mb-5">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#0f766e] dark:text-[#14b8a6] mb-1.5">
                        {machine.categoryLabel}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#090d16] dark:text-white leading-snug mb-2 group-hover:text-[#0f766e] dark:group-hover:text-[#14b8a6] transition-colors">
                        {machine.name}
                      </h3>
                      <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {machine.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Specs & Trigger Footer */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between mt-auto text-xs font-semibold">
                    <span className="text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/80 dark:border-slate-700 font-bold">
                      {machine.capacity}
                    </span>
                    <span className="text-[#0f766e] dark:text-[#14b8a6] font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Inspect Specs
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
