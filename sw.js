// Use the Cache API to cache all main files
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'restaurant.html',                
                'js/main.js',
                'js/dbhelper.js',
                'js/restaurant_info.js',
                'img/1.jpg',
                'img/1.jpg',                
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg'
            ]);
        })
    );
});

// Use Fetch to utilize cached images or route the request
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) return response;
            return fetch(event.request);
        })
    );
});
