/*!
{
  "name": "ES5 Date",
  "property": "es5date",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
define(["Modernizr"],function(e){e.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(n){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)})});