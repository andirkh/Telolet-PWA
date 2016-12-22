self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('omtelolet').then(cache => {
      return cache.addAll([
        './',
        './manifest.json',
        './service-worker.js',
        './scripts/jquery-3.1.1.min.js',
        './images/favicon.ico',
        './images/favicon-16x16.png',
        './images/favicon-32x32.png',
        './images/android-icon-144x144.png',
        './images/android-icon-192x192.png',
        './sounds/1.ogg', 
		'./sounds/2.ogg', 
		'./sounds/3.ogg', 
		'./sounds/4.ogg', 
		'./sounds/5.ogg', 
		'./sounds/6.ogg', 
		'./sounds/7.ogg', 
		'./sounds/8.ogg', 
		'./sounds/9.ogg', 
		'./sounds/10.ogg',
		'./sounds/11.ogg', 
		'./sounds/12.ogg', 
		'./sounds/13.ogg', 
		'./sounds/14.ogg', 
		'./sounds/15.ogg', 
		'./sounds/16.ogg', 
		'./sounds/17.ogg', 
		'./sounds/18.ogg', 
		'./sounds/19.ogg', 
		'./sounds/20.ogg',
		'./sounds/31.ogg', 
		'./sounds/32.ogg', 
		'./sounds/33.ogg', 
		'./sounds/34.ogg', 
		'./sounds/35.ogg', 
		'./sounds/36.ogg', 
		'./sounds/37.ogg', 
		'./sounds/38.ogg', 
		'./sounds/39.ogg', 
		'./sounds/40.ogg',
		'./sounds/41.ogg', 
		'./sounds/42.ogg', 
		'./sounds/43.ogg', 
		'./sounds/44.ogg', 
		'./sounds/45.ogg', 
		'./sounds/46.ogg', 
		'./sounds/47.ogg', 
		'./sounds/48.ogg', 
		'./sounds/49.ogg', 
		'./sounds/50.ogg',
		'./sounds/51.ogg', 
		'./sounds/52.ogg', 
		'./sounds/53.ogg', 
		'./sounds/54.ogg', 
		'./sounds/55.ogg', 
		'./sounds/56.ogg', 
		'./sounds/57.ogg', 
		'./sounds/58.ogg', 
		'./sounds/59.ogg', 
		'./sounds/60.ogg',
		'./sounds/61.ogg', 
		'./sounds/62.ogg', 
		'./sounds/63.ogg', 
		'./sounds/64.ogg', 
		'./sounds/65.ogg', 
		'./sounds/66.ogg', 
		'./sounds/67.ogg', 
		'./sounds/68.ogg', 
		'./sounds/69.ogg', 
		'./sounds/70.ogg',
		'./sounds/71.ogg', 
		'./sounds/72.ogg'
      ])
      .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});