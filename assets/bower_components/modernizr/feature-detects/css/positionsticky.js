/*!
{
  "name": "CSS position: sticky",
  "property": "csspositionsticky",
  "tags": ["css"],
  "builderAliases": ["css_positionsticky"],
  "notes": [{
    "name": "Chrome bug report",
    "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
  }],
  "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
}
!*/
define(["Modernizr","createElement","prefixes"],function(e,t,n){e.addTest("csspositionsticky",function(){var e="position:",r="sticky",i=t("a"),o=i.style;return o.cssText=e+n.join(r+";"+e).slice(0,-e.length),-1!==o.position.indexOf(r)})});