self.addEventListener('install',e=>{
e.waitUntil(caches.open('wc-live').then(c=>c.addAll(['./','./index.html'])));
});