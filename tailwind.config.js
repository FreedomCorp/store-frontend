module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'container-dark': '#1F2129',
        'container-dark-200': '#17181E',
        'background-dark': '#272934',
        'text-dark': '#9195AB',
        'checked-color': '#63F58C',
        'lighter-dark': '#656A83',
        'off-dark': '#272934',
        'light-dark': '#9B9D9F', 
        'dark-100': 'rgb(155, 157, 159)',
        'background-light': '#9cabba',
        'container-light': '#C9D6DF',
        'light-300': '#52616B',
        'light-400': '#181D20'
      },
      content: {
        'text-expand': {
          'line-height': '22px',
          'font-weight': '600',
        }
      }
    },
  },
  plugins: [],
}