"use client";

import { COMPANY_INFO } from "@/data/machinery";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CinematicBanner() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative w-full rounded-2xl bg-zinc-950 text-white p-8 sm:p-14 lg:p-16 overflow-hidden border border-zinc-800/80 shadow-xl">
          {/* Subtle industrial grid ambient background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="text-xs font-mono font-medium text-zinc-400 tracking-wider uppercase mb-4">
              Custom Fabrication · Vasai East, Mumbai
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-semibold tracking-tight leading-[1.15] text-white mb-5">
              Custom Equipment Fabrication &amp; Factory Trials
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you require a standalone vibro sifter or a complete multi-tier fluid bed granulation train, our engineering team manufactures to your exact User Requirement Specification (URS) with documented Factory Acceptance Testing (FAT) before dispatch.
            </p>

            {/* Engineering Standards Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 mb-8 max-w-2xl mx-auto text-left">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500">Contact Metallurgy</span>
                <span className="text-xs text-zinc-300 font-medium">SS 316L Mill Certified</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500">Surface Roughness</span>
                <span className="text-xs text-zinc-300 font-medium">Ra &lt; 0.38 µm Certified</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500">Validation Protocol</span>
                <span className="text-xs text-zinc-300 font-medium">Full FAT Trials Included</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3.5 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#701a75] hover:bg-[#86198f] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Submit Technical URS</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg border border-zinc-700/80 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat with Design Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
