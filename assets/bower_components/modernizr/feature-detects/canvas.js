/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("canvas",function(){var e=t("canvas");return!(!e.getContext||!e.getContext("2d"))})});