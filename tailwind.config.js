/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1440px',
      },
    },
    fontFamily: {
      ubuntu: 'var(--font-ubuntu)',
      jost: 'var(--font-jost)',
      greatvibes: ['Great Vibes', 'cursive'],
      'sans': ['Assistant', 'sans-serif'], // Ajoute la police "Assistant" ici
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: ['18px', '26px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      "3xl": ["32px", "40px"],
      "4xl": ["40px", "48px"],
      "6xl": ["64px", "80px"],
      "9xl": ["64px", "240px"],

    },
    extend: {
      colors: {
        gold: '#FFD700', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
