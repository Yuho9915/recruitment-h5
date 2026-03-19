/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1677FF',
        bg: '#F6F7F9',
        text: {
          primary: '#000',
          secondary: '#666',
          tertiary: '#999'
        },
        border: '#E5E6EB'
      },
      spacing: {
        'gap': '16px'
      }
    },
  },
  plugins: [],
}
