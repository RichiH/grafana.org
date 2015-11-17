/*!
{
  "name": "script[async]",
  "property": "scriptasync",
  "caniuse": "script-async",
  "tags": ["script"],
  "builderAliases": ["script_async"],
  "authors": ["Theodoor van Donge"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("scriptasync","async"in t("script"))});