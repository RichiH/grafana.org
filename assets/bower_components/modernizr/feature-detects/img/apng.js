/*!
{
  "name": "Animated PNG",
  "async": true,
  "property": "apng",
  "tags": ["image"],
  "builderAliases": ["img_apng"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "http://en.wikipedia.org/wiki/APNG"
  }]
}
!*/
define(["Modernizr","createElement","addTest","test/canvas"],function(e,t,n){e.addAsyncTest(function(){if(!e.canvas)return!1;var i=new Image,r=t("canvas"),o=r.getContext("2d");i.onload=function(){n("apng",function(){return"undefined"==typeof r.getContext?!1:(o.drawImage(i,0,0),0===o.getImageData(0,0,1,1).data[3])})},i.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="})});