/* Sikho Star Service Worker — offline cache */

const CACHE  = 'sikho-star-v5';
const ASSETS = [
  '/',
  '/index.html',
  '/css/main.css',
  '/css/animations.css',
  '/css/responsive.css',
  '/js/app.js',
  '/js/progress.js',
  '/js/audio.js',
  '/js/avatar.js',
  '/js/dashboard.js',
  '/js/level.js',
  '/js/map.js',
  '/js/minigame.js',
  '/js/data/maths.js',
  '/js/data/science.js',
  '/js/data/english.js',
  '/js/data/urdu.js',
  '/js/data/islamic.js',
  '/pages/stories.html',
  '/pages/dashboard.html',
  '/pages/map.html',
  '/pages/level.html',
  '/pages/profile.html',
  '/pages/stickers.html',
  '/pages/parent.html',
  '/pages/avatar.html',
  '/pages/minigame.html',
  '/pages/trophy.html',
  '/pages/certificate.html',
  '/pages/wordgame.html',
  '/pages/exercise.html',
  '/pages/body.html',
  '/pages/numblast.html',
  '/pages/tapcount.html',
  '/pages/balloonpop.html',
  '/pages/mathrace.html',
  '/manifest.json',
];

/* Install — cache everything */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* Activate — delete old caches */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Fetch — cache-first, network fallback */
self.addEventListener('fetch', e => {
  /* Skip cross-origin (Google Fonts etc.) */
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        /* Cache new pages dynamically */
        if (res.ok && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => {
        /* Offline fallback for HTML pages */
        if (e.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('/index.html');
        }
      });
    })
  );
});
