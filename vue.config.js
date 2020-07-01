const prefixer = require('autoprefixer')

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          prefixer({
            prefix: 'b-'
          })
        ]
      }
    }
  }
}