/*!
{
  "name": "CSS :valid pseudo-class",
  "property": "cssvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(e,t,n){e.addTest("cssvalid",function(){return t("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=n("input");return e.appendChild(t),t.clientWidth>10})})});