/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("webgl",function(){var e=t("canvas"),n="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return n in e?e[n]("webgl")||e[n]("experimental-webgl"):"WebGLRenderingContext"in window})});