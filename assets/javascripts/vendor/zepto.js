!function(e){String.prototype.trim===e&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===e&&(Array.prototype.reduce=function(t){if(void 0===this||null===this)throw new TypeError;var n,r=Object(this),i=r.length>>>0,o=0;if("function"!=typeof t)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in r){n=r[o++];break}if(++o>=i)throw new TypeError}for(;i>o;)o in r&&(n=t.call(e,n,r[o],o,r)),o++;return n})}();var Zepto=function(){function e(e){return null==e?String(e):Y[G.call(e)]||"object"}function t(t){return"function"==e(t)}function n(e){return null!=e&&e==e.window}function r(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE}function i(t){return"object"==e(t)}function o(e){return i(e)&&!n(e)&&e.__proto__==Object.prototype}function a(e){return e instanceof Array}function s(e){return"number"==typeof e.length}function u(e){return A.call(e,function(e){return null!=e})}function c(e){return e.length>0?E.fn.concat.apply([],e):e}function l(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(e){return e in q?q[e]:q[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function p(e,t){return"number"!=typeof t||P[l(e)]?t:t+"px"}function d(e){var t,n;return O[e]||(t=L.createElement(e),L.body.appendChild(t),n=H(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),"none"==n&&(n="block"),O[e]=n),O[e]}function h(e){return"children"in e?j.call(e.children):E.map(e.childNodes,function(e){return 1==e.nodeType?e:void 0})}function g(e,t,n){for(C in t)n&&(o(t[C])||a(t[C]))?(o(t[C])&&!o(e[C])&&(e[C]={}),a(t[C])&&!a(e[C])&&(e[C]=[]),g(e[C],t[C],n)):t[C]!==T&&(e[C]=t[C])}function m(e,t){return t===T?E(e):E(e).filter(t)}function v(e,n,r,i){return t(n)?n.call(e,r,i):n}function y(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function x(e,t){var n=e.className,r=n&&n.baseVal!==T;return t===T?r?n.baseVal:n:void(r?n.baseVal=t:e.className=t)}function b(e){var t;try{return e?"true"==e||("false"==e?!1:"null"==e?null:isNaN(t=Number(e))?/^[\[\{]/.test(e)?E.parseJSON(e):e:t):e}catch(n){return e}}function w(e,t){t(e);for(var n in e.childNodes)w(e.childNodes[n],t)}var T,C,E,N,k,S,D=[],j=D.slice,A=D.filter,L=window.document,O={},q={},H=L.defaultView.getComputedStyle,P={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},M=/^\s*<(\w+|!)[^>]*>/,F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,$=["val","css","html","text","data","width","height","offset"],I=["after","prepend","before","append"],B=L.createElement("table"),W=L.createElement("tr"),_={tr:L.createElement("tbody"),tbody:B,thead:B,tfoot:B,td:W,th:W,"*":L.createElement("div")},z=/complete|loaded|interactive/,X=/^\.([\w-]+)$/,U=/^#([\w-]*)$/,V=/^[\w-]+$/,Y={},G=Y.toString,Z={},J=L.createElement("div");return Z.matches=function(e,t){if(!e||1!==e.nodeType)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,o=!i;return o&&(i=J).appendChild(e),r=~Z.qsa(i,t).indexOf(e),o&&J.removeChild(e),r},k=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},S=function(e){return A.call(e,function(t,n){return e.indexOf(t)==n})},Z.fragment=function(e,t,n){e.replace&&(e=e.replace(F,"<$1></$2>")),t===T&&(t=M.test(e)&&RegExp.$1),t in _||(t="*");var r,i,a=_[t];return a.innerHTML=""+e,i=E.each(j.call(a.childNodes),function(){a.removeChild(this)}),o(n)&&(r=E(i),E.each(n,function(e,t){$.indexOf(e)>-1?r[e](t):r.attr(e,t)})),i},Z.Z=function(e,t){return e=e||[],e.__proto__=E.fn,e.selector=t||"",e},Z.isZ=function(e){return e instanceof Z.Z},Z.init=function(e,n){if(e){if(t(e))return E(L).ready(e);if(Z.isZ(e))return e;var r;if(a(e))r=u(e);else if(i(e))r=[o(e)?E.extend({},e):e],e=null;else if(M.test(e))r=Z.fragment(e.trim(),RegExp.$1,n),e=null;else{if(n!==T)return E(n).find(e);r=Z.qsa(L,e)}return Z.Z(r,e)}return Z.Z()},E=function(e,t){return Z.init(e,t)},E.extend=function(e){var t,n=j.call(arguments,1);return"boolean"==typeof e&&(t=e,e=n.shift()),n.forEach(function(n){g(e,n,t)}),e},Z.qsa=function(e,t){var n;return r(e)&&U.test(t)?(n=e.getElementById(RegExp.$1))?[n]:[]:1!==e.nodeType&&9!==e.nodeType?[]:j.call(X.test(t)?e.getElementsByClassName(RegExp.$1):V.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},E.contains=function(e,t){return e!==t&&e.contains(t)},E.type=e,E.isFunction=t,E.isWindow=n,E.isArray=a,E.isPlainObject=o,E.isEmptyObject=function(e){var t;for(t in e)return!1;return!0},E.inArray=function(e,t,n){return D.indexOf.call(t,e,n)},E.camelCase=k,E.trim=function(e){return e.trim()},E.uuid=0,E.support={},E.expr={},E.map=function(e,t){var n,r,i,o=[];if(s(e))for(r=0;r<e.length;r++)n=t(e[r],r),null!=n&&o.push(n);else for(i in e)n=t(e[i],i),null!=n&&o.push(n);return c(o)},E.each=function(e,t){var n,r;if(s(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},E.grep=function(e,t){return A.call(e,t)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Y["[object "+t+"]"]=t.toLowerCase()}),E.fn={forEach:D.forEach,reduce:D.reduce,push:D.push,sort:D.sort,indexOf:D.indexOf,concat:D.concat,map:function(e){return E(E.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return E(j.apply(this,arguments))},ready:function(e){return z.test(L.readyState)?e(E):L.addEventListener("DOMContentLoaded",function(){e(E)},!1),this},get:function(e){return e===T?j.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(e){return D.every.call(this,function(t,n){return e.call(t,n,t)!==!1}),this},filter:function(e){return t(e)?this.not(this.not(e)):E(A.call(this,function(t){return Z.matches(t,e)}))},add:function(e,t){return E(S(this.concat(E(e,t))))},is:function(e){return this.length>0&&Z.matches(this[0],e)},not:function(e){var n=[];if(t(e)&&e.call!==T)this.each(function(t){e.call(this,t)||n.push(this)});else{var r="string"==typeof e?this.filter(e):s(e)&&t(e.item)?j.call(e):E(e);this.forEach(function(e){r.indexOf(e)<0&&n.push(e)})}return E(n)},has:function(e){return this.filter(function(){return i(e)?E.contains(this,e):E(this).find(e).size()})},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!i(e)?e:E(e)},last:function(){var e=this[this.length-1];return e&&!i(e)?e:E(e)},find:function(e){var t,n=this;return t="object"==typeof e?E(e).filter(function(){var e=this;return D.some.call(n,function(t){return E.contains(t,e)})}):1==this.length?E(Z.qsa(this[0],e)):this.map(function(){return Z.qsa(this,e)})},closest:function(e,t){var n=this[0],i=!1;for("object"==typeof e&&(i=E(e));n&&!(i?i.indexOf(n)>=0:Z.matches(n,e));)n=n!==t&&!r(n)&&n.parentNode;return E(n)},parents:function(e){for(var t=[],n=this;n.length>0;)n=E.map(n,function(e){return(e=e.parentNode)&&!r(e)&&t.indexOf(e)<0?(t.push(e),e):void 0});return m(t,e)},parent:function(e){return m(S(this.pluck("parentNode")),e)},children:function(e){return m(this.map(function(){return h(this)}),e)},contents:function(){return this.map(function(){return j.call(this.childNodes)})},siblings:function(e){return m(this.map(function(e,t){return A.call(h(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return E.map(this,function(t){return t[e]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==H(this,"").getPropertyValue("display")&&(this.style.display=d(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var n=t(e);if(this[0]&&!n)var r=E(e).get(0),i=r.parentNode||this.length>1;return this.each(function(t){E(this).wrapAll(n?e.call(this,t):i?r.cloneNode(!0):r)})},wrapAll:function(e){if(this[0]){E(this[0]).before(e=E(e));for(var t;(t=e.children()).length;)e=t.first();E(e).append(this)}return this},wrapInner:function(e){var n=t(e);return this.each(function(t){var r=E(this),i=r.contents(),o=n?e.call(this,t):e;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=E(this);(e===T?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(e){return E(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return E(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return e===T?this.length>0?this[0].innerHTML:null:this.each(function(t){var n=this.innerHTML;E(this).empty().append(v(this,e,t,n))})},text:function(e){return e===T?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e})},attr:function(e,t){var n;return"string"==typeof e&&t===T?0==this.length||1!==this[0].nodeType?T:"value"==e&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(e))&&e in this[0]?this[0][e]:n:this.each(function(n){if(1===this.nodeType)if(i(e))for(C in e)y(this,C,e[C]);else y(this,e,v(this,t,n,this.getAttribute(e)))})},removeAttr:function(e){return this.each(function(){1===this.nodeType&&y(this,e)})},prop:function(e,t){return t===T?this[0]&&this[0][e]:this.each(function(n){this[e]=v(this,t,n,this[e])})},data:function(e,t){var n=this.attr("data-"+l(e),t);return null!==n?b(n):T},val:function(e){return e===T?this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(e){return this.selected}).pluck("value"):this[0].value):this.each(function(t){this.value=v(this,e,t,this.value)})},offset:function(e){if(e)return this.each(function(t){var n=E(this),r=v(this,e,t,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,n){if(arguments.length<2&&"string"==typeof t)return this[0]&&(this[0].style[k(t)]||H(this[0],"").getPropertyValue(t));var r="";if("string"==e(t))n||0===n?r=l(t)+":"+p(t,n):this.each(function(){this.style.removeProperty(l(t))});else for(C in t)t[C]||0===t[C]?r+=l(C)+":"+p(C,t[C])+";":this.each(function(){this.style.removeProperty(l(C))});return this.each(function(){this.style.cssText+=";"+r})},index:function(e){return e?this.indexOf(E(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return D.some.call(this,function(e){return this.test(x(e))},f(e))},addClass:function(e){return this.each(function(t){N=[];var n=x(this),r=v(this,e,t,n);r.split(/\s+/g).forEach(function(e){E(this).hasClass(e)||N.push(e)},this),N.length&&x(this,n+(n?" ":"")+N.join(" "))})},removeClass:function(e){return this.each(function(t){return e===T?x(this,""):(N=x(this),v(this,e,t,N).split(/\s+/g).forEach(function(e){N=N.replace(f(e)," ")}),void x(this,N.trim()))})},toggleClass:function(e,t){return this.each(function(n){var r=E(this),i=v(this,e,n,x(this));i.split(/\s+/g).forEach(function(e){(t===T?!r.hasClass(e):t)?r.addClass(e):r.removeClass(e)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var e=this[0],t=this.offsetParent(),n=this.offset(),r=R.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(E(e).css("margin-top"))||0,n.left-=parseFloat(E(e).css("margin-left"))||0,r.top+=parseFloat(E(t[0]).css("border-top-width"))||0,r.left+=parseFloat(E(t[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||L.body;e&&!R.test(e.nodeName)&&"static"==E(e).css("position");)e=e.offsetParent;return e})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(e){E.fn[e]=function(t){var i,o=this[0],a=e.replace(/./,function(e){return e[0].toUpperCase()});return t===T?n(o)?o["inner"+a]:r(o)?o.documentElement["offset"+a]:(i=this.offset())&&i[e]:this.each(function(n){o=E(this),o.css(e,v(this,t,n,o[e]()))})}}),I.forEach(function(t,n){var r=n%2;E.fn[t]=function(){var t,i,o=E.map(arguments,function(n){return t=e(n),"object"==t||"array"==t||null==n?n:Z.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(e,t){i=r?t:t.parentNode,t=0==n?t.nextSibling:1==n?t.firstChild:2==n?t:null,o.forEach(function(e){if(a)e=e.cloneNode(!0);else if(!i)return E(e).remove();w(i.insertBefore(e,t),function(e){null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src||window.eval.call(window,e.innerHTML)})})})},E.fn[r?t+"To":"insert"+(n?"Before":"After")]=function(e){return E(e)[t](this),this}}),Z.Z.prototype=E.fn,Z.uniq=S,Z.deserializeValue=b,E.zepto=Z,E}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(e){function t(e){var t=this.os={},n=this.browser={},r=e.match(/WebKit\/([\d.]+)/),i=e.match(/(Android)\s+([\d.]+)/),o=e.match(/(iPad).*OS\s([\d_]+)/),a=!o&&e.match(/(iPhone\sOS)\s([\d_]+)/),s=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=s&&e.match(/TouchPad/),c=e.match(/Kindle\/([\d.]+)/),l=e.match(/Silk\/([\d._]+)/),f=e.match(/(BlackBerry).*Version\/([\d.]+)/),p=e.match(/(BB10).*Version\/([\d.]+)/),d=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),h=e.match(/PlayBook/),g=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),m=e.match(/Firefox\/([\d.]+)/);(n.webkit=!!r)&&(n.version=r[1]),i&&(t.android=!0,t.version=i[2]),a&&(t.ios=t.iphone=!0,t.version=a[2].replace(/_/g,".")),o&&(t.ios=t.ipad=!0,t.version=o[2].replace(/_/g,".")),s&&(t.webos=!0,t.version=s[2]),u&&(t.touchpad=!0),f&&(t.blackberry=!0,t.version=f[2]),p&&(t.bb10=!0,t.version=p[2]),d&&(t.rimtabletos=!0,t.version=d[2]),h&&(n.playbook=!0),c&&(t.kindle=!0,t.version=c[1]),l&&(n.silk=!0,n.version=l[1]),!l&&t.android&&e.match(/Kindle Fire/)&&(n.silk=!0),g&&(n.chrome=!0,n.version=g[1]),m&&(n.firefox=!0,n.version=m[1]),t.tablet=!!(o||h||i&&!e.match(/Mobile/)||m&&e.match(/Tablet/)),t.phone=!(t.tablet||!(i||a||s||f||p||g&&e.match(/Android/)||g&&e.match(/CriOS\/([\d.]+)/)||m&&e.match(/Mobile/)))}t.call(e,navigator.userAgent),e.__detect=t}(Zepto),function(e){function t(e){return e._zid||(e._zid=d++)}function n(e,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(p[t(e)]||[]).filter(function(e){return e&&(!n.e||e.e==n.e)&&(!n.ns||s.test(e.ns))&&(!o||t(e.fn)===t(o))&&(!a||e.sel==a)})}function r(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function i(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function o(t,n,r){"string"!=e.type(t)?e.each(t,r):t.split(/\s/).forEach(function(e){r(e,n)})}function a(e,t){return e.del&&("focus"==e.e||"blur"==e.e)||!!t}function s(e){return g[e]||e}function u(n,i,u,c,l,f){var d=t(n),h=p[d]||(p[d]=[]);o(i,u,function(t,i){var o=r(t);o.fn=i,o.sel=c,o.e in g&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=l&&l(i,t);var u=o.del||i;o.proxy=function(e){var t=u.apply(n,[e].concat(e.data));return t===!1&&(e.preventDefault(),e.stopPropagation()),t},o.i=h.length,h.push(o),n.addEventListener(s(o.e),o.proxy,a(o,f))})}function c(e,r,i,u,c){var l=t(e);o(r||"",i,function(t,r){n(e,t,r,u).forEach(function(t){delete p[l][t.i],e.removeEventListener(s(t.e),t.proxy,a(t,c))})})}function l(t){var n,r={originalEvent:t};for(n in t)y.test(n)||void 0===t[n]||(r[n]=t[n]);return e.each(x,function(e,n){r[e]=function(){return this[n]=m,t[e].apply(t,arguments)},r[n]=v}),r}function f(e){if(!("defaultPrevented"in e)){e.defaultPrevented=!1;var t=e.preventDefault;e.preventDefault=function(){this.defaultPrevented=!0,t.call(this)}}}var p=(e.zepto.qsa,{}),d=1,h={},g={mouseenter:"mouseover",mouseleave:"mouseout"};h.click=h.mousedown=h.mouseup=h.mousemove="MouseEvents",e.event={add:u,remove:c},e.proxy=function(n,r){if(e.isFunction(n)){var i=function(){return n.apply(r,arguments)};return i._zid=t(n),i}if("string"==typeof r)return e.proxy(n[r],n);throw new TypeError("expected function")},e.fn.bind=function(e,t){return this.each(function(){u(this,e,t)})},e.fn.unbind=function(e,t){return this.each(function(){c(this,e,t)})},e.fn.one=function(e,t){return this.each(function(n,r){u(this,e,t,null,function(e,t){return function(){var n=e.apply(r,arguments);return c(r,t,e),n}})})};var m=function(){return!0},v=function(){return!1},y=/^([A-Z]|layer[XY]$)/,x={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,n,r){return this.each(function(i,o){u(o,n,r,t,function(n){return function(r){var i,a=e(r.target).closest(t,o).get(0);return a?(i=e.extend(l(r),{currentTarget:a,liveFired:o}),n.apply(a,[i].concat([].slice.call(arguments,1)))):void 0}})})},e.fn.undelegate=function(e,t,n){return this.each(function(){c(this,t,n,e)})},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r){return!n||e.isFunction(n)?this.bind(t,n||r):this.delegate(n,t,r)},e.fn.off=function(t,n,r){return!n||e.isFunction(n)?this.unbind(t,n||r):this.undelegate(n,t,r)},e.fn.trigger=function(t,n){return("string"==typeof t||e.isPlainObject(t))&&(t=e.Event(t)),f(t),t.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(t)})},e.fn.triggerHandler=function(t,r){var i,o;return this.each(function(a,s){i=l("string"==typeof t?e.Event(t):t),i.data=r,i.target=s,e.each(n(s,t.type||t),function(e,t){return o=t.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.each(function(){try{this[t]()}catch(e){}}),this}}),e.Event=function(e,t){"string"!=typeof e&&(t=e,e=t.type);var n=document.createEvent(h[e]||"Events"),r=!0;if(t)for(var i in t)"bubbles"==i?r=!!t[i]:n[i]=t[i];return n.initEvent(e,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(e){function t(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.defaultPrevented}function n(e,n,r,i){return e.global?t(n||y,r,i):void 0}function r(t){t.global&&0===e.active++&&n(t,null,"ajaxStart")}function i(t){t.global&&!--e.active&&n(t,null,"ajaxStop")}function o(e,t){var r=t.context;return t.beforeSend.call(r,e,t)===!1||n(t,r,"ajaxBeforeSend",[e,t])===!1?!1:void n(t,r,"ajaxSend",[e,t])}function a(e,t,r){var i=r.context,o="success";r.success.call(i,e,o,t),n(r,i,"ajaxSuccess",[t,r,e]),u(o,t,r)}function s(e,t,r,i){var o=i.context;i.error.call(o,r,t,e),n(i,o,"ajaxError",[r,i,e]),u(t,r,i)}function u(e,t,r){var o=r.context;r.complete.call(o,t,e),n(r,o,"ajaxComplete",[t,r]),i(r)}function c(){}function l(e){return e&&(e=e.split(";",2)[0]),e&&(e==C?"html":e==T?"json":b.test(e)?"script":w.test(e)&&"xml")||"text"}function f(e,t){return(e+"&"+t).replace(/[&?]{1,2}/,"?")}function p(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()||(t.url=f(t.url,t.data))}function d(t,n,r,i){var o=!e.isFunction(n);return{url:t,data:o?n:void 0,success:o?e.isFunction(r)?r:void 0:n,dataType:o?i||r:r}}function h(t,n,r,i){var o,a=e.isArray(n);e.each(n,function(n,s){o=e.type(s),i&&(n=r?i:i+"["+(a?"":n)+"]"),!i&&a?t.add(s.name,s.value):"array"==o||!r&&"object"==o?h(t,s,r,n):t.add(n,s)})}var g,m,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,T="application/json",C="text/html",E=/^\s*$/;e.active=0,e.ajaxJSONP=function(t){if(!("type"in t))return e.ajax(t);var n,r="jsonp"+ ++v,i=y.createElement("script"),u=function(){clearTimeout(n),e(i).remove(),delete window[r]},l=function(e){u(),e&&"timeout"!=e||(window[r]=c),s(null,e||"abort",f,t)},f={abort:l};return o(f,t)===!1?(l("abort"),!1):(window[r]=function(e){u(),a(e,f,t)},i.onerror=function(){l("error")},i.src=t.url.replace(/=\?/,"="+r),e("head").append(i),t.timeout>0&&(n=setTimeout(function(){l("timeout")},t.timeout)),f)},e.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:T,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},e.ajax=function(t){var n=e.extend({},t||{});for(g in e.ajaxSettings)void 0===n[g]&&(n[g]=e.ajaxSettings[g]);r(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),p(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var i=n.dataType,u=/=\?/.test(n.url);if("jsonp"==i||u)return u||(n.url=f(n.url,"callback=?")),e.ajaxJSONP(n);var d,h=n.accepts[i],v={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,x=n.xhr();n.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),h&&(v.Accept=h,h.indexOf(",")>-1&&(h=h.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(h)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(v["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=e.extend(v,n.headers||{}),x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=c,clearTimeout(d);var t,r=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==y){i=i||l(x.getResponseHeader("content-type")),t=x.responseText;try{"script"==i?(1,eval)(t):"xml"==i?t=x.responseXML:"json"==i&&(t=E.test(t)?null:e.parseJSON(t))}catch(o){r=o}r?s(r,"parsererror",x,n):a(t,x,n)}else s(null,x.status?"error":"abort",x,n)}};var b="async"in n?n.async:!0;x.open(n.type,n.url,b);for(m in n.headers)x.setRequestHeader(m,n.headers[m]);return o(x,n)===!1?(x.abort(),!1):(n.timeout>0&&(d=setTimeout(function(){x.onreadystatechange=c,x.abort(),s(null,"timeout",x,n)},n.timeout)),x.send(n.data?n.data:null),x)},e.get=function(t,n,r,i){return e.ajax(d.apply(null,arguments))},e.post=function(t,n,r,i){var o=d.apply(null,arguments);return o.type="POST",e.ajax(o)},e.getJSON=function(t,n,r){var i=d.apply(null,arguments);return i.dataType="json",e.ajax(i)},e.fn.load=function(t,n,r){if(!this.length)return this;var i,o=this,a=t.split(/\s/),s=d(t,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(t){o.html(i?e("<div>").html(t.replace(x,"")).find(i):t),u&&u.apply(o,arguments)},e.ajax(s),this};var N=encodeURIComponent;e.param=function(e,t){var n=[];return n.add=function(e,t){this.push(N(e)+"="+N(t))},h(n,e,t),n.join("&").replace(/%20/g,"+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t,n=[];return e(Array.prototype.slice.call(this.get(0).elements)).each(function(){t=e(this);var r=t.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&n.push({name:t.attr("name"),value:t.val()})}),n},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(e,t){function n(e){return r(e.replace(/([a-z])([A-Z])/,"$1-$2"))}function r(e){return e.toLowerCase()}function i(e){return o?o+e:r(e)}var o,a,s,u,c,l,f,p,d="",h={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},g=window.document,m=g.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};e.each(h,function(e,n){return m.style[e+"TransitionProperty"]!==t?(d="-"+r(e)+"-",o=n,!1):void 0}),a=d+"transform",y[s=d+"transition-property"]=y[u=d+"transition-duration"]=y[c=d+"transition-timing-function"]=y[l=d+"animation-name"]=y[f=d+"animation-duration"]=y[p=d+"animation-timing-function"]="",e.fx={off:o===t&&m.style.transitionProperty===t,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},e.fn.animate=function(t,n,r,i){return e.isPlainObject(n)&&(r=n.easing,i=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:e.fx.speeds[n]||e.fx.speeds._default)/1e3),this.anim(t,n,r,i)},e.fn.anim=function(r,i,o,d){var h,g,m,x={},b="",w=this,T=e.fx.transitionEnd;if(i===t&&(i=.4),e.fx.off&&(i=0),"string"==typeof r)x[l]=r,x[f]=i+"s",x[p]=o||"linear",T=e.fx.animationEnd;else{g=[];for(h in r)v.test(h)?b+=h+"("+r[h]+") ":(x[h]=r[h],g.push(n(h)));b&&(x[a]=b,g.push(a)),i>0&&"object"==typeof r&&(x[s]=g.join(", "),x[u]=i+"s",x[c]=o||"linear")}return m=function(t){if("undefined"!=typeof t){if(t.target!==t.currentTarget)return;e(t.target).unbind(T,m)}e(this).css(y),d&&d.call(this)},i>0&&this.bind(T,m),this.size()&&this.get(0).clientLeft,this.css(x),0>=i&&setTimeout(function(){w.each(function(){m.call(this)})},0),this},m=null}(Zepto),function(e,t){function n(n,r,i,o,a){"function"!=typeof r||a||(a=r,r=t);var s={opacity:i};return o&&(s.scale=o,n.css(e.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,r,null,a)}function r(t,r,i,o){return n(t,r,0,i,function(){a.call(e(this)),o&&o.call(this)})}var i=window.document,o=(i.documentElement,e.fn.show),a=e.fn.hide,s=e.fn.toggle;e.fn.show=function(e,r){return o.call(this),e===t?e=0:this.css("opacity",0),n(this,e,1,"1,1",r)},e.fn.hide=function(e,n){return e===t?a.call(this):r(this,e,"0,0",n)},e.fn.toggle=function(n,r){return n===t||"boolean"==typeof n?s.call(this,n):this.each(function(){var t=e(this);t["none"==t.css("display")?"show":"hide"](n,r)})},e.fn.fadeTo=function(e,t,r){return n(this,e,t,null,r)},e.fn.fadeIn=function(e,t){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(e,n,t)},e.fn.fadeOut=function(e,t){return r(this,e,null,t)},e.fn.fadeToggle=function(t,n){return this.each(function(){var r=e(this);r[0==r.css("opacity")||"none"==r.css("display")?"fadeIn":"fadeOut"](t,n)})}}(Zepto),function(e){var t,n=[];e.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",t&&clearTimeout(t),t=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(e){function t(t,r){var u=t[s],c=u&&i[u];if(void 0===r)return c||n(t);if(c){if(r in c)return c[r];var l=a(r);if(l in c)return c[l]}return o.call(e(t),r)}function n(t,n,o){var u=t[s]||(t[s]=++e.uuid),c=i[u]||(i[u]=r(t));return void 0!==n&&(c[a(n)]=o),c}function r(t){var n={};return e.each(t.attributes,function(t,r){0==r.name.indexOf("data-")&&(n[a(r.name.replace("data-",""))]=e.zepto.deserializeValue(r.value))}),n}var i={},o=e.fn.data,a=e.camelCase,s=e.expando="Zepto"+ +new Date;e.fn.data=function(r,i){return void 0===i?e.isPlainObject(r)?this.each(function(t,i){e.each(r,function(e,t){n(i,e,t)})}):0==this.length?void 0:t(this[0],r):this.each(function(){n(this,r,i)})},e.fn.removeData=function(t){return"string"==typeof t&&(t=t.split(/\s+/)),this.each(function(){var n=this[s],r=n&&i[n];r&&e.each(t,function(){delete r[a(this)]})})}}(Zepto),function(e){function t(t){return t=e(t),!(!t.width()&&!t.height())&&"none"!==t.css("display")}function n(e,t){e=e.replace(/=#\]/g,'="#"]');var n,r,i=s.exec(e);if(i&&i[2]in a&&(n=a[i[2]],r=i[3],e=i[1],r)){var o=Number(r);r=isNaN(o)?r.replace(/^["']|["']$/g,""):o}return t(e,n,r)}var r=e.zepto,i=r.qsa,o=r.matches,a=e.expr[":"]={visible:function(){return t(this)?this:void 0},hidden:function(){return t(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(e){return 0===e?this:void 0},last:function(e,t){return e===t.length-1?this:void 0},eq:function(e,t,n){return e===n?this:void 0},contains:function(t,n,r){return e(this).text().indexOf(r)>-1?this:void 0},has:function(e,t,n){return r.qsa(this,n).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;r.qsa=function(t,o){return n(o,function(n,a,s){try{var l;!n&&a?n="*":u.test(n)&&(l=e(t).addClass(c),n="."+c+" "+n);var f=i(t,n)}catch(p){throw console.error("error performing selector: %o",o),p}finally{l&&l.removeClass(c)}return a?r.uniq(e.map(f,function(e,t){return a.call(e,t,f,s)})):f})},r.matches=function(e,t){return n(t,function(t,n,r){return(!t||o(e,t))&&(!n||n.call(e,null,r)===e)})}}(Zepto),function(e){e.fn.end=function(){return this.prevObject||e()},e.fn.andSelf=function(){return this.add(this.prevObject||e())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(t){var n=e.fn[t];e.fn[t]=function(){var e=n.apply(this,arguments);return e.prevObject=this,e}})}(Zepto),function(e){function t(e){return"tagName"in e?e:e.parentNode}function n(e,t,n,r){var i=Math.abs(e-t),o=Math.abs(n-r);return i>=o?e-t>0?"Left":"Right":n-r>0?"Up":"Down"}function r(){c=null,l.last&&(l.el.trigger("longTap"),l={})}function i(){c&&clearTimeout(c),c=null}function o(){a&&clearTimeout(a),s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),a=s=u=c=null,l={}}var a,s,u,c,l={},f=750;e(document).ready(function(){var p,d;e(document.body).bind("touchstart",function(n){p=Date.now(),d=p-(l.last||p),l.el=e(t(n.touches[0].target)),a&&clearTimeout(a),l.x1=n.touches[0].pageX,l.y1=n.touches[0].pageY,d>0&&250>=d&&(l.isDoubleTap=!0),l.last=p,c=setTimeout(r,f)}).bind("touchmove",function(e){i(),l.x2=e.touches[0].pageX,l.y2=e.touches[0].pageY,Math.abs(l.x1-l.x2)>10&&e.preventDefault()}).bind("touchend",function(t){i(),l.x2&&Math.abs(l.x1-l.x2)>30||l.y2&&Math.abs(l.y1-l.y2)>30?u=setTimeout(function(){l.el.trigger("swipe"),l.el.trigger("swipe"+n(l.x1,l.x2,l.y1,l.y2)),l={}},0):"last"in l&&(s=setTimeout(function(){var t=e.Event("tap");t.cancelTouch=o,l.el.trigger(t),l.isDoubleTap?(l.el.trigger("doubleTap"),l={}):a=setTimeout(function(){a=null,l.el.trigger("singleTap"),l={}},250)},0))}).bind("touchcancel",o),e(window).bind("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}})}(Zepto),this.Zepto&&!function(e){var t,n;return t=function(e,t,n,r,i){var o,a;return e?(a=e[n](),o={width:["left","right"],height:["top","bottom"]},o[n].forEach(function(t){return a+=parseInt(e.css("padding-"+t),10),r&&(a+=parseInt(e.css("border-"+t+"-width"),10)),i?a+=parseInt(e.css("margin-"+t),10):void 0}),a):null},["width","height"].forEach(function(n){var r,i,o,a,s;return r=n.replace(/./,function(e){return e[0].toUpperCase()}),(i=e.fn)[a="inner"+r]||(i[a]=function(e){return t(this,r,n,!1,e)}),(o=e.fn)[s="outer"+r]||(o[s]=function(e){return t(this,r,n,!0,e)})}),(n=e.fn).detach||(n.detach=function(e){var t,n;return n=this,null!=e&&(n=n.filter(e)),t=n.clone(!0),n.remove(),t})}(Zepto);