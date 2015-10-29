/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("placeholder","placeholder"in t("input")&&"placeholder"in t("textarea"))});