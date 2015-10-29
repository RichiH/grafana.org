/*!
{
  "name": "will-change",
  "property": "willchange",
  "notes": [{
    "name": "Spec",
    "href": "http://tabatkins.github.io/specs/css-will-change/"
  }]
}
!*/
define(["Modernizr","docElement"],function(e,t){e.addTest("willchange","willChange"in t.style)});