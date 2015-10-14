/*!
{
  "name": "Unicode Range",
  "property": "unicoderange",
  "notes": [{
    "name" : "W3C reference",
    "href": "http://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
  }, {
    "name" : "24 Way article",
    "href": "http://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(e,t,n){e.addTest("unicoderange",function(){return e.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(e){for(var t=[".",".","m","m"],i=0;i<t.length;i++){var r=n("span");r.innerHTML=t[i],r.className=i%2?"mono":"",e.appendChild(r),t[i]=r.clientWidth}return t[0]!==t[1]&&t[2]===t[3]})})});