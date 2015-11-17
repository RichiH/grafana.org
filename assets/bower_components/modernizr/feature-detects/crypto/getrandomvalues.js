/*!
{
  "name": "getRandomValues",
  "property": "getrandomvalues",
  "caniuse": "window.crypto.getRandomValues",
  "tags": ["crypto"],
  "authors": ["komachi"],
  "notes": [{
    "name": "W3C Editor’s Draft",
    "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
define(["Modernizr","prefixed","is"],function(e,t,n){var i,r=t("crypto",window);if(r&&"getRandomValues"in r&&"Uint32Array"in window){var o=new Uint32Array(10),s=r.getRandomValues(o);i=s&&n(s[0],"number")}e.addTest("getrandomvalues",!!i)});