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
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,r){e.addTest("regions",function(){if(r)return!1;var i=e.prefixed("flowFrom"),o=e.prefixed("flowInto"),d=!1;if(!i||!o)return d;var s=t("iframe"),a=t("div"),c=t("div"),u=t("div"),p="modernizr_flow_for_regions_check";c.innerText="M",a.style.cssText="top: 150px; left: 150px; padding: 0px;",u.style.cssText="width: 50px; height: 50px; padding: 42px;",u.style[i]=p,a.appendChild(c),a.appendChild(u),n.appendChild(a);var f,l,g=c.getBoundingClientRect();return c.style[o]=p,f=c.getBoundingClientRect(),l=parseInt(f.left-g.left,10),n.removeChild(a),42==l?d=!0:(n.appendChild(s),g=s.getBoundingClientRect(),s.style[o]=p,f=s.getBoundingClientRect(),g.height>0&&g.height!==f.height&&0===f.height&&(d=!0)),c=u=a=s=void 0,d})});