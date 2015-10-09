/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(n,t,e){n.addTest("opacity",function(){var n=t("a").style;return n.cssText=e.join("opacity:.55;"),/^0.55$/.test(n.opacity)})});