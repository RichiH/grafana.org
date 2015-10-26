/*!
{
  "name": "Workers from Blob URIs",
  "property": "blobworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_blobworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "http://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
define(["Modernizr","addTest"],function(e,t){e.addAsyncTest(function(){function n(){t("blobworkers",!1),i()}function i(){l&&o.revokeObjectURL(l),c&&c.terminate(),u&&clearTimeout(u)}try{var r=window.BlobBuilder,o=window.URL;e._config.usePrefix&&(r=r||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,o=o||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var s,a,c,l,u,d="Modernizr",f="this.onmessage=function(e){postMessage(e.data)}";try{s=new Blob([f],{type:"text/javascript"})}catch(p){}s||(a=new r,a.append(f),s=a.getBlob()),l=o.createObjectURL(s),c=new Worker(l),c.onmessage=function(e){t("blobworkers",d===e.data),i()},c.onerror=n,u=setTimeout(n,200),c.postMessage(d)}catch(p){n()}})});