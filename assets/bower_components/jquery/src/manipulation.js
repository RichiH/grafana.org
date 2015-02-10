define(["./core","./var/concat","./var/push","./core/access","./manipulation/var/rcheckableType","./manipulation/support","./data/var/data_priv","./data/var/data_user","./core/init","./data/accepts","./traversing","./selector","./event"],function(e,t,n,i,r,o,a,s){function c(t,n){return e.nodeName(t,"table")&&e.nodeName(11!==n.nodeType?n:n.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function l(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function u(e){var t=w.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function f(e,t){for(var n=0,i=e.length;i>n;n++)a.set(e[n],"globalEval",!t||a.get(t[n],"globalEval"))}function d(t,n){var i,r,o,c,l,u,f,d;if(1===n.nodeType){if(a.hasData(t)&&(c=a.access(t),l=a.set(n,c),d=c.events)){delete l.handle,l.events={};for(o in d)for(i=0,r=d[o].length;r>i;i++)e.event.add(n,o,d[o][i])}s.hasData(t)&&(u=s.access(t),f=e.extend({},u),s.set(n,f))}}function p(t,n){var i=t.getElementsByTagName?t.getElementsByTagName(n||"*"):t.querySelectorAll?t.querySelectorAll(n||"*"):[];return void 0===n||n&&e.nodeName(t,n)?e.merge([t],i):i}function h(e,t){var n=t.nodeName.toLowerCase();"input"===n&&r.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}var m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/<([\w:]+)/,v=/<|&#?\w+;/,y=/<(?:script|style|link)/i,b=/checked\s*(?:[^=]|=\s*.checked.)/i,x=/^$|\/(?:java|ecma)script/i,w=/^true\/(.*)/,T=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,C={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return C.optgroup=C.option,C.tbody=C.tfoot=C.colgroup=C.caption=C.thead,C.th=C.td,e.extend({clone:function(t,n,i){var r,a,s,c,l=t.cloneNode(!0),u=e.contains(t.ownerDocument,t);if(!(o.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||e.isXMLDoc(t)))for(c=p(l),s=p(t),r=0,a=s.length;a>r;r++)h(s[r],c[r]);if(n)if(i)for(s=s||p(t),c=c||p(l),r=0,a=s.length;a>r;r++)d(s[r],c[r]);else d(t,l);return c=p(l,"script"),c.length>0&&f(c,!u&&p(t,"script")),l},buildFragment:function(t,n,i,r){for(var o,a,s,c,l,u,d=n.createDocumentFragment(),h=[],y=0,b=t.length;b>y;y++)if(o=t[y],o||0===o)if("object"===e.type(o))e.merge(h,o.nodeType?[o]:o);else if(v.test(o)){for(a=a||d.appendChild(n.createElement("div")),s=(g.exec(o)||["",""])[1].toLowerCase(),c=C[s]||C._default,a.innerHTML=c[1]+o.replace(m,"<$1></$2>")+c[2],u=c[0];u--;)a=a.lastChild;e.merge(h,a.childNodes),a=d.firstChild,a.textContent=""}else h.push(n.createTextNode(o));for(d.textContent="",y=0;o=h[y++];)if((!r||-1===e.inArray(o,r))&&(l=e.contains(o.ownerDocument,o),a=p(d.appendChild(o),"script"),l&&f(a),i))for(u=0;o=a[u++];)x.test(o.type||"")&&i.push(o);return d},cleanData:function(t){for(var n,i,r,o,c=e.event.special,l=0;void 0!==(i=t[l]);l++){if(e.acceptData(i)&&(o=i[a.expando],o&&(n=a.cache[o]))){if(n.events)for(r in n.events)c[r]?e.event.remove(i,r):e.removeEvent(i,r,n.handle);a.cache[o]&&delete a.cache[o]}delete s.cache[i[s.expando]]}}}),e.fn.extend({text:function(t){return i(this,function(t){return void 0===t?e.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=c(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=c(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(t,n){for(var i,r=t?e.filter(t,this):this,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||e.cleanData(p(i)),i.parentNode&&(n&&e.contains(i.ownerDocument,i)&&f(p(i,"script")),i.parentNode.removeChild(i));return this},empty:function(){for(var t,n=0;null!=(t=this[n]);n++)1===t.nodeType&&(e.cleanData(p(t,!1)),t.textContent="");return this},clone:function(t,n){return t=null==t?!1:t,n=null==n?t:n,this.map(function(){return e.clone(this,t,n)})},html:function(t){return i(this,function(t){var n=this[0]||{},i=0,r=this.length;if(void 0===t&&1===n.nodeType)return n.innerHTML;if("string"==typeof t&&!y.test(t)&&!C[(g.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(m,"<$1></$2>");try{for(;r>i;i++)n=this[i]||{},1===n.nodeType&&(e.cleanData(p(n,!1)),n.innerHTML=t);n=0}catch(o){}}n&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(n){t=this.parentNode,e.cleanData(p(this)),t&&t.replaceChild(n,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(n,i){n=t.apply([],n);var r,s,c,f,d,h,m=0,g=this.length,v=this,y=g-1,w=n[0],C=e.isFunction(w);if(C||g>1&&"string"==typeof w&&!o.checkClone&&b.test(w))return this.each(function(e){var t=v.eq(e);C&&(n[0]=w.call(this,e,t.html())),t.domManip(n,i)});if(g&&(r=e.buildFragment(n,this[0].ownerDocument,!1,this),s=r.firstChild,1===r.childNodes.length&&(r=s),s)){for(c=e.map(p(r,"script"),l),f=c.length;g>m;m++)d=r,m!==y&&(d=e.clone(d,!0,!0),f&&e.merge(c,p(d,"script"))),i.call(this[m],d,m);if(f)for(h=c[c.length-1].ownerDocument,e.map(c,u),m=0;f>m;m++)d=c[m],x.test(d.type||"")&&!a.access(d,"globalEval")&&e.contains(h,d)&&(d.src?e._evalUrl&&e._evalUrl(d.src):e.globalEval(d.textContent.replace(T,"")))}return this}}),e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,i){e.fn[t]=function(t){for(var r,o=[],a=e(t),s=a.length-1,c=0;s>=c;c++)r=c===s?this:this.clone(!0),e(a[c])[i](r),n.apply(o,r.get());return this.pushStack(o)}}),e});