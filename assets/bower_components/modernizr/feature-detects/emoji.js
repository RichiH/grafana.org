/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/
define(["Modernizr","createElement","test/canvastext"],function(e,t){e.addTest("emoji",function(){if(!e.canvastext)return!1;var n=window.devicePixelRatio||1,i=12*n,r=t("canvas"),o=r.getContext("2d");return o.fillStyle="#f00",o.textBaseline="top",o.font="32px Arial",o.fillText("\ud83d\udc28",0,0),0!==o.getImageData(i,i,1,1).data[0]})});