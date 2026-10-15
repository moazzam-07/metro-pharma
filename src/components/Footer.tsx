import Image from "next/image";
import { COMPANY_INFO } from "@/data/machinery";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="inline-block bg-white px-3 py-1.5 rounded-lg border border-zinc-800">
                <div className="relative w-[130px] h-[28px]">
                  <Image
                    src="/assets/logo/logo.png"
                    alt="Metro Pharma"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 max-w-[360px] leading-relaxed mb-6">
              Manufacturer of cGMP solid dosage, liquid, and ointment processing machinery in SS 316L. Based in Vasai East, Mumbai since 2005.
            </p>
            <div className="text-xs text-zinc-400 leading-relaxed font-mono">
              <span className="text-zinc-200 font-medium">Works &amp; Headquarters:</span><br />
              {COMPANY_INFO.address}
            </div>
          </div>

          {/* Machinery Col */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Machinery
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Vibro Sifters
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Multi Mills
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Colloid Mills
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Fluid Bed Dryers
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Metro Coaters
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  RMG Granulators
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Industries
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Pharmaceuticals
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Food &amp; Beverages
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Fine Chemicals
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Cosmetics &amp; Creams
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-zinc-400 hover:text-white transition-colors">
                  Nutraceuticals
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate Col */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Corporate
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#heritage" className="text-zinc-400 hover:text-white transition-colors">
                  About Metro Pharma
                </a>
              </li>
              <li>
                <a href="#spares" className="text-zinc-400 hover:text-white transition-colors">
                  Spares &amp; Screens
                </a>
              </li>
              <li>
                <a href="#granulation" className="text-zinc-400 hover:text-white transition-colors">
                  Turnkey Granulation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                  Request Quotation
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white font-mono text-xs transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  WhatsApp Desk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            &copy; 2005–2026 Metro Pharma Machines. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">cGMP Certified</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">ISO 9001 Compliant</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">SS 316L Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
