const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')({

  content: [
    './**/*.html',
    './**/*.njk',
    './**/*.md',
  ],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    cssnano({
      preset: 'default'
    }),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
