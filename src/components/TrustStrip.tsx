"use client";

const metrics = [
  { value: "2005", label: "Year Established", detail: "Vasai Works, Mumbai · 20+ Yrs cGMP" },
  { value: "15+", label: "Machinery Classes", detail: "Solid & Liquid Formulations" },
  { value: "SS 316L", label: "Pharma Contact", detail: "Mirror Electro-Polished < 0.38 µm" },
  { value: "100%", label: "FAT Validated", detail: "DQ / IQ / OQ / PQ Documented" },
];

export function TrustStrip() {
  return (
    <div className="relative z-20 mt-3 sm:mt-6 mb-12 sm:mb-20 px-3.5 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-xs p-4 sm:p-8 md:p-10 relative overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 md:gap-8">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-3 sm:p-2 rounded-xl bg-zinc-50/80 sm:bg-transparent border border-zinc-200/60 sm:border-0"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-zinc-950 tabular-nums">
                {metric.value}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-zinc-800 uppercase tracking-wider mt-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-zinc-500 font-normal hidden sm:block mt-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
