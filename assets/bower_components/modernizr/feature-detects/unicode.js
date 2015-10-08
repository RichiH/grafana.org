/*!
{
  "name": "Unicode characters",
  "property": "unicode",
  "tags": ["encoding"],
  "warnings": [
    "positive Unicode support doesn't mean you can use it inside <title>, this seems more related to OS & Language packs"
  ]
}
!*/
define(["Modernizr","createElement","testStyles","isSVG"],function(e,t,n,i){e.addTest("unicode",function(){var e,r=t("span"),o=t("span");return n("#modernizr{font-family:Arial,sans;font-size:300em;}",function(t){r.innerHTML=i?"\u5987":"&#5987",o.innerHTML=i?"\u2606":"&#9734",t.appendChild(r),t.appendChild(o),e="offsetWidth"in r&&r.offsetWidth!==o.offsetWidth}),e})});