import css from 'rollup-plugin-css-only'

export default {
  input: 'js/main.js',
  output: {
    file: 'bundle.js'
  },
  plugins: [
    css({ 
      output: 'bundle.css'
    })
  ]
}
