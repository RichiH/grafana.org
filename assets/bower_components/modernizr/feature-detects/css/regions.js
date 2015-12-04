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
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,o){e.addTest("regions",function(){if(o)return!1;var i=e.prefixed("flowFrom"),r=e.prefixed("flowInto"),c=!1;if(!i||!r)return c;var a=t("iframe"),s=t("div"),d=t("div"),u=t("div"),f="modernizr_flow_for_regions_check";d.innerText="M",s.style.cssText="top: 150px; left: 150px; padding: 0px;",u.style.cssText="width: 50px; height: 50px; padding: 42px;",u.style[i]=f,s.appendChild(d),s.appendChild(u),n.appendChild(s);var l,p,b=d.getBoundingClientRect();return d.style[r]=f,l=d.getBoundingClientRect(),p=parseInt(l.left-b.left,10),n.removeChild(s),42==p?c=!0:(n.appendChild(a),b=a.getBoundingClientRect(),a.style[r]=f,l=a.getBoundingClientRect(),b.height>0&&b.height!==l.height&&0===l.height&&(c=!0)),d=u=s=a=void 0,c})});