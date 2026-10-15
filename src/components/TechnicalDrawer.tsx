"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Machine } from "@/data/machinery";

interface TechnicalDrawerProps {
  machine: Machine | null;
  onClose: () => void;
  onRequestQuote: (machineName: string) => void;
}

export function TechnicalDrawer({ machine, onClose, onRequestQuote }: TechnicalDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (machine) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [machine, onClose]);

  if (!machine) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-[680px] h-full bg-white border-l border-slate-200 shadow-2xl overflow-y-auto p-6 sm:p-10 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[12px] uppercase tracking-wider text-[#990099] font-bold bg-fuchsia-50 border border-fuchsia-200/80 px-2.5 py-0.5 rounded">
                {machine.categoryLabel}
              </span>
              <span className="text-[12px] uppercase tracking-wider text-slate-700 font-bold bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded">
                {machine.badge}
              </span>
            </div>
            <h2 className="font-serif font-medium text-[26px] sm:text-[32px] tracking-tight text-slate-900">
              {machine.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white border border-slate-200 flex items-center justify-center transition-colors cursor-pointer text-slate-700"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview Box */}
        <div className="relative w-full h-[260px] min-h-[260px] shrink-0 bg-slate-50/90 rounded-2xl border border-slate-200 p-6 flex items-center justify-center mb-6">
          <Image
            src={machine.image}
            alt={machine.name}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-contain p-4"
          />
        </div>

        {/* Content sections */}
        <div className="space-y-6 flex-1">
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
              Engineering Overview
            </h4>
            <p className="text-[14px] text-slate-700 leading-relaxed font-normal">
              {machine.description}
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
              Working Principle
            </h4>
            <p className="text-[14px] text-slate-700 leading-relaxed font-normal">
              {machine.workingPrinciple}
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
              Material of Construction
            </h4>
            <p className="text-[14px] text-slate-700 leading-relaxed font-normal">
              {machine.moc}
            </p>
          </div>

          {/* Specs Table */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-slate-900 mb-3">
              Technical Specification Matrix
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-[14px] border-collapse bg-white">
                <tbody>
                  <tr className="border-b border-slate-200 bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-600 font-semibold w-2/5">Capacity Range</td>
                    <td className="py-2.5 px-4 text-slate-900 font-bold">{machine.capacity}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2.5 px-4 text-slate-600 font-semibold">Available Sizes</td>
                    <td className="py-2.5 px-4 text-slate-800">{machine.sizes}</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-600 font-semibold">Power Supply</td>
                    <td className="py-2.5 px-4 text-slate-800">{machine.power}</td>
                  </tr>
                  {machine.specs.map((spec, i) => (
                    <tr key={i} className={`border-b border-slate-200 ${i % 2 === 1 ? 'bg-slate-50/50' : ''}`}>
                      <td className="py-2.5 px-4 text-slate-600 font-semibold">{spec.label}</td>
                      <td className="py-2.5 px-4 text-slate-800">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Salient Features */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-slate-900 mb-2">
              Salient Engineering Features
            </h4>
            <ul className="space-y-2 text-[14px] text-slate-700">
              {machine.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#990099] mt-2 shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-slate-200 mt-8">
          <button
            onClick={() => onRequestQuote(machine.name)}
            type="button"
            className="w-full bg-[#990099] hover:bg-[#800080] text-white font-semibold text-[15px] py-3.5 rounded-xl transition-all cursor-pointer shadow-md shadow-[#990099]/20"
          >
            Request Specific Quote for this Machine &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

