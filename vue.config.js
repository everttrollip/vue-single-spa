module.exports = {
  chainWebpack: config => {
    config.externals(['vue', 'vuetify']);
  },
  configureWebpack: {
    output: {
      filename: `[name].js`,
      chunkFilename: `[name].js`,
    },
  },
  transpileDependencies: [
    'vuetify'
  ]
}
