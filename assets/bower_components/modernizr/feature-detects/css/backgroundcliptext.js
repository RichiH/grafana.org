/*!
{
  "name": "CSS Background Clip Text",
  "property": "backgroundcliptext",
  "authors": ["ausi"],
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Tricks Article",
      "href": "http://css-tricks.com/image-under-text/"
    },
    {
      "name": "MDN Docs",
      "href": "http://developer.mozilla.org/en/CSS/background-clip"
    },
    {
      "name": "Related Github Issue",
      "href": "http://github.com/Modernizr/Modernizr/issues/199"
    }
  ]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){e.addTest("backgroundcliptext",function(){return t("backgroundClip","text")})});