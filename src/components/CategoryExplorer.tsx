"use client";

import { useState, useMemo } from "react";
import { MACHINES } from "@/data/machinery";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import DepthCarousel from "@/components/ui/DepthCarousel";

interface CategoryExplorerProps {
  onSelectMachine: (id: string) => void;
}

export function CategoryExplorer({ onSelectMachine }: CategoryExplorerProps) {
  const explorerLines = useMemo(() => [
    { id: "vibro-sifter", title: "Vibro Sifters & Classifiers", badge: "Screening & Sieving" },
    { id: "vacuum-vibro-sifter", title: "Vacumet Closed Loop Sifters", badge: "Dust-Free Containment" },
    { id: "multi-mill", title: "Multi Mills & Granulators", badge: "Reversible Milling" },
    { id: "auto-coater", title: "Metro Coaters & Auto Coaters", badge: "Perforated Pan Coating" },
    { id: "fluid-bed-dryer", title: "Fluid Bed Dryers (FBD)", badge: "HEPA Fluidized Drying" },
    { id: "rapid-mixer-granulator", title: "Rapid Mixer Granulators (RMG)", badge: "High-Shear Mixing" },
    { id: "colloid-mill", title: "Colloid Mills & Emulsifiers", badge: "Liquid Homogenization" },
    { id: "octagonal-blender", title: "Gentle Powder Blenders", badge: "Zero-Attrition Tumbling" }
  ], []);

  const [activeId, setActiveId] = useState(explorerLines[0].id);

  const activeIndex = useMemo(() => {
    const idx = explorerLines.findIndex((l) => l.id === activeId);
    return idx >= 0 ? idx : 0;
  }, [explorerLines, activeId]);

  const activeMachine = MACHINES.find((m) => m.id === activeId) || MACHINES[0];
  const activeLine = explorerLines.find((l) => l.id === activeId) || explorerLines[0];

  const carouselItems = useMemo(() => {
    return explorerLines.map((line) => {
      const machine = MACHINES.find((m) => m.id === line.id) || MACHINES[0];
      return {
        id: line.id,
        image: machine.image,
        alt: machine.name,
        title: machine.name,
        badge: line.badge,
        capacity: machine.capacity
      };
    });
  }, [explorerLines]);

  return (
    <section className="py-16 sm:py-24 relative scroll-mt-24" id="explorer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold text-[#701a75] uppercase tracking-wider block mb-2">
            Formulation &amp; Processing Lines
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-zinc-950 mb-3">
            Equipment for Solid Dosage &amp; Liquid Lines
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
            Select an equipment line to review standard batch capacities, contact metallurgy, and technical specifications in interactive 3D depth.
          </p>
        </div>

        {/* Clean Container */}
        <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Nav List: Horizontal swipeable on mobile, vertical stack on desktop */}
            <div className="lg:col-span-5 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 no-scrollbar touch-scroll snap-x">
              {explorerLines.map((line) => {
                const isActive = line.id === activeId;
                return (
                  <button
                    key={line.id}
                    onMouseEnter={() => setActiveId(line.id)}
                    onClick={() => setActiveId(line.id)}
                    type="button"
                    className={`flex items-center justify-between p-3 sm:p-3.5 rounded-xl transition-all text-left shrink-0 lg:shrink lg:w-full border cursor-pointer snap-start active:scale-[0.98] ${
                      isActive
                        ? "bg-zinc-100/90 border-zinc-200/90 text-zinc-950 font-semibold shadow-xs"
                        : "bg-white lg:bg-transparent border-zinc-200/70 lg:border-transparent text-zinc-700 hover:bg-zinc-50/80"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap lg:whitespace-normal mr-3">
                      {line.title}
                    </span>
                    <span
                      className={`text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-md border transition-all ${
                        isActive
                          ? "bg-white text-zinc-900 border-zinc-200 font-semibold"
                          : "bg-zinc-100/60 text-zinc-500 border-zinc-200/60 font-normal"
                      }`}
                    >
                      {line.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Machine Preview Stage with DepthCarousel */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-50/60 border border-zinc-200/80 rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between relative transition-all">
                
                {/* Header strip */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200/70 z-10 relative">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#701a75]" />
                    <span className="text-xs font-mono font-medium text-zinc-700 uppercase tracking-wider">
                      {activeLine.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <span className="hidden sm:inline">Drag to rotate 3D stack ·</span>
                    <span>SS 316L Contact</span>
                  </div>
                </div>

                {/* Mobile Direct Machine View (sm:hidden) */}
                <div className="sm:hidden relative w-full h-[200px] my-2 flex items-center justify-center bg-white rounded-xl border border-zinc-200/80 p-3">
                  <img
                    src={activeMachine.image}
                    alt={activeMachine.name}
                    className="max-h-[175px] max-w-[85%] object-contain drop-shadow-sm"
                  />
                  <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-zinc-400">
                    SS 316L Contact
                  </span>
                </div>

                {/* Desktop 3D Depth Carousel Stage (hidden sm:flex) */}
                <div className="hidden sm:flex relative w-full h-[275px] sm:h-[295px] my-1 items-center justify-center overflow-visible">
                  <DepthCarousel
                    items={carouselItems}
                    selectedIndex={activeIndex}
                    cardWidth={220}
                    cardHeight={255}
                    radius={16}
                    depth={150}
                    spread={60}
                    tilt={16}
                    tiltDirection="right"
                    perspective={1100}
                    visibleCards={4}
                    falloff={0.22}
                    blur={3.5}
                    autoplay={false}
                    loop={true}
                    showControls={true}
                    showIndicators={true}
                    onChange={(idx, item) => {
                      if (item.id && item.id !== activeId) {
                        setActiveId(item.id);
                      }
                    }}
                    onCardSelect={(idx, item) => {
                      if (item.id) {
                        onSelectMachine(item.id);
                      }
                    }}
                  />
                </div>

                {/* Machine Details & Action */}
                <div className="pt-3 sm:pt-4 border-t border-zinc-200/80 z-10 relative bg-zinc-50/60">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <h3 className="text-base sm:text-xl font-heading font-bold text-zinc-950">
                        {activeMachine.name}
                      </h3>
                      <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed font-normal mt-0.5 max-w-xl">
                        {activeMachine.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3 pt-3 border-t border-zinc-200/50">
                    <div className="flex gap-6 text-xs">
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                          Capacity
                        </span>
                        <span className="font-semibold text-zinc-900">
                          {activeMachine.capacity}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                          Metallurgy
                        </span>
                        <span className="font-semibold text-zinc-900">
                          SS 316 / 316L
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                          Finish
                        </span>
                        <span className="font-semibold text-zinc-900">
                          Ra &lt; 0.38 µm
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#701a75] hover:bg-[#58135c] text-white text-xs font-semibold px-4.5 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
                      onClick={() => onSelectMachine(activeMachine.id)}
                    >
                      <span>Inspect Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

