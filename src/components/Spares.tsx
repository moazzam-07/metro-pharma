"use client";

import { Wrench, Disc, Filter, Layers, Droplets, ArrowRight } from "lucide-react";

export function Spares() {
  const spareCategories = [
    {
      title: "Vibro Sifter Screens",
      desc: "SS 316 pre-tensioned screens from 4 mesh to 500 mesh with certified aperture compliance and food-grade silicone edge bonding.",
      icon: Filter,
      tag: "4 to 500 Mesh",
    },
    {
      title: "Milling Perforated Sieves",
      desc: "Heavy-gauge punched and wire-woven screens for Multi Mill and Co-Mill in round, rasping, and slotted apertures (0.5 mm to 12 mm).",
      icon: Disc,
      tag: "0.5mm – 12mm",
    },
    {
      title: "Sanitary Gaskets & Seals",
      desc: "USP Class VI pharma-grade silicone, Viton, and PTFE tri-clamp gaskets, lid packing rings, and mechanical seal faces.",
      icon: Layers,
      tag: "USP Class VI",
    },
    {
      title: "Coating Spray Guns",
      desc: "Automatic atomizing guns and fluid delivery manifolds engineered for uniform tablet coating beds with anti-bearding nozzles.",
      icon: Droplets,
      tag: "Anti-Bearding",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28 bg-white" id="spares">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="border border-zinc-200/90 rounded-2xl p-7 sm:p-12 bg-zinc-50/50 shadow-xs relative">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-medium text-[#701a75] uppercase tracking-wider mb-2">
              Spare Parts &amp; Tooling Support
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-zinc-900 leading-tight mb-4">
              Replacement Screens, Sieves &amp; Change Parts
            </h2>
            
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
              We fabricate and stock precision replacement sifter screens, perforated mill sieves, certified sanitary gaskets, and spray nozzles tailored to your machine models and tooling specs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spareCategories.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-zinc-200/80 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-300 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-zinc-100 text-[#701a75] flex items-center justify-center border border-zinc-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-medium text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-heading font-semibold text-zinc-900 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#701a75] hover:text-[#86198f] transition-colors pt-3 border-t border-zinc-100"
                  >
                    <span>Inquire Spare Part</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
