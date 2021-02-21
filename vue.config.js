module.exports = {
  chainWebpack: config => {
    config.externals(['vue', 'vuetify']);
  },
  transpileDependencies: [
    'vuetify'
  ]
}
