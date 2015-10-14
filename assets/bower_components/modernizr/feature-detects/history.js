/*!
{
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
!*/
define(["Modernizr"],function(e){e.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")?window.history&&"pushState"in window.history:!1})});