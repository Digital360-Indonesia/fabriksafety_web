// Portfolio Data Structure
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
    description: 'Rompi safety premium dengan material reflective berkualitas tinggi untuk karyawan PT Pertamina.',
    descriptionEn: 'Premium safety vest with high quality reflective material for PT Pertamina employees.',
    images: [
      '/images/portfolio/rompi-pertamina.webp',
    ],
    mainImage: '/images/portfolio/rompi-pertamina.webp',
    year: '2024',
    tags: ['rompi', 'safety', 'reflective', 'oil & gas']
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
    description: 'Coverall heavy duty untuk perlindungan menyeluruh karyawan PLN di seluruh Indonesia.',
    descriptionEn: 'Heavy duty coverall for complete protection of PLN employees throughout Indonesia.',
    images: [
      '/images/portfolio/coverall-pln.webp',
    ],
    mainImage: '/images/portfolio/coverall-pln.webp',
    year: '2024',
    tags: ['coverall', 'industrial', 'energi', 'protection']
  },
  {
    id: '3',
    slug: 'jaket-freeport',
    productName: 'Jaket Safety Industrial',
    productNameEn: 'Industrial Safety Jacket',
    category: 'Jaket Safety',
    categoryEn: 'Safety Jacket',
    clientName: 'Freeport Indonesia',
    clientLogo: '/fs-logo.png',
    description: 'Jaket mining dengan scotlight reflective untuk visibility maksimal di area tambang.',
    descriptionEn: 'Mining jacket with scotlight reflective for maximum visibility in mining areas.',
    images: [
      '/images/portfolio/jaket-freeport.webp',
    ],
    mainImage: '/images/portfolio/jaket-freeport.webp',
    year: '2024',
    tags: ['jaket', 'mining', 'reflective', 'safety']
  },
  {
    id: '4',
    slug: 'polo-fmm',
    productName: 'Polo Safety Series',
    productNameEn: 'Safety Polo Series',
    category: 'Polo Shirt',
    categoryEn: 'Polo Shirt',
    clientName: 'FMM',
    clientLogo: '/fs-logo.png',
    description: 'Kaos kerja professional dengan bahan lacoste premium untuk tampilan profesional.',
    descriptionEn: 'Professional work polo with premium lacoste material for a professional look.',
    images: [
      '/images/portfolio/polo-fmm.webp',
    ],
    mainImage: '/images/portfolio/polo-fmm.webp',
    year: '2024',
    tags: ['polo', 'lacoste', 'professional', 'corporate']
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
    description: 'Rompi safety dengan material reflective grade 1 untuk proyek konstruksi pemerintah.',
    descriptionEn: 'Safety vest with grade 1 reflective material for government construction projects.',
    images: [
      '/images/portfolio/rompi-pupr.webp',
    ],
    mainImage: '/images/portfolio/rompi-pupr.webp',
    year: '2024',
    tags: ['rompi', 'high-vis', 'konstruksi', 'pemerintah']
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
    description: 'Jaket teknisi dengan multiple pocket untuk tools dan kebutuhan lapangan.',
    descriptionEn: 'Technician jacket with multiple pockets for tools and field needs.',
    images: [
      '/images/portfolio/jaket-bbws.webp',
    ],
    mainImage: '/images/portfolio/jaket-bbws.webp',
    year: '2024',
    tags: ['jaket', 'teknisi', 'functional', 'outdoor']
  },
  {
    id: '7',
    slug: 'wearpack-kuehne-nagel',
    productName: 'Wearpack Pro',
    productNameEn: 'Wearpack Pro',
    category: 'Wearpack',
    categoryEn: 'Workwear',
    clientName: 'Kuehne + Nagel',
    clientLogo: '/fs-logo.png',
    description: 'Wearpack logistic dengan bahan drill america yang kuat untuk aktivitas gudang dan logistik.',
    descriptionEn: 'Logistic wearpack with strong american drill material for warehouse and logistics activities.',
    images: [
      '/images/portfolio/wearpack-kuehne-nagel.webp',
    ],
    mainImage: '/images/portfolio/wearpack-kuehne-nagel.webp',
    year: '2024',
    tags: ['wearpack', 'logistic', 'drill america', 'warehouse']
  },
  {
    id: '8',
    slug: 'wearpack-sinergi-gula',
    productName: 'Wearpack Industrial',
    productNameEn: 'Industrial Wearpack',
    category: 'Wearpack',
    categoryEn: 'Workwear',
    clientName: 'Sinergi Gula',
    clientLogo: '/fs-logo.png',
    description: 'Pakaian kerja industri dengan perlindungan maksimal untuk sektor manufaktur.',
    descriptionEn: 'Industrial workwear with maximum protection for the manufacturing sector.',
    images: [
      '/images/portfolio/wearpack-sinergi-gula.webp',
    ],
    mainImage: '/images/portfolio/wearpack-sinergi-gula.webp',
    year: '2024',
    tags: ['wearpack', 'industrial', 'manufaktur', 'protection']
  }
];

export function getPortfolioBySlug(slug: string): Portfolio | undefined {
  return portfolios.find(p => p.slug === slug);
}

export function getAllPortfolioSlugs(): string[] {
  return portfolios.map(p => p.slug);
}
