// Portfolio Data Structure
export interface PortfolioFeature {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
}

export interface PortfolioSpec {
  label: string;
  labelEn: string;
  value: string;
}

export interface Portfolio {
  id: string;
  slug: string;
  productName: string;
  productNameEn: string;
  category: string;
  categoryEn: string;
  clientName: string;
  clientLogo: string;
  description: string;
  descriptionEn: string;
  images: string[];
  mainImage: string;
  year: string;
  tags: string[];
  features?: PortfolioFeature[];
  specs?: PortfolioSpec[];
}

export const portfolios: Portfolio[] = [
  {
    id: '1',
    slug: 'rompi-pertamina',
    productName: 'Rompi Safety',
    productNameEn: 'Safety Vest',
    category: 'Rompi Safety',
    categoryEn: 'Safety Vest',
    clientName: 'PT Pertamina',
    clientLogo: '/images/clients/12.png',
    description: 'Rompi safety premium dengan material reflective berkualitas tinggi untuk karyawan PT Pertamina. Dirancang untuk memberikan visibilitas maksimal di area kerja dengan pencahayaan rendah.',
    descriptionEn: 'Premium safety vest with high quality reflective material for PT Pertamina employees. Designed to provide maximum visibility in low-light work areas.',
    images: [
      '/images/portfolio/rompi-pertamina.webp',
      '/images/portfolio/rompi-pupr.webp',
      '/images/portfolio/jaket-freeport.webp',
      '/images/portfolio/coverall-pln.webp',
    ],
    mainImage: '/images/portfolio/rompi-pertamina.webp',
    year: '2024',
    tags: ['rompi', 'safety', 'reflective', 'oil & gas'],
    features: [
      {
        name: 'Material Reflective Premium',
        nameEn: 'Premium Reflective Material',
        description: 'Menggunakan kain reflective grade 1 dengan daya pantul cahaya tinggi untuk visibilitas maksimal.',
        descriptionEn: 'Uses grade 1 reflective fabric with high light reflection for maximum visibility.'
      },
      {
        name: 'Desain Ergonomis',
        nameEn: 'Ergonomic Design',
        description: 'Potongan yang nyaman dan tidak menghambat gerakan saat bekerja.',
        descriptionEn: 'Comfortable cut that does not restrict movement while working.'
      },
      {
        name: 'Resleting Berkualitas',
        nameEn: 'Quality Zipper',
        description: 'Resleting YKK anti karat untuk ketahanan jangka panjang.',
        descriptionEn: 'YKK rust-resistant zipper for long-term durability.'
      },
      {
        name: 'Kantong Multi-fungsi',
        nameEn: 'Multi-function Pockets',
        description: 'Dilengkapi kantong depan untuk menyimpan peralatan kecil.',
        descriptionEn: 'Equipped with front pockets for storing small equipment.'
      }
    ],
    specs: [
      { label: 'Bahan Utama', labelEn: 'Main Material', value: 'Polyester 100% + Reflective Tape' },
      { label: 'Berat', labelEn: 'Weight', value: '± 250 gram' },
      { label: 'Warna', labelEn: 'Color', value: 'Orange Fluorescent / Lime Green' },
      { label: 'Ukuran Tersedia', labelEn: 'Available Sizes', value: 'S, M, L, XL, XXL, XXXL' },
      { label: 'Standar', labelEn: 'Standard', value: 'SNI / ISO 20471 Class 2' },
      { label: 'Jahitan', labelEn: 'Stitching', value: 'Double Stitching' }
    ]
  },
  {
    id: '2',
    slug: 'coverall-pln',
    productName: 'Coverall Industrial',
    productNameEn: 'Industrial Coverall',
    category: 'Coverall',
    categoryEn: 'Coverall',
    clientName: 'PLN Persero',
    clientLogo: '/images/clients/3.png',
    description: 'Coverall heavy duty untuk perlindungan menyeluruh karyawan PLN di seluruh Indonesia. Cocok untuk pekerjaan teknik dan lapangan dengan risiko tinggi.',
    descriptionEn: 'Heavy duty coverall for complete protection of PLN employees throughout Indonesia. Suitable for high-risk technical and field work.',
    images: [
      '/images/portfolio/coverall-pln.webp',
      '/images/portfolio/rompi-pertamina.webp',
      '/images/portfolio/jaket-freeport.webp',
      '/images/portfolio/wearpack-kuehne-nagel.webp',
    ],
    mainImage: '/images/portfolio/coverall-pln.webp',
    year: '2024',
    tags: ['coverall', 'industrial', 'energi', 'protection'],
    features: [
      {
        name: 'Perlindungan Menyeluruh',
        nameEn: 'Complete Protection',
        description: 'Desain satu potong untuk melindungi seluruh tubuh dari bahaya kerja.',
        descriptionEn: 'One-piece design to protect the entire body from workplace hazards.'
      },
      {
        name: 'Bahan Tahan Api',
        nameEn: 'Fire Resistant Material',
        description: 'Material anti api dengan sertifikasi standar keselamatan.',
        descriptionEn: 'Fire-resistant material with safety standard certification.'
      },
      {
        name: 'Sistem Ventilasi',
        nameEn: 'Ventilation System',
        description: 'Lubang ventilasi di area ketiak untuk sirkulasi udara optimal.',
        descriptionEn: 'Ventilation holes in the underarm area for optimal air circulation.'
      },
      {
        name: 'Kantong Fungsional',
        nameEn: 'Functional Pockets',
        description: 'Multiple pocket untuk menyimpan alat kerja dan dokumen.',
        descriptionEn: 'Multiple pockets for storing work tools and documents.'
      }
    ],
    specs: [
      { label: 'Bahan Utama', labelEn: 'Main Material', value: 'Cotton Twill / Drill America' },
      { label: 'Berat', labelEn: 'Weight', value: '± 600 gram' },
      { label: 'Warna', labelEn: 'Color', value: 'Biru Tua / Abu-abu' },
      { label: 'Ukuran Tersedia', labelEn: 'Available Sizes', value: 'S, M, L, XL, XXL, XXXL' },
      { label: 'Standar', labelEn: 'Standard', value: 'SNI / ISO 11611' },
      { label: 'Jahitan', labelEn: 'Stitching', value: 'Triple Stitching' }
    ]
  },
  {
    id: '3',
    slug: 'jaket-freeport',
    productName: 'Jaket Safety Industrial',
    productNameEn: 'Industrial Safety Jacket',
    category: 'Jaket Safety',
    categoryEn: 'Safety Jacket',
    clientName: 'Freeport Indonesia',
    clientLogo: '/images/clients/freeport.png',
    description: 'Jaket mining dengan scotlight reflective untuk visibility maksimal di area tambang. Dirancang khusus untuk kondisi ekstrem di area pertambangan.',
    descriptionEn: 'Mining jacket with scotlight reflective for maximum visibility in mining areas. Designed specifically for extreme conditions in mining areas.',
    images: [
      '/images/portfolio/jaket-freeport.webp',
      '/images/portfolio/coverall-pln.webp',
      '/images/portfolio/jaket-bbws.webp',
      '/images/portfolio/rompi-pertamina.webp',
    ],
    mainImage: '/images/portfolio/jaket-freeport.webp',
    year: '2024',
    tags: ['jaket', 'mining', 'reflective', 'safety'],
    features: [
      {
        name: 'Scotlight Reflective',
        nameEn: 'Scotlight Reflective',
        description: 'Strip reflektif intensitas tinggi untuk visibilitas di kondisi minim cahaya.',
        descriptionEn: 'High-intensity reflective strips for visibility in low-light conditions.'
      },
      {
        name: 'Tahan Air',
        nameEn: 'Water Resistant',
        description: 'Coating anti air untuk melindungi dari hujan dan kelembaban.',
        descriptionEn: 'Water-resistant coating to protect from rain and humidity.'
      },
      {
        name: 'Lapisan Dalam Hangat',
        nameEn: 'Warm Inner Lining',
        description: 'Lining dalam untuk kenyamanan di area bersuhu rendah.',
        descriptionEn: 'Inner lining for comfort in low-temperature areas.'
      },
      {
        name: 'Resleting Storm Flap',
        nameEn: 'Storm Flap Zipper',
        description: 'Penutup resleting untuk mencegah masuknya angin dan air.',
        descriptionEn: 'Zipper cover to prevent wind and water entry.'
      }
    ],
    specs: [
      { label: 'Bahan Utama', labelEn: 'Main Material', value: 'Polyester Oxford / Taslan' },
      { label: 'Berat', labelEn: 'Weight', value: '± 800 gram' },
      { label: 'Warna', labelEn: 'Color', value: 'Orange / Kuning Neon / Biru' },
      { label: 'Ukuran Tersedia', labelEn: 'Available Sizes', value: 'S, M, L, XL, XXL, XXXL' },
      { label: 'Standar', labelEn: 'Standard', value: 'ANSI/ISEA 107 Class 3' },
      { label: 'Jahitan', labelEn: 'Stitching', value: 'Reinforced Stitching' }
    ]
  },
  {
    id: '4',
    slug: 'wearpack-fmm',
    productName: 'Wearpack FMM Series',
    productNameEn: 'FMM Workwear Series',
    category: 'Wearpack',
    categoryEn: 'Workwear',
    clientName: 'FMM',
    clientLogo: '/images/clients/fmm.png',
    description: 'Wearpack profesional dengan desain modern untuk kebutuhan kerja FMM. Material berkualitas tinggi untuk kenyamanan dan ketahanan sepanjang hari.',
    descriptionEn: 'Professional workwear with modern design for FMM work needs. High-quality material for all-day comfort and durability.',
    images: [
      '/images/portfolio/wearpack-fmm.webp',
      '/images/portfolio/wearpack-kuehne-nagel.webp',
      '/images/portfolio/wearpack-sinergi-gula.webp',
      '/images/portfolio/coverall-pln.webp',
    ],
    mainImage: '/images/portfolio/wearpack-fmm.webp',
    year: '2024',
    tags: ['wearpack', 'fmm', 'professional', 'corporate'],
    features: [
      {
        name: 'Bahan Premium',
        nameEn: 'Premium Material',
        description: 'Kain berkualitas tinggi dengan serat katun pilihan.',
        descriptionEn: 'High-quality fabric with selected cotton fibers.'
      },
      {
        name: 'Menyerap Keringat',
        nameEn: 'Sweat Absorbent',
        description: 'Tekstur kain yang menyerap keringat untuk kenyamanan sepanjang hari.',
        descriptionEn: 'Fabric texture that absorbs sweat for all-day comfort.'
      },
      {
        name: 'Desain Set Matching',
        nameEn: 'Matching Set Design',
        description: 'Atasan dan bawahan dengan desain yang konsisten dan matching.',
        descriptionEn: 'Top and bottom with consistent and matching design.'
      },
      {
        name: 'Kantong Fungsional',
        nameEn: 'Functional Pockets',
        description: 'Kantong depan dan samping untuk menyimpan peralatan kerja.',
        descriptionEn: 'Front and side pockets for storing work equipment.'
      }
    ],
    specs: [
      { label: 'Bahan Utama', labelEn: 'Main Material', value: 'Cotton Drill / TC' },
      { label: 'Berat', labelEn: 'Weight', value: '± 450 gram (set)' },
      { label: 'Warna', labelEn: 'Color', value: 'Custom (sesuai permintaan)' },
      { label: 'Ukuran Tersedia', labelEn: 'Available Sizes', value: 'S, M, L, XL, XXL, XXXL' },
      { label: 'Standar', labelEn: 'Standard', value: 'Standar Industri' },
      { label: 'Jahitan', labelEn: 'Stitching', value: 'Double Stitching' }
    ]
  },
  {
    id: '5',
    slug: 'rompi-pupr',
    productName: 'Safety Vest High-Vis',
    productNameEn: 'High-Vis Safety Vest',
    category: 'Rompi Safety',
    categoryEn: 'Safety Vest',
    clientName: 'Kementerian PUPR',
    clientLogo: '/images/clients/2.png',
    description: 'Rompi safety dengan material reflective grade 1 untuk proyek konstruksi pemerintah. Memenuhi standar keselamatan kerja tinggi.',
    descriptionEn: 'Safety vest with grade 1 reflective material for government construction projects. Meets high workplace safety standards.',
    images: [
      '/images/portfolio/rompi-pupr.webp',
      '/images/portfolio/rompi-pertamina.webp',
      '/images/portfolio/jaket-bbws.webp',
      '/images/portfolio/wearpack-kuehne-nagel.webp',
    ],
    mainImage: '/images/portfolio/rompi-pupr.webp',
    year: '2024',
    tags: ['rompi', 'high-vis', 'konstruksi', 'pemerintah'],
    features: [
      {
        name: 'Reflective Grade 1',
        nameEn: 'Grade 1 Reflective',
        description: 'Material reflektif standar tertinggi untuk visibilitas maksimal.',
        descriptionEn: 'Highest standard reflective material for maximum visibility.'
      },
      {
        name: 'Material Ringan',
        nameEn: 'Lightweight Material',
        description: 'Bahan mesh yang ringan dan tidak panas saat digunakan.',
        descriptionEn: 'Lightweight mesh material that is not hot when worn.'
      },
      {
        name: 'Velcro Closure',
        nameEn: 'Velcro Closure',
        description: 'Penutup velcro yang mudah dan cepat dipakai.',
        descriptionEn: 'Velcro closure that is easy and quick to wear.'
      },
      {
        name: 'Tahan Lama',
        nameEn: 'Durable',
        description: 'Material berkualitas untuk penggunaan jangka panjang.',
        descriptionEn: 'Quality material for long-term use.'
      }
    ],
    specs: [
      { label: 'Bahan Utama', labelEn: 'Main Material', value: 'Polyester Mesh + Reflective Tape' },
      { label: 'Berat', labelEn: 'Weight', value: '± 180 gram' },
      { label: 'Warna', labelEn: 'Color', value: 'Orange Fluorescent / Lime Green' },
      { label: 'Ukuran Tersedia', labelEn: 'Available Sizes', value: 'Universal (Free Size)' },
      { label: 'Standar', labelEn: 'Standard', value: 'SNI 8340:2017 / ISO 20471 Class 2' },
      { label: 'Jahitan', labelEn: 'Stitching', value: 'Overlock Stitching' }
    ]
  },
  {
    id: '6',
    slug: 'jaket-bbws',
    productName: 'Jaket Safety Pro',
    productNameEn: 'Pro Safety Jacket',
    category: 'Jaket Safety',
    categoryEn: 'Safety Jacket',
    clientName: 'BBWS',
    clientLogo: '/images/clients/2.png',
    description: 'Jaket teknisi dengan multiple pocket untuk tools dan kebutuhan lapangan. Ideal untuk pekerja teknis dan inspeksi lapangan.',
    descriptionEn: 'Technician jacket with multiple pockets for tools and field needs. Ideal for technical workers and field inspections.',
    images: [
      '/images/portfolio/jaket-bbws.webp',
      '/images/portfolio/jaket-freeport.webp',
      '/images/portfolio/rompi-pertamina.webp',
      '/images/portfolio/coverall-pln.webp',
    ],
    mainImage: '/images/portfolio/jaket-bbws.webp',
    year: '2024',
    tags: ['jaket', 'teknisi', 'functional', 'outdoor'],
    features: [
      {
        name: 'Multiple Pockets',
        nameEn: 'Multiple Pockets',
        description: 'Berbagai ukuran kantong untuk menyimpan alat dan perlengkapan kerja.',
        descriptionEn: 'Various pocket sizes for storing tools and work equipment.'
      },
      {
        name: 'Bahan Tahan Cuaca',
        nameEn: 'Weather Resistant',
        description: 'Material yang tahan terhadap paparan sinar matahari dan hujan ringan.',
        descriptionEn: 'Material resistant to sun exposure and light rain.'
      },
      {
        name: 'Desain Fungsional',
        nameEn: 'Functional Design',
        description: 'Desain yang praktis dengan penempatan kantong yang ergonomis.',
        descriptionEn: 'Practical design with ergonomic pocket placement.'
      },
      {
        name: 'Reflective Strip',
        nameEn: 'Reflective Strip',
        description: 'Strip reflektif untuk keamanan saat bekerja di area dengan visibilitas rendah.',
        descriptionEn: 'Reflective strip for safety when working in low-visibility areas.'
      }
    ],
    specs: [
      { label: 'Bahan Utama', labelEn: 'Main Material', value: 'Polyester Drill / American Drill' },
      { label: 'Berat', labelEn: 'Weight', value: '± 500 gram' },
      { label: 'Warna', labelEn: 'Color', value: 'Biru Dongker / Hijau / Abu-abu' },
      { label: 'Ukuran Tersedia', labelEn: 'Available Sizes', value: 'S, M, L, XL, XXL, XXXL' },
      { label: 'Standar', labelEn: 'Standard', value: 'Standar Industri' },
      { label: 'Jahitan', labelEn: 'Stitching', value: 'Double Stitching' }
    ]
  },
  {
    id: '7',
    slug: 'wearpack-kuehne-nagel',
    productName: 'Wearpack Pro',
    productNameEn: 'Wearpack Pro',
    category: 'Wearpack',
    categoryEn: 'Workwear',
    clientName: 'Kuehne + Nagel',
    clientLogo: '/images/clients/kuehne-nagel.png',
    description: 'Wearpack logistic dengan bahan drill america yang kuat untuk aktivitas gudang dan logistik. Cocok untuk pekerjaan berat di area pergudangan.',
    descriptionEn: 'Logistic wearpack with strong american drill material for warehouse and logistics activities. Suitable for heavy work in warehouse areas.',
    images: [
      '/images/portfolio/wearpack-kuehne-nagel.webp',
      '/images/portfolio/wearpack-sinergi-gula.webp',
      '/images/portfolio/coverall-pln.webp',
      '/images/portfolio/jaket-bbws.webp',
    ],
    mainImage: '/images/portfolio/wearpack-kuehne-nagel.webp',
    year: '2024',
    tags: ['wearpack', 'logistic', 'drill america', 'warehouse'],
    features: [
      {
        name: 'Drill America Premium',
        nameEn: 'Premium American Drill',
        description: 'Bahan drill america berkualitas tinggi yang kuat dan tahan lama.',
        descriptionEn: 'High-quality American drill fabric that is strong and durable.'
      },
      {
        name: 'Desain Set',
        nameEn: 'Set Design',
        description: 'Atasan dan bahan matching dengan desain yang konsisten.',
        descriptionEn: 'Matching top and bottom with consistent design.'
      },
      {
        name: 'Kantong Utility',
        nameEn: 'Utility Pockets',
        description: 'Kantong depan dan samping untuk menyimpan alat kerja.',
        descriptionEn: 'Front and side pockets for storing work tools.'
      },
      {
        name: 'Elastik Pinggang',
        nameEn: 'Elastic Waistband',
        description: 'Pinggang dengan elastik untuk kenyamanan saat bergerak.',
        descriptionEn: 'Elastic waistband for comfort during movement.'
      }
    ],
    specs: [
      { label: 'Bahan Utama', labelEn: 'Main Material', value: 'American Drill 100% Cotton' },
      { label: 'Berat', labelEn: 'Weight', value: '± 450 gram (set)' },
      { label: 'Warna', labelEn: 'Color', value: 'Navy / Biru Muda / Abu-abu' },
      { label: 'Ukuran Tersedia', labelEn: 'Available Sizes', value: 'S, M, L, XL, XXL, XXXL' },
      { label: 'Standar', labelEn: 'Standard', value: 'Standar Industri' },
      { label: 'Jahitan', labelEn: 'Stitching', value: 'Double Stitching' }
    ]
  },
  {
    id: '8',
    slug: 'wearpack-sinergi-gula',
    productName: 'Wearpack Industrial',
    productNameEn: 'Industrial Wearpack',
    category: 'Wearpack',
    categoryEn: 'Workwear',
    clientName: 'Sinergi Gula',
    clientLogo: '/images/clients/sinergi-gula.png',
    description: 'Pakaian kerja industri dengan perlindungan maksimal untuk sektor manufaktur. Dirancang untuk kenyamanan dan ketahanan di lingkungan pabrik.',
    descriptionEn: 'Industrial workwear with maximum protection for the manufacturing sector. Designed for comfort and durability in factory environments.',
    images: [
      '/images/portfolio/wearpack-sinergi-gula.webp',
      '/images/portfolio/wearpack-kuehne-nagel.webp',
      '/images/portfolio/coverall-pln.webp',
      '/images/portfolio/rompi-pertamina.webp',
    ],
    mainImage: '/images/portfolio/wearpack-sinergi-gula.webp',
    year: '2024',
    tags: ['wearpack', 'industrial', 'manufaktur', 'protection'],
    features: [
      {
        name: 'Bahan Tebal Berkualitas',
        nameEn: 'Quality Thick Material',
        description: 'Material tebal yang memberikan perlindungan ekstra.',
        descriptionEn: 'Thick material that provides extra protection.'
      },
      {
        name: 'Tahan Noda',
        nameEn: 'Stain Resistant',
        description: 'Coating anti noda untuk memudahkan pembersihan.',
        descriptionEn: 'Anti-stain coating for easy cleaning.'
      },
      {
        name: 'Sistem Pendinginan',
        nameEn: 'Cooling System',
        description: 'Desain ventilasi untuk sirkulasi udara di area panas.',
        descriptionEn: 'Ventilation design for air circulation in hot areas.'
      },
      {
        name: 'Jahitan Kuat',
        nameEn: 'Strong Stitching',
        description: 'Jahitan reinforced untuk ketahanan ekstra di titik tekan.',
        descriptionEn: 'Reinforced stitching for extra durability at stress points.'
      }
    ],
    specs: [
      { label: 'Bahan Utama', labelEn: 'Main Material', value: 'Cotton Drill / TC (Tetron Cotton)' },
      { label: 'Berat', labelEn: 'Weight', value: '± 500 gram (set)' },
      { label: 'Warna', labelEn: 'Color', value: 'Orange / Hijau / Coklat' },
      { label: 'Ukuran Tersedia', labelEn: 'Available Sizes', value: 'S, M, L, XL, XXL, XXXL' },
      { label: 'Standar', labelEn: 'Standard', value: 'Standar Industri' },
      { label: 'Jahitan', labelEn: 'Stitching', value: 'Triple Stitching' }
    ]
  }
];

export function getPortfolioBySlug(slug: string): Portfolio | undefined {
  return portfolios.find(p => p.slug === slug);
}

export function getAllPortfolioSlugs(): string[] {
  return portfolios.map(p => p.slug);
}
