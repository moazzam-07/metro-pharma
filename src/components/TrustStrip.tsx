"use client";

const metrics = [
  { value: "2005", label: "Year Established", detail: "Vasai Works, Mumbai · 20+ Yrs cGMP" },
  { value: "15+", label: "Machinery Classes", detail: "Solid & Liquid Formulations" },
  { value: "SS 316L", label: "Pharma Contact", detail: "Mirror Electro-Polished < 0.38 µm" },
  { value: "100%", label: "FAT Validated", detail: "DQ / IQ / OQ / PQ Documented" },
];

export function TrustStrip() {
  return (
    <div className="relative z-20 mt-4 sm:mt-6 mb-16 sm:mb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-xs p-6 sm:p-8 md:p-10 relative overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-zinc-100">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center space-y-1 justify-center ${i > 1 ? 'pt-4 lg:pt-0' : ''}`}
            >
              <div className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-zinc-950 tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-zinc-800 uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-xs text-zinc-500 font-normal hidden sm:block">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
