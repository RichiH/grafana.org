/*!
{
  "name": "canvas.toDataURL type support",
  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
  "tags": ["canvas"],
  "builderAliases": ["canvas_todataurl_type"],
  "async" : false,
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
  }]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(e,t){var n=t("canvas");e.addTest("todataurljpeg",function(){return!!e.canvas&&0===n.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),e.addTest("todataurlpng",function(){return!!e.canvas&&0===n.toDataURL("image/png").indexOf("data:image/png")}),e.addTest("todataurlwebp",function(){var t=!1;try{t=!!e.canvas&&0===n.toDataURL("image/webp").indexOf("data:image/webp")}catch(i){}return t})});