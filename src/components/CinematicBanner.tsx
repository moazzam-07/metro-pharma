"use client";

import { COMPANY_INFO } from "@/data/machinery";
import { ArrowRight, MessageSquare, Factory, CheckCircle2 } from "lucide-react";

export function CinematicBanner() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative w-full rounded-xl bg-black text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[8px_8px_0px_#990099] border-2 border-black">
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#fef08a] border-2 border-black text-xs font-mono font-bold text-black mb-6 shadow-[2px_2px_0px_#000]">
              <Factory className="w-3.5 h-3.5 text-black" />
              <span>CUSTOM FABRICATION · VASAI EAST, MUMBAI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-[1.12] text-white mb-5">
              Custom Equipment Fabrication &amp; Factory Trials
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              Whether you need a standalone vibro sifter or a complete fluid bed granulation train, our engineering team builds to your exact User Requirement Specification (URS) with full FAT trials before dispatch.
            </p>

            {/* Quick Proof Points */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 text-xs font-mono text-zinc-200">
              <span className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#fef08a]" />
                Raw Material Test Certificates (SS 316L)
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#fef08a]" />
                Calibrated Roughness Ra &lt; 0.38 µm
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#fef08a]" />
                Factory Dry &amp; Water Trials Included
              </span>
            </div>

            <div className="flex items-center justify-center gap-3.5 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#fef08a] hover:bg-yellow-300 text-black text-xs sm:text-sm font-black px-6 py-3.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <span>Submit Technical URS</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#990099] hover:bg-[#800080] text-white text-xs sm:text-sm font-bold px-5 py-3.5 rounded-lg border-2 border-white shadow-[3px_3px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Design Desk</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
