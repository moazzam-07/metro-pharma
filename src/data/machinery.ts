export interface MachineSpec {
  label: string;
  value: string;
}

export interface Machine {
  id: string;
  name: string;
  categoryKey: string;
  categoryLabel: string;
  tagline: string;
  image: string;
  badge: string;
  capacity: string;
  sizes: string;
  description: string;
  workingPrinciple: string;
  moc: string;
  power: string;
  keyFeatures: string[];
  applications: string[];
  specs: MachineSpec[];
}

export interface GranulationStep {
  step: string;
  name: string;
  machine: string;
  desc: string;
  image: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear: number;
  yearsOfExcellence: string;
  address: string;
  phone: string;
  whatsapp: string;
  whatsappLink: string;
  salesEmail: string;
  inquiryEmail: string;
  standards: string[];
  stats: { value: string; label: string }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Metro Pharma",
  legalName: "Metro Pharma Machines",
  tagline: "Engineering Solutions, Shaping Health Since 2005",
  establishedYear: 2005,
  yearsOfExcellence: "20+",
  address: "Unit No. 17, Civic Industrial Estate, Walivnaka, Fanaspada, Vasai (East), Maharashtra - 401208, India",
  phone: "+91 82916 51762",
  whatsapp: "+91 82916 51762",
  whatsappLink: "https://wa.me/918291651762?text=Hello%20Metro%20Pharma%2C%20I%20would%20like%20to%20inquire%20about%20your%20pharmaceutical%20machinery.",
  salesEmail: "sales@metropharmamachines.com",
  inquiryEmail: "inquiry@metropharmamachines.com",
  standards: [
    "cGMP Compliant Architecture",
    "SS 316 / 316L Contact Metallurgy (Ra < 0.4 µm)",
    "FDA Compliant Food & Pharma Gaskets",
    "CE & ISO Industrial Safety Standards"
  ],
  stats: [
    { value: "2005", label: "Established in Vasai, Mumbai" },
    { value: "15+", label: "Machinery Categories" },
    { value: "SS 316L", label: "Mirror Contact Metallurgy" },
    { value: "100%", label: "cGMP Validation Compliant" }
  ]
};

export const CATEGORIES = [
  { key: "all", label: "All Machinery", count: 15 },
  { key: "sieving", label: "Screening & Sieving", count: 2 },
  { key: "milling", label: "Milling & Sizing", count: 2 },
  { key: "granulation", label: "Granulation & Mixing", count: 2 },
  { key: "drying", label: "Drying Technologies", count: 2 },
  { key: "coating", label: "Tablet Coating", count: 2 },
  { key: "blending", label: "Powder Blenders", count: 3 },
  { key: "liquid", label: "Liquid & Ointment Plants", count: 2 }
];

