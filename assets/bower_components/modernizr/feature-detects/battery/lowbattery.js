/*!
{
  "name": "Low Battery Level",
  "property": "lowbattery",
  "tags": ["hardware", "mobile"],
  "builderAliases": ["battery_level"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN Docs",
    "href": "http://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
  }]
}
!*/
define(["Modernizr","prefixed"],function(e,t){e.addTest("lowbattery",function(){var e=.2,n=t("battery",navigator);return!!(n&&!n.charging&&n.level<=e)})});