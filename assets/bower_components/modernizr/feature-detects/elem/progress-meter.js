/*!
{
  "name": "progress Element",
  "caniuse": "progressmeter",
  "property": ["progressbar", "meter"],
  "tags": ["elem"],
  "builderAliases": ["elem_progress_meter"],
  "authors": ["Stefan Wallin"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("progressbar",void 0!==t("progress").max),e.addTest("meter",void 0!==t("meter").max)});