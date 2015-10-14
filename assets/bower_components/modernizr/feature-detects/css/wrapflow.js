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
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(e,t,n,i,r){e.addTest("wrapflow",function(){var e=t("wrapFlow");if(!e||r)return!1;var o=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),s=i("div"),a=i("div"),c=i("span");a.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+o+":end;",c.innerText="X",s.appendChild(a),s.appendChild(c),n.appendChild(s);var l=c.offsetLeft;return n.removeChild(s),a=c=s=void 0,150==l})});