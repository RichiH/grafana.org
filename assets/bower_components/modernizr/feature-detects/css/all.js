/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
    "href": "http://dev.w3.org/csswg/css-cascade/#all-shorthand"
  }]
}
!*/
define(["Modernizr","docElement"],function(e,t){e.addTest("cssall","all"in t.style)});