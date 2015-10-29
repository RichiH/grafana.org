/*!
{
  "authors": ["Cătălin Mariș"],
  "caniuse": "proximity",
  "name": "Proximity API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events"
  },{
    "name": "W3C specification",
    "href": "http://www.w3.org/TR/proximity/"
  }],
  "property": "proximity",
  "tags": ["events", "proximity"]
}
!*/
define(["Modernizr","addTest"],function(e,t){e.addAsyncTest(function(){function e(){clearTimeout(n),window.removeEventListener("deviceproximity",e),t("proximity",!0)}var n,i=300;"ondeviceproximity"in window&&"onuserproximity"in window?(window.addEventListener("deviceproximity",e),n=setTimeout(function(){window.removeEventListener("deviceproximity",e),t("proximity",!1)},i)):t("proximity",!1)})});