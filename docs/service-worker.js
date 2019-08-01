importScripts("precache-manifest.79142cc51c9dc44cea3e9a443dc1b693.js", "workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});
/* eslint-disable*/
// workbox 将会被注入

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

const CACHE_NAME = 'ink-uuid'

function generateCacheableConfig(name, maxEntry, maxDay) {
  return {
    cacheName: CACHE_NAME + name,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxEntries: maxEntry,
        maxAgeSeconds: maxDay * 24 * 60 * 60
      })
    ]
  }
}

workbox.routing.registerRoute(
  new RegExp('/.*.css'),
  workbox.strategies.cacheFirst(generateCacheableConfig('css', 10, 7))
)

workbox.routing.registerRoute(
  new RegExp('/.*.js'),
  workbox.strategies.cacheFirst(generateCacheableConfig('js', 10, 7))
)


