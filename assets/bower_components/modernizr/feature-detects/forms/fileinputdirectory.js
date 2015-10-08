/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/
define(["Modernizr","createElement","domPrefixes"],function(e,t,n){e.addTest("fileinputdirectory",function(){var e=t("input"),i="directory";if(e.type="file",i in e)return!0;for(var r=0,o=n.length;o>r;r++)if(n[r]+i in e)return!0;return!1})});