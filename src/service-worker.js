// TODO: Replace Xs.
importScripts('/node_modules/workbox-sw/build/importScripts/workbox-sw.dev.v2.1.2.js');

// Note: Ignore the error that Glitch raises about WorkboxSW being undefined.
const workbox = new WorkboxSW({
    skipWaiting: true,
    clientsClaim: true
});

workbox.precache([]);
