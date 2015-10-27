/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function r(e){return t(s.json?JSON.stringify(e):String(e))}function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return s.json?JSON.parse(e):e}catch(t){}}function i(t,n){var r=s.raw?t:o(t);return e.isFunction(n)?n(r):r}var a=/\+/g,s=e.cookie=function(o,a,c){if(void 0!==a&&!e.isFunction(a)){if(c=e.extend({},s.defaults,c),"number"==typeof c.expires){var u=c.expires,l=c.expires=new Date;l.setDate(l.getDate()+u)}return document.cookie=[t(o),"=",r(a),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var f=o?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,h=d.length;h>p;p++){var m=d[p].split("="),g=n(m.shift()),v=m.join("=");if(o&&o===g){f=i(v,a);break}o||void 0===(v=i(v))||(f[g]=v)}return f};s.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});