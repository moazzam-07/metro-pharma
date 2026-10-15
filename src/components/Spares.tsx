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
    <section className="py-20 sm:py-24 relative scroll-mt-28" id="spares">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-white border-2 border-black rounded-xl p-7 sm:p-12 shadow-[6px_6px_0px_#000] relative">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#fef08a] border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black mb-4">
              <Wrench className="w-3.5 h-3.5 text-black" />
              <span>SPARE PARTS &amp; TOOLING</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-black leading-tight mb-4">
              Replacement Screens, Sieves &amp; Change Parts
            </h2>
            
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed font-medium">
              We fabricate and supply replacement sifter screens, perforated mill sieves, silicone gaskets, and spray nozzles tailored to your machine models and batch tooling requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spareCategories.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f4f4f5] border-2 border-black rounded-xl p-6 flex flex-col justify-between shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#fef08a] text-black flex items-center justify-center border-2 border-black shadow-[1.5px_1.5px_0px_#000]">
                        <IconComp className="w-5 h-5 text-black" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-black bg-white px-2.5 py-0.5 rounded border-2 border-black">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-black text-black mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-700 leading-relaxed mb-6 font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black hover:text-[#990099] transition-colors pt-3 border-t-2 border-black"
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
