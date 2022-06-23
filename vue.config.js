module.exports = {
  transpileDependencies: ['vuetify'],

  devServer: {
    // host: 'localhost',
    // proxy: 'http://192.168.101.66'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  }
}
