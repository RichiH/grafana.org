/*!
{
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(e,t){e.addTest("audio",function(){var e=t("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n})});