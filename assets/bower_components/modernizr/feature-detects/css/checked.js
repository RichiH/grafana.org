/*!
{
  "name": "CSS :checked pseudo-selector",
  "caniuse": "css-sel3",
  "property": "checked",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/879"
  }]
}
!*/
define(["Modernizr","createElement","testStyles"],function(e,t,i){e.addTest("checked",function(){return i("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var i=t("input");return i.setAttribute("type","checkbox"),i.setAttribute("checked","checked"),e.appendChild(i),20===i.offsetLeft})})});