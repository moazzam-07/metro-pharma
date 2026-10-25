"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { 
  Filter, 
  Disc, 
  Layers, 
  Droplets, 
  Wind, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export type ToolingItem = {
  id: string;
  step: string;
  tag: string;
  title: string;
  desc: string;
  meta: string;
  icon: any;
  fitment: string;
};

const topToolingData: ToolingItem[] = [
  {
    id: "vibro-screens",
    step: "TOOLING 01",
    tag: "4 to 500 Mesh",
    title: "Vibro Sifter Screens",
    desc: "SS 316 pre-tensioned screens with certified aperture compliance, FDA-compliant silicone edge bonding, and optional ultrasonic deblinding rings.",
    meta: "Tension: 24–28 N/cm · Diameters: 20\" to 60\"",
    icon: Filter,
    fitment: "Vibro Sifters & Classifiers",
  },
  {
    id: "fbd-bags",
    step: "TOOLING 03",
    tag: "0.5 to 5 Micron",
    title: "FBD Multi-Pocket Filter Bags",
    desc: "Anti-static multi-pocket Dutch weave satin filter bags with conductive carbon ground wiring and quick-release expansion clamps.",
    meta: "Conductive Carbon Fiber · Zero Blow-Through",
    icon: Wind,
    fitment: "Fluid Bed Dryers & Granulators",
  },
  {
    id: "spray-guns",
    step: "TOOLING 05",
    tag: "Anti-Bearding",
    title: "Coating Spray Assemblies",
    desc: "Automatic atomizing spray guns and sanitary fluid delivery manifolds engineered for uniform tablet coating beds with independent pattern air controls.",
    meta: "Anti-Drip Shutoff · Nozzle: 0.8mm – 1.5mm",
    icon: Droplets,
    fitment: "Auto Coaters & Perforated Pans",
  },
];

const bottomToolingData: ToolingItem[] = [
  {
    id: "mill-sieves",
    step: "TOOLING 02",
    tag: "0.5mm – 12mm",
    title: "Milling Perforated Sieves",
    desc: "Heavy-gauge punched and wire-woven screens for Multi Mill and Co-Mill in round, rasping, and slotted apertures for controlled particle distribution.",
    meta: "SS 316L / Hastelloy · Laser Calibrated",
    icon: Disc,
    fitment: "Multi Mills & Co-Mills",
  },
  {
    id: "sanitary-gaskets",
    step: "TOOLING 04",
    tag: "USP Class VI",
    title: "Sanitary Gaskets & Seals",
    desc: "Pharma-grade silicone, Viton, and PTFE tri-clamp gaskets, lid packing rings, and mechanical seal faces engineered for steam SIP/CIP cycles.",
    meta: "Zero Phthalates · Temp: -40°C to 230°C",
    icon: Layers,
    fitment: "Tanks, Blenders & Pipelines",
  },
  {
    id: "rapid-dispatch",
    step: "TOOLING 06",
    tag: "48-Hr Dispatch",
    title: "Emergency Tooling & Change Parts",
    desc: "Direct machine fitment change parts engineered to fit Cadmach, Glatt, Gansons, and Metro Pharma lines with serialized compliance certificates.",
    meta: "100% Dimensional Inspection · MTR Included",
    icon: Clock,
    fitment: "Universal cGMP Fleet Fitment",
  },
];

const allToolingItems: ToolingItem[] = [
  topToolingData[0],
  bottomToolingData[0],
  topToolingData[1],
  bottomToolingData[1],
  topToolingData[2],
  bottomToolingData[2],
];

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );
}

