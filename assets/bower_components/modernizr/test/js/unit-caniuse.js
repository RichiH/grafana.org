var myscript=document.createElement("script"),ref=document.getElementsByTagName("script")[0];myscript.src="http://caniuse.com/jsonp.php?callback=caniusecb",setTimeout(function(){ref.parentNode.insertBefore(myscript,ref)},100);var map={audio:"audio",borderimage:"border-image",borderradius:"border-radius",canvas:"canvas",canvastext:"canvas-text",cssanimations:"css-animation",boxshadow:"css-boxshadow",cssgradients:"css-gradients",opacity:"css-opacity",cssreflections:"css-reflections",textshadow:"css-textshadow",csstransitions:"css-transitions",hsla:"css3-colors",rgba:"css3-colors",draganddrop:"dragndrop",flexbox:"flexbox",fontface:"fontface",geolocation:"geolocation",hashchange:"hashchange",history:"history",indexeddb:"indexeddb",multiplebgs:"multibackgrounds",csscolumns:"multicolumn",localstorage:"namevalue-storage",applicationcache:"offline-apps",websqldatabase:"sql-storage",svg:"svg",touch:"touch",csstransforms:"transforms2d",csstransforms3d:"transforms3d",video:"video",webgl:"webgl",websockets:"websockets",webworkers:"webworkers",postmessage:"x-doc-messaging"};window.caniusecb=function(t){function e(t){if("y"==t||"a"==t)return!0;if("n"==t||"p"==t)return!1;throw"unknown return value from can i use"}function i(t){var i=e(t.ciuresult);return~TEST.audvid.indexOf(t.feature)&&(t.result=!!t.result),"a"==t.ciuresult?ok(!0,t.browser+t.version+": Caniuse reported partial support for "+t.ciufeature+". So.. Modernizr's "+t.result+" is good enough..."):("textshadow"==t.feature&&"firefox"==t.browser&&3==t.version&&0==i&&(i=t.fp=!0),equal(t.result,i,t.browser+t.version+": Caniuse result for "+t.ciufeature+" matches Modernizr's "+(t.fp?"*false positive*":"result")+" for "+t.feature),void 0)}if(window.doo=t,window.JSONSelect){var n=t.data,s=uaparse(navigator.userAgent),a=JSONSelect.match(".agents .browser",t).indexOf(s.family),o=Object.keys(t.agents)[a];-1==navigator.userAgent.indexOf("PhantomJS")&&(module("caniuse.com data matches",{setup:function(){},teardown:function(){}}),test("we match caniuse data",function(){for(var t in Modernizr){var e=map[t];if(void 0!==e){var a=n[e];if(void 0===a)throw"unknown key of caniusedata";var r=a.stats[o],c=s.minor&&s.minor.toString().replace(/(\d)\d$/,"$1"),l=(s.major+"."+c).replace(/(9\.(6|5))/,"opera"==s.family?"9.5-9.6":"$1").replace(/(10\.(0|1))/,"opera"==s.family?"10.0-10.1":"$1"),d=r[l],u=r[s.major];if(d&&"u"!=d)d=d.replace(" x",""),i({feature:t,ciufeature:e,result:Modernizr[t],ciuresult:d,browser:o,version:l});else if(u){if("u"==u)continue;u=u.replace(" x",""),i({feature:t,ciufeature:e,result:Modernizr[t],ciuresult:u,browser:o,version:s.major})}}}}))}};