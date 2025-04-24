const CACHE_NAME = 'product-pwa-cache-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  'https://cdn-icons-png.flaticon.com/128/9280/9280764.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
