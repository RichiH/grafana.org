define(["./core","./var/rnotwhite","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseJSON","./ajax/parseXML","./deferred"],function(e,t,n,i){function r(n){return function(i,r){"string"!=typeof i&&(r=i,i="*");var o,s=0,a=i.toLowerCase().match(t)||[];if(e.isFunction(r))for(;o=a[s++];)"+"===o[0]?(o=o.slice(1)||"*",(n[o]=n[o]||[]).unshift(r)):(n[o]=n[o]||[]).push(r)}}function o(t,n,i,r){function o(c){var l;return s[c]=!0,e.each(t[c]||[],function(e,t){var c=t(n,i,r);return"string"!=typeof c||a||s[c]?a?!(l=c):void 0:(n.dataTypes.unshift(c),o(c),!1)}),l}var s={},a=t===v;return o(n.dataTypes[0])||!s["*"]&&o("*")}function s(t,n){var i,r,o=e.ajaxSettings.flatOptions||{};for(i in n)void 0!==n[i]&&((o[i]?t:r||(r={}))[i]=n[i]);return r&&e.extend(!0,t,r),t}function a(e,t,n){for(var i,r,o,s,a=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){c.unshift(r);break}if(c[0]in n)o=c[0];else{for(r in n){if(!c[0]||e.converters[r+" "+c[0]]){o=r;break}s||(s=r)}o=o||s}return o?(o!==c[0]&&c.unshift(o),n[o]):void 0}function c(e,t,n,i){var r,o,s,a,c,l={},u=e.dataTypes.slice();if(u[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!c&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=u.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(s=l[c+" "+o]||l["* "+o],!s)for(r in l)if(a=r.split(" "),a[1]===o&&(s=l[c+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[r]:l[r]!==!0&&(o=a[0],u.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(d){return{state:"parsererror",error:s?d:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}var l=/#.*$/,u=/([?&])_=[^&]*/,d=/^(.*?):[ \t]*([^\r\n]*)$/gm,f=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,p=/^(?:GET|HEAD)$/,h=/^\/\//,g=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,m={},v={},y="*/".concat("*"),b=window.location.href,_=g.exec(b.toLowerCase())||[];return e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:b,type:"GET",isLocal:f.test(_[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":y,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,n){return n?s(s(t,e.ajaxSettings),n):s(e.ajaxSettings,t)},ajaxPrefilter:r(m),ajaxTransport:r(v),ajax:function(r,s){function f(t,n,i,r){var o,s,l,u,d,f=n;2!==P&&(P=2,S&&clearTimeout(S),x=void 0,k=r||"",$.readyState=t>0?4:0,o=t>=200&&300>t||304===t,i&&(u=a(j,$,i)),u=c(j,u,$,o),o?(j.ifModified&&(d=$.getResponseHeader("Last-Modified"),d&&(e.lastModified[w]=d),d=$.getResponseHeader("etag"),d&&(e.etag[w]=d)),204===t||"HEAD"===j.type?f="nocontent":304===t?f="notmodified":(f=u.state,s=u.data,l=u.error,o=!l)):(l=f,(t||!f)&&(f="error",0>t&&(t=0))),$.status=t,$.statusText=(n||f)+"",o?q.resolveWith(F,[s,f,$]):q.rejectWith(F,[$,f,l]),$.statusCode(N),N=void 0,E&&M.trigger(o?"ajaxSuccess":"ajaxError",[$,j,o?s:l]),D.fireWith(F,[$,f]),E&&(M.trigger("ajaxComplete",[$,j]),--e.active||e.event.trigger("ajaxStop")))}"object"==typeof r&&(s=r,r=void 0),s=s||{};var x,w,k,C,S,T,E,A,j=e.ajaxSetup({},s),F=j.context||j,M=j.context&&(F.nodeType||F.jquery)?e(F):e.event,q=e.Deferred(),D=e.Callbacks("once memory"),N=j.statusCode||{},z={},O={},P=0,R="canceled",$={readyState:0,getResponseHeader:function(e){var t;if(2===P){if(!C)for(C={};t=d.exec(k);)C[t[1].toLowerCase()]=t[2];t=C[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===P?k:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return P||(e=O[n]=O[n]||e,z[e]=t),this},overrideMimeType:function(e){return P||(j.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>P)for(t in e)N[t]=[N[t],e[t]];else $.always(e[$.status]);return this},abort:function(e){var t=e||R;return x&&x.abort(t),f(0,t),this}};if(q.promise($).complete=D.add,$.success=$.done,$.error=$.fail,j.url=((r||j.url||b)+"").replace(l,"").replace(h,_[1]+"//"),j.type=s.method||s.type||j.method||j.type,j.dataTypes=e.trim(j.dataType||"*").toLowerCase().match(t)||[""],null==j.crossDomain&&(T=g.exec(j.url.toLowerCase()),j.crossDomain=!(!T||T[1]===_[1]&&T[2]===_[2]&&(T[3]||("http:"===T[1]?"80":"443"))===(_[3]||("http:"===_[1]?"80":"443")))),j.data&&j.processData&&"string"!=typeof j.data&&(j.data=e.param(j.data,j.traditional)),o(m,j,s,$),2===P)return $;E=e.event&&j.global,E&&0===e.active++&&e.event.trigger("ajaxStart"),j.type=j.type.toUpperCase(),j.hasContent=!p.test(j.type),w=j.url,j.hasContent||(j.data&&(w=j.url+=(i.test(w)?"&":"?")+j.data,delete j.data),j.cache===!1&&(j.url=u.test(w)?w.replace(u,"$1_="+n++):w+(i.test(w)?"&":"?")+"_="+n++)),j.ifModified&&(e.lastModified[w]&&$.setRequestHeader("If-Modified-Since",e.lastModified[w]),e.etag[w]&&$.setRequestHeader("If-None-Match",e.etag[w])),(j.data&&j.hasContent&&j.contentType!==!1||s.contentType)&&$.setRequestHeader("Content-Type",j.contentType),$.setRequestHeader("Accept",j.dataTypes[0]&&j.accepts[j.dataTypes[0]]?j.accepts[j.dataTypes[0]]+("*"!==j.dataTypes[0]?", "+y+"; q=0.01":""):j.accepts["*"]);for(A in j.headers)$.setRequestHeader(A,j.headers[A]);if(j.beforeSend&&(j.beforeSend.call(F,$,j)===!1||2===P))return $.abort();R="abort";for(A in{success:1,error:1,complete:1})$[A](j[A]);if(x=o(v,j,s,$)){$.readyState=1,E&&M.trigger("ajaxSend",[$,j]),j.async&&j.timeout>0&&(S=setTimeout(function(){$.abort("timeout")},j.timeout));try{P=1,x.send(z,f)}catch(I){if(!(2>P))throw I;f(-1,I)}}else f(-1,"No Transport");return $},getJSON:function(t,n,i){return e.get(t,n,i,"json")},getScript:function(t,n){return e.get(t,void 0,n,"script")}}),e.each(["get","post"],function(t,n){e[n]=function(t,i,r,o){return e.isFunction(i)&&(o=o||r,r=i,i=void 0),e.ajax({url:t,type:n,dataType:o,data:i,success:r})}}),e});