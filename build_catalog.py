import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

brochure_txt_path = os.path.join('tempdata', 'pdf_extracted', 'METRO-PHARMA-BROCHURE', 'METRO-PHARMA-BROCHURE_text.txt')
out_dir = os.path.join('tempdata', 'catalog')
os.makedirs(out_dir, exist_ok=True)

# 1. Company Profile
company_profile = {
    "name": "Metro Pharma",
    "legal_name": "Metro Pharma Machines",
    "established_year": 2005,
    "tagline": "Engineering Solutions, Shaping Health Since 2005",
    "domain": "https://metropharmamachines.com",
    "contact": {
        "sales_email": "sales@metropharmamachines.com",
        "inquiry_email": "inquiry@metropharmamachines.com",
        "phone": "+91 82916 51762",
        "whatsapp": "+91 82916 51762",
        "address": {
            "unit": "Unit No. 17",
            "estate": "Civic Industrial Estate",
            "locality": "Walivnaka, Fanaspada",
            "city": "Vasai (East)",
            "state": "Maharashtra",
            "pincode": "401208",
            "country": "India"
        }
    },
    "certifications_standards": [
        "cGMP (Current Good Manufacturing Practice)",
        "FDA Compliant Contact Surfaces",
        "ISO Standards Engineering",
        "CE Compliant Electricals"
    ],
    "industries_served": [
        "Pharmaceutical",
        "Chemical",
        "Food & Beverage",
        "Cosmetics",
        "Agro Chemicals",
        "Nutraceuticals"
    ],
    "solutions": [
        "Screening & Filtering",
        "Milling & Size Reduction",
        "Mixing & Blending",
        "Granulation",
        "Drying",
        "Coating",
        "Material Handling",
        "Liquid & Ointment Manufacturing Plants"
    ],
    "notable_clients": [
        "Khandelwal Laboratories Pvt. Ltd."
    ]
}

with open(os.path.join(out_dir, 'company_profile.json'), 'w', encoding='utf-8') as f:
    json.dump(company_profile, f, indent=2, ensure_ascii=False)

