/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("audioloop","loop"in t("audio"))});