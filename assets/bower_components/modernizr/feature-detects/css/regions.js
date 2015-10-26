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
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,r){e.addTest("regions",function(){if(r)return!1;var i=e.prefixed("flowFrom"),o=e.prefixed("flowInto"),d=!1;if(!i||!o)return d;var s=t("iframe"),a=t("div"),u=t("div"),c=t("div"),f="modernizr_flow_for_regions_check";u.innerText="M",a.style.cssText="top: 150px; left: 150px; padding: 0px;",c.style.cssText="width: 50px; height: 50px; padding: 42px;",c.style[i]=f,a.appendChild(u),a.appendChild(c),n.appendChild(a);var p,l,g=u.getBoundingClientRect();return u.style[o]=f,p=u.getBoundingClientRect(),l=parseInt(p.left-g.left,10),n.removeChild(a),42==l?d=!0:(n.appendChild(s),g=s.getBoundingClientRect(),s.style[o]=f,p=s.getBoundingClientRect(),g.height>0&&g.height!==p.height&&0===p.height&&(d=!0)),u=c=a=s=void 0,d})});