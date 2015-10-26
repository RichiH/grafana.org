/*!
{
  "name": "CSS vw unit",
  "property": "cssvwunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vwunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
define(["Modernizr","testStyles"],function(e,t){t("#modernizr { width: 50vw; }",function(t){var n=parseInt(window.innerWidth/2,10),r=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);e.addTest("cssvwunit",r==n)})});