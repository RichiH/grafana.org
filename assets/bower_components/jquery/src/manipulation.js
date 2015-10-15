define(["./core","./var/concat","./var/push","./core/access","./manipulation/var/rcheckableType","./manipulation/support","./data/var/data_priv","./data/var/data_user","./core/init","./data/accepts","./traversing","./selector","./event"],function(e,t,n,r,i,o,a,s){function u(t,n){return e.nodeName(t,"table")&&e.nodeName(11!==n.nodeType?n:n.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function c(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function l(e){var t=w.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function f(e,t){for(var n=0,r=e.length;r>n;n++)a.set(e[n],"globalEval",!t||a.get(t[n],"globalEval"))}function d(t,n){var r,i,o,u,c,l,f,d;if(1===n.nodeType){if(a.hasData(t)&&(u=a.access(t),c=a.set(n,u),d=u.events)){delete c.handle,c.events={};for(o in d)for(r=0,i=d[o].length;i>r;r++)e.event.add(n,o,d[o][r])}s.hasData(t)&&(l=s.access(t),f=e.extend({},l),s.set(n,f))}}function p(t,n){var r=t.getElementsByTagName?t.getElementsByTagName(n||"*"):t.querySelectorAll?t.querySelectorAll(n||"*"):[];return void 0===n||n&&e.nodeName(t,n)?e.merge([t],r):r}function h(e,t){var n=t.nodeName.toLowerCase();"input"===n&&i.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}var g=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/<([\w:]+)/,v=/<|&#?\w+;/,y=/<(?:script|style|link)/i,x=/checked\s*(?:[^=]|=\s*.checked.)/i,b=/^$|\/(?:java|ecma)script/i,w=/^true\/(.*)/,T=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,C={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return C.optgroup=C.option,C.tbody=C.tfoot=C.colgroup=C.caption=C.thead,C.th=C.td,e.extend({clone:function(t,n,r){var i,a,s,u,c=t.cloneNode(!0),l=e.contains(t.ownerDocument,t);if(!(o.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||e.isXMLDoc(t)))for(u=p(c),s=p(t),i=0,a=s.length;a>i;i++)h(s[i],u[i]);if(n)if(r)for(s=s||p(t),u=u||p(c),i=0,a=s.length;a>i;i++)d(s[i],u[i]);else d(t,c);return u=p(c,"script"),u.length>0&&f(u,!l&&p(t,"script")),c},buildFragment:function(t,n,r,i){for(var o,a,s,u,c,l,d=n.createDocumentFragment(),h=[],y=0,x=t.length;x>y;y++)if(o=t[y],o||0===o)if("object"===e.type(o))e.merge(h,o.nodeType?[o]:o);else if(v.test(o)){for(a=a||d.appendChild(n.createElement("div")),s=(m.exec(o)||["",""])[1].toLowerCase(),u=C[s]||C._default,a.innerHTML=u[1]+o.replace(g,"<$1></$2>")+u[2],l=u[0];l--;)a=a.lastChild;e.merge(h,a.childNodes),a=d.firstChild,a.textContent=""}else h.push(n.createTextNode(o));for(d.textContent="",y=0;o=h[y++];)if((!i||-1===e.inArray(o,i))&&(c=e.contains(o.ownerDocument,o),a=p(d.appendChild(o),"script"),c&&f(a),r))for(l=0;o=a[l++];)b.test(o.type||"")&&r.push(o);return d},cleanData:function(t){for(var n,r,i,o,u=e.event.special,c=0;void 0!==(r=t[c]);c++){if(e.acceptData(r)&&(o=r[a.expando],o&&(n=a.cache[o]))){if(n.events)for(i in n.events)u[i]?e.event.remove(r,i):e.removeEvent(r,i,n.handle);a.cache[o]&&delete a.cache[o]}delete s.cache[r[s.expando]]}}}),e.fn.extend({text:function(t){return r(this,function(t){return void 0===t?e.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=u(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=u(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(t,n){for(var r,i=t?e.filter(t,this):this,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||e.cleanData(p(r)),r.parentNode&&(n&&e.contains(r.ownerDocument,r)&&f(p(r,"script")),r.parentNode.removeChild(r));return this},empty:function(){for(var t,n=0;null!=(t=this[n]);n++)1===t.nodeType&&(e.cleanData(p(t,!1)),t.textContent="");return this},clone:function(t,n){return t=null==t?!1:t,n=null==n?t:n,this.map(function(){return e.clone(this,t,n)})},html:function(t){return r(this,function(t){var n=this[0]||{},r=0,i=this.length;if(void 0===t&&1===n.nodeType)return n.innerHTML;if("string"==typeof t&&!y.test(t)&&!C[(m.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(g,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(e.cleanData(p(n,!1)),n.innerHTML=t);n=0}catch(o){}}n&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(n){t=this.parentNode,e.cleanData(p(this)),t&&t.replaceChild(n,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(n,r){n=t.apply([],n);var i,s,u,f,d,h,g=0,m=this.length,v=this,y=m-1,w=n[0],C=e.isFunction(w);if(C||m>1&&"string"==typeof w&&!o.checkClone&&x.test(w))return this.each(function(e){var t=v.eq(e);C&&(n[0]=w.call(this,e,t.html())),t.domManip(n,r)});if(m&&(i=e.buildFragment(n,this[0].ownerDocument,!1,this),s=i.firstChild,1===i.childNodes.length&&(i=s),s)){for(u=e.map(p(i,"script"),c),f=u.length;m>g;g++)d=i,g!==y&&(d=e.clone(d,!0,!0),f&&e.merge(u,p(d,"script"))),r.call(this[g],d,g);if(f)for(h=u[u.length-1].ownerDocument,e.map(u,l),g=0;f>g;g++)d=u[g],b.test(d.type||"")&&!a.access(d,"globalEval")&&e.contains(h,d)&&(d.src?e._evalUrl&&e._evalUrl(d.src):e.globalEval(d.textContent.replace(T,"")))}return this}}),e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,r){e.fn[t]=function(t){for(var i,o=[],a=e(t),s=a.length-1,u=0;s>=u;u++)i=u===s?this:this.clone(!0),e(a[u])[r](i),n.apply(o,i.get());return this.pushStack(o)}}),e});