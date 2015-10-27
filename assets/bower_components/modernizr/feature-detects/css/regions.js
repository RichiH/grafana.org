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
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,i){e.addTest("regions",function(){if(i)return!1;var r=e.prefixed("flowFrom"),o=e.prefixed("flowInto"),d=!1;if(!r||!o)return d;var s=t("iframe"),a=t("div"),p=t("div"),u=t("div"),c="modernizr_flow_for_regions_check";p.innerText="M",a.style.cssText="top: 150px; left: 150px; padding: 0px;",u.style.cssText="width: 50px; height: 50px; padding: 42px;",u.style[r]=c,a.appendChild(p),a.appendChild(u),n.appendChild(a);var f,l,g=p.getBoundingClientRect();return p.style[o]=c,f=p.getBoundingClientRect(),l=parseInt(f.left-g.left,10),n.removeChild(a),42==l?d=!0:(n.appendChild(s),g=s.getBoundingClientRect(),s.style[o]=c,f=s.getBoundingClientRect(),g.height>0&&g.height!==f.height&&0===f.height&&(d=!0)),p=u=a=s=void 0,d})});