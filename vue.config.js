const pxtorem = require('postcss-pxtorem')

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 75,
            propList: ['*', '!font*'],
            selectorBlackList: ['van']
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.xiongmaoyouxuan.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
