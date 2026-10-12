"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  ChevronRight, 
  CheckCircle2, 
  Activity,
  Award,
  Sparkles
} from "lucide-react";

interface HeroProps {
  onSelectMachine: (id: string) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatGentle: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatAlt: Variants = {
  animate: {
    y: [0, 6, 0],
    transition: {
      duration: 5.2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
};

export function Hero({ onSelectMachine }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 sm:pt-40 pb-20 sm:pb-28 w-full overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-slate-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Subtle Clinical Cleanroom Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-45 dark:opacity-15 pointer-events-none -z-10" />

      {/* Subtle ambient light pool */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-teal-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Copy, Badges, CTAs, Trust Proof */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start max-w-2xl text-left"
          >
            {/* Live cGMP Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm text-xs font-semibold text-slate-800 dark:text-slate-200 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>cGMP & US-FDA COMPLIANT</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="text-[#0f766e] dark:text-[#14b8a6] font-bold">EST. 2005 · VASAI, MUMBAI</span>
            </motion.div>

            {/* High-Impact Headline with Crisp High-Contrast Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-heading font-extrabold text-[#090d16] dark:text-white tracking-tight leading-[1.08] mb-6"
            >
              Precision Machinery for{" "}
              <span className="text-[#0f766e] dark:text-[#14b8a6]">
                Pharma & Chemical
              </span>{" "}
              Lines.
            </motion.h1>

            {/* Editorial Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl mb-8 font-normal"
            >
              High-containment Vibro Sifters, Fluid Bed Dryers, Auto Coaters & Rapid Mixer Granulators engineered with mirror-finish <strong className="font-semibold text-slate-950 dark:text-white">SS 316L (Ra &lt; 0.38 µm)</strong> metallurgy and two decades of validated cleanroom performance.
            </motion.p>

            {/* Disciplined CTA Button Cluster */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10"
            >
              <button
                type="button"
                onClick={() => {
                  document.getElementById("machinery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#090d16] hover:bg-[#0f766e] text-white shadow-md hover:shadow-lg cursor-pointer text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95"
              >
                Explore Machinery Suite
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300/90 shadow-xs hover:shadow-sm cursor-pointer text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95 dark:bg-slate-900 dark:text-white dark:border-slate-700"
              >
                <FileText className="w-4 h-4 text-[#0f766e] dark:text-[#14b8a6]" />
                Request Technical RFQ
              </button>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("granulation")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#0f766e] dark:hover:text-[#14b8a6] transition-colors px-3 py-2 cursor-pointer"
              >
                Process Flow
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Trust Mini Proof Strip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/90 dark:border-slate-800 w-full text-xs text-slate-700 dark:text-slate-300 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>DQ / IQ / OQ / PQ Documented</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0f766e] dark:text-[#14b8a6] shrink-0" />
                <span>100% Factory FAT Validated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Zero Contamination Crevices</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Multi-Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[460px] sm:h-[540px] w-full"
          >
            {/* Floating Live Chip 1 */}
            <motion.div
              variants={floatGentle}
              animate="animate"
              className="absolute -top-3 left-6 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-full px-3.5 py-1 text-[11px] font-bold text-slate-900 dark:text-white shadow-lg flex items-center gap-2"
            >
              <Activity className="w-3.5 h-3.5 text-[#0f766e]" />
              High-Containment Separation
            </motion.div>

            {/* Floating Live Chip 2 */}
            <motion.div
              variants={floatAlt}
              animate="animate"
              className="absolute -bottom-2 right-6 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-full px-3.5 py-1.5 text-[11px] font-bold text-slate-900 dark:text-white shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Mirror Polish Ra &lt; 0.38 µm
            </motion.div>

            {/* CARD 1: Top Center — Vibro Sifter (Flagship) */}
            <div
              onClick={() => onSelectMachine("vibro-sifter")}
              className="absolute left-1/2 top-4 -translate-x-1/2 w-[240px] sm:w-[280px] h-[230px] sm:h-[260px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-3 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group z-20 overflow-hidden"
              title="Click to view Vibro Sifter specifications"
            >
              <div className="w-full h-full bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-3.5 flex flex-col justify-between relative border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/50 border border-teal-200/60 dark:border-teal-800/50 px-2.5 py-0.5 rounded-full text-[#0f766e] dark:text-[#14b8a6]">
                    Flagship Sifter
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-bold">
                    12″ to 72″
                  </span>
                </div>

                <div className="relative w-full h-[140px] my-auto">
                  <Image
                    src="/assets/machines/vibro-sifter.png"
                    alt="Vibro Sifter"
                    fill
                    sizes="280px"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>

                <div className="z-10 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Vibro Sifter
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      Grading & Classification
                    </p>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-800 dark:text-white group-hover:bg-[#0f766e] group-hover:text-white transition-colors shadow-xs">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 2: Right Middle — Auto Coater */}
            <div
              onClick={() => onSelectMachine("auto-coater")}
              className="absolute right-0 top-[42%] w-[200px] sm:w-[240px] h-[200px] sm:h-[230px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-3 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group z-25 overflow-hidden"
              title="Click to view Metro Coater specifications"
            >
              <div className="w-full h-full bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-3 flex flex-col justify-between relative border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200/80 dark:bg-slate-700 px-2 py-0.5 rounded-full text-slate-800 dark:text-slate-200">
                    cGMP Coater
                  </span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 font-bold">
                    24″ to 66″
                  </span>
                </div>

                <div className="relative w-full h-[120px] my-auto">
                  <Image
                    src="/assets/machines/auto-coater.png"
                    alt="Auto Coater"
                    fill
                    sizes="240px"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="z-10 flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">
                      Metro Auto-Coater
                    </p>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium">
                      Film & Sugar Coating
                    </p>
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-[#0f766e] transition-colors font-bold">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 3: Bottom Left — Fluid Bed Dryer */}
            <div
              onClick={() => onSelectMachine("fluid-bed-dryer")}
              className="absolute left-0 bottom-4 w-[190px] sm:w-[230px] h-[190px] sm:h-[220px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-3 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group z-15 overflow-hidden"
              title="Click to view Fluid Bed Dryer specifications"
            >
              <div className="w-full h-full bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-3 flex flex-col justify-between relative border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/50 px-2 py-0.5 rounded-full">
                    HEPA Drying
                  </span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 font-bold">
                    30 to 500 Kg
                  </span>
                </div>

                <div className="relative w-full h-[110px] my-auto">
                  <Image
                    src="/assets/machines/fluid-bed-dryer.png"
                    alt="Fluid Bed Dryer"
                    fill
                    sizes="230px"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="z-10 flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">
                      Fluid Bed Dryer
                    </p>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium">
                      Rapid Fluidization
                    </p>
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-[#0f766e] transition-colors font-bold">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
