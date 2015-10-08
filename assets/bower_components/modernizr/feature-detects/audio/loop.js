/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("audioloop","loop"in e("audio"))});