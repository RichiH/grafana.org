/*!
{
  "name": "CSS Font rem Units",
  "caniuse": "rem",
  "authors": ["nsfmc"],
  "property": "cssremunit",
  "tags": ["css"],
  "builderAliases": ["css_remunit"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#relative0"
  },{
    "name": "Font Size with rem by Jonathan Snook",
    "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
  }]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("cssremunit",function(){var e=n("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)})});