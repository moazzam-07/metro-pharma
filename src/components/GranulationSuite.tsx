"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Workflow, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Sliders, 
  ExternalLink,
  Sparkles
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
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = GRANULATION_PIPELINE[activeStepIndex];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % GRANULATION_PIPELINE.length);
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + GRANULATION_PIPELINE.length) % GRANULATION_PIPELINE.length);
  };

  return (
    <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 relative scroll-mt-28" id="granulation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header with generous breathing space */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/90 dark:border-teal-800 text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] mb-5 shadow-xs">
            <Workflow className="w-3.5 h-3.5" />
            <span>TURNKEY PROCESS PIPELINE · 7 STAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] dark:text-white leading-[1.12] mb-5">
            The Metro Pharma Granulation Suite
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            A synchronized 7-stage pharmaceutical pipeline engineering raw API powders into compressed solid dosage forms with minimum human intervention and full cGMP compliance.
          </p>
        </div>

        {/* Interactive Process Pipeline Timeline Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar border-b border-slate-200 dark:border-slate-800">
            {GRANULATION_PIPELINE.map((item, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative flex items-center gap-2.5 px-4 py-3 rounded-xl transition-all cursor-pointer shrink-0 text-left ${
                    isActive 
                      ? "bg-slate-900 text-white shadow-md" 
                      : "bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/90 dark:border-slate-800"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${
                    isActive 
                      ? "bg-[#0f766e] text-white" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-slate-900"
                  }`}>
                    {item.step}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
                    {item.name}
                  </span>
                  {idx < GRANULATION_PIPELINE.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-slate-400 ml-1 hidden xl:block opacity-40" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Stage: Spacious 2-Column Engineering Spotlight */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12 transition-all">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Process Intelligence, Metrics, Narrative */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Step Stage Pill */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#14b8a6] border border-teal-200/90 dark:border-teal-800 text-xs font-bold font-mono">
                      STAGE {activeStep.step} OF 07
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
                      {activeStep.stageTag}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                    {activeStep.name}
                  </h3>

                  {/* Primary Machine Designation */}
                  <div className="text-sm sm:text-base font-bold text-[#0f766e] dark:text-[#14b8a6] mb-5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0f766e]"></span>
                    <span>Designated Equipment: {activeStep.machine}</span>
                  </div>

                  {/* In-depth Engineering Narrative */}
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                    {activeStep.desc}
                  </p>

                  {/* Critical Parameter Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                    {activeStep.parameters.map((param, i) => (
                      <div 
                        key={i} 
                        className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 rounded-xl p-3.5"
                      >
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                          {param.label}
                        </div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                          {param.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Stage Controls & Actions */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  {/* Step Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous Stage</span>
                    </button>
                    <button
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <span>Next Stage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Direct Machine Drawer Launcher */}
                  {onSelectMachine && (
                    <button
                      onClick={() => onSelectMachine(activeStep.machineId)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-[#0f766e] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                    >
                      <span>Inspect Machine Specs</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Stage Spotlight */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full h-[320px] sm:h-[360px] bg-gradient-to-b from-slate-50 to-slate-100/70 dark:from-slate-800/60 dark:to-slate-800/30 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 flex items-center justify-center shadow-inner group">
                  {/* Top Badge on image */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-800 dark:text-white shadow-xs">
                    {activeStep.highlight}
                  </div>

                  {/* Clean Machinery Cutout */}
                  <div className="relative w-full h-full">
                    <Image
                      src={activeStep.image}
                      alt={activeStep.machine}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom Subtitle */}
                  <div className="absolute bottom-4 right-4 z-10 text-[11px] font-mono text-slate-500 font-semibold bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded">
                    SS 316L Ra &lt; 0.38 µm
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Turnkey Compliance Proof */}
        <div className="mt-8 px-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Full CIP/WIP (Clean-In-Place) washdown automated integration</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0f766e] dark:text-[#14b8a6] shrink-0" />
            <span>21 CFR Part 11 compliant SCADA / PLC control options</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Zero Cross-Contamination Closed Transfer Valves</span>
          </div>
        </div>

      </div>
    </section>
  );
}
