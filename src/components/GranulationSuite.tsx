"use client";

import Image from "next/image";
import { 
  Workflow, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Layers
} from "lucide-react";

interface GranulationSuiteProps {
  onSelectMachine?: (machineId: string) => void;
}

const GRANULATION_PIPELINE = [
  {
    step: "01",
    name: "Screening & Sizing",
    stageTag: "Raw Material Preparation",
    machine: "Vibro Sifter / Vacumet",
    machineId: "vibro-sifter",
    desc: "Active ingredients and excipients are de-lumped and classified to guarantee uniform particle size before binder addition.",
    parameters: [
      { label: "Mesh Precision", value: "Up to 500 Mesh" },
      { label: "Throughput", value: "100 to 3,000 kg/hr" },
      { label: "Containment", value: "Closed-Loop OEB 4" }
    ],
    image: "/assets/machines/vibro-sifter.png",
    highlight: "Screening & De-Lumping"
  },
  {
    step: "02",
    name: "High-Shear Mixing",
    stageTag: "Wet Mass Formation",
    machine: "Rapid Mixer Granulator (RMG)",
    machineId: "rapid-mixer-granulator",
    desc: "Dry powder blending followed by pressurized binder addition. Dual-speed bottom impeller and side chopper form wet granules in 8 to 15 minutes.",
    parameters: [
      { label: "Granulation Time", value: "8 to 15 Minutes" },
      { label: "Vessel Capacity", value: "2 to 400 kg/batch" },
      { label: "End-Point Control", value: "Current / Power Amp" }
    ],
    image: "/assets/machines/rapid-mixer-granulator.png",
    highlight: "High-Shear Mixing"
  },
  {
    step: "03",
    name: "Wet De-Lumping",
    stageTag: "Pre-Drying Conditioning",
    machine: "Co-Mill (Cone Mill)",
    machineId: "co-mill",
    desc: "Conical screen milling sizes oversized wet lumps discharging from RMG, preventing wet spots and ensuring uniform drying in the FBD.",
    parameters: [
      { label: "Granule Profile", value: "Uniform Surface Area" },
      { label: "Temperature Rise", value: "Near-Zero Delta T" },
      { label: "Tooling", value: "Conical Screens (0.5–10 mm)" }
    ],
    image: "/assets/machines/co-mill.png",
    highlight: "Conical Wet Milling"
  },
  {
    step: "04",
    name: "Fluid Bed Drying",
    stageTag: "Moisture Desorption",
    machine: "Fluid Bed Dryer (FBD)",
    machineId: "fluid-bed-dryer",
    desc: "Conditioned, HEPA-filtered hot air fluidizes wet granules to achieve target Loss On Drying (LOD) within 20 to 45 minutes.",
    parameters: [
      { label: "Drying Time", value: "20 to 45 Minutes" },
      { label: "Inlet Air", value: "0.3 µm HEPA Filtered" },
      { label: "Batch Size", value: "5 to 500 kg/batch" }
    ],
    image: "/assets/machines/fluid-bed-dryer.png",
    highlight: "Fluidized Bed Drying"
  },
  {
    step: "05",
    name: "Dry Granule Milling",
    stageTag: "Compression Calibration",
    machine: "Multi Mill",
    machineId: "multi-mill",
    desc: "Reversible knife and impact blades calibrate dried granules to the exact mesh distribution required for high-speed tablet presses.",
    parameters: [
      { label: "Blade Assembly", value: "12 Reversible Blades" },
      { label: "Rotor Speed", value: "750 to 3,000 RPM" },
      { label: "Output Mesh", value: "0.5 mm to 12 mm" }
    ],
    image: "/assets/machines/multi-mill.png",
    highlight: "Dry Particle Calibration"
  },
  {
    step: "06",
    name: "Uniform Blending",
    stageTag: "Final Lubrication",
    machine: "Octagonal / Double Cone Blender",
    machineId: "octagonal-blender",
    desc: "Slow tumbling lubricates dried granules with magnesium stearate and disintegrants without crushing granules or generating fines.",
    parameters: [
      { label: "Blending Action", value: "Zero-Shear Tumbling" },
      { label: "Working Volume", value: "50 to 5,000 Liters" },
      { label: "Discharge", value: "Sanitary Butterfly Valve" }
    ],
    image: "/assets/machines/octagonal-blender.png",
    highlight: "Low-Shear Lubrication"
  },
  {
    step: "07",
    name: "Automated Coating",
    stageTag: "Final Dosage Finishing",
    machine: "Metro Coater (Auto Coater)",
    machineId: "auto-coater",
    desc: "Perforated pan coating with automated spray guns and negative-pressure airflow for aqueous, organic solvent, or enteric film coating.",
    parameters: [
      { label: "Pan Sizes", value: "24″ to 66″ Perforated" },
      { label: "Spray System", value: "Anti-Bearding Guns" },
      { label: "Automation", value: "PLC with 21 CFR Part 11" }
    ],
    image: "/assets/machines/auto-coater.png",
    highlight: "Perforated Pan Coating"
  }
];

