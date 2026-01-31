# Fabrik Safety Website

Website Fabrik Safety - Spesialis pakaian safety dan perlengkapan kerja berkualitas tinggi untuk industri Indonesia.

## Tech Stack

- **Astro 5.17** - Modern static site generator
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Features

- Responsive design (mobile, tablet, desktop)
- Fast loading dengan Astro
- Smooth scrolling navigation
- Modern UI seperti template Shopify
- 7 Main sections:
  1. Hero dengan CTA buttons
  2. Product Categories (6 kategori)
  3. New Arrivals (8 produk)
  4. Video Section dengan Shop Now
  5. Dual Banner (Catalog & Customize)
  6. Portfolio/Corporate Clients
  7. About Us

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/       # Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Categories.astro
│   │   ├── NewArrivals.astro
│   │   ├── VideoSection.astro
│   │   ├── DualBanner.astro
│   │   ├── Portfolio.astro
│   │   └── About.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── public/               # Static assets
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Customization

### Colors
Ubah primary colors di `tailwind.config.mjs`

### Images
Ganti placeholder images dari Unsplash dengan foto produk asli di `src/components/`

### Content
Edit teks dan konten di masing-masing component file

## Deployment

Website ini bisa di-deploy ke:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Cloudflare Pages

## Credits

- Design inspired by mokoworkwear.com
- Photos from Unsplash (placeholder)
- Icons from Heroicons

---

Built with ❤️ using Astro & Tailwind CSS
