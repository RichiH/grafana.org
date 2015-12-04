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
define(["Modernizr","modElem"],function(e,t){e.addTest("csschunit",function(){var e,i=t.elem.style;try{i.fontSize="3ch",e=-1!==i.fontSize.indexOf("ch")}catch(n){e=!1}return e})});