export function GranulationSuite({ onSelectMachine }: GranulationSuiteProps) {
  const scrollToStage = (step: string) => {
    const elem = document.getElementById(`stage-${step}`);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-28 sm:pt-36 pb-24 sm:pb-32 relative scroll-mt-28" id="granulation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/90 text-xs font-bold text-[#0f766e] mb-5 shadow-2xs">
            <Workflow className="w-3.5 h-3.5" />
            <span>SOLID DOSAGE PROCESS FLOW · 7 STAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] leading-[1.12] mb-5">
            The 7-Stage Granulation Line
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            How our solid dosage equipment connects across each stage of wet granulation—from raw powder screening to drying, milling, blending, and automated pan coating.
          </p>
        </div>

        {/* Quick Stage Jump Ribbon - Wrapped Multi-Pill Grid */}
        <div className="mb-12 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#0f766e]" />
            <span>Process Stages (Click to view equipment)</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {GRANULATION_PIPELINE.map((stage) => (
              <button
                key={stage.step}
                type="button"
                onClick={() => scrollToStage(stage.step)}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer bg-white hover:bg-slate-50 border border-slate-200 hover:border-teal-300 text-slate-700 hover:text-slate-900 shadow-2xs active:scale-95"
              >
                <span className="w-5 h-5 rounded-md bg-teal-50 text-[#0f766e] group-hover:bg-[#0f766e] group-hover:text-white font-mono font-bold text-[11px] flex items-center justify-center transition-colors">
                  {stage.step}
                </span>
                <span>{stage.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Downward Stacked Scrolling Cards */}
        <div className="relative space-y-8 sm:space-y-12">
          {GRANULATION_PIPELINE.map((stage, idx) => (
            <div
              key={stage.step}
              id={`stage-${stage.step}`}
              className="relative md:sticky rounded-3xl border border-slate-200/90 bg-white/98 backdrop-blur-2xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-6 sm:p-10 lg:p-12 transition-all duration-300 scroll-mt-28"
              style={{
                top: `calc(90px + ${idx * 14}px)`,
                zIndex: idx + 10,
              }}
            >
              {/* Top Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-8">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md bg-teal-50 text-[#0f766e] border border-teal-200/90 text-xs font-bold font-mono">
                    STAGE {stage.step} OF 07
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold">
                    {stage.stageTag}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  Equipment: <strong className="text-slate-900 font-bold">{stage.machine}</strong>
                </div>
              </div>

              {/* Card Body: 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Specifications & Narrative */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#090d16] tracking-tight mb-3">
                      {stage.name}
                    </h3>

                    {/* Machine Title */}
                    <div className="text-sm sm:text-base font-bold text-[#0f766e] mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0f766e]"></span>
                      <span>{stage.machine}</span>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                      {stage.desc}
                    </p>

                    {/* Critical Parameter Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                      {stage.parameters.map((param, i) => (
                        <div 
                          key={i} 
                          className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 shadow-2xs"
                        >
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            {param.label}
                          </div>
                          <div className="text-sm font-extrabold text-[#090d16]">
                            {param.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectMachine?.(stage.machineId)}
                      className="inline-flex items-center gap-2 bg-[#090d16] hover:bg-[#0f766e] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-95"
                    >
                      <span>Inspect Machine Specs</span>
                      <ArrowUpRight className="w-4 h-4 ml-0.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Transparent Machine Showcase Pedestal */}
                <div className="lg:col-span-5">
                  <div className="relative bg-gradient-to-b from-slate-50/90 to-slate-100/60 rounded-2xl border border-slate-200/80 p-6 sm:p-8 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[340px] shadow-inner group">
                    
                    {/* Top Feature Pill */}
                    <div className="self-start mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 shadow-2xs">
                        {stage.highlight}
                      </span>
                    </div>

                    {/* Machinery Cutout */}
                    <div className="relative w-full h-[220px] sm:h-[260px] my-2 flex items-center justify-center">
                      <Image
                        src={stage.image}
                        alt={stage.machine}
                        fill
                        className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>

                    {/* Metallurgy Tag */}
                    <div className="self-end mt-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-500">
                        <span>SS 316L Ra &lt; 0.38 µm</span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Turnkey Compliance Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-200/90 pt-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50/80 rounded-2xl p-4 border border-slate-200/70">
            <CheckCircle2 className="w-4 h-4 text-[#0f766e] shrink-0" />
            <span>Clean In Place (CIP / WIP) washdown piping</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50/80 rounded-2xl p-4 border border-slate-200/70">
            <CheckCircle2 className="w-4 h-4 text-[#0f766e] shrink-0" />
            <span>21 CFR Part 11 compliant SCADA / PLC options</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50/80 rounded-2xl p-4 border border-slate-200/70">
            <ShieldCheck className="w-4 h-4 text-[#0f766e] shrink-0" />
            <span>Closed-loop powder transfer valves</span>
          </div>
        </div>

      </div>
    </section>
  );
}
