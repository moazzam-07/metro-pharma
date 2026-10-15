"use client";

import { COMPANY_INFO } from "@/data/machinery";
import { ArrowRight, MessageSquare, Factory, CheckCircle2 } from "lucide-react";

export function CinematicBanner() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative w-full rounded-3xl bg-[#090d16] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl border border-slate-800">
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-800 text-xs font-bold text-teal-300 mb-6">
              <Factory className="w-3.5 h-3.5 text-teal-400" />
              <span>CUSTOM FABRICATION · VASAI EAST, MUMBAI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-[1.12] text-white mb-5">
              Custom Equipment Fabrication &amp; Factory Trials
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Whether you need a standalone vibro sifter or a complete fluid bed granulation train, our engineering team builds to your exact User Requirement Specification (URS) with full FAT trials before dispatch.
            </p>

            {/* Quick Proof Points */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                Raw Material Test Certificates (SS 316L)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                Calibrated Surface Roughness Ra &lt; 0.38 µm
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                Factory Dry &amp; Water Trials Included
              </span>
            </div>

            <div className="flex items-center justify-center gap-3.5 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#090d16] text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Submit Technical URS</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0f766e] hover:bg-teal-600 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
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
