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
define(["Modernizr","createElement"],function(t,e){t.addTest("rgba",function(){var t=e("a").style;return t.cssText="background-color:rgba(150,255,150,.5)",(""+t.backgroundColor).indexOf("rgba")>-1})});