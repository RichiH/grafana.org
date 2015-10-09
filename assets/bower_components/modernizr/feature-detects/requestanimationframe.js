/*!
{
  "name": "requestAnimationFrame",
  "property": "requestanimationframe",
  "aliases": ["raf"],
  "caniuse": "requestanimationframe",
  "tags": ["animation"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/animation-timing/"
  }],
  "polyfills": ["raf"]
}
!*/
define(["Modernizr","prefixed"],function(e,t){e.addTest("requestanimationframe",!!t("requestAnimationFrame",window),{aliases:["raf"]})});