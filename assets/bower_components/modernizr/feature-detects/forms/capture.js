/*!
{
  "name": "input[capture] Attribute",
  "property": "capture",
  "tags": ["video", "image", "audio", "media", "attribute"],
  "notes": [{
    "name": "W3C draft: HTML Media Capture",
    "href": "http://www.w3.org/TR/html-media-capture/"
  }]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("capture","capture"in t("input"))});