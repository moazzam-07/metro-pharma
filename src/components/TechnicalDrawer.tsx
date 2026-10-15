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
        className="fixed inset-0 bg-zinc-950/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-[640px] h-full bg-white border-l border-zinc-200 shadow-2xl overflow-y-auto p-6 sm:p-8 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-zinc-100 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded">
                {machine.categoryLabel}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#701a75] bg-fuchsia-50 border border-fuchsia-200 px-2.5 py-0.5 rounded font-medium">
                {machine.badge}
              </span>
            </div>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl tracking-tight text-zinc-900">
              {machine.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview Box */}
        <div className="relative w-full h-[240px] min-h-[240px] shrink-0 bg-zinc-50 rounded-xl border border-zinc-200/80 p-6 flex items-center justify-center mb-6">
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
            <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 mb-1.5">
              Engineering Overview
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {machine.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 mb-1.5">
              Working Principle
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {machine.workingPrinciple}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 mb-1.5">
              Material of Construction
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed font-mono">
              {machine.moc}
            </p>
          </div>

          {/* Specs Table */}
          <div>
            <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 mb-2">
              Technical Specification Matrix
            </h4>
            <div className="border border-zinc-200 rounded-lg overflow-hidden">
              <table className="w-full text-xs font-mono border-collapse bg-white">
                <tbody>
                  <tr className="border-b border-zinc-200 bg-zinc-50/70">
                    <td className="py-2.5 px-3.5 text-zinc-500 w-2/5">Capacity Range</td>
                    <td className="py-2.5 px-3.5 text-zinc-900 font-medium">{machine.capacity}</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-2.5 px-3.5 text-zinc-500">Available Sizes</td>
                    <td className="py-2.5 px-3.5 text-zinc-900">{machine.sizes}</td>
                  </tr>
                  <tr className="border-b border-zinc-100 bg-zinc-50/70">
                    <td className="py-2.5 px-3.5 text-zinc-500">Power Supply</td>
                    <td className="py-2.5 px-3.5 text-zinc-900">{machine.power}</td>
                  </tr>
                  {machine.specs.map((spec, i) => (
                    <tr key={i} className={`border-b border-zinc-100 last:border-none ${i % 2 === 1 ? 'bg-zinc-50/70' : ''}`}>
                      <td className="py-2.5 px-3.5 text-zinc-500">{spec.label}</td>
                      <td className="py-2.5 px-3.5 text-zinc-900">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Salient Features */}
          <div>
            <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 mb-2">
              Salient Engineering Features
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              {machine.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#701a75] mt-2 shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-zinc-100 mt-8">
          <button
            onClick={() => onRequestQuote(machine.name)}
            type="button"
            className="w-full bg-[#701a75] hover:bg-[#86198f] text-white font-medium text-sm py-3 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            Request Official URS &amp; Pricing for {machine.name}
          </button>
        </div>
      </div>
    </div>
  );
}
