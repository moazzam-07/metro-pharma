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
  number = 26,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 3,
  maxDuration = 7,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    const styles = [...new Array(number)].map(() => ({
      "--angle": `${angle}deg`,
      top: `${Math.floor(Math.random() * 200) - 50}px`,
      left: `${Math.floor(Math.random() * width)}px`,
      animationDelay: `${(Math.random() * (maxDelay - minDelay) + minDelay).toFixed(2)}s`,
      animationDuration: `${Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)}s`,
    } as React.CSSProperties));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {meteorStyles.map((style, idx) => (
        // Meteor Head - Dark charcoal on light background as shown in Magic UI preview
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute size-1 rounded-full bg-zinc-600 shadow-[0_0_2px_1px_rgba(0,0,0,0.18)]",
            className
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1.5px] w-24 -translate-y-1/2 bg-gradient-to-r from-zinc-600/80 via-zinc-400/40 to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
