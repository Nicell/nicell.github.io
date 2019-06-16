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
    "revision": "ece84dc5de8a4724a874d89782ab060c"
  },
  {
    "url": "build/p-2aada0c4.js"
  },
  {
    "url": "build/p-549b16dd.js"
  },
  {
    "url": "build/p-a0c82e31.js"
  },
  {
    "url": "build/p-f7ddb189.js"
  },
  {
    "url": "build/p-ry9c9ytt.entry.js"
  },
  {
    "url": "build/p-zrhiiw3q.css"
  },
  {
    "url": "manifest.json",
    "revision": "777893ab703a2361e7bf48c86555e9a8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
