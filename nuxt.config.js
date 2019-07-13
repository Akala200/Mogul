import webpack from 'webpack'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Moghul',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  css: [
    '~assets/css/bootstrap.min.css',
    '~assets/css/mdb.min.css',
    '~assets/css/style.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      '_': 'lodash'
      // ...etc.
    })
  ],
  extend (config, { isDev, isClient }) {
    // ..
    config.module.rules.push(
       {
         test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
         loader: 'file-loader',
       }
     )
     // Sets webpack's mode to development if `isDev` is true.
     if (isDev) config.mode = 'development'
  }
  }
}
