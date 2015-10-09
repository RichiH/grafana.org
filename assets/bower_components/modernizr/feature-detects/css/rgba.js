/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "http://css-tricks.com/rgba-browser-support/"
  }]
}
!*/
define(["Modernizr","createElement"],function(n,t){n.addTest("rgba",function(){var n=t("a").style;return n.cssText="background-color:rgba(150,255,150,.5)",(""+n.backgroundColor).indexOf("rgba")>-1})});