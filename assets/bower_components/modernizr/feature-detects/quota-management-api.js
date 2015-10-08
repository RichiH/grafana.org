/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/quota-api/"
  }]
}
!*/
define(["Modernizr","prefixed"],function(e,t){e.addTest("quotamanagement",function(){var e=t("temporaryStorage",navigator),n=t("persistentStorage",navigator);return!(!e||!n)})});