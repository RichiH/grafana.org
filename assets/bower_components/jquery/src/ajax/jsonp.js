define(["../core","./var/nonce","./var/rquery","../ajax"],function(n,t,a){var r=[],e=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=r.pop()||n.expando+"_"+t++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(t,o,i){var c,s,p,l=t.jsonp!==!1&&(e.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&e.test(t.data)&&"data");return l||"jsonp"===t.dataTypes[0]?(c=t.jsonpCallback=n.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,l?t[l]=t[l].replace(e,"$1"+c):t.jsonp!==!1&&(t.url+=(a.test(t.url)?"&":"?")+t.jsonp+"="+c),t.converters["script json"]=function(){return p||n.error(c+" was not called"),p[0]},t.dataTypes[0]="json",s=window[c],window[c]=function(){p=arguments},i.always(function(){window[c]=s,t[c]&&(t.jsonpCallback=o.jsonpCallback,r.push(c)),p&&n.isFunction(s)&&s(p[0]),p=s=void 0}),"script"):void 0})});