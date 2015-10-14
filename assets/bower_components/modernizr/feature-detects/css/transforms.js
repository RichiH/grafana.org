/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){e.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&t("transform","scale(1)",!0)})});