// TODO: Replace Xs.
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

workbox.setConfig({
    debug: true
});
workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute([])
