"use client";

const metrics = [
  { value: "2005", label: "Year Established", detail: "20+ Years Continuous cGMP" },
  { value: "15+", label: "Machinery Classes", detail: "Solid & Liquid Formulations" },
  { value: "SS 316L", label: "Pharma Contact", detail: "Mirror Electro-Polished < 0.38 µm" },
  { value: "100%", label: "FAT Validated", detail: "DQ / IQ / OQ / PQ Documented" },
];

export function TrustStrip() {
  return (
    <div className="relative z-20 mt-4 sm:mt-6 mb-16 sm:mb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl shadow-xl p-7 sm:p-10 md:p-12 overflow-hidden relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center space-y-2 justify-center transition-transform hover:scale-105 duration-300"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-[#090d16] group-hover:text-[#990099] dark:text-white dark:group-hover:text-[#d946ef] tabular-nums leading-none transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium hidden sm:block">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
