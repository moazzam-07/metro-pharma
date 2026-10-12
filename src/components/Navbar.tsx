"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenQuote: () => void;
}

const navLinks = [
  { name: "Machinery", href: "#machinery" },
  { name: "Explorer", href: "#explorer" },
  { name: "Process Flow", href: "#granulation" },
  { name: "Heritage", href: "#heritage" },
  { name: "Spares", href: "#spares" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ onOpenSearch, onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
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
            "flex items-center justify-between rounded-full border shadow-sm transition-all duration-300",
            "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl",
            isScrolled
              ? "py-2.5 px-4 sm:px-6 shadow-[0_8px_30px_rgba(15,23,42,0.08)] border-slate-300/80 dark:border-slate-700"
              : "py-3 px-5 sm:px-7 border-slate-200/90 dark:border-slate-800"
          )}
        >
          {/* Brand Anchor with Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
          >
            {/* Live cGMP indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>

            <div className="relative w-[130px] h-[30px]">
              <Image
                src="/assets/logo/logo.png"
                alt="Metro Pharma Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links with Spring Hover Indicator */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3.5 py-1.5 text-[14px] font-semibold text-slate-800 dark:text-slate-200 hover:text-[#0f766e] dark:hover:text-[#14b8a6] transition-colors"
              >
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="header-hover"
                    className="absolute inset-0 rounded-full bg-teal-50 dark:bg-teal-950/40 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Stack: Search + RFQ Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick ⌘K Search trigger */}
            <button
              onClick={onOpenSearch}
              type="button"
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200/90 dark:border-slate-700 rounded-full px-3 py-1.5 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all cursor-pointer"
              title="Search equipment (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="text-[10px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-1.5 py-0.5 rounded text-slate-600 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Authoritative Primary CTA Button */}
            <button
              onClick={onOpenQuote}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#0f172a] hover:bg-[#0f766e] text-white shadow-sm hover:shadow-md cursor-pointer text-xs font-semibold px-4.5 py-2 rounded-full transition-all duration-200 active:scale-95"
            >
              Request RFQ
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-md pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden"
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Navigation
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#0f766e] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  cGMP Validated
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  <Search className="w-4 h-4" />
                  Quick Equipment Search
                </button>

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 bg-[#0f172a] hover:bg-[#0f766e] text-white rounded-full font-semibold text-sm transition-colors"
                >
                  Request Technical Quotation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
