"use client";

import { useState } from "react";
import { MACHINES, Machine } from "@/data/machinery";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { CategoryExplorer } from "@/components/CategoryExplorer";
import { MachineGrid } from "@/components/MachineGrid";
import { GranulationSuite } from "@/components/GranulationSuite";
import { CinematicBanner } from "@/components/CinematicBanner";
import { Heritage } from "@/components/Heritage";
import { Spares } from "@/components/Spares";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { TechnicalDrawer } from "@/components/TechnicalDrawer";
import { SearchModal } from "@/components/SearchModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  const [selectedMachineId, setSelectedMachineId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [preselectedMachine, setPreselectedMachine] = useState<string>("");

  const activeMachine = MACHINES.find((m) => m.id === selectedMachineId) || null;

  const handleOpenQuote = (machineName?: string) => {
    if (machineName) {
      setPreselectedMachine(machineName);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-teal-600/20 selection:text-teal-900">
      {/* Floating Glass Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Hero with InfiniteGridBackground and BorderBeam Machinery */}
      <Hero onSelectMachine={(id) => setSelectedMachineId(id)} />

      {/* Trust & Engineering Standards Metrics Strip */}
      <TrustStrip />

      {/* Interactive Category Explorer */}
      <CategoryExplorer onSelectMachine={(id) => setSelectedMachineId(id)} />

      {/* Full 3-Column Equipment Repertoire Grid */}
      <MachineGrid onSelectMachine={(id) => setSelectedMachineId(id)} />

      {/* Turnkey Granulation Suite Process Flow */}
      <GranulationSuite />

      {/* Cinematic Media Container Signature */}
      <CinematicBanner />

      {/* Heritage & 2005 Craftsmanship */}
      <Heritage />

      {/* Spares & Change Parts */}
      <Spares />

      {/* Technical RFQ Form */}
      <ContactForm preselectedMachine={preselectedMachine} />

      {/* Footer */}
      <Footer />

      {/* Slide-over Specification Drawer */}
      <TechnicalDrawer
        machine={activeMachine}
        onClose={() => setSelectedMachineId(null)}
        onRequestQuote={(name) => {
          setSelectedMachineId(null);
          handleOpenQuote(name);
        }}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectMachine={(id) => setSelectedMachineId(id)}
      />

      {/* Persistent Floating WhatsApp Consultation Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
