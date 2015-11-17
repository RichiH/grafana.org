/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){e.addTest("csstransitions",t("transition","all",!0))});