/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        duland: {
          dark: '#004200',
          green: '#006400',       // Official brand color (#006400)
          emerald: '#0f5223',
          lightGreen: '#16a34a',
          lime: '#22c55e',
          accent: '#2ebd59',
          paleGreen: '#f0fdf4',
          slate: '#0f172a',
          card: '#0a3d16',
          gold: '#c5a059',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
        '2xl': '1536px',
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
}
