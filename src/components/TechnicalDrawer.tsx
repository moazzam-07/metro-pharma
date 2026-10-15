"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ArrowRight, ShieldCheck, Cpu, Layers, Sparkles } from "lucide-react";
import { Machine } from "@/data/machinery";

interface TechnicalDrawerProps {
  machine: Machine | null;
  onClose: () => void;
  onRequestQuote: (machineName: string) => void;
}

export function TechnicalDrawer({ machine, onClose, onRequestQuote }: TechnicalDrawerProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "features">("overview");

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

  // Reset tab on machine change
  useEffect(() => {
    if (machine) {
      setActiveTab("overview");
    }
  }, [machine?.id]);

  if (!machine) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      {/* Apple-grade frosted backdrop */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-full sm:max-w-[680px] h-full bg-[#fbfbfd] border-l border-zinc-200/90 shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden">
        
        {/* Sticky Header */}
        <div className="px-5 sm:px-8 pt-5 sm:pt-6 pb-3.5 sm:pb-4 bg-white/90 backdrop-blur-md border-b border-zinc-200/70 z-20 shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[11px] font-mono font-medium tracking-widest text-zinc-400 uppercase mb-1">
                Metro Pharma · Technical Dossier
              </div>
              <h2 className="font-heading font-semibold text-xl sm:text-3xl tracking-tight text-zinc-950">
                {machine.name}
              </h2>
              <p className="text-xs text-zinc-500 font-normal mt-0.5">
                {machine.categoryLabel} · {machine.badge}
              </p>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 flex items-center justify-center transition-colors cursor-pointer shrink-0 mt-0.5 active:scale-95"
              aria-label="Close specifications drawer"
            >
              <X className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>

          {/* Apple-Style Segmented Control Tabs */}
          <div className="mt-4 sm:mt-5 flex bg-zinc-100/90 p-1 rounded-xl gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`flex-1 py-2 sm:py-1.5 min-h-[36px] text-xs font-medium rounded-lg transition-all cursor-pointer active:scale-[0.98] ${
                activeTab === "overview"
                  ? "bg-white text-zinc-950 shadow-xs"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Overview &amp; MOC
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`flex-1 py-2 sm:py-1.5 min-h-[36px] text-xs font-medium rounded-lg transition-all cursor-pointer active:scale-[0.98] ${
                activeTab === "specs"
                  ? "bg-white text-zinc-950 shadow-xs"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Technical Specs
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("features")}
              className={`flex-1 py-2 sm:py-1.5 min-h-[36px] text-xs font-medium rounded-lg transition-all cursor-pointer active:scale-[0.98] ${
                activeTab === "features"
                  ? "bg-white text-zinc-950 shadow-xs"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Features &amp; Process
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-5 sm:py-6 space-y-6 touch-scroll">
          
          {/* Studio Equipment Stage */}
          <div className="relative rounded-2xl bg-gradient-to-b from-white via-zinc-50/80 to-zinc-100/50 border border-zinc-200/80 p-6 flex flex-col items-center justify-center shadow-xs">
            <div className="relative w-full h-[220px] sm:h-[240px] flex items-center justify-center my-2">
              <Image
                src={machine.image}
                alt={machine.name}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-contain drop-shadow-sm p-2"
                priority
              />
            </div>

            {/* Quick Micro Spec Strip */}
            <div className="w-full grid grid-cols-3 gap-3 pt-4 border-t border-zinc-200/70 text-center">
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  Throughput
                </span>
                <span className="text-xs font-semibold text-zinc-900 block truncate">
                  {machine.capacity}
                </span>
              </div>
              <div className="border-x border-zinc-200/60 px-1">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  Metallurgy
                </span>
                <span className="text-xs font-semibold text-zinc-900 block truncate">
                  SS 316 / 316L
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  Finish
                </span>
                <span className="text-xs font-semibold text-zinc-900 block truncate">
                  Ra &lt; 0.38 µm
                </span>
              </div>
            </div>
          </div>

          {/* TAB 1: OVERVIEW & MOC */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Engineering Overview */}
              <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs">
                <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-2">
                  Engineering Scope
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                  {machine.description}
                </p>

                {/* Applications list */}
                {machine.applications && machine.applications.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-zinc-100">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Primary Applications
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {machine.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-zinc-700 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Working Principle */}
              <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs">
                <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-2">
                  Working Principle &amp; Mechanism
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                  {machine.workingPrinciple}
                </p>
              </div>

              {/* Material of Construction */}
              <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">
                    Material of Construction (MOC)
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-500 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded">
                    cGMP Schedule M
                  </span>
                </div>
                <p className="text-sm text-zinc-800 leading-relaxed font-medium">
                  {machine.moc}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL SPECIFICATIONS */}
          {activeTab === "specs" && (
            <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-4">
                <div>
                  <h4 className="text-base font-heading font-semibold text-zinc-950">
                    Specification Matrix
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    Standard engineering parameters · Customizable to URS
                  </p>
                </div>
              </div>

              <div className="divide-y divide-zinc-100 text-sm">
                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-zinc-500 text-xs sm:text-sm">Production Capacity</span>
                  <span className="font-semibold text-zinc-900 text-xs sm:text-sm text-right">
                    {machine.capacity}
                  </span>
                </div>
                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-zinc-500 text-xs sm:text-sm">Available Sizes / Diameters</span>
                  <span className="font-semibold text-zinc-900 text-xs sm:text-sm text-right">
                    {machine.sizes}
                  </span>
                </div>
                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-zinc-500 text-xs sm:text-sm">Power &amp; Drive Specifications</span>
                  <span className="font-semibold text-zinc-900 text-xs sm:text-sm text-right">
                    {machine.power}
                  </span>
                </div>
                {machine.specs.map((spec, i) => (
                  <div key={i} className="py-3 flex items-start justify-between gap-4">
                    <span className="text-zinc-500 text-xs sm:text-sm">{spec.label}</span>
                    <span className="font-semibold text-zinc-900 text-xs sm:text-sm text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FEATURES & VALIDATION */}
          {activeTab === "features" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs">
                <h4 className="text-base font-heading font-semibold text-zinc-950 mb-4">
                  Salient Engineering Features
                </h4>

                <div className="space-y-3">
                  {machine.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50/70 border border-zinc-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#701a75] mt-2 shrink-0"></span>
                      <span className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Validation & Testing Note */}
              <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs">
                <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-2">
                  Qualification &amp; Documentation Supplied
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  Every machine dispatch includes a complete validation dossier containing Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), test certificates for stainless steel heat lots, surface finish profilometer traces, and electrical schematic diagrams.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-600">
                  <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded">FAT Protocols</span>
                  <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded">PMI Certificates</span>
                  <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded">Calibration Logs</span>
                  <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded">O&amp;M Manual</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Floating Bottom Action Bar with iOS Safe Area */}
        <div className="px-5 sm:px-8 pt-3.5 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] bg-white/95 backdrop-blur-md border-t border-zinc-200/80 shrink-0 flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <span className="block text-xs font-semibold text-zinc-900">
              Custom Engineering &amp; Sizing
            </span>
            <span className="block text-[11px] text-zinc-500">
              Built to your formulation cleanroom URS
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(machine.name);
            }}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#701a75] hover:bg-[#58135c] text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all cursor-pointer active:scale-[0.98] min-h-[46px]"
          >
            <span>Request Official URS &amp; Pricing</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
