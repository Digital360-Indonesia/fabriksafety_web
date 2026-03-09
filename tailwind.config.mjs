/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3fa',
          100: '#cce7f5',
          200: '#99cfeb',
          300: '#66b7e0',
          400: '#339fd6',
          500: '#0678b3',
          600: '#056a9f',
          700: '#045b8b',
          800: '#034c72',
          900: '#023d5a',
        },
        secondary: {
          50: '#fff2e6',
          100: '#ffe5cc',
          200: '#ffcc99',
          300: '#ffb266',
          400: '#ff9933',
          500: '#ff6b00',
          600: '#e66000',
          700: '#cc5500',
          800: '#b34a00',
          900: '#993f00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
