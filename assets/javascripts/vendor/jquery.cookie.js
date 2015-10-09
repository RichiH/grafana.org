/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){return s.raw?t:encodeURIComponent(t)}function n(t){return s.raw?t:decodeURIComponent(t)}function i(t){return e(s.json?JSON.stringify(t):String(t))}function r(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{t=decodeURIComponent(t.replace(a," "))}catch(e){return}try{return s.json?JSON.parse(t):t}catch(e){}}function o(e,n){var i=s.raw?e:r(e);return t.isFunction(n)?n(i):i}var a=/\+/g,s=t.cookie=function(r,a,l){if(void 0!==a&&!t.isFunction(a)){if(l=t.extend({},s.defaults,l),"number"==typeof l.expires){var u=l.expires,c=l.expires=new Date;c.setDate(c.getDate()+u)}return document.cookie=[e(r),"=",i(a),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var d=r?void 0:{},f=document.cookie?document.cookie.split("; "):[],p=0,h=f.length;h>p;p++){var m=f[p].split("="),g=n(m.shift()),v=m.join("=");if(r&&r===g){d=o(v,a);break}r||void 0===(v=o(v))||(d[g]=v)}return d};s.defaults={},t.removeCookie=function(e,n){return void 0!==t.cookie(e)?(t.cookie(e,"",t.extend({},n,{expires:-1})),!0):!1}});