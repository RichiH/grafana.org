/*!
{
  "name": "ruby, rp, rt Elements",
  "caniuse": "ruby",
  "property": "ruby",
  "tags": ["elem"],
  "builderAliases": ["elem_ruby"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-ruby-element"
  }]
}
!*/
define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function i(){n.removeChild(r),r=null,o=null,s=null}var r=t("ruby"),o=t("rt"),s=t("rp"),a="display",c="fontSize";return r.appendChild(s),r.appendChild(o),n.appendChild(r),"none"==e(s,a)||"ruby"==e(r,a)&&"ruby-text"==e(o,a)||"6pt"==e(s,c)&&"6pt"==e(o,c)?(i(),!0):(i(),!1)})});