/*!
{
  "name": "CSS :invalid pseudo-class",
  "property": "cssinvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(e,t,n){e.addTest("cssinvalid",function(){return t("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=n("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})})});