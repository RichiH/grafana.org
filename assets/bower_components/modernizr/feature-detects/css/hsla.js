/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","contains"],function(n,t,e){n.addTest("hsla",function(){var n=t("a").style;return n.cssText="background-color:hsla(120,40%,100%,.5)",e(n.backgroundColor,"rgba")||e(n.backgroundColor,"hsla")})});