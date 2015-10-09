/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
define(["Modernizr","testStyles","test/css/animations"],function(e){e.addTest("csspseudoanimations",function(){var t=!1;if(!e.cssanimations||!window.getComputedStyle)return t;var n=["@",e._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',e._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return e.testStyles(n,function(e){t="10px"===window.getComputedStyle(e,":before").getPropertyValue("font-size")}),t})});