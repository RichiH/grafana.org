/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "http://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(e,t,n,o,i){e.addTest("wrapflow",function(){var e=t("wrapFlow");if(!e||i)return!1;var r=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),c=o("div"),a=o("div"),s=o("span");a.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+r+":end;",s.innerText="X",c.appendChild(a),c.appendChild(s),n.appendChild(c);var u=s.offsetLeft;return n.removeChild(c),a=s=c=void 0,150==u})});