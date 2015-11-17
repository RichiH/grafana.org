/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "http://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "http://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("bgpositionshorthand",function(){var e=t("a"),n=e.style,i="right 10px bottom 10px";return n.cssText="background-position: "+i+";",n.backgroundPosition===i})});