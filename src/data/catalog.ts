export interface ComponentSpecs {
  [key: string]: string | number | boolean | string[] | number[];
}

export interface Component {
  id: string;
  category: string;
  brand: string;
  model: string;
  specs: ComponentSpecs;
  price_aed: number;
  image?: string;
}

export const catalog: Component[] = [
  // CPUs
  {
    id: "amd-ryzen-5-7600x",
    category: "cpu",
    brand: "AMD",
    model: "Ryzen 5 7600X",
    specs: {
      socket: "AM5",
      cores: 6,
      threads: 12,
      tdp_watts: 105,
      integrated_graphics: false,
    },
    price_aed: 769,
  },
  {
    id: "intel-i7-14700f",
    category: "cpu",
    brand: "Intel",
    model: "Core i7-14700F",
    specs: {
      socket: "LGA1700",
      cores: 20,
      threads: 28,
      tdp_watts: 219,
      integrated_graphics: false,
    },
    price_aed: 1139,
  },
  {
    id: "intel-i9-14900k",
    category: "cpu",
    brand: "Intel",
    model: "Core i9-14900K",
    specs: {
      socket: "LGA1700",
      cores: 24,
      threads: 32,
      tdp_watts: 253,
      integrated_graphics: true,
    },
    price_aed: 2419,
  },
  {
    id: "intel-i5-14400f",
    category: "cpu",
    brand: "Intel",
    model: "Core i5-14400F",
    specs: {
      socket: "LGA1700",
      cores: 10,
      threads: 16,
      tdp_watts: 148,
      integrated_graphics: false,
    },
    price_aed: 689,
  },
  {
    id: "amd-ryzen-7-7800x3d",
    category: "cpu",
    brand: "AMD",
    model: "Ryzen 7 7800X3D",
    specs: {
      socket: "AM5",
      cores: 8,
      threads: 16,
      tdp_watts: 120,
      integrated_graphics: false,
    },
    price_aed: 1839,
  },
  {
    id: "amd-ryzen-9-7950x",
    category: "cpu",
    brand: "AMD",
    model: "Ryzen 9 7950X",
    specs: {
      socket: "AM5",
      cores: 16,
      threads: 32,
      tdp_watts: 170,
      integrated_graphics: false,
    },
    price_aed: 1999,
  },
  {
    id: "intel-i5-12400",
    category: "cpu",
    brand: "Intel",
    model: "Core i5-12400",
    specs: {
      socket: "LGA1700",
      cores: 6,
      threads: 12,
      tdp_watts: 117,
      integrated_graphics: true,
    },
    price_aed: 633,
  },
  {
    id: "amd-ryzen-5-8500g",
    category: "cpu",
    brand: "AMD",
    model: "Ryzen 5 8500G",
    specs: {
      socket: "AM5",
      cores: 6,
      threads: 12,
      tdp_watts: 65,
      integrated_graphics: true,
    },
    price_aed: 669,
  },

  // GPUs
  {
    id: "msi-rtx-4090-ventus",
    category: "gpu",
    brand: "MSI",
    model: "RTX 4090 Ventus 3X OC 24GB",
    specs: {
      vram_gb: 24,
      length_mm: 336,
      tdp_watts: 450,
      power_connectors: "1x16-pin",
      recommended_psu_watts: 850,
    },
    price_aed: 17850,
  },
  {
    id: "asus-tuf-rtx-4060ti",
    category: "gpu",
    brand: "ASUS",
    model: "TUF RTX 4060 Ti OC 8GB",
    specs: {
      vram_gb: 8,
      length_mm: 300,
      tdp_watts: 160,
      power_connectors: "1x8-pin",
      recommended_psu_watts: 550,
    },
    price_aed: 2129,
  },
  {
    id: "msi-rtx-4060ti-gaming",
    category: "gpu",
    brand: "MSI",
    model: "RTX 4060 Ti Gaming X 8GB",
    specs: {
      vram_gb: 8,
      length_mm: 305,
      tdp_watts: 160,
      power_connectors: "1x8-pin",
      recommended_psu_watts: 550,
    },
    price_aed: 2200,
  },
  {
    id: "msi-rtx-4060ti-ventus",
    category: "gpu",
    brand: "MSI",
    model: "RTX 4060 Ti Ventus 3X OC",
    specs: {
      vram_gb: 8,
      length_mm: 298,
      tdp_watts: 160,
      power_connectors: "1x8-pin",
      recommended_psu_watts: 550,
    },
    price_aed: 1784,
  },

  // Cooling
  {
    id: "noctua-nh-d15",
    category: "cooling",
    brand: "Noctua",
    model: "NH-D15",
    specs: {
      type: "air",
      height_mm: 165,
      fan_size_mm: [140, 140],
      tdp_rating_w: 220,
    },
    price_aed: 450,
  },
  {
    id: "bequiet-dark-rock-pro4",
    category: "cooling",
    brand: "be quiet!",
    model: "Dark Rock Pro 4",
    specs: {
      type: "air",
      height_mm: 163,
      fan_size_mm: [120, 135],
      tdp_rating_w: 250,
    },
    price_aed: 420,
  },
  {
    id: "coolermaster-hyper212",
    category: "cooling",
    brand: "Cooler Master",
    model: "Hyper 212 Evo",
    specs: {
      type: "air",
      height_mm: 159,
      fan_size_mm: [120],
      tdp_rating_w: 150,
    },
    price_aed: 120,
  },
  {
    id: "corsair-h100i",
    category: "cooling",
    brand: "Corsair",
    model: "iCUE H100i RGB 240mm",
    specs: {
      type: "aio",
      radiator_size: 240,
      fan_size_mm: [120, 120],
      tdp_rating_w: 250,
    },
    price_aed: 420,
  },
  {
    id: "nzxt-kraken-x63",
    category: "cooling",
    brand: "NZXT",
    model: "Kraken X63 280mm",
    specs: {
      type: "aio",
      radiator_size: 280,
      fan_size_mm: [140, 140],
      tdp_rating_w: 300,
    },
    price_aed: 600,
  },

  // Motherboards
  {
    id: "asus-rog-z790",
    category: "motherboard",
    brand: "ASUS",
    model: "ROG Strix Z790-E Gaming WiFi",
    specs: {
      socket: "LGA1700",
      chipset: "Z790",
      form_factor: "ATX",
      supported_ram_type: "DDR5",
      max_ram_speed: 7800,
      m2_slots: 5,
    },
    price_aed: 1700,
  },
  {
    id: "msi-pro-b760m",
    category: "motherboard",
    brand: "MSI",
    model: "PRO B760M-E DDR4",
    specs: {
      socket: "LGA1700",
      chipset: "B760",
      form_factor: "mATX",
      supported_ram_type: "DDR4",
      max_ram_speed: 5333,
      m2_slots: 2,
    },
    price_aed: 450,
  },
  {
    id: "gigabyte-x670-aorus",
    category: "motherboard",
    brand: "Gigabyte",
    model: "X670 Aorus Elite",
    specs: {
      socket: "AM5",
      chipset: "X670",
      form_factor: "ATX",
      supported_ram_type: "DDR5",
      max_ram_speed: 6400,
      m2_slots: 4,
    },
    price_aed: 1300,
  },
  {
    id: "asrock-b550m-pro4",
    category: "motherboard",
    brand: "ASRock",
    model: "B550M Pro4",
    specs: {
      socket: "AM4",
      chipset: "B550",
      form_factor: "mATX",
      supported_ram_type: "DDR4",
      max_ram_speed: 4733,
      m2_slots: 2,
    },
    price_aed: 450,
  },

  // RAM
  {
    id: "corsair-vengeance-ddr5-32gb",
    category: "ram",
    brand: "Corsair",
    model: "Vengeance DDR5 32GB (2x16) 5600MHz",
    specs: {
      type: "DDR5",
      size_gb: 32,
      speed_mhz: 5600,
      kit_config: "2x16",
    },
    price_aed: 600,
  },
  {
    id: "gskill-trident-z5",
    category: "ram",
    brand: "G.Skill",
    model: "Trident Z5 32GB DDR5 6000MHz",
    specs: {
      type: "DDR5",
      size_gb: 32,
      speed_mhz: 6000,
      kit_config: "2x16",
    },
    price_aed: 800,
  },
  {
    id: "kingston-fury-ddr4",
    category: "ram",
    brand: "Kingston",
    model: "Fury Beast DDR4 16GB 3200MHz",
    specs: {
      type: "DDR4",
      size_gb: 16,
      speed_mhz: 3200,
      kit_config: "2x8",
    },
    price_aed: 220,
  },

  // Storage
  {
    id: "samsung-990-pro-1tb",
    category: "storage",
    brand: "Samsung",
    model: "990 PRO 1TB",
    specs: {
      type: "NVMe",
      form: "M.2 2280",
      capacity_gb: 1000,
      interface: "PCIe Gen4 x4",
      seq_read: 7450,
      seq_write: 6900,
    },
    price_aed: 595,
  },
  {
    id: "wd-black-sn770-1tb",
    category: "storage",
    brand: "WD",
    model: "Black SN770 1TB",
    specs: {
      type: "NVMe",
      form: "M.2 2280",
      capacity_gb: 1000,
      interface: "PCIe Gen4 x4",
      seq_read: 5150,
      seq_write: 4900,
    },
    price_aed: 380,
  },
  {
    id: "samsung-870-evo-1tb",
    category: "storage",
    brand: "Samsung",
    model: "870 EVO 1TB",
    specs: {
      type: "SATA",
      form: "2.5",
      capacity_gb: 1000,
      interface: "SATA 6Gb/s",
      seq_read: 560,
      seq_write: 530,
    },
    price_aed: 300,
  },

  // PSU
  {
    id: "corsair-rm850x",
    category: "psu",
    brand: "Corsair",
    model: "RM850x 850W Gold",
    specs: {
      wattage: 850,
      efficiency_rating: "80+ Gold",
      modular: "full",
    },
    price_aed: 550,
  },
  {
    id: "seasonic-focus-gx750",
    category: "psu",
    brand: "Seasonic",
    model: "Focus GX-750 750W",
    specs: {
      wattage: 750,
      efficiency_rating: "80+ Gold",
      modular: "full",
    },
    price_aed: 600,
  },
  {
    id: "coolermaster-mwe-650",
    category: "psu",
    brand: "Cooler Master",
    model: "MWE Bronze 650W",
    specs: {
      wattage: 650,
      efficiency_rating: "80+ Bronze",
      modular: "semi",
    },
    price_aed: 320,
  },

  // Cases
  {
    id: "lian-li-o11-dynamic",
    category: "case",
    brand: "Lian Li",
    model: "O11 Dynamic",
    specs: {
      form_factors_supported: ["E-ATX", "ATX", "mATX", "Mini-ITX"],
      max_gpu_length_mm: 420,
      max_cpu_cooler_height_mm: 167,
    },
    price_aed: 700,
  },
  {
    id: "nzxt-h510",
    category: "case",
    brand: "NZXT",
    model: "H510",
    specs: {
      form_factors_supported: ["ATX", "mATX", "Mini-ITX"],
      max_gpu_length_mm: 381,
      max_cpu_cooler_height_mm: 165,
    },
    price_aed: 380,
  },
  {
    id: "fractal-meshify-c",
    category: "case",
    brand: "Fractal Design",
    model: "Meshify C",
    specs: {
      form_factors_supported: ["ATX", "mATX", "Mini-ITX"],
      max_gpu_length_mm: 315,
      max_cpu_cooler_height_mm: 172,
    },
    price_aed: 500,
  },
];

export const categoryNames: Record<string, string> = {
  cpu: "Processors",
  gpu: "Graphics Cards",
  motherboard: "Motherboards",
  ram: "Memory",
  storage: "Storage",
  psu: "Power Supplies",
  cooling: "Cooling",
  case: "Cases",
};
