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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[14vh] px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/40 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Search Dialog Box */}
      <div className="relative z-10 w-full max-w-[560px] bg-white border border-zinc-200 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-100 bg-white">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search machines, models, capacities, or specs..."
            className="w-full text-sm text-zinc-900 placeholder:text-zinc-400 outline-none bg-transparent"
          />
          <kbd className="text-[10px] bg-zinc-100 border border-zinc-200 px-1.5 py-0.5 rounded text-zinc-500 font-mono">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {query.trim() === "" ? (
            <div className="p-8 text-center text-xs font-mono text-zinc-400">
              Type to search all 15 pharmaceutical machines, models, and specifications...
            </div>
          ) : matches.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-zinc-400">
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
                className="group flex items-center justify-between p-3 rounded-lg hover:bg-zinc-50 cursor-pointer transition-colors"
              >
                <div>
                  <div className="text-sm font-medium text-zinc-900 group-hover:text-[#701a75] transition-colors">
                    {m.name}
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">
                    {m.categoryLabel} · {m.capacity}
                  </div>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-[#701a75] group-hover:translate-x-0.5 transition-all">
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