export const MACHINES: Machine[] = [
  {
    id: "vibro-sifter",
    name: "Vibro Sifter",
    categoryKey: "sieving",
    categoryLabel: "Screening & Sieving",
    tagline: "Precision multi-plane vibratory grading and solid-solid/solid-liquid separation",
    image: "/assets/machines/vibro-sifter.png",
    badge: "Flagship Screener",
    capacity: "100 to 3,000 kg/hr",
    sizes: "12\", 20\", 24\", 30\", 36\", 48\", 60\", 72\"",
    description: "Engineered for precise classification, grading, sieving, and separation of pharmaceutical powders, granules, and suspension liquids.",
    workingPrinciple: "Operates on heavy-duty vibratory motor technology generating multi-plane circular vibrations that stratify materials across precision mesh screens.",
    moc: "Stainless Steel SS 316 / 316L contact parts (Ra < 0.4 µm mirror finish), SS 304 non-contact structural base.",
    power: "Single or Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Quick-release clamp rings for tool-free 5-minute screen changeovers",
      "Multi-deck configuration for simultaneous grading into 2 to 5 fractions",
      "Ultrasonic de-blinding mesh integration for difficult sub-micron powders",
      "Completely enclosed dust-tight design maintaining cleanroom compliance"
    ],
    applications: [
      "Pharmaceutical active ingredients and tableting powders",
      "Food starches, flour milling, cocoa, and spice grading",
      "Fine chemical crystals, resins, and cosmetic talc"
    ],
    specs: [
      { label: "Purpose", value: "Screening, grading, sieving, and solid-liquid / solid-solid classification" },
      { label: "Drive Mechanism", value: "Specially calibrated vibratory motors mounted at multi-axis angles" },
      { label: "Mesh Compatibility", value: "Fine mesh (up to 500 mesh), coarse mesh, perforated plates" },
      { label: "Screen Decks", value: "Single, double, triple, and quadruple decks available" },
      { label: "Noise Level", value: "< 70 dB whisper-quiet operation" },
      { label: "Mobility", value: "Rigid heavy-duty base or lockable caster wheel trolley" }
    ]
  },
  {
    id: "vacuum-vibro-sifter",
    name: "Vacumet — Vacuum Vibro Sifter",
    categoryKey: "sieving",
    categoryLabel: "Screening & Sieving (Closed System)",
    tagline: "Dust-free, hermetically sealed closed-loop vacuum screening",
    image: "/assets/machines/vacuum-vibro-sifter.png",
    badge: "Cleanroom Closed Loop",
    capacity: "100 to 1,500 kg/hr",
    sizes: "24\", 30\", 36\", 48\"",
    description: "Integrates vibratory screening with pneumatic vacuum conveying to create a 100% dust-free, hermetic powder classification and transfer ecosystem.",
    workingPrinciple: "Vibratory motion stratifies powder across screens under continuous negative pressure, transferring sifted material directly to the receiving bin without atmospheric exposure.",
    moc: "SS 316L contact parts electro-polished, pharmaceutical FDA silicone gaskets.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Zero environmental dust emission — ideal for potent APIs and toxic compounds",
      "Seamless inline pneumatic transfer from drum/IBC directly to receiver",
      "Full CIP (Clean-in-Place) washdown compatible sanitary design",
      "Tri-clamp sanitary ferrules for quick disassembly"
    ],
    applications: [
      "High-potency Active Pharmaceutical Ingredients (HPAPI)",
      "Sterile cleanroom powder sieving",
      "Sensitive food and dairy dry powders"
    ],
    specs: [
      { label: "Working Principle", value: "Vibratory classification combined with pneumatic vacuum transfer" },
      { label: "Containment Level", value: "OEB 4 / OEB 5 containment capable" },
      { label: "Inlet/Outlet", value: "Sanitary Tri-clamp ferrules with dust-tight silicone seals" },
      { label: "Gaskets", value: "USP Class VI compliant food-grade silicone" },
      { label: "CIP Capability", value: "Integrated wash-in-place spray nozzles" }
    ]
  },
  {
    id: "multi-mill",
    name: "Multi Mill",
    categoryKey: "milling",
    categoryLabel: "Milling & Size Reduction",
    tagline: "Versatile high-speed reversible milling for wet & dry granulation",
    image: "/assets/machines/multi-mill.png",
    badge: "High-Speed Size Reduction",
    capacity: "50 to 1,000 kg/hr",
    sizes: "1 HP to 7.5 HP (Lab to Production)",
    description: "A rugged, versatile pharmaceutical milling machine engineered for wet and dry granulation, pulverization, shredding, and de-lumping.",
    workingPrinciple: "A high-speed rotor equipped with reversible blades rotates inside a cylindrical screen chamber. Material is disintegrated by high-velocity impact against blades and chamber screens.",
    moc: "SS 316 contact parts mirror finished, SS 304 outer frame mounted on heavy castor wheels.",
    power: "Three-Phase 415V, 50 Hz (Flameproof motor available)",
    keyFeatures: [
      "Reversible rotor blades: Knife edge for gentle granulation, Impact edge for pulverization",
      "Variable speed control via AC Frequency Drive (up to 3,000 RPM)",
      "Interchangeable perforated screens from 0.5 mm to 12 mm hole size",
      "Sanitary design ensuring minimal product retention and swift washdown"
    ],
    applications: [
      "Dry and wet granulation for pharmaceutical solid dosage",
      "Size reduction of chemicals, dyestuffs, and crystalline salts",
      "Spice grinding, food de-lumping, and cosmetic powder blending"
    ],
    specs: [
      { label: "Rotor Blades", value: "12 reversible blades (knife and impact profile)" },
      { label: "Rotor Speed", value: "750 / 1500 / 2300 / 3000 RPM (stepped or VFD variable)" },
      { label: "Screen Apertures", value: "0.5 mm to 12 mm perforated and wire woven screens" },
      { label: "Castors", value: "Heavy-duty PU castor wheels with foot brakes" },
      { label: "Safety Switch", value: "Interlocking limit switch on milling chamber cover" }
    ]
  },
  {
    id: "co-mill",
    name: "Co-Mill (Cone Mill)",
    categoryKey: "milling",
    categoryLabel: "Milling & Sizing",
    tagline: "Gentle, low-heat conical milling and de-lumping",
    image: "/assets/machines/co-mill.png",
    badge: "Low-Heat Sizing",
    capacity: "25 to 800 kg/hr",
    sizes: "Lab (1 HP) to Production (5 HP)",
    description: "Low-energy, low-shear cone mill designed for gentle uniform particle sizing and de-lumping of moisture-sensitive and heat-sensitive granules.",
    workingPrinciple: "Material enters the conical screening chamber where an impeller creates a gentle vortex action, passing particles through screen openings without heat buildup.",
    moc: "SS 316 contact surfaces polished to mirror finish (Ra < 0.4 µm).",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Minimal heat generation and extremely low fine-dust fraction",
      "Uniform particle size distribution ideal for tablet compression yield",
      "Sanitary clamp design for instantaneous tool-free disassembly",
      "Inline integration beneath Fluid Bed Dryers and Granulators"
    ],
    applications: [
      "Post-drying granule sizing after Fluid Bed Dryers (FBD)",
      "De-lumping of agglomerated APIs and excipients",
      "Tablet scrap and rejected batch recovery"
    ],
    specs: [
      { label: "Impeller Speed", value: "Variable frequency drive up to 1,800 RPM" },
      { label: "Screen Profiles", value: "Conical round hole, rasping, and grater screens" },
      { label: "Heat Rise", value: "< 2°C across processing cycle" },
      { label: "cGMP Standard", value: "Sanitary tri-clamp dismounting" }
    ]
  },
  {
    id: "colloid-mill",
    name: "Colloid Mill (Vertical & Horizontal)",
    categoryKey: "liquid",
    categoryLabel: "Homogenizing & Emulsifying",
    tagline: "Micro-shear rotor-stator colloid mill for emulsions & suspensions",
    image: "/assets/machines/colloid-mill.png",
    badge: "High-Shear Emulsifier",
    capacity: "20 to 2,500 L/hr",
    sizes: "1 HP (Lab) to 15 HP (Industrial)",
    description: "High-shear mechanical dispersing and homogenizing machine engineered for micron-level particle size reduction in ointments, lotions, syrups, and pastes.",
    workingPrinciple: "A high-speed precision rotor rotates against a stationary stator with an adjustable micron clearance gap, imparting intense hydraulic shear and cavitation.",
    moc: "SS 316 / 316L contact parts with hardened alloy stator/rotor surfaces.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Micrometer gap adjustment mechanism calibratable while machine is running",
      "Jacketed conical hopper for steam heating or chilled water cooling",
      "Recirculation pipe assembly for continuous multi-pass processing",
      "Available in Vertical space-saving or Horizontal heavy-duty configurations"
    ],
    applications: [
      "Pharmaceutical ointments, medicated creams, oral suspensions",
      "Cosmetic emulsions, cold creams, sunscreen lotions, and gels",
      "Food sauces, peanut butter, mayonnaise, and fruit purées"
    ],
    specs: [
      { label: "Gap Adjustment", value: "Calibrated micrometer dial (50 to 500 microns)" },
      { label: "Hopper", value: "Jacketed SS 316 cone with recirculation loop" },
      { label: "Shaft Sealing", value: "Mechanical seal / food-grade PTFE packing" },
      { label: "Motor", value: "TEFC flameproof or non-flameproof 2,800 RPM" }
    ]
  },
  {
    id: "auto-coater",
    name: "Metro Coater (Automated Tablet Auto-Coater)",
    categoryKey: "coating",
    categoryLabel: "Tablet Coating (Automated cGMP)",
    tagline: "Fully automated perforated pan coating with touch-screen PLC",
    image: "/assets/machines/auto-coater.png",
    badge: "Advanced cGMP Coater",
    capacity: "2 to 450 kg/batch",
    sizes: "12\" (Lab), 24\", 36\", 48\", 60\", 66\"",
    description: "State-of-the-art automated tablet coater featuring a perforated rotating pan, precision anti-bearding spray guns, and intelligent air handling for film and sugar coating.",
    workingPrinciple: "Tablets tumble in a perforated drum guided by helical mixing baffles while spray guns atomize solution under negative air pressure and controlled dehumidified hot air flow.",
    moc: "SS 316L mirror polished interior (Ra < 0.3 µm), SS 304 external panels.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Automated PLC + HMI touchscreen interface with multi-recipe storage",
      "Schlick-type anti-bearding spray nozzles with peristaltic dosing pump",
      "Air Handling Unit (AHU) with pre-filter, HEPA filter, and face-bypass dampers",
      "Clean-in-Place (CIP) wash system with internal wash spray balls"
    ],
    applications: [
      "Aqueous film coating of pharmaceutical tablets and caplets",
      "Organic solvent coating with flameproof execution",
      "Enteric and sustained-release multi-particulate pellet coating"
    ],
    specs: [
      { label: "Pan Speed", value: "Variable 2 to 24 RPM via AC VFD" },
      { label: "Pan Perforation", value: "Fully perforated drum with sanitary baffle inserts" },
      { label: "Spray System", value: "Anti-bearding automatic guns with individual flow regulators" },
      { label: "Exhaust System", value: "Wet scrubber / dry dust collector with HEPA exhaust" },
      { label: "Compliance", value: "21 CFR Part 11 ready audit trail automation" }
    ]
  },
  {
    id: "coating-pan",
    name: "Conventional Coating Pan",
    categoryKey: "coating",
    categoryLabel: "Tablet Coating",
    tagline: "Traditional stainless steel ellipsoidal coating pan",
    image: "/assets/machines/coating-pan.png",
    badge: "Classic Coating",
    capacity: "5 to 350 kg/batch",
    sizes: "12\" (Lab), 24\", 36\", 42\", 48\", 60\", 72\"",
    description: "Reliable, durable stainless steel revolving pan engineered for conventional sugar coating and film coating of tablets, pellets, and confectionery.",
    workingPrinciple: "Revolving angular pan provides gentle tumbling motion while hot air blower evaporates solution applied via spray or ladling.",
    moc: "SS 304 or SS 316 pan bowl, heavy tubular steel structure with SS cladding.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Adjustable pan tilt angle and variable speed AC drive",
      "Integrated hot air blower system with thermostat and electric heaters",
      "Optional automatic peristaltic spray gun bracket assembly",
      "Mirror-polished bowl preventing product adhesion"
    ],
    applications: [
      "Sugar coating of pharmaceutical tablets and ayurvedic pills",
      "Confectionery chocolates, candy, and dragee coating",
      "Agricultural seed coating and pelletizing"
    ],
    specs: [
      { label: "Pan Shape", value: "Ellipsoidal / semi-spherical stainless bowl" },
      { label: "Speed Regulation", value: "Variable frequency drive with speed tachometer" },
      { label: "Air System", value: "Hot air blower with inlet filter and heating chamber" }
    ]
  },
  {
    id: "fluid-bed-dryer",
    name: "Fluid Bed Dryer (FBD)",
    categoryKey: "drying",
    categoryLabel: "Drying Technologies",
    tagline: "Rapid and uniform fluidized hot air drying for wet granules",
    image: "/assets/machines/fluid-bed-dryer.png",
    badge: "Rapid Granule Dryer",
    capacity: "5 to 500 kg/batch",
    sizes: "5 kg (Lab), 30 kg, 60 kg, 120 kg, 200 kg, 250 kg, 300 kg, 500 kg",
    description: "High-velocity fluidized bed drying equipment engineered for rapid, gentle, and homogeneous moisture extraction from pharmaceutical wet granules.",
    workingPrinciple: "Conditioned heated air passes through a bottom distribution plate, lifting granules into an agitated boiling-fluid state where heat and mass transfer occur rapidly.",
    moc: "SS 316 / 316L product container and expansion chamber, SS 304 AHU.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Rapid drying cycle: typically 20 to 45 minutes per batch",
      "HEPA air filtration (99.97% at 0.3 micron) for sterile processing",
      "Pneumatic finger filter bag shaking mechanism with twin-cylinder design",
      "Explosion relief safety flap with 2-bar pressure shock rating"
    ],
    applications: [
      "Drying wet granulation for pharmaceutical tablets and capsules",
      "Food seasonings, soup mixes, crystal sugars, and starch drying",
      "Chemical and agrochemical powder moisture extraction"
    ],
    specs: [
      { label: "Drying Time", value: "20 to 45 minutes average (material dependent)" },
      { label: "Air Filtration", value: "3-stage filtration: 10µ pre-filter, 5µ micro, 0.3µ HEPA" },
      { label: "Heating Media", value: "Steam coil, electric heater, or thermic fluid" },
      { label: "Safety Rating", value: "2.0 bar / 10.0 bar explosion shock resistance" },
      { label: "Product Bowl", value: "Trolley mounted SS 316 container with viewing sight glass" }
    ]
  },
  {
    id: "tray-dryer",
    name: "Tray Dryer & Vacuum Tray Dryer (VTD)",
    categoryKey: "drying",
    categoryLabel: "Drying Technologies",
    tagline: "Controlled hot air circulation & low-temperature vacuum drying",
    image: "/assets/machines/tray-dryer.png",
    badge: "Precision Batch Dryer",
    capacity: "30 to 500 kg/batch",
    sizes: "12, 24, 48, 96, 192 Trays",
    description: "Industrial convection tray dryers and vacuum tray dryers designed for precise, gentle moisture removal from sensitive pharmaceutical APIs, herbs, and granules.",
    workingPrinciple: "Convection models circulate HEPA-filtered hot air horizontally across staggered trays; Vacuum models conduct heat through hollow shelves under high vacuum.",
    moc: "SS 316 contact trays and heating shelves, heavy mineral wool insulated walls.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Uniform temperature distribution across all tray tiers (+/- 2°C)",
      "Low-temperature vacuum drying ideal for heat-sensitive or oxidizable APIs",
      "Condenser and solvent recovery tank for hazardous or costly solvents",
      "Heavy double-door gasket sealing preventing heat leakage"
    ],
    applications: [
      "Bulk drugs, APIs, botanical extracts, and ayurvedic formulations",
      "Solvent recovery drying for chemical intermediates",
      "Dehydrated food powders, spices, and ingredients"
    ],
    specs: [
      { label: "Tray Dimensions", value: "Standard 16\" x 32\" x 1.25\" SS 316 seamless trays" },
      { label: "Temperature Range", value: "Ambient up to 120°C (Steam/Electric)" },
      { label: "Vacuum Level", value: "Up to 740 mm of Hg in VTD models" },
      { label: "Insulation", value: "100 mm thick high-density resin-bonded glass wool" }
    ]
  },
  {
    id: "rapid-mixer-granulator",
    name: "Rapid Mixer Granulator (RMG)",
    categoryKey: "granulation",
    categoryLabel: "Granulation & Mixing",
    tagline: "High-shear dry blending & wet granulation in 8 to 15 minutes",
    image: "/assets/machines/rapid-mixer-granulator.png",
    badge: "High-Shear Granulator",
    capacity: "2 to 400 kg/batch",
    sizes: "5 L (Lab), 25 L, 50 L, 100 L, 150 L, 250 L, 400 L, 600 L, 1000 L",
    description: "High-performance high-shear granulator engineered for rapid homogenous dry mixing and wet agglomeration in pharmaceutical solid dosage lines.",
    workingPrinciple: "Dual-blade bottom impeller creates fluid tumbling and shearing action while a high-speed side chopper breaks lumps, creating uniform spherical granules.",
    moc: "SS 316L bowl, dome, impeller, and chopper mirror finished (Ra < 0.3 µm).",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Ultra-fast processing cycle: 8 to 15 minutes per batch",
      "Automated binder addition with pressurized spray nozzle system",
      "Pneumatic side discharge valve with silicone sleeve for direct co-mill docking",
      "Air purge shaft seals preventing powder ingress into drive bearings",
      "Torque / motor amperage end-point monitoring for batch reproducibility"
    ],
    applications: [
      "Solid dosage tablet formulation and capsule granules",
      "Nutraceutical compressed tablets and dietary effervescent mixes",
      "Chemical powder granulation and compounding"
    ],
    specs: [
      { label: "Impeller Speeds", value: "Dual speed / VFD variable (up to 350 RPM)" },
      { label: "Chopper Speeds", value: "Dual speed 1,440 / 2,880 RPM" },
      { label: "Discharge Valve", value: "Pneumatically actuated flush-bottom valve" },
      { label: "Seals", value: "Compressed air purge mechanical shaft seals" }
    ]
  },
  {
    id: "paste-kettle",
    name: "Paste Kettle",
    categoryKey: "granulation",
    categoryLabel: "Heating & Mixing",
    tagline: "Hemispherical tilting jacketed kettle for starch paste & gels",
    image: "/assets/machines/paste-kettle.png",
    badge: "Starch Paste Kettle",
    capacity: "25 to 500 Liters",
    sizes: "25 L, 50 L, 100 L, 150 L, 200 L, 300 L, 500 L",
    description: "Steam or electrically jacketed hemispherical tilting kettle for uniform heating and mixing of starch paste binder, ointments, syrups, and gels.",
    workingPrinciple: "Jacketed hemispherical vessel with anchor-type slow speed agitator and spring-loaded PTFE scrapers that prevent wall charring and ensure uniform heat distribution.",
    moc: "SS 316 contact bowl, SS 304 jacket and external insulation cladding.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Motorized or manual worm gear 90-degree tilting for effortless discharge",
      "Spring-loaded Teflon scrapers ensuring zero burning or charring on walls",
      "Jacket options: Steam heating, electrical immersion, or thermic fluid",
      "cGMP hemispherical profile eliminating dead corners"
    ],
    applications: [
      "Starch paste preparation for tablet binding in wet granulation",
      "Ointment, cosmetic cream, and topical gel preparation",
      "Food syrup, glucose, sauce cooking, and confectionery bases"
    ],
    specs: [
      { label: "Bowl Geometry", value: "Hemispherical dished end with sanitary rolled rim" },
      { label: "Tilting Mechanism", value: "Precision worm gear wheel tilting up to 90 degrees" },
      { label: "Agitator", value: "Anchor type with spring-loaded PTFE wall scrapers" },
      { label: "Temperature", value: "Digital PID temperature indicator and controller" }
    ]
  },
  {
    id: "filter-press",
    name: "Filter Press (Zero Hold-Up)",
    categoryKey: "liquid",
    categoryLabel: "Filtration & Clarification",
    tagline: "Sanitary closed filtration for syrups, parenterals & chemicals",
    image: "/assets/machines/filter-press.png",
    badge: "Zero Hold-Up",
    capacity: "100 to 10,000 L/hr",
    sizes: "8\", 14\", 18\", 24\", 33\" Plate Diameters",
    description: "High-efficiency Sparkler type zero hold-up closed filtration unit for complete clarification and solid-liquid separation of pharmaceuticals, injectables, and syrups.",
    workingPrinciple: "Slurry is pumped under pressure through horizontal filter plates and filter media. Cake accumulates on plates while crystal-clear filtrate discharges from the central manifold.",
    moc: "SS 316 filter plates and manifold, SS 304 trolley and dome.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Zero hold-up scavenger plate design ensures 100% recovery of high-value filtrate",
      "Sanitary trolley mounted with integrated centrifugal or gear feed pump",
      "Uniform cake formation with no cake drop during pressure drops",
      "Complete sanitary dismantling for autoclave sterilization"
    ],
    applications: [
      "Pharmaceutical syrups, oral liquids, and parenteral solutions",
      "High-purity chemical solvents, active resins, and fine dyes",
      "Food edible oils, beverages, wines, and vinegar clarification"
    ],
    specs: [
      { label: "Filter Plates", value: "Seamless pressed SS 316 plates with deep grooves" },
      { label: "Feed Pump", value: "Integrated SS 316 centrifugal / flameproof gear pump" },
      { label: "Gaskets", value: "USP Class VI silicone / Viton / PTFE" },
      { label: "Pressure Rating", value: "Tested up to 5 kg/cm² hydraulic pressure" }
    ]
  },
  {
    id: "octagonal-blender",
    name: "Octagonal Blender",
    categoryKey: "blending",
    categoryLabel: "Powder Blenders",
    tagline: "Slow-speed gentle tumbling blender with octagonal geometry",
    image: "/assets/machines/octagonal-blender.png",
    badge: "Gentle Powder Blender",
    capacity: "50 to 5,000 Liters",
    sizes: "50 L, 100 L, 250 L, 500 L, 1000 L, 2000 L, 3000 L, 5000 L",
    description: "Slow-speed, gentle blending machine engineered for uniform mixing of dry powders and granules with low particle shear and zero attrition.",
    workingPrinciple: "The octagonal shape creates multi-dimensional tumbling action without dead corners, shifting powder across geometric planes for homogeneous mixing.",
    moc: "SS 316 / 316L internal mirror finish (Ra < 0.3 µm), SS 304 frame.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Gentle tumbling prevents particle degradation, dusting, or heat generation",
      "Internal mixing baffles optimize cross-flow dispersion across batches",
      "Safety railing with interlocking limit switch ensuring operator safety",
      "Butterfly valve discharge with dust-tight silicone container docking"
    ],
    applications: [
      "Pharmaceutical dry powder lubrication and blending prior to tableting",
      "Nutraceutical protein powder and health drink blends",
      "Fine chemical and food seasoning compounding"
    ],
    specs: [
      { label: "Rotational Speed", value: "5 to 15 RPM via heavy-duty worm reduction gearbox" },
      { label: "Internal Baffles", value: "Detachable SS 316 baffles for easy cleaning" },
      { label: "Discharge", value: "Sanitary butterfly valve with dust-free docking" },
      { label: "Safety Railing", value: "Tubular SS 304 safety fence with electrical interlock" }
    ]
  },
  {
    id: "double-cone-blender",
    name: "Double Cone & V-Blender",
    categoryKey: "blending",
    categoryLabel: "Powder Blenders",
    tagline: "Conical and V-shaped tumbling blenders for free-flowing solids",
    image: "/assets/machines/double-cone-blender.png",
    badge: "Precision Tumbler",
    capacity: "50 to 3,000 Liters",
    sizes: "50 L, 100 L, 250 L, 500 L, 1000 L, 2000 L",
    description: "Classic double cone and V-shell tumbling blenders designed for intimate, uniform blending of dry powders and fragile granular formulations.",
    workingPrinciple: "As the vessel rotates, material continually splits and converges across the twin cones or V-legs, creating continuous multi-directional crossing.",
    moc: "SS 316 contact parts mirror polished, SS 304 cladded support columns.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Optimum blending efficiency with short mixing cycle times",
      "Conical profile facilitates 100% complete gravitational discharge",
      "Available with intensifier bar for de-agglomerating cohesive powders",
      "Full safety railing and inching drive for precise loading positioning"
    ],
    applications: [
      "Dry powder formulations for capsule filling and direct compression",
      "Specialty chemicals, detergents, and powdered catalysts",
      "Food dietary supplements, milk powders, and instant beverages"
    ],
    specs: [
      { label: "Geometry", value: "Double Cone or Asymmetric V-Shell configuration" },
      { label: "Filling Volume", value: "50% to 60% of total vessel volume" },
      { label: "Inching Feature", value: "Push-button inching device for container positioning" },
      { label: "Discharge Valve", value: "150 mm / 200 mm manual or pneumatic butterfly valve" }
    ]
  },
  {
    id: "liquid-plant",
    name: "Liquid & Ointment Manufacturing Plant",
    categoryKey: "liquid",
    categoryLabel: "Turnkey Processing Lines",
    tagline: "Turnkey automated processing suites for syrups, ointments & lotions",
    image: "/assets/machines/liquid-plant.png",
    badge: "Turnkey cGMP Plant",
    capacity: "100 to 10,000 Liters",
    sizes: "100 L to 10,000 L custom engineered",
    description: "Fully integrated turnkey processing plants comprising sugar melting vessels, manufacturing vessels, storage vessels, inline homogenizers, and transfer skids.",
    workingPrinciple: "Closed-loop sanitary processing incorporating jacketed heating/cooling, vacuum emulsification, inline high-shear homogenization, and automated CIP/SIP loops.",
    moc: "SS 316L contact parts electro-polished to Ra < 0.25 µm, SS 304 cladding.",
    power: "Three-Phase 415V, 50 Hz",
    keyFeatures: [
      "Automated PLC/SCADA control with recipe management and 21 CFR Part 11 compliance",
      "Bottom-entry high-shear homogenizer combined with contra-rotating anchor agitator",
      "Vacuum processing prevents aeration and oxidation of sensitive formulations",
      "Complete skid-mounted sanitary pipework with diaphragm valves"
    ],
    applications: [
      "Pharmaceutical oral liquid syrups, drops, and pediatric suspensions",
      "Sterile and non-sterile topical ointments, creams, and gels",
      "Cosmetic emulsions, lotions, shampoos, and conditioners"
    ],
    specs: [
      { label: "Vessel Array", value: "Manufacturing Vessel, Storage Vessel, Wax/Water Phase Vessels" },
      { label: "Agitation", value: "Contra-rotating anchor with PTFE scrapers + high-shear homogenizer" },
      { label: "Automation", value: "Siemens/Allen-Bradley PLC touchscreen with SCADA reporting" },
      { label: "Piping", value: "Electropolished SS 316L orbital welded with zero dead-legs" }
    ]
  }
];

