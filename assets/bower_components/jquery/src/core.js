define(["./var/arr","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/support"],function(e,t,n,i,r,o,s,a,c){function l(e){var t="length"in e&&e.length,n=f.type(e);return"function"===n||f.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}var u=window.document,d="@VERSION",f=function(e,t){return new f.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,m=/-([\da-z])/gi,g=function(e,t){return t.toUpperCase()};return f.fn=f.prototype={jquery:d,constructor:f,selector:"",length:0,toArray:function(){return t.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:t.call(this)},pushStack:function(e){var t=f.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return f.each(this,e,t)},map:function(e){return this.pushStack(f.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(t.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:i,sort:e.sort,splice:e.splice},f.extend=f.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,c=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||f.isFunction(s)||(s={}),a===c&&(s=this,a--);c>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(l&&i&&(f.isPlainObject(i)||(r=f.isArray(i)))?(r?(r=!1,o=n&&f.isArray(n)?n:[]):o=n&&f.isPlainObject(n)?n:{},s[t]=f.extend(l,o,i)):void 0!==i&&(s[t]=i));return s},f.extend({expando:"jQuery"+(d+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===f.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!f.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==f.type(e)||e.nodeType||f.isWindow(e)?!1:e.constructor&&!a.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?o[s.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=f.trim(e),e&&(1===e.indexOf("use strict")?(t=u.createElement("script"),t.text=e,u.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(h,"ms-").replace(m,g)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,o=e.length,s=l(e);if(n){if(s)for(;o>r&&(i=t.apply(e[r],n),i!==!1);r++);else for(r in e)if(i=t.apply(e[r],n),i===!1)break}else if(s)for(;o>r&&(i=t.call(e[r],r,e[r]),i!==!1);r++);else for(r in e)if(i=t.call(e[r],r,e[r]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(l(Object(e))?f.merge(n,"string"==typeof e?[e]:e):i.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:r.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;n>i;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],o=0,s=e.length,a=!n;s>o;o++)i=!t(e[o],o),i!==a&&r.push(e[o]);return r},map:function(e,t,i){var r,o=0,s=e.length,a=l(e),c=[];if(a)for(;s>o;o++)r=t(e[o],o,i),null!=r&&c.push(r);else for(o in e)r=t(e[o],o,i),null!=r&&c.push(r);return n.apply([],c)},guid:1,proxy:function(e,n){var i,r,o;return"string"==typeof n&&(i=e[n],n=e,e=i),f.isFunction(e)?(r=t.call(arguments,2),o=function(){return e.apply(n||this,r.concat(t.call(arguments)))},o.guid=e.guid=e.guid||f.guid++,o):void 0},now:Date.now,support:c}),f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){o["[object "+t+"]"]=t.toLowerCase()}),f});