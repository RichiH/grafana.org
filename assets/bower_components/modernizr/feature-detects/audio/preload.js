/*!
{
  "name": "Audio Preload Attribute",
  "property": "audiopreload",
  "tags": ["audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("audiopreload","preload"in e("audio"))});