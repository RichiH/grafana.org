/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(t,e,n){t.addTest("opacity",function(){var t=e("a").style;return t.cssText=n.join("opacity:.55;"),/^0.55$/.test(t.opacity)})});