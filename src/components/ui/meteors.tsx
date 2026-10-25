"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 24,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 8,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * width)}px)`,
      animationDelay: (Math.random() * (maxDelay - minDelay) + minDelay).toFixed(2) + "s",
      animationDuration:
        (Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)) + "s",
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {meteorStyles.map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute h-0.5 w-0.5 rounded-full bg-zinc-400 shadow-[0_0_0_1px_#ffffff20]",
            className
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-16 -translate-y-1/2 bg-gradient-to-r from-zinc-400/60 to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
