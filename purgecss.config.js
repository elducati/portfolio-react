import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html']
    })
  ]
}
