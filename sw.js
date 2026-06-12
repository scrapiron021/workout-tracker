// Service worker: precache the app shell, network-first for app files
// (so updates land immediately when online), cache-first for the CDN.

const CACHE = 'workout-tracker-v3';

const SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './chart.umd.min.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', e => {
  // 'no-cache' bypasses the HTTP cache (GitHub Pages caches files for 10 min),
  // so a new service worker always precaches the freshly deployed files
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(SHELL.map(url =>
        fetch(new Request(url, { cache: 'no-cache' })).then(res => c.put(url, res))
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const sameOrigin = new URL(e.request.url).origin === location.origin;

  if (sameOrigin) {
    // network-first, revalidating with the server instead of trusting the
    // HTTP cache — guarantees fresh app files whenever we're online
    e.respondWith(
      fetch(e.request, { cache: 'no-cache' })
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return res;
        })
        .catch(() =>
          caches.match(e.request).then(r => r || caches.match('./index.html'))
        )
    );
  } else {
    // cache-first: the pinned Chart.js version never changes under us
    e.respondWith(
      caches.match(e.request).then(r =>
        r || fetch(e.request).then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return res;
        })
      )
    );
  }
});
