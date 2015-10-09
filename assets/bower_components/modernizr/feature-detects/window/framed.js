/*!
{
  "name": "Framed window",
  "property": "framed",
  "tags": ["window"],
  "builderAliases": ["window_framed"]
}
!*/
define(["Modernizr"],function(e){e.addTest("framed",window.location!=top.location)});