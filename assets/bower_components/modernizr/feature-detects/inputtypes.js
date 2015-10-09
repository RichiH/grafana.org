/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
define(["Modernizr","inputElem","docElement"],function(e,t,n){var i="search tel url email datetime date month week time datetime-local number range color".split(" "),r={};e.inputtypes=function(e){for(var i,o,s,a=e.length,c=":)",l=0;a>l;l++)t.setAttribute("type",i=e[l]),s="text"!==t.type&&"style"in t,s&&(t.value=c,t.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&void 0!==t.style.WebkitAppearance?(n.appendChild(t),o=document.defaultView,s=o.getComputedStyle&&"textfield"!==o.getComputedStyle(t,null).WebkitAppearance&&0!==t.offsetHeight,n.removeChild(t)):/^(search|tel)$/.test(i)||(s=/^(url|email|number)$/.test(i)?t.checkValidity&&t.checkValidity()===!1:t.value!=c)),r[e[l]]=!!s;return r}(i)});