/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#ED6326',
      'secondary': '#FBA91E',
      'green': '#ABD03B',
      'sky': '#41A0D8',
      'purple': '#8253A0',
      'red': '#F16768',
      'dark-blue': '#1B1A48',
      'white': '#FFFFFF',
      'secondary-text': '#5F5F7F',
      'icon': '#0E76A8'
    },
    extend: {
      fontFamily: {
        'primary': 'Exo2'
      },
      container: {
        center: true,
        padding: "1rem",
      }
    },
  },
  plugins: [],
}

