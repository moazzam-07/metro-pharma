"use client";

import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";

const PHARMA_IMAGES = [
  {
    src: "/assets/machines/vibro-sifter.png",
    alt: "Vibro Sifter & Classifier",
  },
  {
    src: "/assets/machines/fluid-bed-dryer.png",
    alt: "Fluid Bed Dryer (FBD)",
  },
  {
    src: "/assets/machines/auto-coater.png",
    alt: "Automated Tablet Coater",
  },
  {
    src: "/assets/machines/rapid-mixer-granulator.png",
    alt: "Rapid Mixer Granulator (RMG)",
  },
  {
    src: "/assets/machines/multi-mill.png",
    alt: "Multi Mill & Granulator",
  },
  {
    src: "/assets/machines/colloid-mill.png",
    alt: "Colloid Mill & Homogenizer",
  },
  {
    src: "/assets/machines/octagonal-blender.png",
    alt: "Octagonal Powder Blender",
  },
  {
    src: "/assets/machines/co-mill.png",
    alt: "Under-Driven Co-Mill",
  },
  {
    src: "/assets/machines/vacuum-vibro-sifter.png",
    alt: "Vacumet Closed Loop Sifter",
  },
];

export default function TiltedGridHeroDemo() {
  return (
    <TiltedGridHero
      images={PHARMA_IMAGES}
      className="min-h-[580px] w-full rounded-2xl border border-zinc-200 bg-zinc-50/50"
      speed={3.5}
      curve={75}
      tileHeight={30}
      aspectRatio={16 / 10}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center pointer-events-auto">
        <div className="px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#701a75]" />
            <span className="text-xs font-mono font-medium text-zinc-700 uppercase tracking-wider">
              Vasai East, Mumbai · Established 2005
            </span>
          </div>

          <h1 className="text-balance text-4xl font-heading font-extrabold tracking-tight text-zinc-950 sm:text-6xl">
            Precision Pharmaceutical &amp; Process Machinery
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Metro Pharma manufactures Vibro Sifters, Fluid Bed Dryers, Auto Coaters, and Granulation lines in certified SS 316L (Ra &lt; 0.38 µm).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#machinery"
            className="bg-[#701a75] hover:bg-[#58135c] text-white text-xs font-semibold px-5 py-3 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            Explore 15+ Machines &rarr;
          </a>
          <a
            href="#contact"
            className="bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs font-semibold px-5 py-3 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            Request Quotation
          </a>
        </div>
      </div>
    </TiltedGridHero>
  );
}
