module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      primary: '#dabcff',
      secondary: '#ff8d8d',
      tertiary: '#ffdb8d',
      quaternary: '#8dff8d',
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
