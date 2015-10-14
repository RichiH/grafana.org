/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C spec",
      "href": "http://www.w3.org/TR/pointerevents/"
    }
  ],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["handjs"]
}
!*/
define(["Modernizr","domPrefixes","hasEvent"],function(e,t,n){e.addTest("pointerevents",function(){var i=!1,r=t.length;for(i=e.hasEvent("pointerdown");r--&&!i;)n(t[r]+"pointerdown")&&(i=!0);return i})});