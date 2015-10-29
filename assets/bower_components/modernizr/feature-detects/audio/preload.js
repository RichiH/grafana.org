/*!
{
  "name": "Audio Preload Attribute",
  "property": "audiopreload",
  "tags": ["audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("audiopreload","preload"in t("audio"))});