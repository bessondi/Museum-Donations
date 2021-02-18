module.exports = {
  lintOnSave: false,

  // for github pages
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Museum-Donations/'
    : '/'
}
