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
      <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_#000] p-6 sm:p-8 md:p-10 relative overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-1.5 justify-center p-3 rounded-lg hover:bg-[#f4f4f5] transition-colors"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-mono font-black tracking-tight text-black hover:text-[#990099] tabular-nums leading-none transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-black uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-xs text-zinc-600 font-medium hidden sm:block">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