# 2. Master Products Catalog
products = [
    {
        "id": "vibro-sifter",
        "name": "Vibro Sifter",
        "category": "Screening & Sieving",
        "short_description": "High-efficiency gyratory vibration screening machine for classifying, sieving, grading, and solid-liquid/solid-solid separation.",
        "working_principle": "Operates on vibratory motor technology, generating multi-plane vibration to classify or separate materials by size or property.",
        "material_of_construction": "Stainless Steel (SS 304 / 316 / 316L), mild steel options, food & pharma grade finish (cGMP).",
        "sieve_types": "Fine mesh, coarse mesh, perforated sheet, ultrasonic de-blinding compatible.",
        "applications": [
            "Pharmaceuticals (tablets, powders, granules)",
            "Food (flour, spices, starch, sugar, cocoa)",
            "Chemicals (resins, dyes, pigments, salts)",
            "Cosmetics (talc, pigments)",
            "Industrial (paints, minerals, ceramics)"
        ],
        "drive_mechanism": "Vibratory motors mounted at specific angles for multi-dimensional vibration.",
        "key_features": [
            "Compact footprint and low noise operation",
            "Tool-free quick-release clamp rings for rapid screen changes",
            "High throughput screening with minimal blinding",
            "Customizable mesh sizes (down to 500 mesh)",
            "Dust-tight cover preventing environment dusting",
            "Single or multiple deck separation (up to 4 decks)"
        ],
        "available_sizes": ["12 inch (Lab)", "20 inch", "24 inch", "30 inch", "36 inch", "48 inch", "60 inch", "72 inch"],
        "screen_options": "Single or multiple screens for 2 to 5 fraction grading",
        "capacity_range": "100 kg/hour to 3,000 kg/hour",
        "power_supply": "Single phase (230V) or Three phase (415V, 50Hz)",
        "models": [
            "Round Sifter Standard Pharma Model",
            "Inline Sifter Model (Continuous inline transfer)",
            "Lab Sifter Model (Benchtop R&D)",
            "Flour Mill MS Powder Coated Sifter",
            "Food Screening SS 304 Model",
            "Large Production High-Capacity Model",
            "Square Frame Heavy-Duty Platform Model"
        ],
        "assets": {
            "website_image": "tempdata/website_scraped/assets/Asset/logo/Machine/Vibro_Sifter.png",
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_4_img_1.jpeg",
                "tempdata/pdf_extracted/VIBRO SIFTER-METRO PHARMA/images/page_1_img_1.jpeg"
            ]
        }
    },
    {
        "id": "vacuum-vibro-sifter",
        "name": "Vacumet - Vacuum Vibro Sifter",
        "category": "Screening & Sieving (Closed System)",
        "short_description": "Dust-free, hermetically sealed screening and pneumatic conveying system for hazardous, potent, or high-purity powders.",
        "working_principle": "Operates using vibratory motor technology integrated with a vacuum conveying system. Multi-plane vibration classifies material while continuous vacuum maintains complete containment and inline transfer.",
        "material_of_construction": "SS 316 / 316L contact parts (Ra < 0.4 um), SS 304 non-contact parts.",
        "sieve_types": "Fine mesh, coarse mesh with specialized vacuum-tight gasket sealing.",
        "applications": [
            "Pharmaceutical APIs (Active Pharmaceutical Ingredients) and potent compounds",
            "Nutraceutical powders",
            "Contamination-sensitive food powders",
            "Hazardous chemical processing",
            "Cleanroom operations requiring zero dust discharge"
        ],
        "drive_mechanism": "Specially angled vibratory motors for orbital motion integrated with vacuum suction inline.",
        "key_features": [
            "100% dust-free closed loop operation",
            "cGMP compliant design with sanitary tri-clamp fittings",
            "Direct continuous vacuum conveying from IBC or hopper to sifter",
            "CIP (Clean-In-Place) wash-in-place capability",
            "Operator safety with maximum containment"
        ],
        "available_sizes": ["24 inch", "30 inch", "36 inch", "48 inch"],
        "screen_options": "Single or double deck screens",
        "capacity_range": "100 kg/hour to 1,500 kg/hour",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "website_image": "tempdata/website_scraped/assets/Asset/logo/Machine/Vacuum_Vibro_Sifter.png",
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_7_img_1.jpeg",
                "tempdata/pdf_extracted/VIBRO SIFTER-METRO PHARMA/images/page_4_img_1.jpeg"
            ]
        }
    },
    {
        "id": "multi-mill",
        "name": "Multi Mill",
        "category": "Milling & Size Reduction",
        "short_description": "Versatile high-speed milling machine for wet and dry granulation, pulverization, shredding, and mixing across pharmaceutical, chemical, and food sectors.",
        "working_principle": "High-speed rotor equipped with reversible blades (knife and impact edges) rotates inside a cylindrical screen chamber. Material is disintegrated by high-velocity impact against blades and chamber walls.",
        "material_of_construction": "SS 316 contact parts with mirror finish, SS 304 structure and covers.",
        "sieve_types": "Perforated plate and wire woven screens with aperture from 0.5 mm to 12 mm.",
        "applications": [
            "Wet and dry granulation in tablet formulation",
            "Pulverization of crystalline chemicals, herbs, and spices",
            "De-lumping of agglomerated powders",
            "Shredding and chopping operations"
        ],
        "drive_mechanism": "Direct belt drive driven by flameproof or non-flameproof TEFC electric motor (variable speed optional via VFD).",
        "key_features": [
            "Reversible rotor blade design: Knife edge for gentle granulation, Impact edge for fine pulverization",
            "Multiple rotor speeds (up to 3,000 RPM) for precise particle size control",
            "Mounted on sturdy castor wheels for effortless mobility",
            "Tool-less quick-opening screen clamp for swift cleaning"
        ],
        "available_sizes": ["Lab Model (1 HP / 2 HP)", "Production Model (3 HP, 5 HP, 7.5 HP)"],
        "capacity_range": "50 kg/hour to 1,000 kg/hour",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "website_image": "tempdata/website_scraped/assets/Asset/logo/Machine/Multi_Mill.png",
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_9_img_1.jpeg"
            ]
        }
    },
    {
        "id": "co-mill",
        "name": "Co-Mill (Cone Mill)",
        "category": "Milling & Size Reduction",
        "short_description": "Gentle, low-heat conical milling machine engineered for uniform de-lumping, sizing, and milling of sensitive granules.",
        "working_principle": "Material enters the conical screening chamber where an impeller rotates at controlled speed, creating a vortex and gently shearing particles through screen perforations without excessive frictional heat.",
        "material_of_construction": "SS 316 contact parts, mirror polished (Ra < 0.4 um).",
        "applications": [
            "Sizing after wet granulation and fluid bed drying",
            "De-lumping hygroscopic chemicals and agglomerates",
            "Dry milling of fragile and heat-sensitive pharmaceuticals",
            "Re-milling of off-spec tablets for scrap recovery"
        ],
        "key_features": [
            "Significantly lower heat and fine dust generation compared to hammer mills",
            "Narrow particle size distribution with high yield",
            "Sanitary design with quick-clamp disassembly for thorough cleaning",
            "cGMP compliant inline integration with granulators or bin blenders"
        ],
        "capacity_range": "25 kg/hour to 800 kg/hour",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_11_img_1.jpeg"
            ]
        }
    },
    {
        "id": "colloid-mill",
        "name": "Colloid Mill (Vertical & Horizontal Models)",
        "category": "Homogenizing & Emulsifying",
        "short_description": "Precision rotor-stator colloid mill engineered for micro-fine particle size reduction, dispersion, homogenization, and emulsification of liquids and semi-solids.",
        "working_principle": "A high-speed precision rotor turns against a stationary stator with an adjustable microscopic clearance gap. Material experiences intense hydraulic shear, cavitation, and centrifugal forces.",
        "material_of_construction": "SS 316 / 316L contact parts with specially hardened rotor and stator surfaces.",
        "applications": [
            "Pharmaceutical ointments, suspensions, syrups, and topical emulsions",
            "Food sauces, mayonnaise, peanut butter, fruit purees, and fruit concentrates",
            "Cosmetic cold creams, vanishing creams, shampoos, and lotions",
            "Chemical paints, lacquers, inks, adhesives, and textile finishes"
        ],
        "key_features": [
            "Micrometer adjustment mechanism to calibrate rotor-stator gap while running",
            "Jacketed conical hopper for heating or cooling hot water/steam/chilled brine",
            "Recirculation pipe assembly for continuous multiple-pass processing",
            "Available in both Vertical and Horizontal space-saving layouts"
        ],
        "available_sizes": ["Lab/R&D (1 HP, 2 HP)", "Production (3 HP, 5 HP, 7.5 HP, 15 HP)"],
        "capacity_range": "20 liters/hour to 2,500 liters/hour",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "website_image": "tempdata/website_scraped/assets/Asset/logo/Machine/Colloid_Mill.png",
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_13_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_14_img_1.jpeg"
            ]
        }
    },
    {
        "id": "coating-pan",
        "name": "Coating Pan",
        "category": "Tablet Coating",
        "short_description": "Standard stainless steel revolving coating pan designed for conventional sugar coating and film coating of tablets, pellets, and confectionery.",
        "working_principle": "Tablets tumble continuously inside an ellipsoidal or spherical revolving pan while coating solution is applied via spray gun or ladling and dried by hot air blower.",
        "material_of_construction": "SS 304 or SS 316 pan bowl with heavy tubular mild steel or SS cladded base structure.",
        "applications": [
            "Sugar coating of pharmaceutical tablets and ayurvedic pills",
            "Film coating of confectionery products, chocolates, and nuts",
            "Agricultural seed coating and pelletizing"
        ],
        "key_features": [
            "Adjustable pan tilt angle and variable rotational speed (AC VFD drive)",
            "Integrated hot air blower system with electric heater and thermostat",
            "Available with automatic peristaltic spray gun assembly",
            "Hygienic mirror polish interior prevents product sticking"
        ],
        "available_sizes": ["12 inch (Lab)", "24 inch", "36 inch", "42 inch", "48 inch", "60 inch", "72 inch"],
        "capacity_range": "5 kg/batch to 350 kg/batch",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_16_img_1.jpeg"
            ]
        }
    },
    {
        "id": "auto-coater",
        "name": "Metro Coater (Automated Tablet Auto-Coater)",
        "category": "Tablet Coating (Automated cGMP)",
        "short_description": "Fully automated perforated pan auto-coater with advanced PLC-touchscreen automation for aqueous, organic solvent, and enteric coating of tablets and pellets.",
        "working_principle": "Tablets tumble in a perforated rotating pan guided by special mixing baffles while spray guns atomize coating solution under negative air pressure and controlled dehumidified hot air flow.",
        "material_of_construction": "SS 316L contact parts mirror polished (Ra < 0.4 um), SS 304 outer panels.",
        "applications": [
            "Aqueous film coating of pharmaceutical tablets",
            "Organic solvent-based coating with flameproof execution",
            "Enteric coating for acid-resistant formulations",
            "Controlled-release multi-particulate pellet coating"
        ],
        "key_features": [
            "Fully automated PLC + HMI touchscreen interface with recipe management",
            "High-precision anti-bearding spray guns with peristaltic dosing pump",
            "Integrated Air Handling Unit (AHU) with pre-filter, HEPA filter, and heating coil",
            "Exhaust blower with wet scrubber / dry dust collection system",
            "Clean-in-Place (CIP) wash system with internal spray balls"
        ],
        "available_sizes": ["12 inch (Lab/R&D)", "24 inch (25 kg)", "36 inch (75 kg)", "48 inch (150 kg)", "60 inch (300 kg)", "66 inch (450 kg)"],
        "capacity_range": "2 kg/batch to 450 kg/batch",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "website_image": "tempdata/website_scraped/assets/Asset/logo/Machine/autocoater.png",
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_18_img_1.jpeg"
            ]
        }
    },
    {
        "id": "fluid-bed-dryer",
        "name": "Fluid Bed Dryer (FBD)",
        "category": "Drying",
        "short_description": "High-efficiency fluid bed drying equipment designed for rapid, uniform moisture removal from wet granulation and powders using hot air fluidization.",
        "working_principle": "Conditioned heated air passes through a bottom distribution plate, lifting granules into an agitated boiling-fluid state where heat and mass transfer occur rapidly.",
        "material_of_construction": "SS 316 / 316L product bowl and retarding chamber, SS 304 outer body and AHU.",
        "applications": [
            "Drying of wet granules for pharmaceutical tablets and capsules",
            "Drying of food powders, crystals, and seasonings",
            "Chemical, agrochemical, and dye intermediate drying"
        ],
        "key_features": [
            "Rapid drying cycle: 20 to 45 minutes per batch",
            "HEPA air filtration (0.3 micron 99.97% efficiency) ensures sterile drying air",
            "Pneumatic bag shaking mechanism for finger filter cleaning",
            "Explosion relief safety flap with 2-bar pressure shock rating",
            "PLC based temperature, airflow, and cycle time automation"
        ],
        "available_sizes": ["5 kg (Lab/R&D)", "30 kg", "60 kg", "120 kg", "200 kg", "250 kg", "300 kg", "500 kg"],
        "capacity_range": "5 kg to 500 kg per batch",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "website_image": "tempdata/website_scraped/assets/Asset/logo/Machine/fbd.png",
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_20_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_21_img_1.jpeg"
            ]
        }
    },
    {
        "id": "tray-dryer",
        "name": "Tray Dryer & Vacuum Tray Dryer (VTD)",
        "category": "Drying",
        "short_description": "Convection hot air circulation tray dryer and low-temperature vacuum tray dryer for moisture removal from heat-sensitive APIs and chemicals.",
        "working_principle": "Tray dryer circulates heated filtered air horizontally across staggered trays; Vacuum Tray Dryer (VTD) conducts heat via hollow shelves under high vacuum for low-boiling moisture evaporation.",
        "material_of_construction": "SS 316 contact trays and shelves, SS 304 heavy insulated outer structure.",
        "applications": [
            "Drying of granular powders, herbs, bulk drugs, and APIs",
            "Vacuum drying of heat-sensitive, hygroscopic, and oxidizable products",
            "Solvent recovery drying operations"
        ],
        "available_sizes": ["12 trays (Lab)", "24 trays", "48 trays", "96 trays", "192 trays"],
        "capacity_range": "30 kg to 500 kg per batch",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_23_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_25_img_1.jpeg"
            ]
        }
    },
    {
        "id": "rapid-mixer-granulator",
        "name": "Rapid Mixer Granulator (RMG)",
        "category": "Granulation & Mixing",
        "short_description": "High-shear mixer granulator designed for rapid dry mixing and wet granulation in pharmaceutical tablet and capsule manufacturing.",
        "working_principle": "Specially designed dual-blade bottom impeller creates fluid tumbling and shearing action while a high-speed side chopper shatters agglomerates, creating uniform spherical granules in minutes.",
        "material_of_construction": "SS 316L bowl, impeller, chopper and dome with mirror polish (Ra < 0.3 um). SS 304 drive cabinet.",
        "applications": [
            "Dry powder blending and wet binder granulation for solid dosage forms",
            "Nutraceutical formulations and food powder compounding",
            "Chemical powder granulation"
        ],
        "key_features": [
            "Ultra-fast processing cycle: 8 to 15 minutes per batch",
            "Automated binder addition system with pressurized tank and peristaltic spray nozzle",
            "Pneumatically operated side discharge valve with container docking sleeve",
            "Air purge shaft seals preventing powder ingress into bearings",
            "PLC touchscreen controller with torque/amperage end-point monitoring"
        ],
        "available_sizes": ["5 L / 10 L (Lab/R&D)", "25 L", "50 L", "100 L", "150 L", "250 L", "400 L", "600 L", "1000 L"],
        "capacity_range": "2 kg to 400 kg per batch",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_27_img_1.jpeg"
            ]
        }
    },
    {
        "id": "paste-kettle",
        "name": "Paste Kettle (Starch Paste Kettle)",
        "category": "Heating & Mixing",
        "short_description": "Steam / electrically jacketed hemispherical tilting kettle for preparing starch paste, binder solutions, ointments, and gels.",
        "working_principle": "Jacketed hemispherical vessel with anchor-type slow speed agitator and Teflon scrapers, preventing sticking and burning during heating.",
        "material_of_construction": "SS 316 contact bowl, SS 304 jacket and external cladding.",
        "applications": [
            "Starch paste preparation for tablet binding in wet granulation",
            "Ointment, cream, gel, and cosmetic base preparation",
            "Food syrup, glucose, sauce cooking, and confectionery preparation"
        ],
        "key_features": [
            "Hemispherical bowl design ensures uniform heat distribution",
            "Motorized or manual 90-degree worm gear tilting for seamless paste discharge",
            "Heating options: Steam jacketed, electrical immersion, or thermic fluid jacketed",
            "Anchor agitator with spring-loaded PTFE scrapers prevents surface charring"
        ],
        "available_sizes": ["25 Liters", "50 Liters", "100 Liters", "150 Liters", "200 Liters", "300 Liters", "500 Liters"],
        "capacity_range": "25 L to 500 L",
        "power_supply": "Three phase 415V, 50Hz",
        "assets": {
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_29_img_1.jpeg"
            ]
        }
    },
    {
        "id": "filter-press",
        "name": "Filter Press (Zero Hold Up / Sparkler Type)",
        "category": "Filtering & Solid-Liquid Separation",
        "short_description": "High-efficiency closed filtration unit for complete clarification and solid-liquid separation of syrups, injectables, chemicals, and oils.",
        "working_principle": "Slurry is pumped under pressure through horizontal filter plates and filter pads/cloths. Cake accumulates on plates while crystal clear filtrate discharges from the central manifold.",
        "material_of_construction": "SS 316 plates and manifold, SS 304 trolley and casing.",
        "applications": [
            "Pharmaceutical syrups, oral liquids, and parenteral solutions",
            "Chemical solutions, dyes, and resins",
            "Food edible oils, beverages, beer, and fruit juices"
        ],
        "key_features": [
            "Zero hold-up design ensures 100% recovery of high-value filtrate",
            "Mounted on trolley with feed pump for mobility",
            "Hygienic sanitary gaskets and easy plate dismantle for cake removal"
        ],
        "available_sizes": ["8 inch", "14 inch", "18 inch", "24 inch", "33 inch plate diameters"],
        "capacity_range": "100 L/hour to 10,000 L/hour",
        "assets": {
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_31_img_1.jpeg"
            ]
        }
    },
    {
        "id": "industrial-blenders",
        "name": "Industrial Powder Blenders (Octagonal, Double Cone, V-Blender, Ribbon)",
        "category": "Mixing & Blending",
        "short_description": "Comprehensive range of tumbling and convective blenders for gentle, homogeneous dry powder and granule blending.",
        "working_principle": "Slow rotational tumbling action (Octagonal, Double Cone, V-Blender) or counter-directional helical ribbon agitation (Ribbon Blender) for uniform multi-directional powder dispersion.",
        "material_of_construction": "SS 316 / 316L internal surfaces (mirror finished), SS 304 exterior and safety railings.",
        "applications": [
            "Pharmaceutical dry powder lubrication and blending prior to tableting",
            "Nutraceutical protein powder and health drink mixes",
            "Food spices, flour blends, baking mixes, and seasonings",
            "Chemical pigments, plastic granules, and detergent formulations"
        ],
        "key_features": [
            "Gentle action preserves particle geometry and prevents dusting or heat generation",
            "Internal mixing baffles for enhanced cross-flow homogeneity",
            "Comprehensive safety railing with interlocked limit switches",
            "Dust-tight butterfly valve discharge with silicone container docking"
        ],
        "available_sizes": ["50 Liters (Lab)", "100 L", "250 L", "500 L", "1,000 L", "2,000 L", "3,000 L", "5,000 L"],
        "capacity_range": "50 L to 5,000 L batch volume",
        "power_supply": "Three phase 415V, 50Hz",
        "models": [
            "Octagonal Blender",
            "Double Cone Blender",
            "V-Blender",
            "Ribbon Blender"
        ],
        "assets": {
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_33_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_34_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_35_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_36_img_1.jpeg"
            ]
        }
    },
    {
        "id": "homogenizers-and-vessels",
        "name": "Homogenizers, Mixing & Pressure Vessels",
        "category": "Liquid & Semi-Solid Processing",
        "short_description": "High-shear inline and batch homogenizers, pressure vessels, jacketed mixing vessels, and bulk storage vessels for fluid and semi-solid processing.",
        "working_principle": "Precision high-shear rotor-stator dispersion heads coupled with anchor agitators, heating/cooling jackets, and vacuum/pressure control.",
        "material_of_construction": "SS 316L contact parts electro-polished to Ra < 0.3 um; SS 304 insulation cladding.",
        "applications": [
            "Oral liquid suspensions, syrups, and solutions",
            "Topical ointments, cosmetic creams, lotions, and gels",
            "Biotech and chemical reaction vessels under positive/vacuum pressure"
        ],
        "available_sizes": ["100 Liters to 10,000 Liters"],
        "assets": {
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_38_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_39_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_40_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_41_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_42_img_1.jpeg"
            ]
        }
    },
    {
        "id": "manufacturing-plants-and-lines",
        "name": "Complete Manufacturing Plants & Granulation Lines",
        "category": "Turnkey Processing Lines",
        "short_description": "Complete integrated processing plants including Metro Granulation Line, Liquid/Syrup Manufacturing Plants, and Ointment/Cream Manufacturing Plants.",
        "working_principle": "Automated integrated closed-loop material transfer across RMG, Co-Mill, FBD, Vibro Sifter, and Bin Blender for end-to-end processing without open human contact.",
        "material_of_construction": "Complete SS 316L cGMP execution with SCADA/PLC centralized control.",
        "applications": [
            "Pharmaceutical solid dosage automated granulation suite",
            "Oral liquid suspension and syrup turnkey plant",
            "Sterile and non-sterile ointment/cream automated plant"
        ],
        "assets": {
            "pdf_images": [
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_43_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_44_img_1.jpeg",
                "tempdata/pdf_extracted/METRO-PHARMA-BROCHURE/images/page_45_img_1.jpeg"
            ]
        }
    }
]

out_catalog_path = os.path.join(out_dir, 'products_master_catalog.json')
with open(out_catalog_path, 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print(f"Catalog generated successfully: {len(products)} master machines saved to {out_catalog_path}")
print(f"Company profile saved to {os.path.join(out_dir, 'company_profile.json')}")
