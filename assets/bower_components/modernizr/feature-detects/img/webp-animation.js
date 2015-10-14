/*!
{
  "name": "Webp Animation",
  "async": true,
  "property": "webpanimation",
  "aliases": ["webp-animation"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
    "href": "http://code.google.com/speed/webp/"
  },{
    "name": "Chromium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "http://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
  }]
}
!*/
define(["Modernizr","addTest"],function(e,t){e.addAsyncTest(function(){var e=new Image;e.onerror=function(){t("webpanimation",!1,{aliases:["webp-animation"]})},e.onload=function(){t("webpanimation",1==e.width,{aliases:["webp-animation"]})},e.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"})});