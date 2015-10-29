/*!
{
  "name": "VML",
  "property": "vml",
  "caniuse": "vml",
  "tags": ["vml"],
  "authors": ["Craig Andrews (@candrews)"],
  "notes": [{
    "name" : "W3C VML reference",
    "href": "http://www.w3.org/TR/NOTE-VML"
  },{
    "name" : "Microsoft VML reference",
    "href": "http://msdn.microsoft.com/en-us/library/bb263898%28VS.85%29.aspx"
  }]
}
!*/
define(["Modernizr","createElement","isSVG"],function(e,t,n){e.addTest("vml",function(){var e,i=t("div"),r=!1;return n||(i.innerHTML='<v:shape id="vml_flag1" adj="1" />',e=i.firstChild,e.style.behavior="url(#default#VML)",r=e?"object"==typeof e.adj:!0),r})});