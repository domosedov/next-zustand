module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#90a16d',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        zoomIn: {
          '0%': { transform: 'scale3d(0, 0, 0)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '100%': { transform: 'scale3d(0, 0, 0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s linear',
        fadeOut: 'fadeOut 1s linear',
        zoomIn: 'zoomIn 1s linear',
        zoomOut: 'zoomOut 1s linear',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
