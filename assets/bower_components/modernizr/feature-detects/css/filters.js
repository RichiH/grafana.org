/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/
define(["Modernizr","createElement","prefixes","testAllProps","test/css/supports"],function(e,t,n,i){e.addTest("cssfilters",function(){if(e.supports)return n("filter","blur(2px)");var o=t("a");return o.style.cssText=i.join("filter:blur(2px); "),!!o.style.length&&(void 0===document.documentMode||document.documentMode>9)})});