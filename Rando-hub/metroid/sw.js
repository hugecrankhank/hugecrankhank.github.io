// Rando Hub moved (a licensed release at rando-hub.pages.dev). This replaces the old site's
// offline copy: it takes over its pages, removes itself, and reloads them, so they reach the
// forward to the new address.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim().then(function () {
    return self.registration.unregister();
  }).then(function () {
    return self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  }).then(function (list) { list.forEach(function (c) { if (c.navigate) c.navigate(c.url).catch(function () {}); }); }));
});
self.addEventListener('fetch', function () { /* the network, always */ });
