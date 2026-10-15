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
        <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-12 shadow-sm relative">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/90 text-xs font-bold text-[#0f766e] mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>SPARE PARTS &amp; TOOLING</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] leading-tight mb-4">
              Replacement Screens, Sieves &amp; Change Parts
            </h2>
            
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              We fabricate and supply replacement sifter screens, perforated mill sieves, silicone gaskets, and spray nozzles tailored to your machine models and batch tooling requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spareCategories.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-400 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0f766e] flex items-center justify-center border border-teal-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f766e] hover:text-[#090d16] transition-colors pt-3 border-t border-slate-200"
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
