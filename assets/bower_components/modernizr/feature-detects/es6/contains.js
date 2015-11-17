/*!
{
  "name": "ES5 String.prototype.contains",
  "property": "contains",
  "authors": ["Robert Kowalski"],
  "tags": ["es6"]
}
!*/
define(["Modernizr","is"],function(e,t){e.addTest("contains",t(String.prototype.contains,"function"))});