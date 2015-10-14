/*!
{
  "name": "CSS Stylable Scrollbars",
  "property": "cssscrollbar",
  "tags": ["css"],
  "builderAliases": ["css_scrollbars"]
}
!*/
define(["Modernizr","testStyles","prefixes"],function(e,t,n){t("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+n.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(t){e.addTest("cssscrollbar",40==t.scrollWidth)})});