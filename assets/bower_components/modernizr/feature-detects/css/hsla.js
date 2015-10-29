/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","contains"],function(e,t,n){e.addTest("hsla",function(){var e=t("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",n(e.backgroundColor,"rgba")||n(e.backgroundColor,"hsla")})});