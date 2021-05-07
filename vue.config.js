module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Пожертвование Музею Фаберже | Fabergé Museum Donations"
        return args
      })

    config.module.rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/pdf/[name].[hash:8].[ext]'
      })
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/Museum-Donations/'
    : '/'
}
