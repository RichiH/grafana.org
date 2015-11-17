/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function r(e){return t(s.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return s.json?JSON.parse(e):e}catch(t){}}function o(t,n){var r=s.raw?t:i(t);return e.isFunction(n)?n(r):r}var a=/\+/g,s=e.cookie=function(i,a,u){if(void 0!==a&&!e.isFunction(a)){if(u=e.extend({},s.defaults,u),"number"==typeof u.expires){var c=u.expires,l=u.expires=new Date;l.setDate(l.getDate()+c)}return document.cookie=[t(i),"=",r(a),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var f=i?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,h=d.length;h>p;p++){var g=d[p].split("="),m=n(g.shift()),v=g.join("=");if(i&&i===m){f=o(v,a);break}i||void 0===(v=o(v))||(f[m]=v)}return f};s.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});