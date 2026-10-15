"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { MACHINES } from "@/data/machinery";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMachine: (id: string) => void;
}

export function SearchModal({ isOpen, onClose, onSelectMachine }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const matches = query.trim()
    ? MACHINES.filter(
        (m) =>
          m.name.toLowerCase().includes(query.toLowerCase()) ||
          m.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
          m.description.toLowerCase().includes(query.toLowerCase()) ||
          m.tagline.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Search Dialog Box */}
      <div className="relative z-10 w-full max-w-[620px] bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b-2 border-black bg-[#f4f4f5]">
          <Search className="w-5 h-5 text-black" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search machines, models, capacities, or specs..."
            className="w-full text-[16px] font-mono text-black placeholder:text-zinc-500 outline-none bg-transparent"
          />
          <kbd className="text-[11px] bg-[#fef08a] border-2 border-black px-2 py-0.5 rounded text-black font-mono font-bold shadow-[1px_1px_0px_#000]">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[380px] overflow-y-auto p-2">
          {query.trim() === "" ? (
            <div className="p-8 text-center text-[14px] font-mono text-zinc-600">
              Type to search all 15 pharmaceutical machines, models, and specifications...
            </div>
          ) : matches.length === 0 ? (
            <div className="p-8 text-center text-[14px] font-mono text-zinc-600">
              No machines found matching &ldquo;{query}&rdquo;.
            </div>
          ) : (
            matches.map((m) => (
              <div
                key={m.id}
                onClick={() => {
                  onSelectMachine(m.id);
                  onClose();
                }}
                className="group flex items-center justify-between p-3.5 rounded-lg hover:bg-[#fef08a] border-2 border-transparent hover:border-black cursor-pointer transition-all mb-1"
              >
                <div>
                  <div className="text-[15px] font-bold text-black transition-colors">
                    {m.name}
                  </div>
                  <div className="text-[12px] font-mono text-zinc-700">
                    {m.categoryLabel} · {m.capacity}
                  </div>
                </div>
                <span className="text-[14px] font-bold text-black group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

