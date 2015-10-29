/*!
{
  "name": "Ambient Light Events",
  "property": "ambientlight",
  "notes": [{
    "name": "W3C Ambient Light Events",
    "href": "http://www.w3.org/TR/ambient-light/"
  }]
}
!*/
define(["Modernizr","hasEvent"],function(e,t){e.addTest("ambientlight",t("devicelight",window))});