define(["../core","../core/access","./support"],function(t,e,n){var i=/^(?:input|select|textarea|button)$/i;t.fn.extend({prop:function(n,i){return e(this,t.prop,n,i,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[t.propFix[e]||e]})}}),t.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,i){var r,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!t.isXMLDoc(e),a&&(n=t.propFix[n]||n,o=t.propHooks[n]),void 0!==i?o&&"set"in o&&void 0!==(r=o.set(e,i,n))?r:e[n]=i:o&&"get"in o&&null!==(r=o.get(e,n))?r:e[n]},propHooks:{tabIndex:{get:function(t){return t.hasAttribute("tabindex")||i.test(t.nodeName)||t.href?t.tabIndex:-1}}}}),n.optSelected||(t.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){t.propFix[this.toLowerCase()]=this})});