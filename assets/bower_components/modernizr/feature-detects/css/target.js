/*!
{
  "name": "CSS :target pseudo-class",
  "caniuse": "css-sel3",
  "property": "target",
  "tags": ["css"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
  }],
  "authors": ["@zachleat"],
  "warnings": ["Opera Mini supports :target but doesn't update the hash for anchor links."]
}
!*/
define(["Modernizr"],function(t){t.addTest("target",function(){var t=window.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(e){return!1}})});