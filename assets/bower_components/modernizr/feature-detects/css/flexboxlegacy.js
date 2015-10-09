/*!
{
  "name": "Flexbox (legacy)",
  "property": "flexboxlegacy",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _old_ flexbox",
    "href": "http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
  }]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){e.addTest("flexboxlegacy",t("boxDirection","reverse",!0))});