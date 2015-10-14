/*!
{
  "name": "CSS Font ch Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "csschunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
define(["Modernizr","modElem"],function(e,t){e.addTest("csschunit",function(){var e,n=t.elem.style;try{n.fontSize="3ch",e=-1!==n.fontSize.indexOf("ch")}catch(i){e=!1}return e})});