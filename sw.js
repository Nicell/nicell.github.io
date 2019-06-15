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
    "revision": "ead725ad70ded601620fec281abb9164"
  },
  {
    "url": "build/p-0i6ymiel.entry.js"
  },
  {
    "url": "build/p-4d0a4444.js"
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
    "url": "build/p-ttd3mhpj.css"
  },
  {
    "url": "manifest.json",
    "revision": "350b0afcb78365eb0d4f287de8c4ff40"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
