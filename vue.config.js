module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  }
}
