/*!
{
  "name": "Data URI",
  "property": "datauri",
  "caniuse": "datauri",
  "tags": ["url"],
  "builderAliases": ["url_data_uri"],
  "async": true,
  "notes": [{
    "name": "Wikipedia article",
    "href": "http://en.wikipedia.org/wiki/Data_URI_scheme"
  }],
  "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
}
!*/
define(["Modernizr","addTest"],function(e,t){e.addAsyncTest(function(){function n(){var n=new Image;n.onerror=function(){t("datauri",!0),e.datauri=new Boolean(!0),e.datauri.over32kb=!1},n.onload=function(){t("datauri",!0),e.datauri=new Boolean(!0),e.datauri.over32kb=1==n.width&&1==n.height};for(var i="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";i.length<33e3;)i="\r\n"+i;n.src="data:image/gif;base64,"+i}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){t("datauri",!1)},10);var i=new Image;i.onerror=function(){t("datauri",!1)},i.onload=function(){1==i.width&&1==i.height?n():t("datauri",!1)},i.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="})});