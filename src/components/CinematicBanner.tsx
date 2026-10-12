"use client";

import { COMPANY_INFO } from "@/data/machinery";
import { ArrowRight, MessageSquare, Factory } from "lucide-react";

export function CinematicBanner() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative w-full rounded-3xl bg-[#090d16] text-white p-10 sm:p-16 lg:p-20 overflow-hidden flex items-center justify-center text-center shadow-2xl border border-slate-800">
          {/* Subtle clinical radial glow */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(15,118,110,0.18)_0%,rgba(15,23,42,0.98)_80%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-800 text-xs font-bold text-teal-300 mb-8">
              <Factory className="w-3.5 h-3.5" />
              DIRECT FACTORY COMMISSIONING · MUMBAI
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.08] text-white mb-6">
              Engineering Solutions.{" "}
              <span className="text-teal-400">
                Shaping Global Health.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
              Trusted by commercial formulation plants, chemical manufacturers, and R&D pilot labs worldwide for validated cGMP manufacturing excellence.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 text-sm font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
              >
                Request Facility Consultation
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                Direct WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
