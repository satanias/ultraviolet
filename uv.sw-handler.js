importScripts('./uv.sw.js');

const sw = new UVServiceWorker();
const params = new URLSearchParams(location.search);
// sw.on('request', event => {
//   if (params.has('craig') && event.data.request.destination === 'image') {
//     event.respondWith(
//       fetch('')
//     )
//   };
// });

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