export function Spares() {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const activeColor = "#701a75";

  useGSAP(() => {
    const section = sectionRef.current;
    const slider = wholeSliderRef.current;
    if (!section || !slider) return;

    if (reducedMotion) {
      gsap.set(".journey-line", { width: "100%" });
      allToolingItems.forEach((item) => {
        gsap.set(`.jl-${item.id}`, { scaleY: 1 });
        gsap.set(`.jd-${item.id}`, { scale: 1 });
        gsap.set(`.card-${item.id}`, { opacity: 1, filter: "blur(0px)", scale: 1, y: 0 });
      });
      return;
    }

    const getScrollDistance = () => {
      const scrollW = slider.scrollWidth;
      const clientW = window.innerWidth;
      return Math.max(scrollW - clientW + 120, 0);
    };

    // Horizontal sliding timeline
    const horizontalTween = gsap.to(slider, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollDistance() + 400}`,
        scrub: 0.8,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    // Central horizontal progress line growth
    gsap.fromTo(
      ".journey-line",
      { width: "0%" },
      {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance() + 400}`,
          scrub: 0.8,
        },
      }
    );

    // Initial state: upcoming cards start blurred with subtle offset
    allToolingItems.forEach((item) => {
      const isTop = topToolingData.some((t) => t.id === item.id);
      gsap.set(`.jl-${item.id}`, {
        scaleY: 0,
        transformOrigin: isTop ? "bottom bottom" : "top top",
      });
      gsap.set(`.jd-${item.id}`, { scale: 0 });
      gsap.set(`.card-${item.id}`, {
        opacity: 0.28,
        filter: "blur(9px)",
        scale: 0.94,
        y: isTop ? -14 : 14,
      });
    });

    // As each tooling station traverses into view, slowly and smoothly unblur it
    allToolingItems.forEach((item) => {
      const stationEl = section.querySelector(`.card-station-${item.id}`);
      if (!stationEl) return;

      const itemTl = gsap.timeline({
        scrollTrigger: {
          trigger: stationEl,
          containerAnimation: horizontalTween,
          start: "left 95%",
          end: "left 42%",
          scrub: 1,
        },
      });

      itemTl
        .to(`.card-${item.id}`, {
          filter: "blur(0px)",
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power1.out",
        })
        .to(
          `.jl-${item.id}`,
          {
            scaleY: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "<0.15"
        )
        .to(
          `.jd-${item.id}`,
          {
            scale: 1,
            duration: 0.6,
            ease: "back.out(2)",
          },
          "<0.2"
        );
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      horizontalTween.kill();
    };
  }, { dependencies: [reducedMotion], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="spares"
      className="relative w-full bg-white select-none border-t border-zinc-200/80"
    >
      {/* Pinned Full-Viewport Horizontal Experience with absolute Navbar clearance */}
      <div className="h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 lg:pt-24 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white">
        
        {/* Top Header Bar */}
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 z-20 pb-3 sm:pb-4 border-b border-zinc-200/70 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#701a75]" />
              <span className="text-[11px] sm:text-xs font-mono font-medium text-[#701a75] uppercase tracking-wider">
                Precision Tooling &amp; Change Parts Pipeline
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-zinc-950 leading-tight">
              Replacement Screens, Sieves &amp; Change Parts
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl mt-0.5 sm:mt-1 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
              Certified SS 316L sifter screens, perforated mill sieves, USP Class VI gaskets, and atomizing spray assemblies engineered for zero-contamination cGMP operation.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-full border border-zinc-200">
              Scroll down to traverse horizontal pipeline &rarr;
            </span>
          </div>
        </div>

        {/* Central Moving Horizontal Track */}
        <div className="relative w-full flex-1 flex items-center my-auto overflow-visible">
          <div
            ref={wholeSliderRef}
            className="flex items-center gap-8 sm:gap-14 lg:gap-16 pl-2 sm:pl-8 pr-16 sm:pr-24 will-change-transform"
          >
            
            {/* Lead-in Workshop Certification Card */}
            <div className="w-[260px] sm:w-[320px] lg:w-[340px] shrink-0 bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between h-[310px] sm:h-[370px] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#701a75] uppercase bg-[#701a75]/10 px-2.5 py-1 rounded-full border border-[#701a75]/20">
                    Tooling Desk
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                    SS 316L / Hastelloy
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-zinc-950 leading-snug mb-2">
                  Zero-Tolerance Pharmaceutical Machining
                </h3>
                
                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  Every screen, sieve, and gasket is serialized and batch-tested for micro-aperture uniformity and electropolish compliance (<span className="font-mono text-zinc-900 font-semibold">Ra &lt; 0.38 µm</span>).
                </p>

                <div className="space-y-2 pt-3 border-t border-zinc-100 text-[11px] text-zinc-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#701a75] shrink-0" />
                    <span>Food-grade silicone edge bonding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#701a75] shrink-0" />
                    <span>Ultrasonic deblinding rings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#701a75] shrink-0" />
                    <span>Material Test Reports (MTR) with 3.1 certs</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between z-10">
                <span className="text-[11px] font-mono text-zinc-500">
                  48-Hr Emergency Dispatch
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#701a75] hover:text-[#58135c] transition-colors"
                >
                  <span>RFQ Desk</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Subtle background glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#701a75]/5 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Alternating Top/Bottom Pipeline Track */}
            <div className="relative flex flex-col justify-between h-[360px] sm:h-[420px] lg:h-[460px] min-w-[1500px] sm:min-w-[1750px] lg:min-w-[1900px]">
              
              {/* Central Horizontal Axis Line */}
              <div className="w-full absolute left-0 top-1/2 -translate-y-1/2 flex items-center z-10 pointer-events-none">
                <div
                  className="w-3 h-3 rounded-full shrink-0 ring-4 ring-[#701a75]/20"
                  style={{ backgroundColor: activeColor }}
                />
                <div
                  className="h-[2px] w-0 rounded-full journey-line relative transition-all"
                  style={{ backgroundColor: activeColor }}
                />
                <div
                  className="w-3 h-3 rounded-full shrink-0 ring-4 ring-[#701a75]/20"
                  style={{ backgroundColor: activeColor }}
                />
              </div>

              {/* Top Row Cards */}
              <div className="flex items-end justify-start gap-12 sm:gap-16 lg:gap-20 h-[165px] sm:h-[190px] lg:h-[205px] z-20">
                {topToolingData.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`top-${item.id}`}
                      className={`card-station-${item.id} relative w-[280px] sm:w-[310px] lg:w-[330px] shrink-0 flex flex-col justify-end`}
                    >
                      {/* Card Content */}
                      <div
                        className={`card-${item.id} bg-white border border-zinc-200/90 rounded-xl p-4 sm:p-5 shadow-xs transition-[border-color,box-shadow] duration-300 hover:border-[#701a75]/40 hover:shadow-sm mb-4`}
                        style={{ willChange: "filter, opacity, transform" }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-[#701a75] uppercase">
                            {item.step}
                          </span>
                          <span className="text-[10px] font-mono font-semibold text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                            {item.tag}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-7 h-7 rounded-lg bg-zinc-100 text-[#701a75] flex items-center justify-center border border-zinc-200 shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-sm sm:text-base font-heading font-bold text-zinc-950 truncate">
                            {item.title}
                          </h4>
                        </div>

                        <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed mb-2.5 font-normal">
                          {item.desc}
                        </p>

                        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                          <span className="font-mono text-[10px] text-zinc-500 truncate max-w-[190px]">
                            {item.meta}
                          </span>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1 font-semibold text-xs text-[#701a75] hover:text-[#58135c] shrink-0"
                          >
                            <span>Inquire</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* Stem and Node to Central Line */}
                      <div className="absolute left-8 -bottom-[1px] flex flex-col items-center">
                        <div
                          className={`w-0.5 h-4 sm:h-5 jl-${item.id}`}
                          style={{ backgroundColor: activeColor }}
                        />
                        <div
                          className={`w-2.5 h-2.5 rounded-full ring-2 ring-white jd-${item.id}`}
                          style={{ backgroundColor: activeColor }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Row Cards */}
              <div className="flex items-start justify-start gap-12 sm:gap-16 lg:gap-20 h-[165px] sm:h-[190px] lg:h-[205px] z-20 pl-20 sm:pl-32 lg:pl-36">
                {bottomToolingData.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`bottom-${item.id}`}
                      className={`card-station-${item.id} relative w-[280px] sm:w-[310px] lg:w-[330px] shrink-0 flex flex-col justify-start`}
                    >
                      {/* Stem and Node to Central Line */}
                      <div className="absolute left-8 -top-[1px] flex flex-col items-center">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ring-2 ring-white jd-${item.id}`}
                          style={{ backgroundColor: activeColor }}
                        />
                        <div
                          className={`w-0.5 h-4 sm:h-5 jl-${item.id}`}
                          style={{ backgroundColor: activeColor }}
                        />
                      </div>

                      {/* Card Content */}
                      <div
                        className={`card-${item.id} bg-white border border-zinc-200/90 rounded-xl p-4 sm:p-5 shadow-xs transition-[border-color,box-shadow] duration-300 hover:border-[#701a75]/40 hover:shadow-sm mt-4`}
                        style={{ willChange: "filter, opacity, transform" }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-[#701a75] uppercase">
                            {item.step}
                          </span>
                          <span className="text-[10px] font-mono font-semibold text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                            {item.tag}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-7 h-7 rounded-lg bg-zinc-100 text-[#701a75] flex items-center justify-center border border-zinc-200 shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-sm sm:text-base font-heading font-bold text-zinc-950 truncate">
                            {item.title}
                          </h4>
                        </div>

                        <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed mb-2.5 font-normal">
                          {item.desc}
                        </p>

                        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                          <span className="font-mono text-[10px] text-zinc-500 truncate max-w-[190px]">
                            {item.meta}
                          </span>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1 font-semibold text-xs text-[#701a75] hover:text-[#58135c] shrink-0"
                          >
                            <span>Inquire</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Status / Navigation strip */}
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between text-xs text-zinc-500 pt-3 border-t border-zinc-200/70 z-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">
              Tolerances: DIN 28136 &amp; ASME BPE
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-zinc-400">
              · Serialized Inspection Certificates
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-zinc-700">Need custom apertures?</span>
            <a
              href="#contact"
              className="font-semibold text-[#701a75] hover:underline"
            >
              Consult Tooling Engineers &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Spares;
