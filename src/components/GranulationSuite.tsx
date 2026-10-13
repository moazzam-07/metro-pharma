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
    desc: "Raw active pharmaceutical ingredients and excipients are classified and screened to eliminate agglomerates, guaranteeing uniform particle fraction entry into the granulation suite.",
    parameters: [
      { label: "Mesh Precision", value: "Up to 500 Mesh" },
      { label: "Throughput", value: "100 to 3,000 kg/hr" },
      { label: "Containment", value: "OEB 4 / Closed-Loop" }
    ],
    image: "/assets/machines/vibro-sifter.png",
    highlight: "Zero Contamination Screening"
  },
  {
    step: "02",
    name: "High-Shear Mixing",
    stageTag: "Wet Mass Formation",
    machine: "Rapid Mixer Granulator (RMG)",
    machineId: "rapid-mixer-granulator",
    desc: "Intensive dry blending followed by pressurized liquid binder atomization. Specially profiled dual-speed bottom impellers and side choppers generate high-shear vortex agglomeration in minutes.",
    parameters: [
      { label: "Granulation Time", value: "8 to 15 Minutes" },
      { label: "Vessel Capacity", value: "2 to 400 kg/batch" },
      { label: "End-Point Control", value: "Automated Power Amp" }
    ],
    image: "/assets/machines/rapid-mixer-granulator.png",
    highlight: "High-Shear Binder Dispersion"
  },
  {
    step: "03",
    name: "Wet De-Lumping",
    stageTag: "Pre-Drying Conditioning",
    machine: "Co-Mill (Cone Mill)",
    machineId: "co-mill",
    desc: "Gentle low-heat sizing of oversized moist wet granules discharged from RMG. Calibrated low-shear conical action creates even granule surface area for rapid, uniform fluidization in the dryer.",
    parameters: [
      { label: "Granule Quality", value: "Uniform Surface Area" },
      { label: "Thermal Impact", value: "Near-Zero Heat Rise" },
      { label: "Tooling", value: "Interchangeable Screens" }
    ],
    image: "/assets/machines/co-mill.png",
    highlight: "Low-Heat Particle Sizing"
  },
  {
    step: "04",
    name: "Fluid Bed Drying",
    stageTag: "Moisture Desorption",
    machine: "Fluid Bed Dryer (FBD)",
    machineId: "fluid-bed-dryer",
    desc: "Conditioned, HEPA-filtered hot air is drawn upwards through the perforated product container, lifting wet granules into a turbulent boiling state for rapid, homogenous moisture evaporation.",
    parameters: [
      { label: "Drying Duration", value: "20 to 45 Minutes" },
      { label: "Air Filtration", value: "0.3 µm Terminal HEPA" },
      { label: "Batch Sizing", value: "5 to 500 kg/batch" }
    ],
    image: "/assets/machines/fluid-bed-dryer.png",
    highlight: "Gentle Rapid Fluidization"
  },
  {
    step: "05",
    name: "Dry Granule Milling",
    stageTag: "Compression Calibration",
    machine: "Multi Mill",
    machineId: "multi-mill",
    desc: "Controlled pulverization and calibration of dried granules using reversible knife and impact blades. Ensures consistent bulk density and exact mesh distribution required for high-speed tablet presses.",
    parameters: [
      { label: "Blade Options", value: "12 Reversible Blades" },
      { label: "Speed Selection", value: "750 to 3,000 RPM" },
      { label: "Output Mesh", value: "0.5 mm to 12 mm" }
    ],
    image: "/assets/machines/multi-mill.png",
    highlight: "Calibrated Reversible Sizing"
  },
  {
    step: "06",
    name: "Uniform Blending",
    stageTag: "Final Lubrication",
    machine: "Octagonal / Double Cone Blender",
    machineId: "octagonal-blender",
    desc: "Slow-speed, gentle multi-dimensional tumbling action lubricates calibrated granules with magnesium stearate and disintegrants with zero particle attrition or shear degradation.",
    parameters: [
      { label: "Blending Action", value: "Zero-Shear Tumbling" },
      { label: "Volume Capacity", value: "50 to 5,000 Liters" },
      { label: "Discharge", value: "Sanitary Butterfly" }
    ],
    image: "/assets/machines/octagonal-blender.png",
    highlight: "Gentle Attrition-Free Blending"
  },
  {
    step: "07",
    name: "Automated Coating",
    stageTag: "Final Dosage Finishing",
    machine: "Metro Coater (Auto Coater)",
    machineId: "auto-coater",
    desc: "Fully automated perforated pan coating with anti-bearding spray guns and negative-pressure airflow. Applies ultra-smooth, uniform film, enteric, or sugar coatings with zero tablet attrition.",
    parameters: [
      { label: "Pan Sizes", value: "24\" to 66\" Perforated" },
      { label: "Spray Technology", value: "Anti-Bearding Guns" },
      { label: "Automation", value: "SCADA PLC (21 CFR Part 11)" }
    ],
    image: "/assets/machines/auto-coater.png",
    highlight: "Precision cGMP Film Coating"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/90 text-xs font-bold text-[#0f766e] mb-5 shadow-xs">
            <Workflow className="w-3.5 h-3.5" />
            <span>TURNKEY PROCESS PIPELINE · 7 STAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] leading-[1.12] mb-5">
            The Metro Pharma Granulation Suite
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            A synchronized 7-stage pharmaceutical pipeline engineering raw API powders into compressed solid dosage forms with minimum human intervention and full cGMP compliance.
          </p>
        </div>

        {/* Quick Stage Jump Ribbon - Wrapped Multi-Pill Grid (No Horizontal Scrollbar) */}
        <div className="mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#0f766e]" />
            <span>Process Stages (Click to Jump Directly)</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {GRANULATION_PIPELINE.map((stage) => (
              <button
                key={stage.step}
                type="button"
                onClick={() => scrollToStage(stage.step)}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-teal-300 text-slate-700 hover:text-slate-900 shadow-2xs hover:shadow-xs active:scale-95"
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
                  Designated Unit: <strong className="text-slate-900 font-bold">{stage.machine}</strong>
                </div>
              </div>

              {/* Card Body: 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Process Intelligence, Metrics, Narrative */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#090d16] tracking-tight mb-3">
                      {stage.name}
                    </h3>

                    {/* Primary Machine Designation */}
                    <div className="text-sm sm:text-base font-bold text-[#0f766e] mb-5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0f766e]"></span>
                      <span>{stage.machine}</span>
                    </div>

                    {/* In-depth Engineering Narrative */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                      {stage.desc}
                    </p>

                    {/* Critical Parameter Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                      {stage.parameters.map((param, i) => (
                        <div 
                          key={i} 
                          className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3.5 shadow-2xs"
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

                  {/* Actions */}
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

                    {/* High-Resolution Machinery Cutout */}
                    <div className="relative w-full h-[220px] sm:h-[260px] my-2 flex items-center justify-center">
                      <Image
                        src={stage.image}
                        alt={stage.machine}
                        fill
                        className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>

                    {/* Contact Metallurgy Certification Tag */}
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
            <span>Full CIP/WIP (Clean-In-Place) washdown automated integration</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50/80 rounded-2xl p-4 border border-slate-200/70">
            <CheckCircle2 className="w-4 h-4 text-[#0f766e] shrink-0" />
            <span>21 CFR Part 11 compliant SCADA / PLC control options</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50/80 rounded-2xl p-4 border border-slate-200/70">
            <ShieldCheck className="w-4 h-4 text-[#0f766e] shrink-0" />
            <span>Zero Cross-Contamination Closed Transfer Valves</span>
          </div>
        </div>

      </div>
    </section>
  );
}
