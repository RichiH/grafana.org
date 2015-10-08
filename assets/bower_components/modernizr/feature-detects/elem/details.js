/*!
{
  "name": "details Element",
  "caniuse": "details",
  "property": "details",
  "tags": ["elem"],
  "builderAliases": ["elem_details"],
  "authors": ["@mathias"],
  "notes": [{
    "name": "Mathias' Original",
    "href": "http://mths.be/axh"
  }]
}
!*/
define(["Modernizr","createElement","docElement","testStyles"],function(e,t,n,i){e.addTest("details",function(){var e,n=t("details");return"open"in n?(i("#modernizr details{display:block}",function(t){t.appendChild(n),n.innerHTML="<summary>a</summary>b",e=n.offsetHeight,n.open=!0,e=e!=n.offsetHeight}),e):!1})});