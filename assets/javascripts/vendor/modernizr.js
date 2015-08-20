/*!
 * Modernizr v2.7.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(t,e,n){function i(t){_.cssText=t}function r(t,e){return i(k.join(t+";")+(e||""))}function a(t,e){return typeof t===e}function o(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var i in t){var r=t[i];if(!o(r,"-")&&_[r]!==n)return"pfx"==e?r:!0}return!1}function l(t,e,i){for(var r in t){var o=e[t[r]];if(o!==n)return i===!1?t[r]:a(o,"function")?o.bind(i||e):o}return!1}function u(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+S.join(i+" ")+i).split(" ");return a(e,"string")||a(e,"undefined")?s(r,e):(r=(t+" "+T.join(i+" ")+i).split(" "),l(r,e,n))}function c(){h.input=function(n){for(var i=0,r=n.length;r>i;i++)F[n[i]]=!!(n[i]in b);return F.list&&(F.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),F}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(t){for(var i,r,a,o=0,s=t.length;s>o;o++)b.setAttribute("type",r=t[o]),i="text"!==b.type,i&&(b.value=x,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&b.style.WebkitAppearance!==n?(g.appendChild(b),a=e.defaultView,i=a.getComputedStyle&&"textfield"!==a.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,g.removeChild(b)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?b.checkValidity&&b.checkValidity()===!1:b.value!=x)),A[t[o]]=!!i;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.7.2",h={},m=!0,g=e.documentElement,v="modernizr",y=e.createElement(v),_=y.style,b=e.createElement("input"),x=":)",w={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",S=C.split(" "),T=C.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},j={},A={},F={},M=[],N=M.slice,q=function(t,n,i,r){var a,o,s,l,u=e.createElement("div"),c=e.body,d=c||e.createElement("body");if(parseInt(i,10))for(;i--;)s=e.createElement("div"),s.id=r?r[i]:v+(i+1),u.appendChild(s);return a=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),u.id=v,(c?u:d).innerHTML+=a,d.appendChild(u),c||(d.style.background="",d.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),o=n(u,t),c?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=l),!!o},z=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var i;return q("@media "+e+" { #"+v+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},D=function(){function t(t,r){r=r||e.createElement(i[t]||"div"),t="on"+t;var o=t in r;return o||(r.setAttribute||(r=e.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(t,""),o=a(r[t],"function"),a(r[t],"undefined")||(r[t]=n),r.removeAttribute(t))),r=null,o}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),O={}.hasOwnProperty;f=a(O,"undefined")||a(O.call,"undefined")?function(t,e){return e in t&&a(t.constructor.prototype[e],"undefined")}:function(t,e){return O.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=N.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var a=new r,o=e.apply(a,n.concat(N.call(arguments)));return Object(o)===o?o:a}return e.apply(t,n.concat(N.call(arguments)))};return i}),j.flexbox=function(){return u("flexWrap")},j.flexboxlegacy=function(){return u("boxDirection")},j.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},j.canvastext=function(){return!(!h.canvas||!a(e.createElement("canvas").getContext("2d").fillText,"function"))},j.webgl=function(){return!!t.WebGLRenderingContext},j.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:q(["@media (",k.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},j.geolocation=function(){return"geolocation"in navigator},j.postmessage=function(){return!!t.postMessage},j.websqldatabase=function(){return!!t.openDatabase},j.indexedDB=function(){return!!u("indexedDB",t)},j.hashchange=function(){return D("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},j.history=function(){return!(!t.history||!history.pushState)},j.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},j.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},j.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),o(_.backgroundColor,"rgba")},j.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),o(_.backgroundColor,"rgba")||o(_.backgroundColor,"hsla")},j.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(_.background)},j.backgroundsize=function(){return u("backgroundSize")},j.borderimage=function(){return u("borderImage")},j.borderradius=function(){return u("borderRadius")},j.boxshadow=function(){return u("boxShadow")},j.textshadow=function(){return""===e.createElement("div").style.textShadow},j.opacity=function(){return r("opacity:.55"),/^0.55$/.test(_.opacity)},j.cssanimations=function(){return u("animationName")},j.csscolumns=function(){return u("columnCount")},j.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((t+"-webkit- ".split(" ").join(e+t)+k.join(n+t)).slice(0,-t.length)),o(_.backgroundImage,"gradient")},j.cssreflections=function(){return u("boxReflect")},j.csstransforms=function(){return!!u("transform")},j.csstransforms3d=function(){var t=!!u("perspective");return t&&"webkitPerspective"in g.style&&q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},j.csstransitions=function(){return u("transition")},j.fontface=function(){var t;return q('@font-face {font-family:"font";src:url("https://")}',function(n,i){var r=e.getElementById("smodernizr"),a=r.sheet||r.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";t=/src/i.test(o)&&0===o.indexOf(i.split(" ")[0])}),t},j.generatedcontent=function(){var t;return q(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},j.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},j.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},j.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},j.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},j.webworkers=function(){return!!t.Worker},j.applicationcache=function(){return!!t.applicationCache},j.svg=function(){return!!e.createElementNS&&!!e.createElementNS(E.svg,"svg").createSVGRect},j.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==E.svg},j.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(w.call(e.createElementNS(E.svg,"animate")))},j.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(w.call(e.createElementNS(E.svg,"clipPath")))};for(var $ in j)f(j,$)&&(d=$.toLowerCase(),h[d]=j[$](),M.push((h[d]?"":"no-")+d));return h.input||c(),h.addTest=function(t,e){if("object"==typeof t)for(var i in t)f(t,i)&&h.addTest(i,t[i]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof m&&m&&(g.className+=" "+(e?"":"no-")+t),h[t]=e}return h},i(""),y=b=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=v[t[m]];return e||(e={},g++,t[m]=g,v[g]=e),e}function a(t,n,i){if(n||(n=e),c)return n.createElement(t);i||(i=r(n));var a;return a=i.cache[t]?i.cache[t].cloneNode():h.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!a.canHaveChildren||p.test(t)||a.tagUrn?a:i.frag.appendChild(a)}function o(t,n){if(t||(t=e),c)return t.createDocumentFragment();n=n||r(t);for(var a=n.frag.cloneNode(),o=0,s=i(),l=s.length;l>o;o++)a.createElement(s[o]);return a}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?a(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function l(t){t||(t=e);var i=r(t);return!y.shivCSS||u||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||s(t,i),t}var u,c,d="3.7.0",f=t.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",u="hidden"in t,c=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){u=!0,c=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:c,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:o};t.html5=y,l(e)}(this,e),h._version=p,h._prefixes=k,h._domPrefixes=T,h._cssomPrefixes=S,h.mq=z,h.hasEvent=D,h.testProp=function(t){return s([t])},h.testAllProps=u,h.testStyles=q,h.prefixed=function(t,e,n){return e?u(t,e,n):u(t,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+M.join(" "):""),h}(this,this.document);