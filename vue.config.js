module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // args[0].title = "Fabergé Museum Donations"
        args[0].title = "Пожертвование Музею Фаберже"
        return args
      })
  }

  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/Museum-Donations/'
  //   : '/'
}
