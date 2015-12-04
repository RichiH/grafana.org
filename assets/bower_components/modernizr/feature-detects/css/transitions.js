/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(t,e){t.addTest("csstransitions",e("transition","all",!0))});