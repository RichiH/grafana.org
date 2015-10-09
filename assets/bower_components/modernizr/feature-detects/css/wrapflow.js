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
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(e,t,n,i,r){e.addTest("wrapflow",function(){var e=t("wrapFlow");if(!e||r)return!1;var o=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),d=i("div"),s=i("div"),a=i("span");s.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+o+":end;",a.innerText="X",d.appendChild(s),d.appendChild(a),n.appendChild(d);var c=a.offsetLeft;return n.removeChild(d),s=a=d=void 0,150==c})});