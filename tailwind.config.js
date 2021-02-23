module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-texture': "url('https://nextjs-simple-blog.netlify.app/images/bg.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
