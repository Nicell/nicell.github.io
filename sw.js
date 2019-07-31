/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "4f8ba6235383198b2f170dba25dd0925"
  },
  {
    "url": "build/p-05cd1ccb.js"
  },
  {
    "url": "build/p-3ea8955c.js"
  },
  {
    "url": "build/p-860d8016.js"
  },
  {
    "url": "build/p-9f78be84.js"
  },
  {
    "url": "build/p-cn8ggacf.entry.js"
  },
  {
    "url": "build/p-il4qdixr.css"
  },
  {
    "url": "manifest.json",
    "revision": "777893ab703a2361e7bf48c86555e9a8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
