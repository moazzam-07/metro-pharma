import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/machinery";

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white text-black pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="inline-block bg-white px-3.5 py-2 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000]">
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
            <p className="text-[14px] text-zinc-700 max-w-[360px] leading-relaxed mb-6 font-medium">
              Manufacturer of cGMP solid dosage and liquid processing machinery in SS 316L. Based in Vasai East, Mumbai since 2005.
            </p>
            <div className="text-[13px] text-zinc-800 leading-relaxed font-medium">
              <span className="font-mono font-black text-black">Works &amp; Headquarters:</span><br />
              {COMPANY_INFO.address}
            </div>
          </div>

          {/* Machinery Col */}
          <div>
            <div className="text-[12px] font-mono font-bold uppercase tracking-wider text-black mb-4 border-b-2 border-black pb-1 inline-block">
              Machinery
            </div>
            <ul className="space-y-2.5 text-[14px] text-zinc-700 font-medium">
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Vibro Sifters
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Multi Mills
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Colloid Mills
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Fluid Bed Dryers
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Metro Coaters
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  RMG Granulators
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <div className="text-[12px] font-mono font-bold uppercase tracking-wider text-black mb-4 border-b-2 border-black pb-1 inline-block">
              Industries
            </div>
            <ul className="space-y-2.5 text-[14px] text-zinc-700 font-medium">
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Pharmaceuticals
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Food &amp; Beverages
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Fine Chemicals
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Cosmetics &amp; Creams
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-[#990099] transition-colors">
                  Nutraceuticals
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate Col */}
          <div>
            <div className="text-[12px] font-mono font-bold uppercase tracking-wider text-black mb-4 border-b-2 border-black pb-1 inline-block">
              Corporate
            </div>
            <ul className="space-y-2.5 text-[14px] text-zinc-700 font-medium">
              <li>
                <a href="#heritage" className="hover:text-[#990099] transition-colors">
                  About Metro Pharma
                </a>
              </li>
              <li>
                <a href="#spares" className="hover:text-[#990099] transition-colors">
                  Spares &amp; Screens
                </a>
              </li>
              <li>
                <a href="#granulation" className="hover:text-[#990099] transition-colors">
                  Turnkey Granulation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#990099] transition-colors">
                  Request Consultation
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-black hover:text-[#990099] font-mono font-bold transition-colors"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black animate-pulse"></span>
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between text-[13px] text-zinc-800 gap-4 font-medium">
          <div>
            &copy; 2005–2026 Metro Pharma Machines. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="px-2.5 py-1 rounded bg-[#fef08a] text-black border-2 border-black font-mono font-bold shadow-[1.5px_1.5px_0px_#000]">cGMP Certified</span>
            <span className="px-2.5 py-1 rounded bg-white text-black border-2 border-black font-mono font-bold shadow-[1.5px_1.5px_0px_#000]">ISO 9001 Compliant</span>
            <span className="px-2.5 py-1 rounded bg-white text-black border-2 border-black font-mono font-bold shadow-[1.5px_1.5px_0px_#000]">Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

