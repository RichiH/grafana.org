Modernizr.addTest("localizedNumber",function(){var e,t,n,r,i=document,o=document.createElement("div");t=i.body||function(){var t=i.documentElement;return e=!0,t.insertBefore(i.createElement("body"),t.firstElementChild||t.firstChild)}(),o.innerHTML='<input type="number" value="1.0" step="0.1"/>',n=o.childNodes[0],t.appendChild(o),n.focus();try{i.execCommand("InsertText",!1,"1,1")}catch(s){}return r="number"===n.type&&1.1===n.valueAsNumber&&n.checkValidity(),t.removeChild(o),e&&t.parentNode.removeChild(t),r});