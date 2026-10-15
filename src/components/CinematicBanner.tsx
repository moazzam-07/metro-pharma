"use client";

import { COMPANY_INFO } from "@/data/machinery";
import { ArrowRight, MessageSquare, Factory, CheckCircle2 } from "lucide-react";

export function CinematicBanner() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative w-full rounded-2xl bg-zinc-950 text-white p-8 sm:p-14 lg:p-16 overflow-hidden border border-zinc-800/80 shadow-xl">
          {/* Subtle industrial grid ambient background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-xs font-mono text-zinc-300 mb-6">
              <Factory className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>CUSTOM FABRICATION · VASAI EAST, MUMBAI</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-semibold tracking-tight leading-[1.15] text-white mb-5">
              Custom Equipment Fabrication &amp; Factory Trials
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you require a standalone vibro sifter or a complete multi-tier fluid bed granulation train, our engineering team manufactures to your exact User Requirement Specification (URS) with documented Factory Acceptance Testing (FAT) before dispatch.
            </p>

            {/* Quick Proof Points */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-9 text-xs text-zinc-300">
              <span className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Raw Material Test Certificates (SS 316L)
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Roughness Ra &lt; 0.38 µm Certified
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Dry &amp; Water Trials FAT Included
              </span>
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
