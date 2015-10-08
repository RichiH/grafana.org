/*!
{
  "name": "Orientation and Motion Events",
  "property": ["devicemotion", "deviceorientation"],
  "caniuse": "deviceorientation",
  "notes": [{
    "name": "W3C Editor's Draft",
    "href": "http://dev.w3.org/geo/api/spec-source-orientation.html"
  },{
    "name": "Implementation by iOS Safari (Orientation)",
    "href": "http://goo.gl/fhce3"
  },{
    "name": "Implementation by iOS Safari (Motion)",
    "href": "http://goo.gl/rLKz8"
  }],
  "authors": ["Shi Chuan"],
  "tags": ["event"],
  "builderAliases": ["event_deviceorientation_motion"]
}
!*/
define(["Modernizr"],function(t){t.addTest("devicemotion","DeviceMotionEvent"in window),t.addTest("deviceorientation","DeviceOrientationEvent"in window)});