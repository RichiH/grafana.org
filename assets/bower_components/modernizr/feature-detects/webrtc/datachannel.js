/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks! Article",
    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/
define(["Modernizr","prefixed","domPrefixes","test/webrtc/peerconnection"],function(e,t,n){e.addTest("datachannel",function(){if(!e.peerconnection)return!1;for(var t=0,i=n.length;i>t;t++){var r=window[n[t]+"RTCPeerConnection"];if(r){var o=new r({iceServers:[{url:"stun:0"}]});return"createDataChannel"in o}}return!1})});