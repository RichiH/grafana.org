/*!
{
  "name": "form#requestAutocomplete()",
  "property": "requestautocomplete",
  "tags": ["form", "forms", "requestAutocomplete", "payments"],
  "notes": [{
    "name": "WHATWG proposed spec",
    "href": "http://wiki.whatwg.org/wiki/RequestAutocomplete"
  }]
}
!*/
define(["Modernizr","createElement","prefixed"],function(e,t,n){e.addTest("requestautocomplete",!!n("requestAutocomplete",t("form")))});