/*!
{
  "name": "Box Sizing",
  "property": "boxsizing",
  "caniuse": "css3-boxsizing",
  "polyfills": ["borderboxmodel", "boxsizingpolyfill", "borderbox"],
  "tags": ["css"],
  "builderAliases": ["css_boxsizing"],
  "notes": [{
    "name": "MDN Docs",
    "href": "http://developer.mozilla.org/en/CSS/box-sizing"
  },{
    "name": "Related Github Issue",
    "href": "http://github.com/Modernizr/Modernizr/issues/248"
  }]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){e.addTest("boxsizing",t("boxSizing","border-box",!0)&&(void 0===document.documentMode||document.documentMode>7))});