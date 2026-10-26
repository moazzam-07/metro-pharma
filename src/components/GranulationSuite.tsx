"use client";

import Image from "next/image";
import { 
  Workflow, 
  ArrowUpRight, 
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
    <section className="pt-20 sm:pt-28 pb-20 sm:pb-28 relative scroll-mt-24" id="granulation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold text-[#701a75] uppercase tracking-wider block mb-2">
            Integrated Process Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-zinc-950 mb-3">
            The 7-Stage Granulation Line
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
            How Metro Pharma equipment connects across wet granulation—from raw powder screening to high-shear mixing, cone de-lumping, fluidized drying, and automated pan coating.
          </p>
        </div>

        {/* Quick Stage Jump Ribbon - Swipeable on mobile, wrapping on sm+ */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar touch-scroll flex-nowrap sm:flex-wrap pb-2 snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
            {GRANULATION_PIPELINE.map((stage) => (
              <button
                key={stage.step}
                type="button"
                onClick={() => scrollToStage(stage.step)}
                className="shrink-0 snap-start group inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer bg-zinc-100/80 hover:bg-zinc-200/80 text-zinc-700 hover:text-zinc-950 active:scale-[0.98]"
              >
                <span className="w-4.5 h-4.5 rounded bg-white text-zinc-700 font-mono font-bold text-[10px] flex items-center justify-center border border-zinc-200/80">
                  {stage.step}
                </span>
                <span>{stage.name}</span>
              </button>
            ))}
            <div className="w-2 shrink-0 sm:hidden" />
          </div>
        </div>

        {/* Downward Stacked Scrolling Cards */}
        <div className="relative space-y-6 sm:space-y-8">
          {GRANULATION_PIPELINE.map((stage, idx) => (
            <div
              key={stage.step}
              id={`stage-${stage.step}`}
              className="relative md:sticky rounded-2xl border border-zinc-200/90 bg-white shadow-sm p-4 sm:p-8 lg:p-10 transition-all duration-300 scroll-mt-24"
              style={{
                top: `calc(84px + ${idx * 14}px)`,
                zIndex: idx + 10,
              }}
            >
              {/* Top Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-zinc-100 pb-3 sm:pb-4 mb-4 sm:mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#701a75]/10 text-[#701a75] text-[11px] sm:text-xs font-semibold font-mono">
                    STAGE {stage.step} OF 07
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px] sm:text-xs font-medium">
                    {stage.stageTag}
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-500">
                  Equipment: <strong className="text-zinc-900 font-semibold">{stage.machine}</strong>
                </div>
              </div>

              {/* Card Body: 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                
                {/* Machine Showcase Pedestal (ordered first on mobile for immediate visual recognition) */}
                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div className="relative bg-zinc-50/70 rounded-xl border border-zinc-200/70 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[290px] group">
                    
                    {/* Top Feature Pill */}
                    <div className="self-start mb-1 sm:mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-zinc-200/80 text-[10.5px] sm:text-[11px] font-medium text-zinc-700 shadow-2xs">
                        {stage.highlight}
                      </span>
                    </div>

                    {/* Machinery Cutout */}
                    <div className="relative w-full h-[150px] sm:h-[220px] my-1 sm:my-2 flex items-center justify-center">
                      <Image
                        src={stage.image}
                        alt={stage.machine}
                        fill
                        className="object-contain drop-shadow-sm group-hover:scale-102 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                    </div>

                    {/* Metallurgy Tag */}
                    <div className="self-end mt-1 sm:mt-2">
                      <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium font-mono">
                        SS 316L Ra &lt; 0.38 µm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Left Column: Specifications & Narrative */}
                <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    {/* Headline */}
                    <h3 className="text-lg sm:text-2xl font-heading font-bold text-zinc-950 tracking-tight mb-1.5 sm:mb-2">
                      {stage.name}
                    </h3>

                    {/* Machine Title */}
                    <div className="text-xs sm:text-sm font-semibold text-[#701a75] mb-2.5 sm:mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#701a75]"></span>
                      <span>{stage.machine}</span>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-normal">
                      {stage.desc}
                    </p>

                    {/* Critical Parameter Matrix */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {stage.parameters.map((param, i) => (
                        <div 
                          key={i} 
                          className="bg-zinc-50/80 border border-zinc-200/70 rounded-xl p-2.5 sm:p-3"
                        >
                          <div className="text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">
                            {param.label}
                          </div>
                          <div className="text-[11.5px] sm:text-xs font-bold text-zinc-900 leading-snug">
                            {param.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-1 sm:pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectMachine?.(stage.machineId)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#701a75] hover:bg-[#58135c] text-white text-xs font-semibold px-4.5 py-3 rounded-lg transition-all cursor-pointer shadow-xs active:scale-[0.98] min-h-[44px]"
                    >
                      <span>Inspect Machine Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
