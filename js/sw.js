importScripts('serviceworker-cache-polyfill.js');

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});