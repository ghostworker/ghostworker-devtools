# ghostworker-devtools

A set of simple devtools for the GhostWorker library. Allows you to view current cache and route information


HTML needed for the javascript to work
``` html
<button id="remove-caches">Remove all GhostWorker caches</button>
<section id="caches"></section>
<script type="text/javascript" src="/ghostworker-dom.js"></script>
<script type="text/javascript" src="/ghostworker-devtools.js"></script>
```


## Rollup build

``` bash
$ ./node_modules/.bin/rollup -c rollup.config.js
```