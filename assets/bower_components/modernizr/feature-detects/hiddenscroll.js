/*!
{
  "name": "Hidden Scrollbar",
  "property": "hiddenscroll",
  "authors": ["Oleg Korsunsky"]
}
!*/
define(["Modernizr","testStyles"],function(e,t){e.addTest("hiddenscroll",function(){return t("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})})});