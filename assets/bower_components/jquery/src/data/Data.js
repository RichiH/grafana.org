define(["../core","../var/rnotwhite","./accepts"],function(e,t){function n(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=e.expando+Math.random()}return n.uid=1,n.accepts=e.acceptData,n.prototype={key:function(t){if(!n.accepts(t))return 0;var r={},i=t[this.expando];if(!i){i=n.uid++;try{r[this.expando]={value:i},Object.defineProperties(t,r)}catch(o){r[this.expando]=i,e.extend(t,r)}}return this.cache[i]||(this.cache[i]={}),i},set:function(t,n,r){var i,o=this.key(t),a=this.cache[o];if("string"==typeof n)a[n]=r;else if(e.isEmptyObject(a))e.extend(this.cache[o],n);else for(i in n)a[i]=n[i];return a},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(t,n,r){var i;return void 0===n||n&&"string"==typeof n&&void 0===r?(i=this.get(t,n),void 0!==i?i:this.get(t,e.camelCase(n))):(this.set(t,n,r),void 0!==r?r:n)},remove:function(n,r){var i,o,a,s=this.key(n),l=this.cache[s];if(void 0===r)this.cache[s]={};else{e.isArray(r)?o=r.concat(r.map(e.camelCase)):(a=e.camelCase(r),r in l?o=[r,a]:(o=a,o=o in l?[o]:o.match(t)||[])),i=o.length;for(;i--;)delete l[o[i]]}},hasData:function(t){return!e.isEmptyObject(this.cache[t[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},n});