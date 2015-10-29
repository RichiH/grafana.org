/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){e.addTest("ellipsis",t("textOverflow","ellipsis"))});