export const GRANULATION_STEPS: GranulationStep[] = [
  {
    step: "01",
    name: "Screening & Sizing",
    machine: "Vibro Sifter / Vacumet",
    desc: "Raw powders are classified and screened to remove agglomerates under cleanroom or vacuum containment.",
    image: "/assets/machines/vibro-sifter.png"
  },
  {
    step: "02",
    name: "High-Shear Mixing",
    machine: "Rapid Mixer Granulator (RMG)",
    desc: "Intensive dry blending and binder dispersion to form wet granules in 8 to 15 minutes.",
    image: "/assets/machines/rapid-mixer-granulator.png"
  },
  {
    step: "03",
    name: "Wet De-Lumping",
    machine: "Co-Mill (Cone Mill)",
    desc: "Gentle sizing of oversized wet lumps prior to drying, ensuring uniform fluidization.",
    image: "/assets/machines/co-mill.png"
  },
  {
    step: "04",
    name: "Fluid Bed Drying",
    machine: "Fluid Bed Dryer (FBD)",
    desc: "Hot air fluidization extracts moisture down to target LOD in 20 to 45 minutes.",
    image: "/assets/machines/fluid-bed-dryer.png"
  },
  {
    step: "05",
    name: "Dry Granule Milling",
    machine: "Multi Mill",
    desc: "Calibrated sizing and pulverization to achieve target mesh distribution for compression.",
    image: "/assets/machines/multi-mill.png"
  },
  {
    step: "06",
    name: "Uniform Blending",
    machine: "Octagonal / Double Cone Blender",
    desc: "Gentle lubrication with magnesium stearate and final blending with zero particle degradation.",
    image: "/assets/machines/octagonal-blender.png"
  },
  {
    step: "07",
    name: "Automated Coating",
    machine: "Metro Coater",
    desc: "Fully automated perforated pan coating applying aqueous, solvent, or enteric film layers.",
    image: "/assets/machines/auto-coater.png"
  }
];
