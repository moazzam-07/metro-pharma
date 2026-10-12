"use client";

import { motion } from "framer-motion";
import { Wrench, Disc, Filter, Layers, Droplets, ArrowRight } from "lucide-react";

export function Spares() {
  const spareCategories = [
    {
      title: "Precision Sifter Screens",
      desc: "SS 316 pre-tensioned screens from 4 mesh to 500 mesh with certified aperture compliance and bonded food-grade seals.",
      icon: Filter,
      tag: "4 to 500 Mesh",
    },
    {
      title: "Milling Perforated Sieves",
      desc: "Heavy-gauge punched and wire-woven screens for Multi Mill and Co-Mill in round, rasping, and slotted apertures (0.5mm – 12mm).",
      icon: Disc,
      tag: "0.5mm - 12mm",
    },
    {
      title: "Sanitary Gaskets & Seals",
      desc: "USP Class VI food & pharma grade silicone, Viton, and PTFE clamp gaskets, clamp rings, and mechanical seal faces.",
      icon: Layers,
      tag: "USP Class VI",
    },
    {
      title: "Anti-Bearding Spray Guns",
      desc: "Calibrated automatic atomizing guns and fluid delivery nozzles engineered for uniform tablet coating beds without nozzle buildup.",
      icon: Droplets,
      tag: "Zero-Bearding",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28" id="spares">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200/80 dark:border-teal-800 text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] mb-4">
              <Wrench className="w-3.5 h-3.5" />
              GENUINE OEM CHANGE PARTS
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] dark:text-white leading-tight mb-4">
              Spares &amp; Change Parts Support
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Eliminate costly plant downtime with certified OEM change parts and precision spare components calibrated specifically for Metro Pharma equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spareCategories.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#14b8a6] flex items-center justify-center border border-teal-200/80 dark:border-teal-800 group-hover:bg-[#0f766e] group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-600">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] group-hover:translate-x-1 transition-transform pt-3 border-t border-slate-200/80 dark:border-slate-700/60"
                  >
                    Inquire Spare Part
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
