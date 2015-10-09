/*!
{
  "name": "canvas winding support",
  "property": ["canvaswinding"],
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
    "name": "Article",
    "href": "http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/"
  }]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(e,t){e.addTest("canvaswinding",function(){if(e.canvas===!1)return!1;var n=t("canvas").getContext("2d");return n.rect(0,0,10,10),n.rect(2,2,6,6),n.isPointInPath(5,5,"evenodd")===!1})});