define(["isSVG"],function(e){var t;return e||!function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,u(t)}function o(e){var t=y[e[m]];return t||(t={},v++,e[m]=v,y[v]=t),t}function s(e,n,i){if(n||(n=t),d)return n.createElement(e);i||(i=o(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():g.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||h.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function a(e,n){if(e||(e=t),d)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),s=0,a=i(),c=a.length;c>s;s++)r.createElement(a[s]);return r}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function u(e){e||(e=t);var i=o(e);return!b.shivCSS||l||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||c(e,i),e}var l,d,f="3.7.3",p=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,d=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:d,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:s,createDocumentFragment:a,addElements:r};e.html5=b,u(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof window?window:this,document),t});