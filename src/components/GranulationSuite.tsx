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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#fef08a] border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black mb-5">
            <Workflow className="w-3.5 h-3.5 text-black" />
            <span>SOLID DOSAGE PROCESS FLOW · 7 STAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-black leading-[1.12] mb-5">
            The 7-Stage Granulation Line
          </h2>
          <p className="text-zinc-800 text-base sm:text-lg leading-relaxed font-medium">
            How our solid dosage equipment connects across each stage of wet granulation—from raw powder screening to drying, milling, blending, and automated pan coating.
          </p>
        </div>

        {/* Quick Stage Jump Ribbon - Wrapped Multi-Pill Grid */}
        <div className="mb-12 sm:mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-black mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#990099]" />
            <span>Process Stages (Click to view equipment)</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {GRANULATION_PIPELINE.map((stage) => (
              <button
                key={stage.step}
                type="button"
                onClick={() => scrollToStage(stage.step)}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer bg-white hover:bg-[#fef08a] border-2 border-black text-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              >
                <span className="w-5 h-5 rounded bg-black text-white group-hover:bg-[#990099] font-mono font-bold text-[11px] flex items-center justify-center transition-colors">
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
              className="relative md:sticky rounded-xl border-2 border-black bg-white shadow-[6px_6px_0px_#000] p-6 sm:p-10 lg:p-12 transition-all duration-300 scroll-mt-28"
              style={{
                top: `calc(90px + ${idx * 14}px)`,
                zIndex: idx + 10,
              }}
            >
              {/* Top Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-5 mb-8">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded bg-[#fef08a] text-black border-2 border-black text-xs font-bold font-mono shadow-[1.5px_1.5px_0px_#000]">
                    STAGE {stage.step} OF 07
                  </span>
                  <span className="px-3 py-1 rounded bg-white text-black border-2 border-black text-xs font-bold font-mono">
                    {stage.stageTag}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-mono font-medium text-zinc-700">
                  Equipment: <strong className="text-black font-extrabold">{stage.machine}</strong>
                </div>
              </div>

              {/* Card Body: 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Specifications & Narrative */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-black tracking-tight mb-3">
                      {stage.name}
                    </h3>

                    {/* Machine Title */}
                    <div className="text-sm sm:text-base font-bold text-[#990099] mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#990099] border border-black"></span>
                      <span>{stage.machine}</span>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-zinc-800 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                      {stage.desc}
                    </p>

                    {/* Critical Parameter Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                      {stage.parameters.map((param, i) => (
                        <div 
                          key={i} 
                          className="bg-[#f4f4f5] border-2 border-black rounded-lg p-3 shadow-[2px_2px_0px_#000]"
                        >
                          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-600 mb-1">
                            {param.label}
                          </div>
                          <div className="text-sm font-mono font-black text-black">
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
                      className="inline-flex items-center gap-2 bg-[#990099] hover:bg-[#800080] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                    >
                      <span>Inspect Machine Specs</span>
                      <ArrowUpRight className="w-4 h-4 ml-0.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Transparent Machine Showcase Pedestal */}
                <div className="lg:col-span-5">
                  <div className="relative bg-[#f4f4f5] rounded-xl border-2 border-black p-6 sm:p-8 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[340px] shadow-[4px_4px_0px_#000] group">
                    
                    {/* Top Feature Pill */}
                    <div className="self-start mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white border-2 border-black text-[11px] font-mono font-bold text-black shadow-[1.5px_1.5px_0px_#000]">
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
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-black bg-white px-2 py-0.5 rounded border border-black">
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
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 border-t-2 border-black pt-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-black font-bold bg-white rounded-lg p-4 border-2 border-black shadow-[3px_3px_0px_#000]">
            <CheckCircle2 className="w-4 h-4 text-[#990099] shrink-0" />
            <span>Clean In Place (CIP / WIP) washdown piping</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-black font-bold bg-white rounded-lg p-4 border-2 border-black shadow-[3px_3px_0px_#000]">
            <CheckCircle2 className="w-4 h-4 text-[#990099] shrink-0" />
            <span>21 CFR Part 11 compliant SCADA / PLC options</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-black font-bold bg-white rounded-lg p-4 border-2 border-black shadow-[3px_3px_0px_#000]">
            <ShieldCheck className="w-4 h-4 text-[#990099] shrink-0" />
            <span>Closed-loop powder transfer valves</span>
          </div>
        </div>

      </div>
    </section>
  );
}
