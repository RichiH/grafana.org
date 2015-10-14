/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(e,t,n){e.addTest("opacity",function(){var e=t("a").style;return e.cssText=n.join("opacity:.55;"),/^0.55$/.test(e.opacity)})});