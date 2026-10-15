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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b",
          isScrolled ? "border-zinc-200/90 shadow-xs py-3" : "border-zinc-200/60 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div className="relative w-[140px] sm:w-[155px] h-[32px]">
              <Image
                src="/assets/logo/logo.png"
                alt="Metro Pharma Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
              title="Search equipment"
              aria-label="Search equipment"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Request Quote Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-2 bg-[#701a75] hover:bg-[#58135c] text-white text-xs font-semibold px-4.5 py-2.5 rounded-lg transition-all duration-150 cursor-pointer shadow-xs hover:shadow-sm active:scale-[0.98]"
            >
              <span>Request Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-zinc-200 bg-white px-6 py-6 shadow-xl">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-base font-medium text-zinc-800 hover:text-[#701a75] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-zinc-100 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full text-center bg-[#701a75] hover:bg-[#58135c] text-white text-sm font-semibold py-3 rounded-lg transition-colors cursor-pointer shadow-xs"
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
