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
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,i){e.addTest("regions",function(){if(i)return!1;var r=e.prefixed("flowFrom"),o=e.prefixed("flowInto"),s=!1;if(!r||!o)return s;var a=t("iframe"),c=t("div"),l=t("div"),u=t("div"),d="modernizr_flow_for_regions_check";l.innerText="M",c.style.cssText="top: 150px; left: 150px; padding: 0px;",u.style.cssText="width: 50px; height: 50px; padding: 42px;",u.style[r]=d,c.appendChild(l),c.appendChild(u),n.appendChild(c);var f,p,h=l.getBoundingClientRect();return l.style[o]=d,f=l.getBoundingClientRect(),p=parseInt(f.left-h.left,10),n.removeChild(c),42==p?s=!0:(n.appendChild(a),h=a.getBoundingClientRect(),a.style[o]=d,f=a.getBoundingClientRect(),h.height>0&&h.height!==f.height&&0===f.height&&(s=!0)),l=u=c=a=void 0,s})});