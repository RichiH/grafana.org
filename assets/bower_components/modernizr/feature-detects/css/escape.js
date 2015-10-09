/*!
{
  "name": "CSS.escape()",
  "property": "cssescape",
  "polyfills": [
    "css-escape"
  ],
  "tags": [
    "css",
    "cssom"
  ]
}
!*/
define(["Modernizr"],function(e){var t=window.CSS;e.addTest("cssescape",t?"function"==typeof t.escape:!1)});