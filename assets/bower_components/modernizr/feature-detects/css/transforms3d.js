/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
define(["Modernizr","testAllProps","testStyles","docElement","test/css/supports"],function(e,t,n,r){e.addTest("csstransforms3d",function(){var i=!!t("perspective","1px",!0),o=e._config.usePrefixes;if(i&&(!o||"webkitPerspective"in r.style)){var s;e.supports?s="@supports (perspective: 1px)":(s="@media (transform-3d)",o&&(s+=",(-webkit-transform-3d)")),s+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",n(s,function(e){i=9===e.offsetLeft&&5===e.offsetHeight})}return i})});