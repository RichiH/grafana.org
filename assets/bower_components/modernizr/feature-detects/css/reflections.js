/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){e.addTest("cssreflections",t("boxReflect","above",!0))});