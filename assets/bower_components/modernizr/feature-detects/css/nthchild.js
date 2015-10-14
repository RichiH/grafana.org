/*!
{
  "name": "CSS :nth-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "nthchild",
  "tags": ["css"],
  "notes": [
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/pull/685"
    },
    {
      "name": "Sitepoint :nth-child documentation",
      "href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
    }
  ],
  "authors": ["@emilchristensen"],
  "warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
}
!*/
define(["Modernizr","testStyles"],function(e,t){t("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(t){e.addTest("nthchild",function(){for(var e=t.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&e[i].offsetWidth===i%2+1;return n})},5)});