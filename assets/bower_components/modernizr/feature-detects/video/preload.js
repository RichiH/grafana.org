/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("videopreload","preload"in t("video"))});