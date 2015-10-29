/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
define(["Modernizr","createElement","docElement","addTest","getBody","isSVG"],function(e,t,n,i,r,o){e.addAsyncTest(function(){var e,s,a=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},c=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),i("flash",function(){return n}),t&&p.contains(t)){for(;t.parentNode!==p;)t=t.parentNode;p.removeChild(t)}};try{s="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(l){}if(e=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||s),e||o)c(!1);else{var u,d,f=t("embed"),p=r();if(f.type="application/x-shockwave-flash",p.appendChild(f),n.appendChild(p),!("Pan"in f||s))return c("blocked",f),void a(p);u=function(){return n.contains(p)?(n.contains(f)?(d=f.style.cssText,""!==d?c("blocked",f):c(!0,f)):c("blocked"),void a(p)):(p=document.body||p,f=t("embed"),f.type="application/x-shockwave-flash",p.appendChild(f),setTimeout(u,1e3))},setTimeout(u,10)}})});