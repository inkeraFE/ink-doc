module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      importWorkboxFrom: 'local',
      swSrc: 'src/service-worker.js'
    }
  }
}
