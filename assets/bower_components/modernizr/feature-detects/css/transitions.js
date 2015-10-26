/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(n,t){n.addTest("csstransitions",t("transition","all",!0))});