"use client";

import { Award, Factory, MapPin } from "lucide-react";

export function Heritage() {
  return (
    <section className="py-20 sm:py-28 relative scroll-mt-28" id="heritage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 20-Year Heritage Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200/80 dark:border-teal-800 text-xs font-bold text-[#0f766e] dark:text-[#14b8a6] mb-4">
              <Award className="w-3.5 h-3.5" />
              TWO DECADES OF METALLURGICAL MASTERY
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#090d16] dark:text-white leading-tight mb-6">
              Forged in Precision Since 2005.
            </h2>
            
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-normal">
              Founded in Vasai East, Maharashtra, Metro Pharma has evolved into an engineering authority for solid dosage, liquid, and powder processing machinery. We bridge mechanical heavy-duty reliability with strict cleanroom validation standards.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <span className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#14b8a6] font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-teal-200/80 dark:border-teal-800 group-hover:bg-[#0f766e] group-hover:text-white transition-colors">
                  01
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#090d16] dark:text-white mb-1">
                    Certified Contact Metallurgy
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    All product contact surfaces are forged exclusively in certified SS 316 / SS 316L with electropolished mirror finishes (Ra &lt; 0.38 µm) to prevent microbial and batch contamination pockets.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <span className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#14b8a6] font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-teal-200/80 dark:border-teal-800 group-hover:bg-[#0f766e] group-hover:text-white transition-colors">
                  02
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#090d16] dark:text-white mb-1">
                    cGMP, US-FDA &amp; Cleanroom Validation
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    Designed for global regulatory audits with complete validation dossiers (DQ, IQ, OQ, PQ) alongside rigorous FAT (Factory Acceptance Testing) trials.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <span className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#14b8a6] font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-teal-200/80 dark:border-teal-800 group-hover:bg-[#0f766e] group-hover:text-white transition-colors">
                  03
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#090d16] dark:text-white mb-1">
                    Turnkey Plant Engineering
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    From standalone pilot R&amp;D vibro sifters to integrated multi-ton ointment, cream, and oral liquid syrup plants with PLC automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Editorial Quote Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug text-[#090d16] dark:text-white mb-6">
                &ldquo;Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction, and skillful execution.&rdquo;
              </blockquote>
              
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-normal">
                Our manufacturing plant in Civic Industrial Estate features precision CNC plate bending, automated orbital TIG welding, dynamic balance analyzers, and acoustic sound testing chambers to guarantee decades of uninterrupted uptime.
              </p>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-[#0f766e] dark:text-[#14b8a6]" />
                  Civic Industrial Estate
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0f766e] dark:text-[#14b8a6]" />
                  Vasai East, Mumbai
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
