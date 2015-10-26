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
define(["Modernizr"],function(n){n.addTest("target",function(){var n=window.document;if(!("querySelectorAll"in n))return!1;try{return n.querySelectorAll(":target"),!0}catch(t){return!1}})});