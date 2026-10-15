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
      <div className="relative z-10 w-full max-w-[680px] h-full bg-white border-l-4 border-black shadow-[-8px_0px_0px_#000] overflow-y-auto p-6 sm:p-10 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b-2 border-black mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-black font-bold bg-[#fef08a] border-2 border-black px-2.5 py-0.5 rounded shadow-[1px_1px_0px_#000]">
                {machine.categoryLabel}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-black font-bold bg-white border-2 border-black px-2.5 py-0.5 rounded">
                {machine.badge}
              </span>
            </div>
            <h2 className="font-heading font-black text-[26px] sm:text-[32px] tracking-tight text-black">
              {machine.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-10 h-10 rounded-lg bg-white hover:bg-[#fef08a] border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center transition-all cursor-pointer text-black"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview Box */}
        <div className="relative w-full h-[260px] min-h-[260px] shrink-0 bg-[#f4f4f5] rounded-xl border-2 border-black shadow-[3px_3px_0px_#000] p-6 flex items-center justify-center mb-6">
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
            <h4 className="text-[12px] font-mono font-bold uppercase tracking-wider text-black mb-1.5">
              Engineering Overview
            </h4>
            <p className="text-[14px] text-zinc-800 leading-relaxed font-medium">
              {machine.description}
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-mono font-bold uppercase tracking-wider text-black mb-1.5">
              Working Principle
            </h4>
            <p className="text-[14px] text-zinc-800 leading-relaxed font-medium">
              {machine.workingPrinciple}
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-mono font-bold uppercase tracking-wider text-black mb-1.5">
              Material of Construction
            </h4>
            <p className="text-[14px] text-zinc-800 leading-relaxed font-medium">
              {machine.moc}
            </p>
          </div>

          {/* Specs Table */}
          <div>
            <h4 className="text-[12px] font-mono font-bold uppercase tracking-wider text-black mb-3">
              Technical Specification Matrix
            </h4>
            <div className="border-2 border-black rounded-lg overflow-hidden shadow-[2px_2px_0px_#000]">
              <table className="w-full text-[14px] border-collapse bg-white font-mono">
                <tbody>
                  <tr className="border-b-2 border-black bg-[#f4f4f5]">
                    <td className="py-2.5 px-4 text-zinc-700 font-bold w-2/5">Capacity Range</td>
                    <td className="py-2.5 px-4 text-black font-extrabold">{machine.capacity}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-2.5 px-4 text-zinc-700 font-bold">Available Sizes</td>
                    <td className="py-2.5 px-4 text-black">{machine.sizes}</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-[#f4f4f5]">
                    <td className="py-2.5 px-4 text-zinc-700 font-bold">Power Supply</td>
                    <td className="py-2.5 px-4 text-black">{machine.power}</td>
                  </tr>
                  {machine.specs.map((spec, i) => (
                    <tr key={i} className={`border-b-2 border-black ${i % 2 === 1 ? 'bg-[#f4f4f5]' : ''}`}>
                      <td className="py-2.5 px-4 text-zinc-700 font-bold">{spec.label}</td>
                      <td className="py-2.5 px-4 text-black">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Salient Features */}
          <div>
            <h4 className="text-[12px] font-mono font-bold uppercase tracking-wider text-black mb-2">
              Salient Engineering Features
            </h4>
            <ul className="space-y-2 text-[14px] text-zinc-800 font-medium">
              {machine.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#990099] border border-black mt-1.5 shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t-2 border-black mt-8">
          <button
            onClick={() => onRequestQuote(machine.name)}
            type="button"
            className="w-full bg-[#990099] hover:bg-[#800080] text-white font-black text-[15px] py-3.5 rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
          >
            Request Specific Quote for this Machine &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

