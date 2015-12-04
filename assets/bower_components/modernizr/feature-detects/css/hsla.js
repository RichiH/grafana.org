/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","contains"],function(t,e,n){t.addTest("hsla",function(){var t=e("a").style;return t.cssText="background-color:hsla(120,40%,100%,.5)",n(t.backgroundColor,"rgba")||n(t.backgroundColor,"hsla")})});