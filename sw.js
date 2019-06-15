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
    "revision": "efd1fd0f971a4cfb144defd2d699dbd9"
  },
  {
    "url": "build/p-549b16dd.js"
  },
  {
    "url": "build/p-a0c82e31.js"
  },
  {
    "url": "build/p-dzkuu3yq.css"
  },
  {
    "url": "build/p-eed18715.js"
  },
  {
    "url": "build/p-f7ddb189.js"
  },
  {
    "url": "build/p-omgjqvzg.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "777893ab703a2361e7bf48c86555e9a8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
