/* eslint-disable no-restricted-globals */
// let count = 0;

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // if ('setAppBadge' in navigator) navigator.setAppBadge(count);
  e.respondWith(fetch(e.request));
});
