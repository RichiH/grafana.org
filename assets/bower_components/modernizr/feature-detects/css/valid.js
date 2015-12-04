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
define(["Modernizr","testStyles","createElement"],function(e,n,t){e.addTest("cssvalid",function(){return n("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var n=t("input");return e.appendChild(n),n.clientWidth>10})})});