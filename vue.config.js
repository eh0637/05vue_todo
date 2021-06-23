module.exports = {
    pwa: {
      name: 'my to do',
      themeColor: '#000000',
      msTileColor: '#000000',
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }