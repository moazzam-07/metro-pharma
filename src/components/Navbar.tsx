"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenQuote: () => void;
}

const navLinks = [
  { name: "Machinery", href: "#machinery" },
  { name: "Categories", href: "#explorer" },
  { name: "Granulation Line", href: "#granulation" },
  { name: "About Factory", href: "#heritage" },
  { name: "Spares", href: "#spares" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ onOpenSearch, onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl transition-all duration-300 px-4",
          isScrolled ? "top-2 md:top-3" : "top-4 md:top-5"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between rounded-xl border-2 border-black bg-white transition-all duration-200",
            isScrolled
              ? "py-2 px-4 sm:px-6 shadow-[5px_5px_0px_#000]"
              : "py-2.5 px-5 sm:px-7 shadow-[4px_4px_0px_#000]"
          )}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="relative w-[130px] h-[30px]">
              <Image
                src="/assets/logo/logo.png"
                alt="Metro Pharma Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-black bg-[#fef08a] px-2 py-0.5 rounded border-2 border-black shadow-[1.5px_1.5px_0px_#000]">
              Est. 2005
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-bold text-black hover:text-[#990099] hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-black bg-white hover:bg-slate-100 text-xs font-bold text-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
              title="Search equipment"
            >
              <Search className="w-3.5 h-3.5 text-black" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-black border border-black font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Request Quote Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#990099] hover:bg-[#800080] text-white text-xs font-bold px-4 py-2 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
            >
              <span>Request RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-black hover:bg-slate-100 border-2 border-black shadow-[2px_2px_0px_#000] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 rounded-xl bg-white border-2 border-black p-5 shadow-[6px_6px_0px_#000]">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm font-bold text-black hover:text-[#990099] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t-2 border-black mt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full text-center bg-[#990099] hover:bg-[#800080] text-white text-sm font-bold py-2.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] transition-all cursor-pointer"
                >
                  Request Technical Quotation
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
