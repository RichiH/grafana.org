/*!
{
  "name": "Canvas text",
  "property": "canvastext",
  "caniuse": "canvas-text",
  "tags": ["canvas", "graphics"],
  "polyfills": ["canvastext"]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(e,t){e.addTest("canvastext",function(){return e.canvas===!1?!1:"function"==typeof t("canvas").getContext("2d").fillText})});