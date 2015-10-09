/*!
{
  "name": "Battery API",
  "property": "batteryapi",
  "aliases": ["battery-api"],
  "builderAliases": ["battery_api"],
  "tags": ["device", "media"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
  }]
}
!*/
define(["Modernizr","prefixed"],function(e,t){e.addTest("batteryapi",!!t("battery",navigator),{aliases:["battery-api"]})});