/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/
define(["Modernizr","mq"],function(e,t){e.addTest("mediaqueries",t("only all"))});