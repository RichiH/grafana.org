/*!
{
  "name": "CSS Regions",
  "caniuse": "css-regions",
  "authors": ["Mihai Balan"],
  "property": "regions",
  "tags": ["css"],
  "builderAliases": ["css_regions"],
  "notes": [{
    "name": "W3C Specification",
    "href": "http://www.w3.org/TR/css3-regions/"
  }]
}
!*/
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,i){e.addTest("regions",function(){if(i)return!1;var o=e.prefixed("flowFrom"),r=e.prefixed("flowInto"),d=!1;if(!o||!r)return d;var s=t("iframe"),l=t("div"),c=t("div"),a=t("div"),f="modernizr_flow_for_regions_check";c.innerText="M",l.style.cssText="top: 150px; left: 150px; padding: 0px;",a.style.cssText="width: 50px; height: 50px; padding: 42px;",a.style[o]=f,l.appendChild(c),l.appendChild(a),n.appendChild(l);var p,u,h=c.getBoundingClientRect();return c.style[r]=f,p=c.getBoundingClientRect(),u=parseInt(p.left-h.left,10),n.removeChild(l),42==u?d=!0:(n.appendChild(s),h=s.getBoundingClientRect(),s.style[r]=f,p=s.getBoundingClientRect(),h.height>0&&h.height!==p.height&&0===p.height&&(d=!0)),c=a=l=s=void 0,d})});