"use client";

import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";
import { ArrowRight, FileText, MapPin, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onSelectMachine: (id: string) => void;
}

const HERO_MACHINES = [
  {
    src: "/assets/machines/vibro-sifter.png",
    alt: "Vibro Sifter & Classifier (12″ to 72″)",
  },
  {
    src: "/assets/machines/fluid-bed-dryer.png",
    alt: "Fluid Bed Dryer FBD (5 to 500 kg)",
  },
  {
    src: "/assets/machines/auto-coater.png",
    alt: "Metro Automated Tablet Coater",
  },
  {
    src: "/assets/machines/rapid-mixer-granulator.png",
    alt: "Rapid Mixer Granulator RMG (High Shear)",
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
    alt: "Gentle Powder Blender",
  },
  {
    src: "/assets/machines/co-mill.png",
    alt: "Under-Driven Cone Mill",
  },
  {
    src: "/assets/machines/vacuum-vibro-sifter.png",
    alt: "Vacumet Closed-Loop Sifter",
  },
  {
    src: "/assets/machines/double-cone-blender.png",
    alt: "Double Cone Blender",
  },
];

export function Hero({ onSelectMachine }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-zinc-50/80 via-white to-white pt-20 sm:pt-24 pb-8 sm:pb-12 border-b border-zinc-200/80">
      {/* Precision technical background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none -z-10" />

      <TiltedGridHero
        images={HERO_MACHINES}
        speed={3.6}
        tileHeight={30}
        aspectRatio={16 / 10}
        gap={5}
        axis={68}
        curve={76}
        fade={14}
        className="w-full h-[520px] sm:h-[680px] lg:h-[740px] relative"
      >
        <div className="container mx-auto px-3 sm:px-6 md:px-8 max-w-5xl z-10 relative flex flex-col items-center text-center justify-between h-full pt-4 sm:pt-8 pb-2 pointer-events-none">
          
          {/* Top Hero Authority Block */}
          <div className="pointer-events-auto flex flex-col items-center">
            {/* Main Headline with Magic UI Metallic Gradient Fill */}
            <h1 className="text-[1.7rem] xs:text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-[1.14] max-w-4xl text-center">
              <span className="inline-block bg-gradient-to-b from-black via-zinc-800 to-zinc-400/85 bg-clip-text text-transparent pb-1">
                Precision Pharmaceutical
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="inline-block bg-gradient-to-b from-black via-zinc-800 to-zinc-400/85 bg-clip-text text-transparent pb-1">
                &amp; Process Machinery
              </span>
            </h1>

            {/* Subtitle with facility & engineering heritage integrated naturally */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-zinc-600 leading-relaxed max-w-2xl text-balance font-normal px-2 sm:px-0">
              Engineered at our Vasai East facility (Est. 2005), Metro Pharma fabricates Vibro Sifters, Fluid Bed Dryers, Auto Coaters, and Granulation trains in certified cGMP SS 316L (Ra &lt; 0.38 µm) with complete DQ, IQ, OQ, and PQ validation dossiers for regulatory cleanrooms.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mt-5 sm:mt-7 w-full sm:w-auto px-4 sm:px-0 max-w-xs sm:max-w-none">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("machinery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#701a75] hover:bg-[#58135c] text-white text-xs sm:text-sm font-semibold px-6 py-3 sm:py-3.5 rounded-lg transition-all cursor-pointer shadow-xs hover:shadow-sm active:scale-[0.98] min-h-[44px]"
              >
                <span>Explore 15+ Machines</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-zinc-50 text-zinc-900 border border-zinc-200 text-xs sm:text-sm font-semibold px-6 py-3 sm:py-3.5 rounded-lg transition-all cursor-pointer shadow-xs active:scale-[0.98] min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-[#701a75]" />
                <span>Request Quotation</span>
              </button>
            </div>
          </div>

          {/* Bottom Trust & Compliance Strip - Desktop only (Mobile has TrustStrip directly below) */}
          <div className="pointer-events-auto w-full pt-6 sm:pt-8 hidden sm:block">
            <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-7 gap-y-2 text-xs font-medium text-zinc-700 py-3 px-5 rounded-xl bg-white/95 border border-zinc-200/90 backdrop-blur-md shadow-2xs">
              <span className="flex items-center gap-1.5 text-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-[#701a75]" />
                <span>Vasai East Works · Est. 2005</span>
              </span>
              <span className="hidden sm:inline text-zinc-300">·</span>
              <span className="flex items-center gap-1.5 text-zinc-800">
                <ShieldCheck className="w-3.5 h-3.5 text-[#701a75]" />
                <span>cGMP SS 316 / 316L Contact Metallurgy</span>
              </span>
              <span className="hidden sm:inline text-zinc-300">·</span>
              <span className="flex items-center gap-1.5 text-zinc-800">
                <Sparkles className="w-3.5 h-3.5 text-[#701a75]" />
                <span>Mirror Electropolish Ra &lt; 0.38 µm</span>
              </span>
              <span className="hidden sm:inline text-zinc-300">·</span>
              <span className="flex items-center gap-1.5 text-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#701a75]" />
                <span>USFDA 21 CFR Part 11</span>
              </span>
            </div>
          </div>

        </div>
      </TiltedGridHero>
    </section>
  );
}

export default Hero;
