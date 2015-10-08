/*!
{
  "name": "Webp Lossless",
  "async": true,
  "property": ["webplossless", "webp-lossless"],
  "tags": ["image"],
  "authors": ["@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "http://code.google.com/speed/webp/"
  },{
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }]
}
!*/
define(["Modernizr","addTest"],function(e,t){e.addAsyncTest(function(){var e=new Image;e.onerror=function(){t("webplossless",!1,{aliases:["webp-lossless"]})},e.onload=function(){t("webplossless",1==e.width,{aliases:["webp-lossless"]})},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="})});