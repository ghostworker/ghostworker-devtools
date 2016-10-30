(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

document.addEventListener("DOMContentLoaded", function (event) {

    if (this.GhostWorker) {
        document.querySelector('#gw-version').innerHTML = this.GhostWorker.version;
    }

    var cachesSection = document.querySelector('#caches');
    var ul = buildLister('caches', cachesSection);
    caches.keys().then(function (keyList) {
        keyList.map(function (key) {
            if (key.indexOf('ghostworker-') === 0) {
                //return caches.delete(keyList[i]);
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(key));
                ul.appendChild(li);

                listCacheLinks(key);
            }
        });
    });

    var btnRemoveCaches = document.querySelector('#remove-caches');
    btnRemoveCaches.addEventListener('click', function () {
        deleteCaches();
        cachesSection.innerHTML = '';
    });
});

function deleteCaches() {
    caches.keys().then(function (keyList) {
        keyList.map(function (key) {
            if (key.indexOf('ghostworker-') === 0) {
                caches.delete(key);
            }
        });
    });
}

function listCacheLinks(cacheName) {
    var cachesSection = document.querySelector('#caches');
    var ul = buildLister(cacheName, cachesSection);

    caches.open(cacheName).then(function (cache) {
        cache.keys().then(function (keys) {
            keys.forEach(function (request, index, array) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.appendChild(document.createTextNode(request.url));
                a.href = request.url;
                li.appendChild(a);
                ul.appendChild(li);
            });
        });
    });
}

function buildLister(title, parent) {
    var section = document.createElement('section');
    section.id = title;
    var h2 = document.createElement('h2');
    var ul = document.createElement('ul');
    section.appendChild(h2);
    section.appendChild(ul);
    h2.appendChild(document.createTextNode(title));
    parent.appendChild(section);
    return ul;
}

})));
//# sourceMappingURL=ghostworker-devtools.js.map
