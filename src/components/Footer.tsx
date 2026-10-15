import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/machinery";

export function Footer() {
  return (
    <footer className="border-t border-[#990099]/25 bg-[#120616] text-slate-300 pt-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="inline-block bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                <div className="relative w-[140px] h-[30px]">
                  <Image
                    src="/assets/logo/logo.png"
                    alt="Metro Pharma"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="text-[14px] text-slate-400 max-w-[360px] leading-relaxed mb-6">
              Manufacturer of cGMP solid dosage and liquid processing machinery in SS 316L. Based in Vasai East, Mumbai since 2005.
            </p>
            <div className="text-[13px] text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-200">Works &amp; Headquarters:</span><br />
              {COMPANY_INFO.address}
            </div>
          </div>

          {/* Machinery Col */}
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-slate-100 mb-4">
              Machinery
            </div>
            <ul className="space-y-2.5 text-[14px] text-slate-400">
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Vibro Sifters
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Multi Mills
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Colloid Mills
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Fluid Bed Dryers
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Metro Coaters
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  RMG Granulators
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-slate-100 mb-4">
              Industries
            </div>
            <ul className="space-y-2.5 text-[14px] text-slate-400">
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Pharmaceuticals
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Food &amp; Beverages
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Fine Chemicals
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Cosmetics &amp; Creams
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-fuchsia-400 transition-colors">
                  Nutraceuticals
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate Col */}
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-slate-100 mb-4">
              Corporate
            </div>
            <ul className="space-y-2.5 text-[14px] text-slate-400">
              <li>
                <a href="#heritage" className="hover:text-fuchsia-400 transition-colors">
                  About Metro Pharma
                </a>
              </li>
              <li>
                <a href="#spares" className="hover:text-fuchsia-400 transition-colors">
                  Spares &amp; Screens
                </a>
              </li>
              <li>
                <a href="#granulation" className="hover:text-fuchsia-400 transition-colors">
                  Turnkey Granulation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-fuchsia-400 transition-colors">
                  Request Consultation
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[13px] text-slate-400 gap-4">
          <div>
            &copy; 2005–2026 Metro Pharma Machines. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <span className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 border border-[#990099]/30 font-mono">cGMP Certified</span>
            <span className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 border border-[#990099]/30 font-mono">ISO 9001 Compliant</span>
            <span className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 border border-[#990099]/30 font-mono">Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

