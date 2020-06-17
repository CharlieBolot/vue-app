module.exports = {
  outputDir: 'docs',

  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-app/'
    : '/',

  lintOnSave: false,

  pwa: {
    name: 'My App',
    themeColor: '#66bd63',
    msTileColor: '#000000',
  }
  
}