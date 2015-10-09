/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("videoloop","loop"in t("video"))});