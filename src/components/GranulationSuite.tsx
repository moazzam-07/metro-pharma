"use client";

import { motion } from "framer-motion";
import { GRANULATION_STEPS } from "@/data/machinery";
import { Workflow, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export function GranulationSuite() {
  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28" id="granulation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Main Process Box */}
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200/80 dark:border-teal-800 text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] mb-4">
              <Workflow className="w-3.5 h-3.5" />
              TURNKEY CLOSED-LOOP MANUFACTURING
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] dark:text-white leading-tight mb-4">
              The Metro Pharma Granulation Suite
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              A synchronized 7-stage pharmaceutical process flow engineering raw API compounds into compressed solid dosage forms with minimum manual human intervention.
            </p>
          </div>

          {/* 7-Step Interactive Flow Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative">
            {GRANULATION_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="group bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-teal-500/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#14b8a6] font-heading font-bold text-xs flex items-center justify-center border border-teal-200/80 dark:border-teal-800 group-hover:bg-[#0f766e] group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    {idx < 6 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-[#0f766e] transition-colors hidden lg:block" />
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {step.name}
                  </h3>

                  <div className="text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] mb-2.5">
                    {step.machine}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/60 pt-2.5">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Compliance Callout */}
          <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full CIP/WIP (Clean-In-Place) washdown automated integration</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0f766e] dark:text-[#14b8a6] shrink-0" />
              <span>21 CFR Part 11 compliant SCADA / PLC control options</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
