/*!
{
  "name": "ES6 Generators",
  "property": "generators",
  "authors": ["Michael Kachanovskyi"],
  "tags": ["es6"]
}
!*/
define(["Modernizr"],function(e){e.addTest("generators",function(){try{new Function("function* test() {}")()}catch(e){return!1}return!0})});