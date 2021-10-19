module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        champ: 
        {
          50: '#fffddd',
          100: '#fff9b0',
          200: '#fff480',
          300: '#fff04f',
          400: '#ffec23',
          500: '#e6d20f',
          600: '#b3a305',
          700: '#807500',
          800: '#4d4600',
          900: '#1b1700',
        },
        navCol:
        {
          50: '#e8efff',
          100: '#c3d0f0',
          200: '#9db0e1',
          300: '#2B3148',
          400: '#5171c8',
          500: '#3857ae',
          600: '#2b4488',
          700: '#1e3062',
          800: '#101d3d',
          900: '#030a1a',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
