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
            "flex items-center justify-between rounded-2xl border shadow-sm transition-all duration-300 bg-white/95 backdrop-blur-xl",
            isScrolled
              ? "py-2.5 px-4 sm:px-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] border-slate-300"
              : "py-3 px-5 sm:px-7 border-slate-200"
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
            <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              Est. 2005
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#0f766e] hover:bg-slate-50 rounded-lg transition-colors"
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-600 transition-colors cursor-pointer"
              title="Search equipment"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline-block rounded bg-white px-1.5 py-0.5 text-[10px] text-slate-400 border border-slate-200 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Request Quote Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#090d16] hover:bg-[#0f766e] text-white text-xs font-semibold px-4.5 py-2 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
            >
              <span>Request RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-white border border-slate-200 p-5 shadow-xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#0f766e] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full text-center bg-[#090d16] hover:bg-[#0f766e] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
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
