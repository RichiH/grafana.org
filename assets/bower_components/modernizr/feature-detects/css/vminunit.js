/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,n,i){n("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],r=t.childNodes[1],o=t.childNodes[0],s=parseInt((r.offsetWidth-r.clientWidth)/2,10),a=o.clientWidth/100,c=o.clientHeight/100,l=parseInt(50*Math.min(a,c),10),u=parseInt((window.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);e.addTest("cssvminunit",i(l,u)||i(l,u-s))},3)});